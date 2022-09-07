import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageDisabled,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import cookieParser from 'cookie-parser'
import cors from 'cors'
import express from 'express'
import { applyMiddleware } from 'graphql-middleware'
import http from 'http'
import { JwtPayload, verify } from 'jsonwebtoken'
import passport from 'passport'
import 'reflect-metadata'
import { buildSchema } from 'type-graphql'
import { v4 as uuidv4 } from 'uuid'
import './configs/passport'
import prisma from './configs/prisma-client'
import shield from './configs/shield'
import { ACCOUNTS_JWT_SECRET, NODE_ENV, PORT } from './constants'
import AuthResolver from './graphql/resolvers/auth-resolver'
import { UpdateOneUserResolver, User } from './graphql/type-graphql'
import authRoutes from './routes/auth-routes'
import { ApolloContext } from './types/context-types'
import { createRefreshToken } from './utils/jwt-tokens'

// export const refreshTokens: Record<string, any> = {}
const app = express()

console.log(NODE_ENV)

const corsOptions = {
  origin:
    NODE_ENV !== 'development'
      ? ['http://auresx.com']
      : ['http://localhost:3000', 'http://auresx.com'],
  credentials: true,
}

async function main() {
  // establish db connection
  await prisma.$connect()
  // setup configs
  app.use(cookieParser())
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.set('trust proxy', NODE_ENV !== 'production')
  app.use(cors(corsOptions))
  app.use(passport.initialize())

  // apollo server
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema: applyMiddleware(
      await buildSchema({
        resolvers: [AuthResolver, UpdateOneUserResolver /* ...resolvers */],
        validate: false,
      }),
      shield
    ),
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      NODE_ENV === 'development'
        ? ApolloServerPluginLandingPageLocalDefault({ embed: true })
        : ApolloServerPluginLandingPageDisabled(),
    ],
    formatResponse: (response, requestContext) => {
      if (
        response.data?.login ||
        response.data?.register ||
        response.data?.refresh
      ) {
        const tokenExpireDate = new Date()
        tokenExpireDate.setDate(
          tokenExpireDate.getDate() + 60 * 60 * 24 * 7 // 7 days
        )

        const accessToken =
          response.data?.login?.accessToken ||
          response.data?.register?.accessToken ||
          response.data?.refresh?.accessToken ||
          null

        if (accessToken) {
          const token = verify(accessToken, ACCOUNTS_JWT_SECRET) as User

          const refreshTokenGuid = uuidv4()
          const newRefreshToken = createRefreshToken(token.id, refreshTokenGuid)
          // refreshTokens[refreshTokenGuid] = token.id

          requestContext.response?.http?.headers.append(
            'Set-Cookie',
            `refreshToken=${newRefreshToken}; expires=${tokenExpireDate}; path=/; HttpOnly=true; Secure=true; SameSite=Lax`
          )
        }
      }
      return response
    },
    context: ({ req, res }) => {
      let ctx: ApolloContext = {
        req,
        res,
        user: null,
        refreshToken: null,
        prisma,
      }

      if (req.cookies) {
        ctx.refreshToken = req.cookies.refreshToken
      }

      try {
        if (req.headers['authorization']) {
          const parsedToken: string | JwtPayload = verify(
            req.headers['authorization'].split(' ')[1] as string,
            ACCOUNTS_JWT_SECRET
          )
          ctx.user = parsedToken as User
        }
      } catch {}

      return ctx
    },
  })

  await server.start()
  server.applyMiddleware({
    app,
    cors: corsOptions,
  })
  app.use(authRoutes)
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: PORT }, resolve)
  )
  console.log(`👾 Server listening at http://localhost:${PORT}`)
  console.log(
    `👾 Server ready at http://localhost:${PORT}${server.graphqlPath}`
  )
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })

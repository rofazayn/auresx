import { PrismaClient } from '@prisma/client'
import {
  ApolloServerPluginDrainHttpServer,
  ApolloServerPluginLandingPageLocalDefault,
} from 'apollo-server-core'
import { ApolloServer } from 'apollo-server-express'
import cors from 'cors'
import express, { Request, Response } from 'express'
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
import AuthResolver from './graphql/resolvers/auth-resolver'
import { resolvers, User } from './graphql/type-graphql'
import { createRefreshToken } from './utils/jwt-tokens'

export const refreshTokens: Record<string, any> = {}
const app = express()

const corsOptions = {
  origin: ['*', 'http://localhost:3000', 'http://auresx.com'],
  credentials: true,
}

async function main() {
  // establish db connection
  await prisma.$connect()
  // setup configs
  app.use(express.json())
  app.use(express.urlencoded({ extended: true }))
  app.set('trust proxy', process.env.NODE_ENV !== 'production')
  app.use(cors(corsOptions))
  app.use(passport.initialize())

  // apollo server
  const httpServer = http.createServer(app)
  const server = new ApolloServer({
    schema: applyMiddleware(
      await buildSchema({
        resolvers: [AuthResolver, ...resolvers],
        validate: false,
      }),
      shield
    ),
    csrfPrevention: true,
    cache: 'bounded',
    introspection: true,
    plugins: [
      ApolloServerPluginDrainHttpServer({ httpServer }),
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
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
          const token = verify(accessToken, process.env.JWT_SECRET!) as User

          const refreshTokenGuid = uuidv4()
          const newRefreshToken = createRefreshToken(token.id, refreshTokenGuid)
          refreshTokens[refreshTokenGuid] = token.id

          requestContext.response?.http?.headers.append(
            'Set-Cookie',
            `refreshToken=${newRefreshToken}; expires=${tokenExpireDate}; path=/; HttpOnly=true; Secure=true; SameSite=Strict`
          )
        }
      }
      return response
    },
    context: ({ req, res }) => {
      let ctx: {
        req: Request
        res: Response
        user: String | User | JwtPayload | null
        refreshToken: string | null
        prisma: PrismaClient
      } = { req, res, user: null, refreshToken: null, prisma }

      if (req.headers.cookie) {
        const cookies = req.headers.cookie
          .split(';')
          .reduce<Record<string, string>>((obj, c) => {
            const [name, value] = c.split('=')
            obj[name.trim()] = value.trim()
            return obj
          }, {})

        ctx.refreshToken = cookies?.refreshToken
      }

      try {
        if (req.headers['authorization']) {
          const parsedToken = verify(
            req.headers['authorization'].split(' ')[1] as string,
            process.env.JWT_SECRET!
          )
          ctx.user = parsedToken
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
  await new Promise<void>((resolve) =>
    httpServer.listen({ port: 4000 }, resolve)
  )
  console.log(`👾 Server listening at http://localhost:4000`)
  console.log(`👾 Server ready at http://localhost:4000${server.graphqlPath}`)
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

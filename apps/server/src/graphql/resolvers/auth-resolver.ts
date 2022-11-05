import { ApolloError } from 'apollo-server-core'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { ACCOUNTS_JWT_SECRET } from '../../constants'
import { sendConfirmationSMTP } from '../../libs/email-sender'
import { ApolloContext } from '../../types/context-types'
import { AuthResponse, RefreshTokensResponse } from '../../types/response-types'
import {
  createAccessToken,
  createEmailConfirmationToken,
  createRefreshToken,
} from '../../utils/jwt-tokens'
import { User } from '../type-graphql'
import { v4 as uuidv4 } from 'uuid'

@Resolver(User)
class AuthResolver {
  // add atleast one query to avoid schema error
  @Query(() => String)
  hello() {
    return 'Hello from AuresX!'
  }

  @Query(() => User, { nullable: true })
  async profile(@Ctx() { user, prisma }: ApolloContext) {
    try {
      const target = await prisma.user.findUnique({ where: { id: user?.id } })
      return target || null
    } catch {
      throw new ApolloError('something went wrong')
    }
  }

  @Mutation(() => AuthResponse)
  async login(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!email || !password) throw new ApolloError('missing login data')

    const user = await prisma.user.findUnique({
      where: { email: email },
    })
    if (!user) throw new ApolloError('invalid_username')

    const valid = compareSync(password, user.password)
    if (!valid) throw new ApolloError('invalid_password')

    const accessToken = createAccessToken({
      id: user.id,
      email: user.email,
      emailConfirmed: user.emailConfirmed,
      name: user.name,
      createdAt: user.createdAt,
      updatedAt: user.updatedAt,
    })

    const refreshTokenGuid = uuidv4()
    const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

    return {
      accessToken,
      refreshToken: newRefreshToken,
      user,
    }
  }

  @Mutation(() => AuthResponse)
  async register(
    @Arg('email') email: string,
    @Arg('password') password: string,
    @Arg('name') name: string,
    @Ctx() { prisma }: ApolloContext
  ) {
    if (!name || !email || !password)
      throw new ApolloError('missing_credentials')

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) throw new ApolloError('email_not_available')

    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    const hashedPass = hashSync(password, salt)

    try {
      const user = await prisma.user.create({
        data: { name, email, password: hashedPass },
      })

      if (user) {
        let confirmationToken = createEmailConfirmationToken(user.id)
        let confirmationLink = `https://accounts.auresx.com/confirm-email/${confirmationToken}`

        try {
          sendConfirmationSMTP(user.email, user.name, confirmationLink)
        } catch (e) {
          console.log(e)
        }

        const accessToken = createAccessToken({
          id: user.id,
          email: user.email,
          emailConfirmed: user.emailConfirmed,
          name: user.name,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return {
          accessToken,
          refreshToken: newRefreshToken,
          user,
        }
      }

      throw new ApolloError('registration_arror')
    } catch {
      throw new ApolloError('server_error')
    }
  }

  @Mutation(() => RefreshTokensResponse)
  async refresh(@Ctx() { prisma, req }: ApolloContext) {
    let refreshToken = (req.headers['x-refresh-token'] as string).split(' ')[1]

    if (refreshToken) {
      const token = verify(refreshToken, ACCOUNTS_JWT_SECRET) as {
        userId: string
        guid: string
      }

      if (!token) {
        return { accessToken: null, refreshToken: null }
      }

      const user = await prisma.user.findUnique({
        where: { id: token.userId },
      })

      if (user) {
        const accessToken = createAccessToken({
          id: user.id,
          email: user.email,
          emailConfirmed: user.emailConfirmed,
          name: user.name,
          createdAt: user.createdAt,
          updatedAt: user.updatedAt,
        })

        const refreshTokenGuid = uuidv4()
        const newRefreshToken = createRefreshToken(user.id, refreshTokenGuid)

        return { accessToken, refreshToken: newRefreshToken }
      }
    }
    return { accessToken: null, refreshToken: null }
  }

  @Mutation(() => Boolean)
  async logout(@Ctx() { user: currentUser }: ApolloContext) {
    currentUser = null
    return true
  }

  @Mutation(() => Boolean)
  async sendEmailConfirmation(@Ctx() { user }: ApolloContext) {
    if (!user) throw new ApolloError('user not logged in')
    if (user.emailConfirmed) throw new ApolloError('email already confirmed')

    if (!user.emailConfirmed) {
      try {
        let confirmationToken = createEmailConfirmationToken(user.id)
        let confirmationLink = `https://accounts.auresx.com/confirm-email/${confirmationToken}`
        await sendConfirmationSMTP(user.email, user.name, confirmationLink)

        return true
      } catch (e) {
        console.log(e)
        return false
      }
    }

    return false
  }
}

export default AuthResolver

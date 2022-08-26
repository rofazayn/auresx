import { ApolloError } from 'apollo-server-core'
import { compareSync, genSaltSync, hashSync } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { Arg, Ctx, Mutation, Query, Resolver } from 'type-graphql'
import { refreshTokens } from '../..'
import { ApolloContext } from '../../types/context-types'
import { AuthResponse, RefreshTokensResponse } from '../../types/response-types'
import { createAccessToken } from '../../utils/jwt-tokens'
import { User } from '../type-graphql'

@Resolver(User)
class AuthResolver {
  @Query(() => User, { nullable: true })
  async me(@Ctx() { user, prisma }: ApolloContext) {
    try {
      const target = await prisma.user.findUnique({ where: { id: user.id } })
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

    const accessToken = createAccessToken(user)

    return {
      accessToken,
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
      throw new ApolloError('missing registrationg data')

    const userExists = await prisma.user.findUnique({ where: { email } })
    if (userExists) throw new ApolloError('provided email is not available')

    const saltRounds = 10
    const salt = genSaltSync(saltRounds)
    const hashedPass = hashSync(password, salt)

    try {
      const user = await prisma.user.create({
        data: { name, email, password: hashedPass },
      })

      if (user) {
        const accessToken = createAccessToken(user)

        return {
          accessToken,
          user,
        }
      }

      throw new ApolloError('something went wrong during registration')
    } catch {
      throw new ApolloError('something went wrong, try again')
    }
  }

  @Mutation(() => RefreshTokensResponse)
  async refresh(@Ctx() { refreshToken, prisma }: ApolloContext) {
    if (refreshToken) {
      const token = verify(refreshToken, process.env.JWT_SECRET!) as {
        userId: string
        guid: string
      }

      const targetUser = await prisma.user.findUnique({
        where: { id: token.userId },
      })

      if (targetUser && token.guid in refreshTokens) {
        const accessToken = createAccessToken(targetUser)
        return { accessToken: `${accessToken || 'zbi'}` }
      }
    }
    return { accessToken: null }
  }
}

export default AuthResolver

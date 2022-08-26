import { PrismaClient } from '@prisma/client'
import { User } from '../graphql/type-graphql'

export type ApolloContext = {
  req: Request
  res: Response
  prisma: PrismaClient
  user: User
  refreshToken: string | null
}

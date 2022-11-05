import { sign } from 'jsonwebtoken'
import { ACCOUNTS_EMAIL_JWT_SECRET, ACCOUNTS_JWT_SECRET } from '../constants'
import { User } from '../graphql/type-graphql'

export const createAccessToken = (payload: User) => {
  if (!payload) return
  const accessToken = sign(payload, ACCOUNTS_JWT_SECRET, {
    expiresIn: '15min',
  })

  return accessToken
}

export const createRefreshToken = (userId: string, guid: string) => {
  if (!userId) return
  const refreshToken = sign({ userId, guid }, ACCOUNTS_JWT_SECRET, {
    expiresIn: '30d',
  })

  return refreshToken
}

export const createEmailConfirmationToken = (userId: string) => {
  if (!userId) return
  return sign({ userId }, ACCOUNTS_EMAIL_JWT_SECRET, {
    expiresIn: '1d',
  })
}

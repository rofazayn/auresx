import { sign } from 'jsonwebtoken'
import { User } from '../graphql/type-graphql'

export const createAccessToken = (payload: User) => {
  if (!payload) return
  const accessToken = sign(payload, process.env.JWT_SECRET!, {
    expiresIn: '15min',
  })

  return accessToken
}

export const createRefreshToken = (userId: string, guid: string) => {
  if (!userId) return
  const refreshToken = sign({ userId, guid }, process.env.JWT_SECRET!, {
    expiresIn: '7d',
  })

  return refreshToken
}

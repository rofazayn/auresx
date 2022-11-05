import jwtDecode from 'jwt-decode'
import { refreshStatusVar } from '../configs/apollo-client'

export const setAccessToken = (token: string | null = null): void => {
  if (token && checkTokenFormat(token) && !checkTokenExpiry(token)) {
    localStorage.setItem('at', token as string)
  } else {
    localStorage.removeItem('at')
  }
}

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem('at')
  if (token) return token
  return null
}

export const setRefreshToken = (token: string | null = null): void => {
  if (token && checkTokenFormat(token) && !checkTokenExpiry(token)) {
    localStorage.setItem('rt', token as string)
  } else {
    localStorage.removeItem('rt')
  }
}

export const getRefreshToken = (): string | null => {
  const token = localStorage.getItem('rt')
  if (token) return token
  return null
}

export const checkTokenExpiry = (token?: string): boolean => {
  if (!token) return true
  try {
    const { exp }: any = jwtDecode(token)
    if (Date.now() >= exp * 1000) {
      refreshStatusVar('error')
      return true
    }
    return false
  } catch (error) {
    return true
  }
}

export const checkTokenFormat = (token?: string): boolean => {
  if (!token) return false
  try {
    const decodedToken = jwtDecode(token)
    if (!decodedToken) {
      refreshStatusVar('error')
    }
    return !!jwtDecode(token)
  } catch {
    return false
  }
}

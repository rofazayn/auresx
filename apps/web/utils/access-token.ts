export const setAccessToken = (token: string | null = null): void => {
  if (token) {
    localStorage.setItem('token', token as string)
  } else {
    localStorage.removeItem('token')
  }
}

export const getAccessToken = (): string | null => {
  const token = localStorage.getItem('token')
  return token || null
}

import { ColorScheme, useMantineColorScheme } from '@mantine/core'
import jwtDecode from 'jwt-decode'
import { createContext, useCallback, useEffect, useState } from 'react'
import { useLogoutMutation, useProfileQuery } from '../generated/graphql'
import { getAccessToken, setAccessToken } from '../utils/access-token'

const AuthContext = createContext<any>({})
const AuthProvider = ({ children }: any) => {
  const { toggleColorScheme } = useMantineColorScheme()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [authStatus, setAuthStatus] = useState<string>('stale')

  // const [refreshMutation] = useRefreshMutation({})
  const [logoutMutation, { loading: logoutLoading }] = useLogoutMutation({})
  const profileQuery = useProfileQuery({
    skip: currentUser !== 'found',
    pollInterval: 1000 * 60 * 3,
  })
  // try refresh mutation and check if tokens are valid
  // before fetching me data and chanching authStatus state

  useEffect(() => {
    if (authStatus === 'found' && currentUser?.preferredTheme !== 'system') {
      toggleColorScheme(currentUser?.preferredTheme as ColorScheme)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.preferredTheme])

  const logout = useCallback(async () => {
    try {
      await logoutMutation()

      setCurrentUser(null)
      setAccessToken(null)
      setAuthStatus('unfound')
    } catch {
      setCurrentUser(null)
      setAccessToken(null)
      setAuthStatus('unfound')
    }
  }, [logoutMutation])

  const checkUser = useCallback(async () => {
    let malformed: boolean = false
    let accessToken = getAccessToken()
    if (accessToken) {
      try {
        jwtDecode(accessToken)
      } catch {
        malformed = true
      }

      if (!malformed) {
        setAuthStatus('found')
      } else {
        setAuthStatus('unfound')
        logout()
      }
    } else {
      setAuthStatus('unfound')
      logout()
    }
  }, [logout])

  const fetchProfile = useCallback(async () => {
    if (authStatus === 'found') {
      try {
        const profileResponse = await profileQuery.refetch()

        if (profileResponse.data?.profile) {
          setCurrentUser(profileResponse.data.profile)
        } else {
          logout()
        }
      } catch {
        logout()
      }
    }
  }, [authStatus, profileQuery, logout])

  useEffect(() => {
    checkUser()
  }, [checkUser])

  useEffect(() => {
    fetchProfile()
  }, [fetchProfile])

  useEffect(() => {}, [authStatus])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logout,
        logoutLoading,
        authStatus,
        setAuthStatus,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

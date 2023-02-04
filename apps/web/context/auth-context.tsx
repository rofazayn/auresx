import { useReactiveVar } from '@apollo/client'
import { ColorScheme, useMantineColorScheme } from '@mantine/core'
import { useRouter } from 'next/router'
import { createContext, useCallback, useEffect, useState } from 'react'
import { refreshStatusVar } from '../configs/apollo-client'
import { useLogoutMutation, useProfileQuery } from '../generated/graphql'
import { setAccessToken, setRefreshToken } from '../utils/tokens-operations'

const AuthContext = createContext<any>({})
const AuthProvider = ({ children }: any) => {
  const { toggleColorScheme } = useMantineColorScheme()
  const [currentUser, setCurrentUser] = useState<any>(null)
  const [authStatus, setAuthStatus] = useState<string>('stale')
  const [logoutMutation, { loading: logoutLoading }] = useLogoutMutation({})
  const profileQuery = useProfileQuery({
    // fetchPolicy: 'network-only',
  })
  const refreshStatus = useReactiveVar(refreshStatusVar)
  const router = useRouter()

  useEffect(() => {
    if (currentUser) {
      if (authStatus === 'found' && currentUser?.preferredTheme !== 'system') {
        toggleColorScheme(currentUser?.preferredTheme as ColorScheme)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentUser?.preferredTheme, authStatus])

  const logout = useCallback(async () => {
    await logoutMutation()
    setCurrentUser(null)
    setAccessToken(null)
    setRefreshToken(null)
    setAuthStatus('unfound')
  }, [logoutMutation])

  // auto logout on refresh failure
  useEffect(() => {
    async function authCheck() {
      try {
        const response = await profileQuery.refetch()
        if (response.errors) {
          logout()
        }
      } catch (error) {
        logout()
      }
    }
    if (refreshStatus === 'error' || authStatus === 'error') {
      authCheck()
    }
  }, [refreshStatus, authStatus, profileQuery, logout])

  useEffect(() => {
    if (profileQuery.data?.profile) {
      setAuthStatus('found')
      setCurrentUser(profileQuery.data.profile)
    } else {
      setAuthStatus('error')
    }
  }, [profileQuery.data, logout])

  return (
    <AuthContext.Provider
      value={{
        currentUser,
        setCurrentUser,
        logout,
        logoutLoading,
        authStatus,
        setAuthStatus,
        refetchProfile: profileQuery.refetch,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }

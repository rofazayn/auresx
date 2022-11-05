import { ApolloProvider } from '@apollo/client'
import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect, useState } from 'react'
import apolloClient from '../configs/apollo-client'
import { AuthProvider } from '../context/auth-context'
import '../styles/custom.css'
import '../styles/fonts.css'
import mantineTheme from '../styles/mantine-theme'
import { rtlCache, emotionCache } from '../styles/emotion-caches'
import { NotificationsProvider } from '@mantine/notifications'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  // detect color scheme
  const preferredColorScheme = useColorScheme()

  const [colorScheme, setColorScheme] = useState<ColorScheme>('dark')

  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  useEffect(() => {
    setColorScheme(preferredColorScheme)
  }, [preferredColorScheme])

  const [rtl, _setRtl] = useState(false)

  return (
    <>
      <Head>
        <title>AuresX</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ApolloProvider client={apolloClient}>
        <ColorSchemeProvider
          colorScheme={colorScheme}
          toggleColorScheme={toggleColorScheme}
        >
          <AuthProvider>
            <div dir={rtl ? 'rtl' : 'ltr'}>
              <MantineProvider
                withGlobalStyles
                withNormalizeCSS
                theme={{
                  ...mantineTheme,
                  colorScheme,
                  dir: rtl ? 'rtl' : 'ltr',
                }}
                emotionCache={rtl ? rtlCache : emotionCache}
              >
                <NotificationsProvider
                  position='bottom-center'
                  zIndex={9999}
                  limit={6}
                >
                  <Box
                    sx={(theme) => ({
                      minHeight: '100vh',
                      width: '100%',
                      maxWidth: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[9]
                          : theme.colors.gray[1],
                    })}
                  >
                    <Component {...pageProps} />
                  </Box>
                </NotificationsProvider>
              </MantineProvider>
            </div>
          </AuthProvider>
        </ColorSchemeProvider>
      </ApolloProvider>
    </>
  )
}

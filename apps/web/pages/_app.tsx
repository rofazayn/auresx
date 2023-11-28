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
        <meta
          name='description'
          content='Our team comprises of talented individuals who have taken
          the initiative to offer innovative solutions to address
          significant digital challenges faced by critical sectors
          in Algeria.'
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
                  position='top-center'
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
                          ? theme.colors.dark[8]
                          : 'white',
                      // : theme.colors.gray[0],
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

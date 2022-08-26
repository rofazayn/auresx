import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { Router } from 'next/router'
import { useEffect, useState } from 'react'
import CookieBanner from '../components/cookie-banner'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageLayout from '../components/page-layout'
import '../styles/custom.css'
import '../styles/fonts.css'
import mantineTheme from '../styles/mantine-theme'
import rtlCache from '../styles/rtl-cache'
import NextNProgress from 'nextjs-progressbar'
import { ApolloProvider } from '@apollo/client'
import apolloClient from '../configs/apollo-client'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  // detect color scheme
  const preferredColorScheme = useColorScheme()
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
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
        <div dir={rtl ? 'rtl' : 'ltr'}>
          <ColorSchemeProvider
            colorScheme={colorScheme}
            toggleColorScheme={toggleColorScheme}
          >
            <MantineProvider
              withGlobalStyles
              withNormalizeCSS
              theme={{
                ...mantineTheme,
                colorScheme,
                dir: rtl ? 'rtl' : 'ltr',
              }}
              emotionCache={rtl ? rtlCache : undefined}
            >
              <Navbar />
              <Box
                sx={(_theme) => ({
                  minHeight: '100vh',
                  width: '100%',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                })}
              >
                <PageLayout>
                  <NextNProgress
                    color={'#20e3b2'}
                    startPosition={0.2}
                    stopDelayMs={200}
                    height={2}
                    showOnShallow={true}
                    options={{
                      showSpinner: false,
                    }}
                  />
                  <Component {...pageProps} />
                  <CookieBanner />
                  <Footer />
                </PageLayout>
              </Box>
            </MantineProvider>
          </ColorSchemeProvider>
        </div>
      </ApolloProvider>
    </>
  )
}

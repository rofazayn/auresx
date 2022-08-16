import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  createEmotionCache,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useState } from 'react'
import CookieBanner from '../components/cookie-banner'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageLayout from '../components/page-layout'
import '../styles/fonts.css'
import mantineTheme from '../styles/mantine-theme'
import rtlPlugin from 'stylis-plugin-rtl'

const rtlCache = createEmotionCache({
  key: 'mantine-rtl',
  stylisPlugins: [rtlPlugin],
})

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  const preferredColorScheme = useColorScheme('dark')

  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  const [rtl, setRtl] = useState(false)

  return (
    <>
      <Head>
        <title>AuresX</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

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
                <Navbar />
                {/* <RouterTransition /> */}
                <Component {...pageProps} />
                <Footer />
                <CookieBanner />
              </PageLayout>
            </Box>
          </MantineProvider>
        </ColorSchemeProvider>
      </div>
    </>
  )
}

import { AppProps } from 'next/app'
import Head from 'next/head'
import {
  Box,
  ColorSchemeProvider,
  MantineProvider,
  ColorScheme,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'

import PageLayout from '../components/page-layout'
import { useState } from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

export default function App(props: AppProps) {
  const { Component, pageProps } = props
  const preferredColorScheme = useColorScheme('dark')
  const [colorScheme, setColorScheme] =
    useState<ColorScheme>(preferredColorScheme)
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'))

  return (
    <>
      <Head>
        <title>AuresX</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width'
        />
      </Head>

      <ColorSchemeProvider
        colorScheme={colorScheme}
        toggleColorScheme={toggleColorScheme}
      >
        <MantineProvider
          withGlobalStyles
          withNormalizeCSS
          theme={{
            /** mantine theme override here */
            colorScheme,
          }}
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
              <Component {...pageProps} />
              <Footer />
            </PageLayout>
          </Box>
        </MantineProvider>
      </ColorSchemeProvider>
    </>
  )
}

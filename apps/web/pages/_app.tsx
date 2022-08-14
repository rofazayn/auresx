import {
  Box,
  ColorScheme,
  ColorSchemeProvider,
  MantineProvider,
} from '@mantine/core'
import { useColorScheme } from '@mantine/hooks'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { useState } from 'react'
import Footer from '../components/footer'
import Navbar from '../components/navbar'
import PageLayout from '../components/page-layout'

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
            fontFamily: 'Montserrat',
            colorScheme,
            colors: {
              fluor: [
                '#d2f9f0',
                '#a6f4e0',
                '#79eed1',
                '#54ffd1',
                '#4de9c1',
                '#20e3b2',
                '#25e6b2',
                '#1ab68e',
                '#13886b',
                '#0d5b47',
              ],
            },
            primaryColor: 'fluor',
            primaryShade: 7,
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

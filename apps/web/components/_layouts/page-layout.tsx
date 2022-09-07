import { Box } from '@mantine/core'
import NextNProgress from 'nextjs-progressbar'
import CookieBanner from '../cookie-banner'
import Footer from '../footer'
import Navbar from '../navbar'

interface LayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
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
      <Navbar />
      <CookieBanner />
      <Box
        sx={{
          minHeight: '100%',
          width: '100%',
          paddingTop: 132,
          paddingBottom: 35,
          '@media (max-width: 768px)': {
            paddingTop: 128,
          },
          position: 'relative',
          flexGrow: 1,
          overflow: 'hidden',
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

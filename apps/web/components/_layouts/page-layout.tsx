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
          minHeight: '900px',
          width: '100%',

          position: 'relative',
          flexGrow: 1,
          overflow: 'hidden',
          zIndex: 0,
        }}
      >
        {children}
      </Box>
      <Footer />
    </>
  )
}

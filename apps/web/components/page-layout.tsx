import { Box } from '@mantine/core'

interface LayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <>
      <Box
        sx={{
          height: '100%',
          width: '100%',
          paddingTop: 32,
          paddingBottom: 32,
        }}
      >
        {children}
      </Box>
    </>
  )
}

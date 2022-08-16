import { Box } from '@mantine/core'

interface LayoutProps {
  children: React.ReactNode
}

export default function PageLayout({ children }: LayoutProps) {
  return (
    <Box
      sx={{
        minHeight: '100%',
        width: '100%',
        paddingTop: 32,
        paddingBottom: 240,
        position: 'relative',
        flexGrow: 1,
      }}
    >
      {children}
    </Box>
  )
}

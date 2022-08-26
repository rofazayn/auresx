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
        paddingTop: 64,
        paddingBottom: 240,
        position: 'relative',
        flexGrow: 1,
        '@media (max-width: 755px)': { paddingTop: 24 },
      }}
    >
      {children}
    </Box>
  )
}

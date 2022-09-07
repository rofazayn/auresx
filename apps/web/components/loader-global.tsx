import { Box, Loader } from '@mantine/core'
import React from 'react'

const LoaderGlobal = () => {
  return (
    <Box
      sx={(theme) => ({
        zIndex: 9999,
        position: 'fixed',
        top: 0,
        right: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
      })}
    >
      <Box>
        <Loader color='teal' />
      </Box>
    </Box>
  )
}

export default LoaderGlobal

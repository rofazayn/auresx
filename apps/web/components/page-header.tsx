import { Box, Divider, Text } from '@mantine/core'
import { IconInfoCircle } from '@tabler/icons'
import React, { ReactElement } from 'react'

interface PageHeaderProps {
  label?: string
  icon?: any
}

const PageHeader = ({ label, icon }: PageHeaderProps) => {
  return (
    <Box mb={16}>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingBottom: 24,
        }}
      >
        <Box>
          <Text weight='bold' size='md'>
            {label || 'Page'}
          </Text>
        </Box>
        <Box>{(icon as any) || <IconInfoCircle />}</Box>
      </Box>
      <Divider variant='dashed' sx={{ opacity: 0.4 }} />
    </Box>
  )
}

export default PageHeader

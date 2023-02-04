import { Box, Divider, Text, Title } from '@mantine/core'
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
          paddingBottom: 20,
        }}
      >
        <Box>
          <Title order={6} color='dimmed'>
            {label || 'Page'}
          </Title>
        </Box>
        <Box>{(icon as any) || <IconInfoCircle size={16} />}</Box>
      </Box>
      <Divider variant='dashed' sx={{ opacity: 0.4 }} />
    </Box>
  )
}

export default PageHeader

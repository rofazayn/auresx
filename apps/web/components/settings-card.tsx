import { ActionIcon, Box, Divider, Text, TextInput } from '@mantine/core'
import { IconCheck, IconEdit } from '@tabler/icons'
import NextImage from 'next/image'
import { ReactNode, useState } from 'react'

interface IDataProp {
  label: string
  description: string
  imageUrl: string
}

const SettingsCard = ({
  data,
  children,
}: {
  data: IDataProp
  children?: any
}) => {
  return (
    <Box
      sx={(theme) => ({
        borderRadius: theme.radius.md,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.darken(theme.colors.dark[7], 0.25)
            : theme.colors.gray[1],
        border:
          theme.colorScheme === 'dark'
            ? '1px solid transparent'
            : `1px solid ${theme.colors.gray[0]}`,
        display: 'flex',
        flexDirection: 'column',
        padding: 16,
        paddingBottom: 24,
        gap: 16,
      })}
    >
      <Box
        sx={{
          display: 'flex',
          gap: 16,
          alignItems: 'flex-start',
          flexGrow: 1,
        }}
      >
        <Box
          sx={{ display: 'flex', gap: 16, alignItems: 'center', flexGrow: 1 }}
        >
          <Box
            sx={(theme) => ({
              borderRadius: 16,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[7]
                  : theme.colors.gray[2],
              // paddingBlock: 4,
              width: 80,
              '@media (max-width: 768px)': {
                width: 56,
              },
            })}
          >
            <NextImage
              src={data.imageUrl}
              alt='setting card image'
              layout='responsive'
              placeholder='blur'
              blurDataURL={data.imageUrl}
              width='100%'
              height='100%'
            />
          </Box>
          <Box>
            <Text size='md' weight='500' mb={-2}>
              {data.label}
            </Text>
            <Text size='sm' color='dimmed'>
              {data.description}
            </Text>
          </Box>
        </Box>
        <Box
          mt={4}
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <IconEdit aria-label='edit' color='gray' style={{ opacity: 0.2 }} />
        </Box>
      </Box>
      <Box>
        <Divider my={4} variant='dashed' sx={{ opacity: 0.4 }} />
      </Box>
      <Box sx={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
      </Box>
    </Box>
  )
}

export default SettingsCard

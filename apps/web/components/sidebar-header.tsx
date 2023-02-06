import {
  Box,
  Tooltip,
  ActionIcon,
  useMantineColorScheme,
  Divider,
  Text,
  Title,
} from '@mantine/core'
import { IconSun, IconMoon, IconBell, IconNotification } from '@tabler/icons'
import React from 'react'
import Logo from './logo'
import NextLink from 'next/link'

const SidebarHeader = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 8,
        }}
      >
        <Box>
          <Box
            sx={{
              marginInline: 8,
              display: 'flex',
              alignItems: 'center',
              gap: 24,
            }}
          >
            <NextLink href='/dashboard'>
              <Tooltip
                label='Dashboard Home'
                withArrow
                position='bottom'
                arrowSize={10}
                color='indigo'
                sx={{ fontWeight: 500 }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    cursor: 'pointer',
                  }}
                >
                  <Logo />
                  <Box>
                    <Title
                      order={5}
                      pt={3}
                      mb={-4}
                      sx={{
                        // letterSpacing: 0.5,
                        fontFamily: 'Work Sans',
                      }}
                    >
                      AuresX
                    </Title>
                    <Text size='xs' color='dimmed'>
                      Dashboard
                    </Text>
                  </Box>
                </Box>
              </Tooltip>
            </NextLink>
            {/* <Box sx={{ display: 'flex' }}>
              <Divider
                orientation='vertical'
                sx={{ height: 32, opacity: 0.4 }}
              />
            </Box> */}
          </Box>
        </Box>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 12,
          }}
        >
          <Box>
            <Tooltip
              label='Toggle Theme'
              withArrow
              position='bottom'
              arrowSize={10}
              color='indigo'
              sx={{ fontWeight: 500 }}
            >
              {colorScheme === 'dark' ? (
                <ActionIcon
                  variant='light'
                  size='md'
                  radius='md'
                  aria-label='Light Theme'
                  onClick={() => toggleColorScheme()}
                  color='gray'
                >
                  <IconSun size={18} />
                </ActionIcon>
              ) : (
                <ActionIcon
                  variant='light'
                  size='md'
                  radius='md'
                  aria-label='Dark Theme'
                  onClick={() => toggleColorScheme()}
                  color='gray'
                >
                  <IconMoon size={18} />
                </ActionIcon>
              )}
            </Tooltip>
          </Box>

          <Box>
            <NextLink href='/dashboard/notifications'>
              <Tooltip
                label='Notifications'
                withArrow
                position='bottom'
                arrowSize={10}
                color='indigo'
                sx={{ fontWeight: 500 }}
              >
                <Box>
                  <ActionIcon
                    variant='light'
                    size='xl'
                    radius='md'
                    color='gray'
                    aria-label='Notifications'
                    // onClick={logout}
                  >
                    <IconNotification size={24} />
                  </ActionIcon>
                </Box>
              </Tooltip>
            </NextLink>
          </Box>
        </Box>
      </Box>
      <Divider variant='dashed' mt={28} sx={{ opacity: 0.4 }} />
    </Box>
  )
}

export default SidebarHeader

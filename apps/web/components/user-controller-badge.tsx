import {
  ActionIcon,
  Avatar,
  Box,
  Divider,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import { IconLogout } from '@tabler/icons'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useContext } from 'react'
import { AuthContext } from '../context/auth-context'

const UserControllerBadge = () => {
  const theme = useMantineTheme()
  const { currentUser, logout, logoutLoading } = useContext(AuthContext)
  const router = useRouter()
  return (
    <Box>
      <Divider variant='dashed' mb={16} sx={{ opacity: 0.4 }} />
      <Box
        sx={{
          display: 'flex',
          gap: 8,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        pl={8}
      >
        <NextLink href='/dashboard/profile'>
          <Tooltip
            label='Visit Profile'
            withArrow
            position='top'
            arrowSize={10}
            color='indigo'
            sx={{ fontWeight: 500 }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                cursor: 'pointer',
                paddingInlineEnd: 8,
              }}
            >
              <Box>
                <Avatar
                  size={48}
                  radius='lg'
                  gradient={{
                    from: router.pathname.includes('/dashboard/profile')
                      ? theme.colors.teal[4]
                      : theme.colors.indigo[4],
                    to: router.pathname.includes('profile')
                      ? theme.colors.teal[6]
                      : theme.colors.indigo[6],
                    deg: 45,
                  }}
                  variant='gradient'
                  sx={{ transition: 'all ease-in-out 250ms' }}
                >
                  {currentUser?.name.split(' ')[0][0]}
                </Avatar>
              </Box>
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Text
                  weight={
                    router.pathname.includes('/dashboard/profile')
                      ? 'bold'
                      : '500'
                  }
                  mb={-4}
                  sx={{
                    color: router.pathname.includes('/dashboard/profile')
                      ? theme.colors.teal[5]
                      : 'inherit',
                  }}
                >
                  {currentUser?.name.length > 16
                    ? currentUser?.name.slice(0, 16) + '...'
                    : currentUser?.name}
                </Text>
                <Text weight='500' size='sm' color='dimmed'>
                  {currentUser?.email.length > 18
                    ? currentUser?.email.slice(0, 18) + '...'
                    : currentUser?.email}
                </Text>
              </Box>
            </Box>
          </Tooltip>
        </NextLink>

        <Box>
          <Tooltip
            label='Logout'
            withArrow
            position='top'
            arrowSize={10}
            color='red'
            sx={{ fontWeight: 500 }}
          >
            <ActionIcon
              variant='light'
              // color='red'
              size={52}
              aria-label='Logout of your account'
              onClick={logout}
              loading={logoutLoading}
            >
              <IconLogout size={24} />
            </ActionIcon>
          </Tooltip>
        </Box>
      </Box>
    </Box>
  )
}

export default UserControllerBadge

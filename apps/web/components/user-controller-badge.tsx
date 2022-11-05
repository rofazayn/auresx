import {
  ActionIcon,
  Avatar,
  Box,
  Button,
  Divider,
  Group,
  Loader,
  MediaQuery,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import { IconCoin, IconLogout } from '@tabler/icons'
import { default as Link, default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../context/auth-context'
import formatMoney from '../utils/to-money'

const UserControllerBadge = () => {
  const theme = useMantineTheme()
  const { currentUser, logout, logoutLoading, refetchProfile, setCurrentUser } =
    useContext(AuthContext)

  useEffect(() => {
    async function fetchProfile() {
      const response = await refetchProfile()

      if (response.data.profile) {
        setCurrentUser(response.data.profile)
      }
    }

    fetchProfile()
  }, [refetchProfile, setCurrentUser])

  const router = useRouter()
  if (!currentUser) {
    return (
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            padding: 20,
            backgroundColor:
              theme.colorScheme === 'dark'
                ? theme.fn.darken(theme.colors.dark[7], 0.25)
                : theme.colors.gray[1],
            borderRadius: 16,
          }}
        >
          <Loader size='md' color='gray' />
        </Box>
      </Box>
    )
  } else {
    return (
      <Box
        sx={{
          display: 'flex',
          // alignItems: 'center',
          // justifyContent: 'space-between',
          flexDirection: 'column',
          paddingBlock: 20,
          paddingInline: 16,
          backgroundColor:
            theme.colorScheme === 'dark'
              ? theme.fn.darken(theme.colors.dark[7], 0.25)
              : theme.colors.gray[1],
          borderRadius: 16,

          // alignItems: 'center',
          '@media (max-width: 992px)': {
            // flexDirection: 'column-reverse',
          },
        }}
      >
        {currentUser.balance >= 0 ? (
          <Box>
            <Box
              sx={{
                display: 'flex',
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Text color='dimmed' size='md' weight='500'>
                Account Balance
              </Text>
              <IconCoin color='gray' size='24' style={{ opacity: 0.4 }} />
            </Box>

            <Text weight='600' sx={{ fontFamily: 'monospace', fontSize: 28 }}>
              {currentUser.balance >= 0 ? formatMoney(currentUser.balance) : 0}{' '}
              DA
            </Text>
            <Group spacing={8} mt={16}>
              <Link href='/dashboard/billing'>
                <Button size='xs' color='gray' variant='light'>
                  Billing Report
                </Button>
              </Link>
              <Button size='xs' color='teal' variant='light'>
                Deposit +
              </Button>
            </Group>
          </Box>
        ) : (
          <Loader color='gray' size='md' />
        )}

        <Divider variant='dashed' my={16} sx={{ opacity: 0.4 }} />

        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
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
                  gap: 12,
                  cursor: 'pointer',
                }}
              >
                <Box>
                  <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
                    <Avatar
                      size={40}
                      // radius='md'
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
                      sx={{
                        transition: 'all ease-in-out 250ms',
                        borderRadius: 16,
                      }}
                    >
                      {currentUser?.name.split(' ')[0][0]}
                    </Avatar>
                  </MediaQuery>
                  <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
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
                  </MediaQuery>
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
            <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
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
                  size={40}
                  aria-label='Logout of your account'
                  onClick={logout}
                  loading={logoutLoading}
                >
                  <IconLogout size={20} />
                </ActionIcon>
              </Tooltip>
            </MediaQuery>
            <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
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
            </MediaQuery>
          </Box>
        </Box>
      </Box>
    )
  }
}

export default UserControllerBadge

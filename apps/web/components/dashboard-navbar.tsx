import {
  ActionIcon,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Loader,
  MediaQuery,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAppWindow,
  IconArrowBack,
  IconMoon,
  IconNotification,
  IconSmartHome,
  IconSun,
  IconX,
} from '@tabler/icons'
import { default as Link, default as NextLink } from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth-context'
import Logo from './logo'
import NavLink from './nav-link'
import { NavbarLinks } from './navbar-links'
import UserControllerBadge from './user-controller-badge'

const DashboardNavbar = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState<boolean>(false)
  const router = useRouter()
  const { authStatus, logout } = useContext(AuthContext)

  useEffect(() => {
    setOpened(false)
  }, [router])

  async function handleLogout() {
    await logout()
    setOpened((prev) => prev === true && false)
  }

  return (
    <MediaQuery largerThan='md' styles={{ display: 'none' }}>
      <Box
        sx={{
          width: '100%',
          '@media (max-width: 992px)': {
            marginBottom: 8,
          },
        }}
      >
        <Container
          size='xl'
          sx={{
            '@media (max-width: 992px)': {
              marginInline: 4,
              paddingInline: 4,
            },
          }}
        >
          <Paper
            // shadow='xs'
            radius='md'
            sx={{
              paddingTop: 28,
              paddingBottom: 28,
              paddingInline: 24,
              '@media (max-width: 992px)': {
                paddingInline: 16,
              },
              borderTopRightRadius: 0,
              borderTopLeftRadius: 0,
              // borderBottomLeftRadius: 24,
              // borderBottomRightRadius: 24,
              borderTop: 'none',
              borderLeft: 'none',
              borderRight: 'none',
              overflow: 'hidden',
              // backgroundColor:
              //   colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
            }}
          >
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <Link href='/dashboard'>
                  <Box sx={{ marginInlineEnd: 16 }}>
                    <Logo />
                  </Box>
                </Link>
              </Box>

              {authStatus === 'stale' ? (
                <Loader />
              ) : authStatus === 'found' ? (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Box>
                      <NextLink href='/dashboard/notifications'>
                        <ActionIcon
                          variant='subtle'
                          size='xl'
                          radius='md'
                          color='indigo'
                          aria-label='Notifications'
                          // onClick={logout}
                        >
                          <IconNotification size={24} />
                        </ActionIcon>
                      </NextLink>
                    </Box>
                    <Burger
                      aria-label='Menu'
                      opened={opened}
                      size='sm'
                      onClick={() => setOpened((prev) => !prev)}
                    />
                  </Box>
                </>
              ) : (
                <>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href='/login'>
                      <Button
                        variant='subtle'
                        color='gray'
                        size='sm'
                        radius='md'
                        sx={{ marginInlineEnd: 8 }}
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Burger
                      aria-label='Menu'
                      opened={opened}
                      size='sm'
                      onClick={() => setOpened((prev) => !prev)}
                    />
                  </Box>
                </>
              )}
            </Box>

            <MediaQuery largerThan='md' styles={{ display: 'none' }}>
              <Drawer
                overlayColor={
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[9]
                    : theme.colors.gray[2]
                }
                overlayOpacity={0.55}
                overlayBlur={3}
                opened={opened}
                onClose={() => setOpened(false)}
                withCloseButton={false}
                position={'right'}
                sx={{ zIndex: 9999 }}
              >
                <Box
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    overflowY: 'auto',
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      position: 'sticky',
                      top: 0,
                      backgroundColor:
                        theme.colorScheme === 'dark'
                          ? theme.colors.dark[7]
                          : 'white',
                      zIndex: 9,
                    }}
                    px={16}
                  >
                    <Box sx={{ width: '100%' }} pt={40}>
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          width: '100%',
                        }}
                      >
                        <Box sx={{ display: 'flex', alignItems: 'center' }}>
                          <IconAppWindow
                            // color='gray'
                            style={{ marginInlineEnd: 8 }}
                            size={24}
                          />
                          <Text size='sm' weight='bold'>
                            Dashboard Menu
                          </Text>
                        </Box>
                        <Box>
                          <ActionIcon
                            variant='light'
                            size='md'
                            color='gray'
                            onClick={() => setOpened(false)}
                          >
                            <IconX />
                          </ActionIcon>
                        </Box>
                      </Box>
                    </Box>
                    <Divider variant='dashed' mt={24} />
                  </Box>

                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between',
                      flexGrow: 1,
                    }}
                    px={16}
                    pb={24}
                  >
                    <Box
                      pt={16}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <Box>
                        <Box mb={16}>
                          <Text weight='bold' mb={4} size='sm'>
                            Dashboard Navigation
                          </Text>
                          <Text
                            size='xs'
                            color='dimmed'
                            sx={{ lineHeight: 1.4 }}
                          >
                            Tap on one of the buttons down below to navigate to
                            a specific page on the dashboard.
                          </Text>
                        </Box>
                        <NavbarLinks withSettings={true} />
                        <NavLink
                          item={{
                            link: '/',
                            label: 'Website',
                            labelExtended: 'Back to Website',
                            icon: IconArrowBack,
                          }}
                        />
                      </Box>
                      <Box
                        sx={{
                          display: 'flex',
                          flexDirection: 'column',
                          flexGrow: 1,
                        }}
                        mb={16}
                      >
                        <Box mb={16}>
                          <Divider variant='dashed' my={16} />
                          <Box mb={16}>
                            <Text weight='bold' mb={4} size='sm'>
                              Theme Preferences
                            </Text>
                            <Text
                              size='xs'
                              color='dimmed'
                              sx={{ lineHeight: 1.4 }}
                            >
                              You can change your theme preferences here.
                            </Text>
                          </Box>
                          <Box
                            sx={{
                              display: 'flex',
                              flexDirection: 'column',
                              gap: 8,
                            }}
                          >
                            <Button.Group>
                              <Button
                                variant='light'
                                color='gray'
                                size='md'
                                sx={{ width: '100%' }}
                                onClick={() => toggleColorScheme('dark')}
                                leftIcon={<IconMoon size='20' />}
                              >
                                Dark
                              </Button>
                              <Divider orientation='vertical' />
                              <Button
                                variant='light'
                                color='gray'
                                size='md'
                                sx={{ width: '100%' }}
                                onClick={() => toggleColorScheme('light')}
                                rightIcon={<IconSun size='20' />}
                              >
                                Light
                              </Button>
                            </Button.Group>
                          </Box>
                        </Box>
                      </Box>
                    </Box>

                    <Box>
                      <UserControllerBadge />
                    </Box>
                  </Box>
                </Box>
              </Drawer>
            </MediaQuery>
          </Paper>
        </Container>
      </Box>
    </MediaQuery>
  )
}

export default DashboardNavbar

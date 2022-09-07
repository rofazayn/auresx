import {
  ActionIcon,
  Anchor,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  Loader,
  MediaQuery,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconApps,
  IconAppWindow,
  IconCoin,
  IconConfetti,
  IconHeart,
  IconHome,
  IconLogin,
  IconLogout,
  IconMoon,
  IconRocket,
  IconSun,
  IconTarget,
  IconX,
} from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth-context'
import Logo from './logo'

const Navbar = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState<boolean>(false)
  const router = useRouter()
  const { authStatus, logout, logoutLoading } = useContext(AuthContext)

  useEffect(() => {
    setOpened(false)
  }, [router])

  async function handleLogout() {
    await logout()
    setOpened((prev) => prev === true && false)
  }

  return (
    <Box
      sx={{ width: '100%', position: 'fixed', top: 0, left: 0, zIndex: 999 }}
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
          radius='lg'
          sx={{
            paddingTop: 28,
            paddingBottom: 28,
            paddingInline: 24,
            '@media (max-width: 768px)': {
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
              <Link href='/'>
                <Box sx={{ marginInlineEnd: 56 }}>
                  <Logo />
                </Box>
              </Link>
              <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                  <Link href='/solutions' passHref>
                    <Anchor
                      color='dimmed'
                      size='md'
                      aria-label='Solutions'
                      weight='500'
                      sx={{ paddingInline: 12, paddingBlock: 8 }}
                    >
                      Solutions
                    </Anchor>
                  </Link>
                  <Link href='/pricing' passHref>
                    <Anchor
                      color='dimmed'
                      size='md'
                      aria-label='Pricing'
                      weight='500'
                      sx={{ paddingInline: 12, paddingBlock: 8 }}
                    >
                      Pricing
                    </Anchor>
                  </Link>
                  <Link href='/endeavor' passHref>
                    <Anchor
                      color='dimmed'
                      size='md'
                      aria-label='Endeavor'
                      weight='500'
                      sx={{ paddingInline: 12, paddingBlock: 8 }}
                    >
                      Endeavor
                    </Anchor>
                  </Link>
                  <Link href='/team' passHref>
                    <Anchor
                      color='dimmed'
                      size='md'
                      aria-label='The Team'
                      weight='500'
                      sx={{ paddingInline: 12, paddingBlock: 8 }}
                    >
                      The Team
                    </Anchor>
                  </Link>
                </Box>
              </MediaQuery>
            </Box>

            {authStatus === 'stale' ? (
              <Loader />
            ) : authStatus === 'found' ? (
              <>
                <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Link href='/dashboard'>
                      <Button
                        variant='subtle'
                        color='gray'
                        size='md'
                        radius='md'
                        leftIcon={<IconApps />}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      onClick={logout}
                      color='red'
                      variant='light'
                      size='md'
                      radius='md'
                      rightIcon={<IconLogout />}
                      loading={logoutLoading}
                    >
                      Logout
                    </Button>

                    {/* <Divider orientation='vertical' />
                    <ActionIcon
                      variant='light'
                      color='red'
                      size='lg'
                      radius='md'
                      onClick={handleLogout}
                    >
                      <IconLogout />
                    </ActionIcon> */}
                  </Box>
                </MediaQuery>
                <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Link href='/dashboard'>
                      <Button
                        variant='subtle'
                        color='indigo'
                        size='sm'
                        radius='md'
                        leftIcon={<IconApps />}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Burger
                      color='gray'
                      aria-label='Menu'
                      opened={opened}
                      size='sm'
                      onClick={() => setOpened((prev) => !prev)}
                    />
                  </Box>
                </MediaQuery>
              </>
            ) : (
              <>
                <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Link href='/login'>
                      <Button
                        variant='subtle'
                        color='gray'
                        size='md'
                        radius='md'
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href='/register'>
                      <Button
                        variant='light'
                        color='teal'
                        size='md'
                        rightIcon={<IconConfetti size='24' />}
                        radius='md'
                      >
                        Join Us
                      </Button>
                    </Link>
                  </Box>
                </MediaQuery>
                <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
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
                </MediaQuery>
              </>
            )}
          </Box>

          <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
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
                          Navigation Menu
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
                          Page Links
                        </Text>
                        <Text size='xs' color='dimmed' sx={{ lineHeight: 1.4 }}>
                          Tap on one of the buttons down below to navigate to a
                          specific page on the website.
                        </Text>
                      </Box>
                      <Group
                        sx={{
                          display: 'flex' /* , flexDirection: 'column' */,
                          gap: 8,
                        }}
                      >
                        {/* <Button.Group orientation='vertical'> */}
                        <Link href='/' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconHome />}
                          >
                            Home
                          </Button>
                        </Link>
                        <Link href='/solutions' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconRocket />}
                          >
                            Solutions
                          </Button>
                        </Link>
                        <Link href='/pricing' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconCoin />}
                          >
                            Pricing
                          </Button>
                        </Link>
                        <Link href='/endeavor' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconTarget />}
                          >
                            Endeavor
                          </Button>
                        </Link>
                        <Link href='/team' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconHeart />}
                          >
                            The Team
                          </Button>
                        </Link>
                        {/* </Button.Group> */}
                      </Group>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        flexGrow: 1,
                      }}
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
                    <Divider variant='dashed' mb={16} />
                    <Box mb={16}>
                      <Text weight='bold' mb={4} size='sm'>
                        Accounts Center (beta)
                      </Text>
                      <Text size='xs' color='dimmed' sx={{ lineHeight: 1.4 }}>
                        In case you want to access your account or create a new
                        one, here are the options
                      </Text>
                    </Box>
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        gap: 8,
                      }}
                    >
                      {authStatus === 'stale' ? (
                        <Loader />
                      ) : authStatus === 'found' ? (
                        <>
                          <Link href='/dashboard'>
                            <Button
                              variant='light'
                              color='indigo'
                              size='md'
                              sx={{ width: '100%' }}
                              rightIcon={<IconApps size='24' />}
                            >
                              Navigate to Dashboard
                            </Button>
                          </Link>
                          {/* <Link href='/register'> */}
                          <Button
                            variant='light'
                            color='red'
                            size='md'
                            rightIcon={<IconLogout size='24' />}
                            sx={{ width: '100%' }}
                            onClick={handleLogout}
                            loading={logoutLoading}
                          >
                            Log Out of your Account
                          </Button>
                          {/* </Link> */}
                        </>
                      ) : (
                        <>
                          <Link href='/login'>
                            <Button
                              variant='light'
                              color='indigo'
                              size='md'
                              sx={{ width: '100%' }}
                              rightIcon={<IconLogin size='24' />}
                            >
                              Login to your Account
                            </Button>
                          </Link>
                          <Link href='/register'>
                            <Button
                              variant='light'
                              color='teal'
                              size='md'
                              rightIcon={<IconConfetti size='24' />}
                              sx={{ width: '100%' }}
                            >
                              Create an AuresX Account
                            </Button>
                          </Link>
                        </>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Drawer>
          </MediaQuery>
        </Paper>
      </Container>
    </Box>
  )
}

export default Navbar

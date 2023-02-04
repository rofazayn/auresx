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
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconApps,
  IconAppWindow,
  IconBuildingArch,
  IconConfetti,
  IconHeart,
  IconHome,
  IconLogin,
  IconLogout,
  IconMoon,
  IconRocket,
  IconStar,
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
      sx={{
        width: '100%',
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 999,
        // height: '100%',
        // backgroundColor:
        //   colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
        backgroundColor:
          colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.dark[8], 0.8)
            : theme.fn.rgba('#ffffff', 0.8),
        // theme.fn.rgba(theme.colors.gray[1], 0.75),
        // backgroundColor: 'red',
        backdropFilter: 'blur(8px)',
        borderBottomLeftRadius: 24,
        borderBottomRightRadius: 24,
        overflow: 'hidden',
      }}
    >
      <Container
        // fluid
        size='xl'
        // sx={{
        //   maxWidth: 1444,
        //   '@media (max-width: 992px)': {
        //     marginInline: 4,
        //     paddingInline: 4,
        //   },
        // }}
      >
        <Box
          sx={{
            width: '100%',
            paddingBlock: 20,
            paddingInline: 16,
            '@media (max-width: 768px)': {
              // paddingInline: 16,
              paddingBlock: 18,
            },
            borderTop: 'none',
            borderLeft: 'none',
            borderRight: 'none',
            overflow: 'hidden',
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
                <Box sx={{ marginInlineEnd: 40 }}>
                  <Logo />
                </Box>
              </Link>
              <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Link href='/projects' passHref>
                    <Button
                      aria-label='Projects'
                      // weight='500'
                      color='gray'
                      size='sm'
                      radius='md'
                      variant='subtle'
                    >
                      Projects
                    </Button>
                  </Link>
                  {/* <Link href='/pricing' passHref>
                    <Anchor
                      color='dimmed'
                      size='md'
                      aria-label='Pricing'
                      weight='500'
                      sx={{ paddingInline: 12, paddingBlock: 8 }}
                    >
                      Pricing
                    </Anchor>
                  </Link> */}
                  <Link href='/endeavor' passHref>
                    <Button
                      aria-label='Endeavor'
                      // weight='500'
                      color='gray'
                      size='sm'
                      radius='md'
                      variant='subtle'
                    >
                      Endeavor
                    </Button>
                  </Link>
                  <Link href='/team' passHref>
                    <Button
                      aria-label='Team'
                      // weight='500'
                      color='gray'
                      size='sm'
                      radius='md'
                      variant='subtle'
                    >
                      The Team
                    </Button>
                  </Link>
                  <Link href='/vision' passHref>
                    <Button
                      aria-label='Team'
                      // weight='500'
                      color='gray'
                      size='sm'
                      radius='md'
                      variant='subtle'
                    >
                      Vision 2030
                    </Button>
                  </Link>
                </Box>
              </MediaQuery>
            </Box>

            {authStatus === 'stale' ? (
              <Loader size='sm' />
            ) : authStatus === 'found' ? (
              <>
                <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <Link href='/dashboard'>
                      <Button
                        variant='subtle'
                        color='gray'
                        size='sm'
                        radius='md'
                        leftIcon={<IconApps width='18px' />}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Button
                      onClick={logout}
                      color='red'
                      variant='subtle'
                      size='sm'
                      radius='md'
                      rightIcon={<IconLogout width='18px' />}
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
                        color='gray'
                        size='xs'
                        radius='md'
                        leftIcon={<IconApps width='16' />}
                      >
                        Dashboard
                      </Button>
                    </Link>
                    <Burger
                      // color='gray'
                      aria-label='Menu'
                      opened={opened}
                      size={14}
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
                        size='sm'
                        radius='md'
                      >
                        Sign In
                      </Button>
                    </Link>
                    <Link href='/register'>
                      <Button
                        variant='default'
                        size='sm'
                        rightIcon={<IconRocket size='20' />}
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
                  <Box sx={{ width: '100%' }} pt={24}>
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
                            size='sm'
                            leftIcon={<IconHome width='18px' />}
                          >
                            Home
                          </Button>
                        </Link>
                        <Link href='/projects' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='sm'
                            leftIcon={<IconRocket width='18px' />}
                          >
                            Projects
                          </Button>
                        </Link>
                        {/* <Link href='/pricing' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='md'
                            leftIcon={<IconCoin />}
                          >
                            Pricing
                          </Button>
                        </Link> */}
                        <Link href='/endeavor' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='sm'
                            leftIcon={<IconTarget width='18px' />}
                          >
                            Endeavor
                          </Button>
                        </Link>

                        <Link href='/team' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='sm'
                            leftIcon={<IconHeart width='18px' />}
                          >
                            The Team
                          </Button>
                        </Link>
                        <Link href='/vision' passHref>
                          <Button
                            variant='light'
                            color='gray'
                            size='sm'
                            leftIcon={<IconStar width='18px' />}
                          >
                            Vision 2030
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
                              size='sm'
                              sx={{ width: '100%' }}
                              onClick={() => toggleColorScheme('dark')}
                              leftIcon={<IconMoon size='18px' />}
                            >
                              Dark
                            </Button>
                            <Divider orientation='vertical' />
                            <Button
                              variant='light'
                              color='gray'
                              size='sm'
                              sx={{ width: '100%' }}
                              onClick={() => toggleColorScheme('light')}
                              rightIcon={<IconSun size='18px' />}
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
                              size='sm'
                              sx={{ width: '100%' }}
                              rightIcon={<IconApps size='18px' />}
                            >
                              Navigate to Dashboard
                            </Button>
                          </Link>
                          {/* <Link href='/register'> */}
                          <Button
                            variant='light'
                            color='red'
                            size='sm'
                            rightIcon={<IconLogout size='18px' />}
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
                              size='sm'
                              sx={{ width: '100%' }}
                              rightIcon={<IconLogin size='18px' />}
                            >
                              Login to your Account
                            </Button>
                          </Link>
                          <Link href='/register'>
                            <Button
                              variant='light'
                              color='teal'
                              size='sm'
                              rightIcon={<IconConfetti size='18px' />}
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
        </Box>
      </Container>
    </Box>
  )
}

export default Navbar

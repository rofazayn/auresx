import {
  ActionIcon,
  AspectRatio,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Group,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAppWindow,
  IconCoin,
  IconHeart,
  IconHome,
  IconLogin,
  IconMoon,
  IconPlugConnected,
  IconRocket,
  IconSun,
  IconTarget,
  IconX,
} from '@tabler/icons'
import NextImage from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import logoImage from '../public/images/logo.png'
import logoImageLight from '../public/images/logo-light.png'

const Navbar = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  const [opened, setOpened] = useState<boolean>(false)
  const router = useRouter()

  useEffect(() => {
    setOpened(false)
  }, [router])
  return (
    <>
      <Container size='xl' mb={32} sx={{ paddingTop: 32 }}>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Box>
              <Link href='/' passHref>
                <AspectRatio
                  ratio={1 / 1}
                  sx={{
                    width: 44,
                    cursor: 'pointer',
                    marginInlineEnd: 40,
                  }}
                >
                  {colorScheme === 'dark' ? (
                    <NextImage
                      src={logoImage}
                      alt='AuresX logo'
                      aria-label='AuresX logo'
                      layout='fill'
                      placeholder='blur'
                    />
                  ) : (
                    <NextImage
                      src={logoImageLight}
                      alt='AuresX logo'
                      aria-label='AuresX logo'
                      layout='fill'
                      placeholder='blur'
                    />
                  )}
                </AspectRatio>
              </Link>
            </Box>
            <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
              <Box>
                <Button.Group>
                  <Link href='/solutions' passHref>
                    <Button variant='subtle' color='gray' size='sm'>
                      Solutions
                    </Button>
                  </Link>
                  <Link href='/pricing' passHref>
                    <Button variant='subtle' color='gray' size='sm'>
                      Pricing
                    </Button>
                  </Link>
                  <Link href='/endeavor' passHref>
                    <Button variant='subtle' color='gray' size='sm'>
                      Endeavor
                    </Button>
                  </Link>
                  <Link href='/team' passHref>
                    <Button variant='subtle' color='gray' size='sm'>
                      The Team
                    </Button>
                  </Link>
                </Button.Group>
              </Box>
            </MediaQuery>
          </Box>

          {/* <Group spacing={20}> */}
          <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
            <Button.Group>
              <Link href='/login'>
                <Button variant='light' color='gray' size='md' radius='md'>
                  Sign In
                </Button>
              </Link>
              <Link href='/register'>
                <Button
                  variant='light'
                  color='teal'
                  size='md'
                  rightIcon={<IconPlugConnected size='24' />}
                  radius='md'
                >
                  Join Us
                </Button>
              </Link>
            </Button.Group>
          </MediaQuery>
          <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
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
                opened={opened}
                size='sm'
                onClick={() => setOpened((prev) => !prev)}
              />
            </Box>
          </MediaQuery>
          {/* </Group> */}
        </Box>
      </Container>

      <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
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
                  theme.colorScheme === 'dark' ? theme.colors.dark[7] : 'white',
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
                      <Text size='xs' color='dimmed' sx={{ lineHeight: 1.4 }}>
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
                    In case you want to access your account or create a new one,
                    here are the options
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
                      rightIcon={<IconPlugConnected size='24' />}
                      sx={{ width: '100%' }}
                    >
                      Create a New Account
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </MediaQuery>
    </>
  )
}

export default Navbar

import {
  ActionIcon,
  AspectRatio,
  Box,
  Burger,
  Button,
  Container,
  Divider,
  Drawer,
  Image,
  MediaQuery,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  Icon3dCubeSphere,
  IconAnchor,
  IconDirections,
  IconLogin,
  IconPlugConnected,
  IconWindow,
  IconX,
} from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const Navbar = () => {
  const theme = useMantineTheme()
  const { colorScheme /* toggleColorScheme */ } = useMantineColorScheme()
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
                  <Image
                    src={'/images/logo.png'}
                    alt='AuresX logo'
                    aria-label='AuresX logo'
                    sx={{
                      display:
                        colorScheme === 'dark' ? 'block' : 'none !important',
                    }}
                  />
                  <Image
                    src={'/images/logo-light.png'}
                    alt='AuresX logo'
                    aria-label='AuresX logo'
                    sx={{
                      display:
                        colorScheme !== 'dark' ? 'block' : 'none !important',
                    }}
                  />
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
            pt={40}
            pb={32}
            px={16}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              height: '100%',
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 16,
              }}
            >
              <Box
                // mb={8}
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: 32,
                }}
              >
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {/* <IconAnchor
                    // color='gray'
                    style={{ marginInlineEnd: 8 }}
                    size={24}
                  /> */}
                  <Text size='sm' weight='bold'>
                    Navigation Menu
                  </Text>
                  {/* <Text size='sm' color='dimmed'>
                    This is your navigation menu, you&apos;ll find below the
                    options.
                  </Text> */}
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
              <Divider variant='dashed' mt={8} />
              <Box>
                <Box mb={16}>
                  <Text weight='bold' mb={4} size='sm'>
                    Pages
                  </Text>
                  <Text size='sm' color='dimmed' sx={{ lineHeight: 1.4 }}>
                    Tap on one of the buttons down below to navigate to a
                    specific page.
                  </Text>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  <Link href='/' passHref>
                    <Button variant='light' color='gray' size='md'>
                      Home
                    </Button>
                  </Link>
                  <Link href='/solutions' passHref>
                    <Button variant='light' color='gray' size='md'>
                      Solutions
                    </Button>
                  </Link>
                  <Link href='/pricing' passHref>
                    <Button variant='light' color='gray' size='md'>
                      Pricing
                    </Button>
                  </Link>
                  <Link href='/endeavor' passHref>
                    <Button variant='light' color='gray' size='md'>
                      Endeavor
                    </Button>
                  </Link>
                  <Link href='/team' passHref>
                    <Button variant='light' color='gray' size='md'>
                      The Team
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
            <Box>
              <Divider variant='dashed' my={16} />
              <Box mb={16}>
                <Text weight='bold' mb={4} size='sm'>
                  Accounts Center (beta)
                </Text>
                <Text size='sm' color='dimmed' sx={{ lineHeight: 1.4 }}>
                  If you want to login to your account or create a new one.
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
                    radius='md'
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
                    radius='md'
                    sx={{ width: '100%' }}
                  >
                    Create a New Account
                  </Button>
                </Link>
              </Box>
            </Box>
          </Box>
        </Drawer>
      </MediaQuery>
    </>
  )
}

export default Navbar

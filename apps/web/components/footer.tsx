import {
  ActionIcon,
  Anchor,
  AspectRatio,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  Select,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGithub,
  IconBrandInstagram,
  IconBrandTwitter,
  IconMoon,
  IconSun,
} from '@tabler/icons'
// import Image from 'next/image'
import NextImage from 'next/image'
import Link from 'next/link'
import logoImageLight from '../public/images/logo-light.png'
import logoImageDark from '../public/images/logo-dark.png'

const Footer = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Box
      sx={{
        width: '100%',
        backgroundColor:
          colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.dark[8], 0.7)
            : theme.fn.rgba('#ffffff', 0.7),
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
      }}
    >
      <Container
        size='lg'
        // fluid
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
            paddingTop: 64,
            paddingBottom: '80px',
            // paddingInline: 16,
            // '@media (max-width: 992px)': {
            //   paddingInline: 16,
            // },

            zIndex: 9,

            // overflow: 'hidden',

            borderLeft: 'none',
            borderRight: 'none',
            borderTop: '1px solid',
            borderColor:
              theme.colorScheme === 'dark'
                ? theme.colors.dark[6]
                : theme.colors.gray[1],
          }}
        >
          {/* <Divider variant='dotted' mb={40} /> */}
          <Grid gutter={16} sx={{ width: '100%' }}>
            <Grid.Col span={6} sm={3}>
              <Box sx={{ disaply: 'flex' }} pb={20}>
                <Text size='xs' color='dimmed' weight='500' mb={20}>
                  Essentials
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    rowGap: 16,
                  }}
                >
                  {/* <Link href='/' passHref>
                  <Anchor  size='sm' variant='text' >Website Home</Anchor>
                </Link> */}
                  <Link href='/solutions' passHref>
                    <Anchor size='sm' variant='text'>
                      Planned Solutions
                    </Anchor>
                  </Link>
                  <Link href='/pricing' passHref>
                    <Anchor size='sm' variant='text'>
                      Impact and Motives
                    </Anchor>
                  </Link>
                  <Link href='/vision' passHref>
                    <Anchor size='sm' variant='text'>
                      AuresX Vision 2033
                    </Anchor>
                  </Link>
                  <Link href='/team' passHref>
                    <Anchor size='sm' variant='text'>
                      Meet the Team
                    </Anchor>
                  </Link>
                  <Link href='/careers' passHref>
                    <Anchor size='sm' variant='text'>
                      Careers (coming soon)
                    </Anchor>
                  </Link>
                  <Link href='/investor' passHref>
                    <Anchor size='sm' variant='text'>
                      Become an Investor
                    </Anchor>
                  </Link>
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={6} sm={3}>
              <Box pb={20}>
                <Text size='xs' color='dimmed' weight='500' mb={20}>
                  Community
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    rowGap: 16,
                  }}
                >
                  <Link href='/blog' passHref>
                    <Anchor size='sm' variant='text'>
                      The Blog
                    </Anchor>
                  </Link>
                  {/* <Link href='/agency' passHref>
                    <Anchor size='sm' variant='text'>
                      Agency &amp; Web Dev
                    </Anchor>
                  </Link> */}
                  {/* <Link href='/saas' passHref>
                    <Anchor size='sm' variant='text'>
                      SaaS Solutions
                    </Anchor>
                  </Link> */}
                  <Link href='/tech-consulting' passHref>
                    <Anchor size='sm' variant='text'>
                      Technology Consulting
                    </Anchor>
                  </Link>
                  <Link href='/blockchain' passHref>
                    <Anchor size='sm' variant='text'>
                      Blockchain Infrastructure
                    </Anchor>
                  </Link>

                  <Link href='/support/ideas' passHref>
                    <Anchor size='sm' variant='text'>
                      Share your Ideas
                    </Anchor>
                  </Link>
                  <Link href='/support/bug' passHref>
                    <Anchor size='sm' variant='text'>
                      Report a Bug
                    </Anchor>
                  </Link>
                </Box>
              </Box>
            </Grid.Col>
            <Grid.Col span={6} sm={3}>
              <Box>
                <Text size='xs' color='dimmed' weight='500' mb={20}>
                  Legal &amp; Support
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 10,
                    rowGap: 16,
                  }}
                >
                  <Link href='/privacy-policy' passHref>
                    <Anchor size='sm' variant='text'>
                      Privacy Policy
                    </Anchor>
                  </Link>
                  <Link href='/terms' passHref>
                    <Anchor size='sm' variant='text'>
                      Terms of Use
                    </Anchor>
                  </Link>
                  <Link href='/cookies' passHref>
                    <Anchor size='sm' variant='text'>
                      Cookies Policy
                    </Anchor>
                  </Link>
                  <Link href='/support/customer' passHref>
                    <Anchor size='sm' variant='text'>
                      Customer Support
                    </Anchor>
                  </Link>
                  {/* <Link href='/support/sales' passHref>
                    <Anchor size='sm' variant='text'>
                      Report Sales Issue
                    </Anchor>
                  </Link> */}
                  <Link href='/support/abuse' passHref>
                    <Anchor size='sm' variant='text'>
                      Report an Abuse
                    </Anchor>
                  </Link>
                  <Link href='/support/status' passHref>
                    <Anchor size='sm' variant='text'>
                      System Status Check
                    </Anchor>
                  </Link>
                </Box>
              </Box>
            </Grid.Col>

            <Grid.Col
              span={12}
              md={3}
              sx={
                {
                  // backgroundColor: 'red',
                }
              }
            >
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 16,
                  '@media(max-width: 992px)': {
                    marginTop: 32,
                    maxWidth: 620,
                  },
                }}
              >
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                  }}
                >
                  <Box mb={16}>
                    <Link href='/' passHref>
                      <AspectRatio
                        ratio={1 / 1}
                        sx={{
                          width: 32,
                          cursor: 'pointer',
                          marginInlineEnd: 16,
                          filter: 'grayscale(100%)',
                          transition: 'all 250ms ease-in-out',
                          '&:hover': {
                            opacity: 1,
                            filter: 'grayscale(0%)',
                          },
                        }}
                      >
                        {colorScheme === 'dark' ? (
                          <NextImage
                            src={logoImageDark}
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
                  <Box>
                    <Text weight='500' size='sm' mb={16}>
                      <Text span size='lg'>
                        &copy;
                      </Text>{' '}
                      {new Date().getFullYear()} AuresX, EURL.
                      <br /> All rights reserved.
                    </Text>
                    <Text size='sm' mb={16} color='dimmed'>
                      A software company that took the initiative to provide
                      innovative solutions to major digital challenges facing
                      vital sectors in Algeria
                    </Text>
                  </Box>
                </Box>
                <Box>
                  <Group spacing={8} mb={24}>
                    <Select
                      variant='default'
                      data={[{ value: 'en', label: 'English' }]}
                      placeholder='Change Language'
                      value='en'
                      sx={{ maxWidth: 120 }}
                    />

                    <Divider orientation='vertical' mx={8} variant='dashed' />
                    <Button
                      size='sm'
                      variant='default'
                      color='gray'
                      sx={{
                        fontWeight: 500,
                      }}
                      aria-label='Change Theme'
                      leftIcon={
                        colorScheme === 'dark' ? (
                          <IconSun size='20' />
                        ) : (
                          <IconMoon size='20' />
                        )
                      }
                      onClick={() => toggleColorScheme()}
                    >
                      Toggle
                    </Button>
                  </Group>
                  <Group spacing={8}>
                    <Text
                      size='sm'
                      color='dimmed'
                      weight='500'
                      sx={{ marginInlineEnd: 8 }}
                    >
                      Social Links
                    </Text>
                    <Link href='https://www.twitter.com/aures_x' passHref>
                      <Anchor
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Twitter'
                      >
                        <ActionIcon
                          variant='light'
                          size='lg'
                          color='gray'
                          aria-label='Twitter'
                        >
                          <IconBrandTwitter size='22' color='gray' />
                        </ActionIcon>
                      </Anchor>
                    </Link>
                    <Link href='https://www.facebook.com/AuresX' passHref>
                      <Anchor
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Facebook'
                      >
                        <ActionIcon
                          variant='light'
                          size='lg'
                          color='gray'
                          aria-label='Facebook'
                        >
                          <IconBrandFacebook size='22' color='gray' />
                        </ActionIcon>
                      </Anchor>
                    </Link>
                    <Link href='https://www.instagram.com/aures_x' passHref>
                      <Anchor
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='Instagram'
                      >
                        <ActionIcon
                          variant='light'
                          size='lg'
                          color='gray'
                          aria-label='Instagram'
                        >
                          <IconBrandInstagram size='22' color='gray' />
                        </ActionIcon>
                      </Anchor>
                    </Link>
                    <Link href='https://www.github.com/AuresX' passHref>
                      <Anchor
                        target='_blank'
                        rel='noopener noreferrer'
                        aria-label='GitHub'
                      >
                        <ActionIcon
                          variant='light'
                          size='lg'
                          color='gray'
                          aria-label='GitHub'
                        >
                          <IconBrandGithub size='22' color='gray' />
                        </ActionIcon>
                      </Anchor>
                    </Link>
                  </Group>
                </Box>
                <Divider
                  variant='dashed'
                  sx={{ opacity: 0.4, maxWidth: 200 }}
                />
                <Box
                  sx={{
                    maxWidth: 140,
                    borderRadius: 8,
                    border:
                      theme.colorScheme === 'dark'
                        ? `2px solid ${theme.colors.blue[6]}`
                        : `2px solid ${theme.colors.blue[4]}`,
                    overflow: 'hidden',
                  }}
                >
                  <Link
                    href='https://www.digitalocean.com/?refcode=4cafe4276440&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge'
                    passHref
                  >
                    <a target='_blank'>
                      <Image
                        src='https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%203.svg'
                        alt='DigitalOcean Referral Badge'
                        sx={{
                          display:
                            theme.colorScheme === 'dark' ? 'block' : 'none',
                        }}
                      />
                      <Image
                        src='https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg'
                        alt='DigitalOcean Referral Badge'
                        sx={{
                          display:
                            theme.colorScheme === 'light' ? 'block' : 'none',
                        }}
                      />
                    </a>
                  </Link>
                </Box>
              </Box>
            </Grid.Col>
          </Grid>
        </Box>
      </Container>
    </Box>
  )
}

export default Footer

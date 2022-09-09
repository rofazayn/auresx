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
  Paper,
  Select,
  Stack,
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
import logoImage from '../public/images/logo.png'

const Footer = () => {
  const theme = useMantineTheme()
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
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
        p={'xl'}
        sx={{
          width: '100%',
          paddingTop: '40px !important',
          paddingBottom: '80px !important',
          '@media (max-width: 992px)': {
            paddingInline: 16,
          },

          zIndex: 9,
          // backgroundColor:
          //   colorScheme === 'dark'
          //     ? theme.colors.dark[8]
          //     : theme.colors.gray[0],
          // borderTopRightRadius: 24,
          // borderTopLeftRadius: 24,
          borderBottomLeftRadius: 0,
          borderBottomRightRadius: 0,
          overflow: 'hidden',
          borderBottom: 'none',
          borderLeft: 'none',
          borderRight: 'none',
        }}
      >
        {/* <Divider variant='dotted' mb={40} /> */}
        <Grid gutter={16}>
          <Grid.Col span={6} sm={3}>
            <Box sx={{ disaply: 'flex' }}>
              <Text size='sm' weight='500' mb={16}>
                Company
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                {/* <Link href='/' passHref>
                  <Anchor color='dimmed'>Website Home</Anchor>
                </Link> */}
                <Link href='/solutions' passHref>
                  <Anchor color='dimmed'>Ready Solutions</Anchor>
                </Link>
                <Link href='/pricing' passHref>
                  <Anchor color='dimmed'>Products Pricings</Anchor>
                </Link>
                <Link href='/endeavor' passHref>
                  <Anchor color='dimmed'>Our Endeavor</Anchor>
                </Link>
                <Link href='/team' passHref>
                  <Anchor color='dimmed'>Meet the Team</Anchor>
                </Link>
                <Link href='/careers' passHref>
                  <Anchor color='dimmed'>Careers (not yet)</Anchor>
                </Link>
                <Link href='/system-status' passHref>
                  <Anchor color='dimmed'>System Status</Anchor>
                </Link>
                <Link href='/privacy-policy' passHref>
                  <Anchor color='dimmed'>Privacy Policy</Anchor>
                </Link>
                <Link href='/terms' passHref>
                  <Anchor color='dimmed'>Terms of Use</Anchor>
                </Link>
                <Link href='/cookies' passHref>
                  <Anchor color='dimmed'>Cookies Policy</Anchor>
                </Link>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={6} sm={3}>
            <Box>
              <Text size='sm' weight='500' mb={16}>
                Community
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href='/blog' passHref>
                  <Anchor color='dimmed'>The Blog</Anchor>
                </Link>
                <Link href='/agency' passHref>
                  <Anchor color='dimmed'>Agency &amp; Web Dev</Anchor>
                </Link>
                <Link href='/saas' passHref>
                  <Anchor color='dimmed'>SaaS Solutions</Anchor>
                </Link>
                <Link href='/tech-consulting' passHref>
                  <Anchor color='dimmed'>Technology Consulting</Anchor>
                </Link>
                <Link href='/blockchain' passHref>
                  <Anchor color='dimmed'>Blockchain Infrastructure</Anchor>
                </Link>
                <Link href='/investor' passHref>
                  <Anchor color='dimmed'>Become an Investor</Anchor>
                </Link>
                <Link href='/vision' passHref>
                  <Anchor color='dimmed'>AuresX Vision 2030</Anchor>
                </Link>
              </Box>
            </Box>
          </Grid.Col>
          <Grid.Col span={6} sm={3}>
            <Box>
              <Text size='sm' weight='500' mb={16}>
                Support
              </Text>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <Link href='/support/support' passHref>
                  <Anchor color='dimmed'>Customer Support</Anchor>
                </Link>
                <Link href='/support/sales' passHref>
                  <Anchor color='dimmed'>Report Sales Issue</Anchor>
                </Link>
                <Link href='/support/abuse' passHref>
                  <Anchor color='dimmed'>Report an Abuse</Anchor>
                </Link>
                <Link href='/support/status' passHref>
                  <Anchor color='dimmed'>System Status Check</Anchor>
                </Link>
                <Link href='/support/ideas' passHref>
                  <Anchor color='dimmed'>Share your Ideas</Anchor>
                </Link>
                <Link href='/support/bug' passHref>
                  <Anchor color='dimmed'>Report a Bug</Anchor>
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
                sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}
              >
                <Box mb={16}>
                  <Link href='/' passHref>
                    <AspectRatio
                      ratio={1 / 1}
                      sx={{
                        width: 44,
                        cursor: 'pointer',
                        marginInlineEnd: 16,
                        filter: 'grayscale(100%)',
                        transition: 'all 250ms ease-in-out',
                        '&:hover': {
                          filter: 'grayscale(0%)',
                        },
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
                <Box>
                  <Text weight='500' size='sm' mb={16}>
                    <Text span size='lg'>
                      &copy;
                    </Text>{' '}
                    {new Date().getFullYear()} AuresX, SPAS.
                    <br /> All rights reserved.
                  </Text>
                  <Text color='dimmed' mb={16}>
                    A software company that took the initiative to provide
                    innovative solutions to major digital challenges facing
                    vital sectors in Algeria
                  </Text>
                </Box>
              </Box>
              <Box>
                <Group spacing={16} mb={24}>
                  <Select
                    // variant='outline'
                    data={[{ value: 'en', label: 'English' }]}
                    placeholder='Change Language'
                    value='en'
                    sx={{ maxWidth: 120 }}
                  />

                  <Divider orientation='vertical' mx={8} variant='dashed' />
                  <Button
                    size='sm'
                    variant='outline'
                    color={'gray'}
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
                    Change Theme
                  </Button>
                </Group>
                <Group spacing={8}>
                  <Text size='sm' color='dimmed' sx={{ marginInlineEnd: 8 }}>
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
                        <IconBrandTwitter size='24' color='gray' />
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
                        <IconBrandFacebook size='24' color='gray' />
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
                        <IconBrandInstagram size='24' color='gray' />
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
                        <IconBrandGithub size='24' color='gray' />
                      </ActionIcon>
                    </Anchor>
                  </Link>
                </Group>
              </Box>
              <Divider variant='dashed' sx={{ opacity: 0.4, maxWidth: 200 }} />
              <Box
                sx={{
                  maxWidth: 140,
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
      </Paper>
    </Container>
  )
}

export default Footer

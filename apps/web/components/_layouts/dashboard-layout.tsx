import {
  Anchor,
  Box,
  Container,
  Grid,
  MediaQuery,
  Paper,
  Text,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import NextNProgress from 'nextjs-progressbar'
import { useContext, useEffect } from 'react'
import { AuthContext } from '../../context/auth-context'
import DashboardNavbar from '../dashboard-navbar'
import EmailAlert from '../email-alert'
import LoaderGlobal from '../loader-global'
import Sidebar from '../sidebar'

interface LayoutProps {
  children: React.ReactNode
}

export default function DashboardLayout({ children }: LayoutProps) {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
  const { authStatus, currentUser } = useContext(AuthContext)
  const router = useRouter()

  useEffect(() => {
    if (authStatus === 'unfound' && !currentUser) {
      router.push('/login')
    }
  }, [authStatus, currentUser, router])

  if (authStatus === 'stale' || authStatus === 'unfound') {
    return <LoaderGlobal />
  } else {
    return (
      <>
        <NextNProgress
          color={'#20e3b2' || theme.colors.indigo[5]}
          startPosition={0.2}
          stopDelayMs={200}
          height={2}
          showOnShallow={true}
          options={{
            showSpinner: false,
          }}
        />
        {/* <Navbar /> */}
        {/* <CookieBanner /> */}
        <Box
          sx={{
            height: '100%',
            minHeight: '100%',
            width: '100%',
            position: 'relative',
            flexGrow: 1,
            display: 'flex',
            flexDirection: 'column',
            // paddingBottom: 80,
            backgroundColor:
              colorScheme === 'dark'
                ? theme.colors.dark[8]
                : theme.colors.gray[2],
          }}
        >
          <DashboardNavbar />
          <MediaQuery smallerThan='md' styles={{ display: 'none' }}>
            <Container
              size='xl'
              sx={{
                width: '100%',
                height: '100%',
                minHeight: '100%',
                display: 'flex',
                flexDirection: 'column',
                flexGrow: 1,
                paddingBottom: 24,
                '@media (max-width: 992px)': {
                  marginInline: 4,
                  paddingInline: 4,
                },
              }}
            >
              <Grid gutter={'lg'}>
                <Grid.Col
                  span={12}
                  md={4}
                  sx={{
                    position: 'relative',
                    zIndex: 9,
                    '@media (max-width: 992px)': { display: 'none' },
                  }}
                >
                  <Box
                    sx={{
                      position: 'sticky',
                      top: 24,
                      width: '100%',
                      height: 'calc(100vh - 48px)',
                    }}
                  >
                    <Sidebar />
                  </Box>
                </Grid.Col>
                <Grid.Col
                  span={12}
                  md={8}
                  sx={{
                    '@media (max-width: 992px)': { margin: '0', padding: '0' },
                  }}
                >
                  <Box>
                    <Paper
                      radius={12}
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        padding: 24,
                        minHeight: 'calc(100vh - 48px)',
                        marginTop: 24,
                        overflow: 'hidden',
                        '@media (max-width: 768px)': {
                          paddingInline: 16,
                        },
                      }}
                    >
                      {children}
                      <EmailAlert />
                    </Paper>
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        flexDirection: 'column',
                        '@media (max-width: 768px)': {
                          marginInline: 16,
                          paddingBottom: 24,
                        },
                      }}
                      mt={16}
                      pb={8}
                    >
                      <Box
                        // spacing={8}
                        mb={-8}
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          gap: 8,
                        }}
                        py={8}
                      >
                        <NextLink href='/privacy-policy' passHref>
                          <Anchor color='dimmed' weight='500' size='sm'>
                            Privacy
                          </Anchor>
                        </NextLink>
                        <NextLink href='/terms' passHref>
                          <Anchor color='dimmed' weight='500' size='sm'>
                            Terms
                          </Anchor>
                        </NextLink>
                        <NextLink href='/cookies' passHref>
                          <Anchor color='dimmed' weight='500' size='sm'>
                            Cookies
                          </Anchor>
                        </NextLink>
                      </Box>
                      <Text size='sm' color='dimmed' weight='500'>
                        &copy; {new Date().getFullYear()}{' '}
                        <NextLink href='/' passHref>
                          <Anchor underline color='dimmed'>
                            AuresX SPAS
                          </Anchor>
                        </NextLink>
                        , Algeria (Beta Version)
                      </Text>
                    </Box>
                  </Box>
                </Grid.Col>
              </Grid>
            </Container>
          </MediaQuery>
          <MediaQuery largerThan='md' styles={{ display: 'none' }}>
            <Container
              size='xl'
              sx={{
                '@media (max-width: 992px)': {
                  marginInline: 4,
                  paddingInline: 4,
                },
              }}
            >
              <Box>
                <Paper
                  radius='md'
                  sx={{
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    minHeight: 'calc(100vh - 48px)',
                    marginTop: 8,
                    paddingBlock: 24,
                    paddingInline: 16,
                    paddingBottom: 64,
                  }}
                >
                  {children}
                  <EmailAlert />
                </Paper>
                <Box
                  mt={8}
                  pb={8}
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    flexDirection: 'column',
                    '@media (max-width: 768px)': {
                      marginInline: 4,
                      paddingBottom: 40,
                      marginTop: 16,
                    },
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: 8,
                      width: '100%',
                    }}
                    mb={-12}
                  >
                    <Text size='xs' color='dimmed' weight='500' align='center'>
                      &copy; {new Date().getFullYear()}{' '}
                      <NextLink href='/' passHref>
                        <Anchor underline color='dimmed'>
                          AuresX SPAS
                        </Anchor>
                      </NextLink>
                      , Algeria (Beta Version)
                    </Text>
                  </Box>
                  <Box
                    // spacing={8}
                    // mb={-8}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      textAlign: 'center',
                      gap: 8,
                      width: '100%',
                    }}
                    py={8}
                  >
                    <NextLink href='/privacy-policy' passHref>
                      <Anchor color='dimmed' weight='500' size='xs'>
                        Privacy
                      </Anchor>
                    </NextLink>
                    <NextLink href='/terms' passHref>
                      <Anchor color='dimmed' weight='500' size='xs'>
                        Terms
                      </Anchor>
                    </NextLink>
                    <NextLink href='/cookies' passHref>
                      <Anchor color='dimmed' weight='500' size='xs'>
                        Cookies
                      </Anchor>
                    </NextLink>
                  </Box>
                </Box>
              </Box>
            </Container>
          </MediaQuery>
        </Box>
        {/* <Footer /> */}
      </>
    )
  }
}

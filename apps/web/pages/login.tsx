import {
  Alert,
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Grid,
  Image,
  Paper,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { IconAlertCircle, IconLockAccess, IconLogin } from '@tabler/icons'
import { Formik } from 'formik'
import jwtDecode from 'jwt-decode'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import LoaderGlobal from '../components/loader-global'
import PageLayout from '../components/_layouts/page-layout'
import { AuthContext } from '../context/auth-context'
import { useLoginMutation } from '../generated/graphql'
import { setAccessToken } from '../utils/access-token'
import { loginSchema } from '../validation/auth-validation'

const Login: NextPage = () => {
  const theme = useMantineTheme()
  const router = useRouter()
  const [
    loginMutation,
    { error: loginMutationError, loading: loginMutationLoading },
  ] = useLoginMutation()

  const { authStatus, setAuthStatus, setCurrentUser } = useContext(AuthContext)
  useEffect(() => {
    if (authStatus === 'found') {
      router.push('/dashboard')
    }
  }, [authStatus, router])

  if (authStatus === 'stale') {
    return <LoaderGlobal />
  } else if (authStatus === 'unfound') {
    return (
      <>
        <Head>
          <title>AuresX - Login</title>
          <meta
            name='description'
            content='login to your AuresX account and get access to our products and services'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <PageLayout>
          <Container
            size='md'
            sx={{
              marginBottom: 120,
              '@media (max-width: 992px)': {
                marginInline: 4,
                paddingInline: 4,
                transform: 'none',
              },
            }}
          >
            <Paper
              // shadow='xl'
              radius='lg'
              sx={{
                paddingInline: 40,
                '@media (max-width: 768px)': {
                  paddingInline: 16,
                },
                paddingTop: 40,
                paddingBottom: 64,
              }}
            >
              <Grid gutter={24} align={'center'} justify={'center'}>
                <Grid.Col sm={12} md={6}>
                  <Center>
                    <Box sx={{ maxWidth: 380 }}>
                      <Box sx={{ transform: 'scale(1.2)' }} mb={40}>
                        <Image
                          src={'/images/illustrations/account-login.svg'}
                          alt='login to account'
                          sx={{
                            transform: 'translateX(-16px)',
                            '@media(max-width: 768px)': {
                              transform: 'none',
                            },
                          }}
                          // mt={-32}
                        />
                      </Box>

                      <Text size='xs' color='dimmed'>
                        AuresX Accounts{' '}
                        <Text component='span' weight={'bold'}>
                          (beta version)
                        </Text>
                      </Text>
                      <Title order={1} mb={8} size='h2'>
                        Login to your account
                      </Title>
                      <Text
                        size='sm'
                        weight='500'
                        color='dimmed'
                        mb={16}
                        sx={{
                          maxWidth: 380,
                          '@media (max-width: 768px)': {
                            marginBottom: 0,
                          },
                        }}
                      >
                        Sign in to your account to have full access to our
                        services and stay updated about what we offer.
                      </Text>

                      {/* <Box mt={16}>
                        <Divider
                          variant='dashed'
                          sx={{ maxWidth: 380 }}
                          label={
                            <Text size='xs' color='dimmed'>
                              You can login by using your account on -{' '}
                              <Text
                                component='span'
                                color='orange'
                                weight='600'
                              >
                                coming soon
                              </Text>{' '}
                            </Text>
                          }
                          mb={8}
                        />
                        <Center>
                          <Button.Group
                            sx={{
                              width: '100%',
                            }}
                          >
                            <Button
                              variant='light'
                              color='gray'
                              size='md'
                              sx={{ width: '100%', cursor: 'not-allowed' }}
                              leftIcon={<IconBrandGoogle size='16' />}
                            >
                              Google
                            </Button>
                            <Divider orientation='vertical' />
                            <Button
                              variant='light'
                              color='gray'
                              size='md'
                              sx={{ width: '100%', cursor: 'not-allowed' }}
                              leftIcon={<IconBrandFacebook size='16' />}
                            >
                              Facebook
                            </Button>
                          </Button.Group>
                        </Center>
                      </Box> */}

                      <Box
                        sx={{
                          display: 'flex',
                          opacity: 0.6,
                          maxWidth: 380,
                          '@media (max-width: 768px)': {
                            display: 'none',
                          },
                        }}
                        mt={24}
                        mb={-16}
                      >
                        <Box sx={{ marginInlineEnd: 10, opacity: 0.3 }}>
                          <IconLockAccess size='40' color='gray' />
                        </Box>
                        <Text color='dimmed' size='xs' weight='500'>
                          To login to your account by using your email, you just
                          have to fill up the fields on the login form!
                        </Text>
                      </Box>
                    </Box>
                  </Center>
                </Grid.Col>
                <Grid.Col sm={12} md={6}>
                  <Center>
                    <Box sx={{ maxWidth: 380 }}>
                      <Formik
                        initialValues={{
                          email: '',
                          password: '',
                          stayLogged: false,
                        }}
                        validationSchema={loginSchema}
                        onSubmit={async (
                          values,
                          {
                            /* setSubmitting */
                          }
                        ) => {
                          const { email, password } = values
                          const loginOperation = await loginMutation({
                            variables: {
                              email,
                              password,
                            },
                          })

                          if (loginOperation.data?.login.accessToken) {
                            setAccessToken(
                              loginOperation.data?.login.accessToken
                            )
                            let decodedUser = jwtDecode(
                              loginOperation.data.login.accessToken
                            )
                            setCurrentUser(decodedUser)
                            setAuthStatus('found')
                          }
                        }}
                      >
                        {({
                          values,
                          errors,
                          touched,
                          handleChange,
                          handleBlur,
                          handleSubmit,
                          isSubmitting,
                          /* and other goodies */
                        }) => (
                          <form onSubmit={handleSubmit}>
                            <Stack spacing={16}>
                              <TextInput
                                variant='filled'
                                label='Email (required)'
                                placeholder='Enter your email'
                                description='The email you used to create your account'
                                size='lg'
                                name='email'
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                              />
                              <PasswordInput
                                variant='filled'
                                label='Password (required)'
                                placeholder='Enter your password'
                                description='Make sure you do not share it with anyone'
                                size='lg'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                              />

                              <Box>
                                <Divider
                                  variant='dashed'
                                  label={
                                    'Would you like to stay logged in to your account?'
                                  }
                                  mb={8}
                                />

                                <Checkbox
                                  size='lg'
                                  sx={{ alignItems: 'flex-start' }}
                                  name={'stayLogged'}
                                  onChange={handleChange}
                                  checked={values.stayLogged}
                                  label={
                                    <Text size='sm'>
                                      <b>Yes, I would like to</b> stay logged in
                                      to my account on this device if possible
                                      (optional)
                                    </Text>
                                  }
                                />
                              </Box>

                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                              >
                                <Divider
                                  variant='dashed'
                                  label={
                                    'Everything okay? then please proceed to signing in'
                                  }
                                  mb={8}
                                />

                                <Button
                                  variant='filled'
                                  rightIcon={<IconLogin />}
                                  size='lg'
                                  type='submit'
                                  color='indigo'
                                  loading={isSubmitting}
                                >
                                  Login to your Account
                                </Button>
                                {loginMutationError &&
                                  loginMutationError?.message && (
                                    <Alert
                                      icon={<IconAlertCircle size={24} />}
                                      // title='Oopsie!'
                                      radius='md'
                                      variant='outline'
                                      color='red'
                                      mt={24}
                                    >
                                      {loginMutationError.message ===
                                        'invalid_username' ||
                                      loginMutationError.message ===
                                        'invalid_password'
                                        ? 'You entered wrong credentials, please check your email and password and try again!'
                                        : 'Something went wrong, we are really sorry for the inconvenience, please try again later!'}
                                    </Alert>
                                  )}
                              </Box>

                              {/* <Divider variant='dashed' mt={16} mb={8} /> */}

                              <Box mt={16}>
                                {/* <Divider variant='dashed' my={16} /> */}
                                <Text color='dimmed' mb={8}>
                                  Don&apos;t you have an account with us?{' '}
                                  <Link href='/register' passHref>
                                    <Anchor weight='bold' color='indigo'>
                                      Register
                                    </Anchor>
                                  </Link>
                                </Text>

                                <Text size='xs' color='dimmed'>
                                  AuresX accounts are a general purpose accounts
                                  that handle your data, activity &amp;
                                  authorizations in our ecosystem.
                                </Text>
                              </Box>
                            </Stack>
                          </form>
                        )}
                      </Formik>
                    </Box>
                  </Center>
                </Grid.Col>
              </Grid>
            </Paper>
          </Container>
        </PageLayout>
      </>
    )
  } else {
    return null
  }
}

export default Login

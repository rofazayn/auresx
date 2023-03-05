import {
  Alert,
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Divider,
  Grid,
  Paper,
  PasswordInput,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { IconAlertCircle, IconConfetti, IconLogin } from '@tabler/icons'
import { Formik } from 'formik'
import jwtDecode from 'jwt-decode'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import LoaderGlobal from '../components/loader-global'
import PageLayout from '../components/_layouts/page-layout'
import { AuthContext } from '../context/auth-context'
import { useLoginMutation } from '../generated/graphql'
import { setAccessToken, setRefreshToken } from '../utils/tokens-operations'
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

  const [segment, setSegment] = useState<string>('login')
  let segmentsData: any[] = [
    {
      label: (
        <Center>
          <IconLogin size={20} />
          <Box sx={{ marginInlineStart: 10 }}>Login</Box>
        </Center>
      ),
      value: 'login',
    },
    {
      label: (
        <Center>
          <IconConfetti size={20} />
          <Box sx={{ marginInlineStart: 10 }}>New Account</Box>
        </Center>
      ),
      value: 'register',
    },
  ]

  useEffect(() => {
    router.push(('/' + segment) as string)
  }, [segment])

  if (authStatus === 'stale' || authStatus === 'found') {
    return <LoaderGlobal />
  } else {
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
            // size='md'
            size='xs'
            sx={{
              maxWidth: '480px',
              paddingTop: 120,
            }}
          >
            <Paper
              radius='lg'
              p={'xl'}
              sx={{
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.fn.lighten(theme.colors.gray[0], 0.3),
              }}
            >
              <Grid gutter={24} align={'start'} justify={'center'}>
                {/* <Grid.Col sm={12} md={6}>
                  <Center>
                    <Box sx={{ maxWidth: 380 }}>
                      <Box sx={{ transform: 'scale(1.2)' }} mb={40}>
                        <Image
                          src={'/images/illustrations/account-login.svg'}
                          alt='login to account'
                          sx={{
                            maxWidth: 300,
                          }}
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

                      <Box mt={16}>
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
                              size='sm'
                              sx={{ width: '100%', cursor: 'not-allowed' }}
                              leftIcon={<IconBrandGoogle size='16' />}
                            >
                              Google
                            </Button>
                            <Divider orientation='vertical' />
                            <Button
                              variant='light'
                              color='gray'
                              size='sm'
                              sx={{ width: '100%', cursor: 'not-allowed' }}
                              leftIcon={<IconBrandFacebook size='16' />}
                            >
                              Facebook
                            </Button>
                          </Button.Group>
                        </Center>
                      </Box>

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
                </Grid.Col> */}
                <Grid.Col sm={12} md={12}>
                  <Box sx={{ width: '100%' }} mb={16}>
                    <SegmentedControl
                      value={segment}
                      onChange={setSegment}
                      // color='indigo'

                      size='md'
                      fullWidth
                      radius='md'
                      data={segmentsData}
                    />
                    <Divider variant='dashed' my={16} sx={{ opacity: 0.4 }} />
                  </Box>
                  <Center>
                    <Box sx={{ width: '100%', maxWidth: 380 }}>
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
                            setAuthStatus('found')
                            setAccessToken(
                              loginOperation.data?.login.accessToken
                            )
                            setRefreshToken(
                              loginOperation.data?.login.refreshToken
                            )
                            let decodedUser = jwtDecode(
                              loginOperation.data.login.accessToken
                            )
                            setCurrentUser(decodedUser)
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
                                // variant='filled'
                                label='Email (required)'
                                placeholder='Enter your email'
                                description='The email you used to create your account'
                                size='md'
                                name='email'
                                type='email'
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.email && errors.email}
                                required
                              />
                              <PasswordInput
                                // variant='filled'
                                label='Password (required)'
                                placeholder='Enter your password'
                                description={
                                  <Text>
                                    Share it with no one,{' '}
                                    <Anchor
                                      color='dimmed'
                                      sx={{
                                        textDecoration: 'underline',
                                        fontWeight: 'bold',
                                      }}
                                    >
                                      Forgot password?
                                    </Anchor>
                                  </Text>
                                }
                                size='md'
                                name='password'
                                value={values.password}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                error={touched.password && errors.password}
                              />

                              {/* <Box>
                                <Divider
                                  variant='dashed'
                                  label={'More login options'}
                                  labelPosition='center'
                                  mb={8}
                                />

                                <Checkbox
                                  size='md'
                                  sx={{ alignItems: 'center' }}
                                  name={'stayLogged'}
                                  onChange={handleChange}
                                  checked={values.stayLogged}
                                  label={
                                    <Text size='sm'>
                                      <b>I would like to</b> stay logged in
                                    </Text>
                                  }
                                />
                              </Box> */}

                              <Box
                                sx={{
                                  display: 'flex',
                                  flexDirection: 'column',
                                }}
                                mt={12}
                              >
                                {/* <Divider
                                  variant='dashed'
                                  label={
                                    'Everything okay? then please proceed to signing in'
                                  }
                                  labelPosition='center'
                                  mb={8}
                                /> */}

                                <Button
                                  rightIcon={<IconLogin />}
                                  size='md'
                                  type='submit'
                                  loading={isSubmitting}
                                  color='indigo'
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

                              <Box mt={-4}>
                                {/* <Divider variant='dashed' my={16} /> */}
                                <Text
                                  color='dimmed'
                                  mb={10}
                                  size={'sm'}
                                  align='center'
                                >
                                  Don&apos;t have an account?{' '}
                                  <Link href='/register' passHref>
                                    <Anchor
                                      weight='bold'
                                      color='dimmed'
                                      // sx={{ textDecoration: 'underline' }}
                                    >
                                      Register
                                    </Anchor>
                                  </Link>
                                </Text>

                                {/* <Text
                                  size='xs'
                                  color='dimmed'
                                  sx={{ opacity: 0.6 }}
                                >
                                  AuresX accounts are a general purpose accounts
                                  that handle your data, activity &amp;
                                  authorizations in our ecosystem.
                                </Text> */}
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
  }
}

export default Login

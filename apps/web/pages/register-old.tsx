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
  Paper,
  PasswordInput,
  SegmentedControl,
  Stack,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import { IconConfetti, IconLogin, IconPlugConnected } from '@tabler/icons'
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
import { useRegisterMutation } from '../generated/graphql'
import { capitalizeWords } from '../utils/input-formatter'
import { setAccessToken, setRefreshToken } from '../utils/tokens-operations'
import { registerSchema } from '../validation/auth-validation'

const Register: NextPage = () => {
  const router = useRouter()
  const [
    registerMutation,
    { loading: registerMutationLoading, error: registerMutationError },
  ] = useRegisterMutation()
  const { authStatus, setCurrentUser, setAuthStatus } = useContext(AuthContext)

  useEffect(() => {
    if (authStatus === 'found') {
      router.push('/dashboard')
    }
  }, [authStatus, router])

  const [agreedToTerms, setAgreedToTerms] = useState<boolean>(true)

  const theme = useMantineTheme()

  const [segment, setSegment] = useState<string>('register')
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
          <title>AuresX - Register</title>
          <meta
            name='description'
            content='Create your AuresX account and get access to our products and services'
          />
          <link rel='icon' href='/favicon.ico' />
        </Head>

        <PageLayout>
          <Container
            size='md'
            sx={{
              maxWidth: '480px',
              paddingTop: 120,
            }}
          >
            {/* <Paper
              radius='lg'
              p={'xl'}
              sx={{
                // paddingInline: 40,
                // paddingTop: 32,
                // '@media (max-width: 768px)': {
                //   paddingTop: 24,
                //   paddingInline: 16,
                // },
                // paddingBottom: 40,
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[7]
                    : theme.colors.gray[0],
              }}
            > */}
            <Grid gutter={24} align={'start'} justify={'center'}>
              {/* <Grid.Col sm={12} md={6}>
                  <Center>
                    <Box
                      sx={{
                        maxWidth: 380,
                        '@media (max-width: 768px)': {
                          paddingBottom: 0,
                        },
                      }}
                      pb={24}
                    >
                      <Box
                        mb={24}
                        sx={{
                          maxWidth: 380,
                          '@media (max-width: 768px)': {
                            marginBottom: 0,
                          },
                        }}
                      >
                        <Box sx={{ transform: 'scale(1.2)' }} mb={24}>
                          <Image
                            src={'/images/illustrations/account-register.svg'}
                            alt='login to account'
                            sx={{
                              maxWidth: 300,
                              transform: 'translateX(-8px)',
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
                          Register an account
                        </Title>
                        <Text size='sm' weight='500' color='dimmed'>
                          Create an account with us and get exlusive access to
                          our services and many other rewards!
                        </Text>
                      </Box>

                      <Divider
                        variant='dashed'
                        sx={{ maxWidth: 380 }}
                        // label={'Third party login is coming soon!'}
                        label={
                          <Text size='xs' color='dimmed'>
                            Register by connecting your account on -{' '}
                            <Text component='span' color='orange' weight='600'>
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

                      <Box
                        sx={{
                          '@media (max-width: 768px)': {
                            display: 'none',
                          },
                        }}
                      >
                        <Text color='dimmed' size='sm' my={24}>
                          By joining our endeavor now, you&apos;ll be considered
                          as an early-user and you will have exclusive access to
                          our beta releases of our services.
                        </Text>
                        <Box
                          sx={{
                            display: 'flex',
                            opacity: 0.6,
                          }}
                          mb={-16}
                        >
                          <Box sx={{ marginInlineEnd: 10, opacity: 0.3 }}>
                            <IconLockAccess size='40' color='gray' />
                          </Box>
                          <Text color='dimmed' size='xs' weight='500'>
                            You can register by using your email, you just have
                            to fill up the registration form!
                          </Text>
                        </Box>
                      </Box>
                    </Box>
                  </Center>
                </Grid.Col> */}
              <Grid.Col sm={12} md={12}>
                {/* <Box sx={{ width: '100%' }}>
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
                  </Box> */}
                {registerMutationError && registerMutationError?.message && (
                  <Box mb={16}>
                    <Alert
                      icon={null}
                      // icon={<IconAlertCircle size={24} />}
                      title='Email already in use.'
                      radius='md'
                      variant='outline'
                      color='red'

                      // mt={24}
                    >
                      {registerMutationError.message === 'email_not_available'
                        ? 'The entered email is not available, please use another email address to proceed!'
                        : 'Something went wrong, we are really sorry for the inconvenience, please try again later!'}
                    </Alert>
                  </Box>
                )}
                <Center>
                  <Box sx={{ maxWidth: 380 }}>
                    <Formik
                      initialValues={{ name: '', email: '', password: '' }}
                      validationSchema={registerSchema}
                      onSubmit={async (
                        values,
                        {
                          /* setSubmitting */
                        }
                      ) => {
                        const { name, email, password } = values
                        const registerOperation = await registerMutation({
                          variables: {
                            name: capitalizeWords(name.trim()),
                            email,
                            password,
                          },
                        })

                        if (registerOperation.data?.register.accessToken) {
                          setAuthStatus('found')
                          setAccessToken(
                            registerOperation.data?.register.accessToken
                          )
                          setRefreshToken(
                            registerOperation.data?.register.refreshToken
                          )
                          let decodedUser = jwtDecode(
                            registerOperation.data.register.accessToken
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
                              variant='filled'
                              type='text'
                              label='Full Name (required)'
                              placeholder='Enter your full name'
                              description='Please provide your real &amp; full name'
                              size='md'
                              required
                              name='name'
                              value={values.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.name && errors.name}
                            />
                            <TextInput
                              variant='filled'
                              label='Email (required)'
                              placeholder='Enter your email'
                              description='We need your email to validate your account'
                              size='md'
                              type='email'
                              name='email'
                              required
                              value={values.email}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              error={touched.email && errors.email}
                            />
                            <PasswordInput
                              variant='filled'
                              label='Password (required)'
                              placeholder='Enter your password'
                              description='Pick a password that is hard to guess'
                              size='md'
                              name='password'
                              value={values.password}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              required
                              error={touched.password && errors.password}
                            />

                            <Divider
                              variant='dashed'
                              label={
                                'By signing-up with us you agree to the following'
                              }
                              mt={8}
                              mb={-8}
                            />

                            <Stack spacing={8}>
                              <Checkbox
                                required
                                size='lg'
                                sx={{ alignItems: 'flex-start' }}
                                checked={agreedToTerms}
                                onChange={() =>
                                  setAgreedToTerms(!agreedToTerms)
                                }
                                // disabled={true}
                                label={
                                  <Text size='sm'>
                                    <b>I agree</b> to the{' '}
                                    <Link href='/terms' passHref>
                                      <Anchor
                                        underline
                                        weight='500'
                                        color='dimmed'
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Terms of Use
                                      </Anchor>
                                    </Link>{' '}
                                    and to the{' '}
                                    <Link href='/privacy-policy' passHref>
                                      <Anchor
                                        underline
                                        weight='500'
                                        color='dimmed'
                                        sx={{ fontWeight: 'bold' }}
                                      >
                                        Privacy Policy
                                      </Anchor>
                                    </Link>{' '}
                                    provided by AuresX (<b>required</b>)
                                  </Text>
                                }
                              />
                              <Checkbox
                                size='lg'
                                sx={{ alignItems: 'flex-start' }}
                                label={
                                  <Text size='sm'>
                                    <b>I would like</b> to susbscribe to
                                    AuresX&apos;s newsletter and receive latest
                                    news (<b>optional</b>)
                                  </Text>
                                }
                              />
                            </Stack>
                            <Box
                              sx={{
                                display: 'flex',
                                flexDirection: 'column',
                              }}
                            >
                              <Divider
                                variant='dashed'
                                label={
                                  "That's it, press the registration button to finish up"
                                }
                                mb={8}
                              />
                              <Button
                                rightIcon={<IconPlugConnected />}
                                size='md'
                                type='submit'
                                loading={isSubmitting}
                                disabled={!agreedToTerms}
                                color='indigo'
                              >
                                Create your Account
                              </Button>
                            </Box>

                            <Box mt={-4}>
                              {/* <Divider variant='dashed' my={16} /> */}
                              <Text
                                color='dimmed'
                                mb={10}
                                size={'sm'}
                                align='center'
                              >
                                Already have an AuresX account?{' '}
                                <Link href='/login' passHref>
                                  <Anchor
                                    weight='bold'
                                    color='dimmed'
                                    // sx={{ textDecoration: 'underline' }}
                                  >
                                    Login
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
            {/* </Paper> */}
          </Container>
        </PageLayout>
      </>
    )
  }
}

export default Register

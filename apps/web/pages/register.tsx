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
} from '@mantine/core'
import {
  IconAlertCircle,
  IconLockAccess,
  IconPlugConnected,
} from '@tabler/icons'
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
import { useRegisterMutation } from '../generated/graphql'
import { setAccessToken } from '../utils/tokens-operations'
import { capitalizeWords } from '../utils/input-formatter'
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
              marginBottom: 120,
              '@media (max-width: 992px)': {
                marginInline: 4,
                paddingInline: 4,
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
                paddingTop: 56,
                paddingBottom: 64,
              }}
            >
              <Grid gutter={24} align={'start'} justify={'center'}>
                <Grid.Col sm={12} md={6}>
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

                      {/* <Divider
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
                      </Center> */}

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
                </Grid.Col>
                <Grid.Col sm={12} md={6}>
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
                            setAccessToken(
                              registerOperation.data?.register.accessToken
                            )
                            let decodedUser = jwtDecode(
                              registerOperation.data.register.accessToken
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
                                type='text'
                                label='Full Name (required)'
                                placeholder='Enter your full name'
                                description='Please provide your real &amp; full name'
                                size='md'
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
                                  checked={true}
                                  disabled={true}
                                  label={
                                    <Text size='sm'>
                                      <b>I agree</b> to the{' '}
                                      <Link href='/terms' passHref>
                                        <Anchor underline weight='500'>
                                          Terms of Use
                                        </Anchor>
                                      </Link>{' '}
                                      and to the{' '}
                                      <Link href='/privacy-policy' passHref>
                                        <Anchor underline weight='500'>
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
                                      AuresX&apos;s newsletter and receive
                                      latest news (<b>optional</b>)
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
                                  variant='filled'
                                  rightIcon={<IconPlugConnected />}
                                  size='lg'
                                  type='submit'
                                  loading={isSubmitting}
                                >
                                  Create your Account
                                </Button>
                                {registerMutationError &&
                                  registerMutationError?.message && (
                                    <Alert
                                      icon={<IconAlertCircle size={24} />}
                                      // title='Oopsie!'
                                      radius='md'
                                      variant='outline'
                                      color='red'
                                      mt={24}
                                    >
                                      {registerMutationError.message ===
                                      'email_not_available'
                                        ? 'The entered email is not available, please use another email address to proceed!'
                                        : 'Something went wrong, we are really sorry for the inconvenience, please try again later!'}
                                    </Alert>
                                  )}
                              </Box>

                              <Box mt={16}>
                                {/* <Divider variant='dashed' mt={16} mb={8} /> */}
                                <Text color='dimmed' mb={8}>
                                  Already have an AuresX account?{' '}
                                  <Link href='/login' passHref>
                                    <Anchor weight='bold' color='indigo'>
                                      Sign in
                                    </Anchor>
                                  </Link>
                                </Text>
                                <Text
                                  size='xs'
                                  color='dimmed'
                                  sx={{ opacity: 0.6 }}
                                >
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
  }
}

export default Register

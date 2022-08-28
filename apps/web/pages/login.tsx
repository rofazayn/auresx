import {
  Anchor,
  Box,
  Button,
  Center,
  Checkbox,
  Container,
  Divider,
  Grid,
  Image,
  MediaQuery,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconLockAccess,
  IconLogin,
} from '@tabler/icons'
import { Formik } from 'formik'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useLoginMutation } from '../generated/graphql'
import { setAccessToken } from '../utils/access-token'
import { loginSchema } from '../validation/auth-validation'

const Login: NextPage = () => {
  const theme = useMantineTheme()
  const [loginMutation /*  { loading } */] = useLoginMutation()

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

      <Container size='md'>
        <Grid gutter={24} align={'center'} justify={'center'}>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box sx={{ maxWidth: 380, marginTop: -32 }}>
                <MediaQuery
                  largerThan='sm'
                  styles={{
                    display: 'none',
                  }}
                >
                  <Image
                    src={'/images/illustrations/account-login.svg'}
                    alt='login to account'
                  />
                </MediaQuery>
                <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                  <Box sx={{ transform: 'scale(1.1)' }}>
                    <Image
                      src={'/images/illustrations/account-login.svg'}
                      alt='login to account'
                      sx={{
                        transform: 'translateX(-18px)',
                      }}
                      // mt={-32}
                    />
                  </Box>
                </MediaQuery>

                <Text size='xs' color='dimmed' mb={-4}>
                  AuresX Accounts{' '}
                  <Text component='span' weight={'bold'}>
                    (beta version)
                  </Text>
                </Text>
                <Title order={1} mb={8}>
                  Login to your account
                </Title>
                <Text size='sm' weight='500' color='dimmed' mb={16}>
                  Sign in to your account to have full access to our services
                  and stay updated about what we offer.
                </Text>

                <Box mt={16}>
                  <Divider
                    variant='dashed'
                    sx={{ maxWidth: 380 }}
                    label={
                      <Text size='xs' color='dimmed'>
                        You can login by using your account on -{' '}
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
                  </Center>
                </Box>

                <Box
                  sx={{
                    display: 'flex',
                    opacity: 0.6,
                  }}
                  mt={24}
                  mb={-16}
                >
                  <Box sx={{ marginInlineEnd: 10, opacity: 0.3 }}>
                    <IconLockAccess size='40' color='gray' />
                  </Box>
                  <Text color='dimmed' size='xs' weight='500'>
                    To login to your account by using your email, you just have
                    to fill up the fields on the login form!
                  </Text>
                </Box>
              </Box>
            </Center>
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box sx={{ maxWidth: 380 }}>
                <Formik
                  initialValues={{ email: '', password: '', stayLogged: false }}
                  validationSchema={loginSchema}
                  onSubmit={async (
                    values,
                    {
                      /* setSubmitting */
                    }
                  ) => {
                    alert(JSON.stringify(values))
                    const { email, password } = values
                    const loginOperation = await loginMutation({
                      variables: {
                        email,
                        password,
                      },
                    })

                    if (loginOperation.data?.login.accessToken) {
                      setAccessToken(loginOperation.data?.login.accessToken)
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
                          size='md'
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
                          size='md'
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
                                <b>Yes, I would like to</b> stay logged in to my
                                account on this device if possible (optional)
                              </Text>
                            }
                          />
                        </Box>

                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                          <Divider
                            variant='dashed'
                            label={
                              'Everything okay? then please proceed to signing in'
                            }
                            mb={8}
                          />
                          <Button
                            variant='light'
                            rightIcon={<IconLogin />}
                            size='lg'
                            type='submit'
                            loading={isSubmitting}
                          >
                            Login to your AuresX Account
                          </Button>
                        </Box>

                        {/* <Divider variant='dashed' mt={16} mb={8} /> */}

                        <Box mt={16}>
                          {/* <Divider variant='dashed' my={16} /> */}
                          <Text color='dimmed' mb={8}>
                            Don&apos;t you have an account with us?{' '}
                            <Link href='/register' passHref>
                              <Anchor weight='500'>Register</Anchor>
                            </Link>
                          </Text>

                          <Text size='xs' color='dimmed'>
                            AuresX accounts are a general purpose accounts that
                            handle your data, activity &amp; authorizations in
                            our ecosystem.
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
      </Container>
    </>
  )
}

export default Login

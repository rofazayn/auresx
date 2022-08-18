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
} from '@mantine/core'
import {
  IconBrandFacebook,
  IconBrandGoogle,
  IconDroplet,
  IconInfoCircle,
} from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Terms: NextPage = () => {
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

      <Container size='md'>
        <Grid gutter={24} align={'center'} justify={'center'}>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box>
                <MediaQuery
                  largerThan='sm'
                  styles={{
                    display: 'none',
                  }}
                >
                  <Image
                    src={'/images/illustrations/account-register.svg'}
                    alt='register account'
                    mb={16}
                  />
                </MediaQuery>
                <MediaQuery smallerThan='sm' styles={{ display: 'none' }}>
                  <Image
                    src={'/images/illustrations/account-register.svg'}
                    alt='register account'
                    mb={16}
                    sx={{ transform: 'translateX(-8px)', maxWidth: 380 }}
                  />
                </MediaQuery>

                <Text size='xs' color='dimmed' mb={-4}>
                  AuresX Accounts{' '}
                  <Text component='span' weight={'bold'}>
                    (beta version)
                  </Text>
                </Text>
                <Title order={1} mb={8}>
                  Register an account
                </Title>
                <Text size='sm' weight='500' color='dimmed' mb={24}>
                  Create an account with us and get exlusive access to our
                  services and many other rewards!
                </Text>

                <Divider
                  variant='dashed'
                  sx={{ maxWidth: 380 }}
                  label={
                    'You can register easily by connecting your account on'
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
                      variant='default'
                      sx={{ width: '100%' }}
                      leftIcon={<IconBrandGoogle size='16' />}
                      size='md'
                    >
                      Google
                    </Button>

                    <Button
                      variant='default'
                      sx={{ width: '100%' }}
                      leftIcon={<IconBrandFacebook size='16' />}
                      size='md'
                    >
                      Facebook
                    </Button>
                  </Button.Group>
                </Center>

                <Text color='dimmed' size='sm' my={24}>
                  By joining our endeavor now, you&apos;ll be considered as an
                  early-user and you will have exclusive access to our beta
                  releases of our services.
                </Text>
                <Box
                  sx={{
                    display: 'flex',
                    opacity: '50%',
                  }}
                >
                  <Box sx={{ marginInlineEnd: 8 }}>
                    <IconInfoCircle size='16' />
                  </Box>
                  <Text color='dimmed' size='xs'>
                    You can also register by using your email, you just have to
                    fill up the registration form!
                  </Text>
                </Box>
              </Box>
            </Center>
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box sx={{ maxWidth: 380 }}>
                {/* <form> */}
                <Stack spacing={16}>
                  <TextInput
                    required
                    variant='filled'
                    type='text'
                    label='Full name'
                    placeholder='Enter your full name'
                    description='Please provide your real &amp; full name'
                    size='md'
                  />
                  <TextInput
                    required
                    variant='filled'
                    type='email'
                    label='Email'
                    placeholder='Enter your email'
                    description='We need your email to validate your account'
                    size='md'
                  />
                  <PasswordInput
                    required
                    variant='filled'
                    // type='password'
                    label='Password'
                    placeholder='Enter your password'
                    description='Make sure you do not share it with anyone'
                    size='md'
                  />

                  <Divider
                    variant='dashed'
                    label={'By signing-up with us you agree to the following'}
                    mt={16}
                  />

                  <Checkbox
                    required
                    size='md'
                    sx={{ alignItems: 'flex-start' }}
                    checked={true}
                    disabled={true}
                    label={
                      <Text size='sm'>
                        <b>I agree</b> to the{' '}
                        <Link href='/terms' passHref>
                          <Anchor underline>Terms of Use</Anchor>
                        </Link>{' '}
                        and to the{' '}
                        <Link href='/privacy-policy' passHref>
                          <Anchor underline>Privacy Policy</Anchor>
                        </Link>{' '}
                        provided by AuresX (<b>required</b>)
                      </Text>
                    }
                  />
                  <Checkbox
                    size='md'
                    sx={{ alignItems: 'flex-start' }}
                    label={
                      <Text size='sm'>
                        <b>I would like</b> to susbscribe to AuresX&apos;s
                        newsletter and receive latest news (<b>optional</b>)
                      </Text>
                    }
                  />

                  <Divider
                    variant='dashed'
                    label={
                      "That's it, press the registration button to finish up"
                    }
                    mt={16}
                  />
                  <Button
                    variant='light'
                    rightIcon={<IconDroplet size='18' />}
                    size='md'
                  >
                    Create my AuresX account
                  </Button>
                  <Text size='xs' color='dimmed' mt={8}>
                    AuresX accounts are a general purpose accounts that handle
                    your data, activity &amp; authorizations in our ecosystem.
                  </Text>
                </Stack>
                {/* </form> */}
              </Box>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default Terms

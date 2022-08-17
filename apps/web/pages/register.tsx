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
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconForbid, IconInfoCircle } from '@tabler/icons'
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
          content='Create your AuresX account and join the new era'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container size='md'>
        <Grid gutter={24} align={'start'} justify={'center'} mt={64}>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box sx={{ maxWidth: 380 }}>
                <Image
                  src={'/images/illustrations/account-register.svg'}
                  alt='register account'
                  mb={32}
                  sx={{ transform: 'translateX(-8px)', maxWidth: 350 }}
                />
                <Text size='xs' color='dimmed' mb={8}>
                  Create your account
                </Text>
                <Title order={3} mb={'xs'}>
                  Register an account with us to get a chance to win free copies
                  of our products and other rewards!
                </Title>
                <Text color='dimmed' size='sm' mb={24}>
                  By creating your account now you will become an early-comer
                  and you will be rewarded when we start releasing our products
                  and services.
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
                    Fill in the registration and agree to our required terms
                    then press the creation button to proceed.
                  </Text>
                </Box>
              </Box>
            </Center>
          </Grid.Col>
          <Grid.Col sm={12} md={6}>
            <Center>
              <Box sx={{ maxWidth: 380 }}>
                <form>
                  <Stack spacing={8}>
                    {/* <Divider
                    variant='dashed'
                    label={'First, fill in the form with your personal data'}
                    mb={-8}
                  /> */}
                    <TextInput
                      required
                      variant='filled'
                      type='text'
                      label='Full name'
                      placeholder='Enter your full name'
                      description='Please provide your real &amp; full name'
                    />
                    <TextInput
                      required
                      variant='filled'
                      type='email'
                      label='Email'
                      placeholder='Enter your email'
                      description='We need your email to validate your account'
                    />
                    <PasswordInput
                      required
                      variant='filled'
                      // type='password'
                      label='Password'
                      placeholder='Enter your password'
                      description='Make sure you do not share it with anyone'
                    />

                    <Divider
                      variant='dashed'
                      label={'Now, make sure you agree to our terms'}
                      mt={16}
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
                    <Checkbox
                      required
                      size='md'
                      sx={{ alignItems: 'flex-start' }}
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
                    <Divider
                      variant='dashed'
                      label={
                        "That's it, press the registration button to finish up"
                      }
                      mt={16}
                    />
                    {/* <Button
                      variant='light'
                      rightIcon={<IconDroplet size='18' />}
                    >
                      Create my AuresX account
                    </Button> */}
                    <Button
                      variant='default'
                      disabled
                      rightIcon={<IconForbid size='18' />}
                    >
                      We are not issuing accounts yet!
                    </Button>
                    <Text size='xs' color='dimmed' mt={8}>
                      An AuresX account is a general purpose account that
                      handles your data &amp; authorizations across all
                      AuresX&apos;s services.
                    </Text>
                  </Stack>
                </form>
              </Box>
            </Center>
          </Grid.Col>
        </Grid>
      </Container>
    </>
  )
}

export default Terms

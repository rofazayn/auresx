import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  Title,
} from '@mantine/core'
import { IconMountain } from '@tabler/icons'
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

      <Box
        sx={{
          display: 'flex',
          minHeight: 260,
          alignItems: 'center',
          justifyContent: 'center',
          // textAlign: 'center',
        }}
      >
        <Container size='sm'>
          <Box sx={{ maxWidth: 380 }}>
            <Text size='xs' color='dimmed' mb={8}>
              Create your account
            </Text>
            <Title order={3} mb={'xs'}>
              Register an account with us to get a chance to win free copies of
              our products and other rewards!
            </Title>
            <Text color='dimmed' size='sm' mb={'xl'}>
              By creating your account now you will become an early-comer and
              you will be rewarded when we start releasing our products and
              services.
            </Text>
            <form>
              <Stack spacing={8}>
                <Divider variant='dashed' label={'1. Your data'} />
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
                  label={'2. Your agreements'}
                  mt={16}
                  mb={8}
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
                  mt={8}
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
                <Divider variant='dashed' label={'3. Finishing up'} mt={16} />
                {/* <Button
                  mt={8}
                  variant='light'
                  rightIcon={<IconMountain size='18' />}
                >
                  Create my AuresX account
                </Button> */}
                <Button
                  mt={8}
                  variant='default'
                  rightIcon={<IconMountain size='18' />}
                  disabled
                >
                  Oups! Come back later
                </Button>
              </Stack>
            </form>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Terms

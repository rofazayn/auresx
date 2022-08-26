import { Box, Button, Container, Text, Title } from '@mantine/core'
import { IconLamp2, IconSmartHome, IconSpeedboat } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Oups!</title>
        <meta name='description' content='AuresX - Page not found!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Box
        sx={{
          display: 'flex',
          minHeight: 260,
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
        }}
      >
        <Container size='sm'>
          <Box sx={{ maxWidth: 400 }}>
            <Title order={1} sx={{ fontSize: 80 }}>
              404 <span style={{ fontSize: 64 }}>👾</span>
            </Title>
            <Text color='dimmed' size='md' mb={'xl'}>
              <b>Oups!</b> The page you are looking for wasn&apos;t found, we
              suggest you go back to the homepage.
            </Text>
            <Link href='/'>
              <Button
                variant='light'
                rightIcon={<IconSpeedboat size='24' />}
                color='violet'
                size='md'
              >
                Let&apos; Go Back Home
              </Button>
            </Link>
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default Terms

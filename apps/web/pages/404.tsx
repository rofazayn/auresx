import {
  Box,
  Button,
  Center,
  Container,
  Paper,
  Text,
  Title,
} from '@mantine/core'
import { IconHome } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import PageLayout from '../components/_layouts/page-layout'

const Terms: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Oups!</title>
        <meta name='description' content='AuresX - Page not found!' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout>
        <Box
          sx={{
            display: 'flex',
            // minHeight: 'calc(100vh - 400px)',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            width: '100%',
          }}
        >
          <Container
            size='xl'
            sx={{
              '@media (max-width: 992px)': {
                marginInline: 4,
                paddingInline: 4,
              },
            }}
          >
            <Paper
              radius='lg'
              sx={{
                width: '100%',
                maxWidth: 500,
                paddingBlock: 80,
                paddingInline: 24,
                '@media (max-width: 992px)': {
                  paddingInline: 16,
                },
              }}
            >
              <Center>
                <Title
                  order={1}
                  sx={{ fontSize: 50, lineHeight: 1, maxWidth: 380 }}
                  mb={16}
                  // color='yellow'
                >
                  404 ⚠️
                </Title>
              </Center>

              <Center>
                <Title
                  size='md'
                  mb={'xl'}
                  // weight='500'
                  sx={{ maxWidth: 360, fontSize: 24, lineHeight: 1.2 }}
                >
                  Page not found <br /> or page still under <br /> development
                </Title>
              </Center>

              <Center>
                <Text color='dimmed' size='md' mb={'xl'} sx={{ maxWidth: 360 }}>
                  <b>Oups!</b> The page you are looking for wasn&apos;t found or
                  isn&apos;t developed yet. we suggest you go back to the
                  website&apos;s homepage.
                </Text>
              </Center>
              <Link href='/'>
                <Button
                  variant='light'
                  rightIcon={<IconHome size='24' />}
                  color='yellow'
                  size='md'
                >
                  Let&apos;s Go Back Home
                </Button>
              </Link>
            </Paper>
          </Container>
        </Box>
      </PageLayout>
    </>
  )
}

export default Terms

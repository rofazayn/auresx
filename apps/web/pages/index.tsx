import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBuildingArch } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import Link from 'next/link'
import genesisImageURL from '../public/images/genesis-ui.png'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Let&apos;s Go!</title>
        <meta
          name='description'
          content='AuresX is a software company that took the initiative to provide innovative solutions to major digital challenges facing vital sectors in Algeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container size='xs'>
        <Stack spacing={16} align='center' justify={'center'}>
          <Box mb={64}>
            {/* <Center>
              <Image
                src={'/images/illustrations/hero-landing.svg'}
                alt='landing page hero'
                mb={-24}
              />
            </Center> */}
            <Center>
              <Title
                align='center'
                size={46}
                sx={{
                  lineHeight: 1.1,

                  '@media(max-width: 755px)': {
                    fontSize: 32,
                  },
                }}
                mb={16}
              >
                Aures
                <Box
                  component='span'
                  sx={(theme) => ({ color: theme.colors.teal[5] })}
                >
                  X
                </Box>
                , bringing high-tier technology to the lofty mountain peaks of
                the Aures region.
              </Title>
            </Center>

            <Center sx={{ maxWidth: 380, margin: '0 auto' }}>
              <Text color='dimmed' size='md' align='center' mb={28}>
                A software company that took the initiative to provide
                innovative solutions to major digital challenges facing vital
                sectors in Algeria 🇩🇿
              </Text>
            </Center>
            <Center mb={12}>
              <Link href='/register'>
                <Button
                  size='lg'
                  variant='light'
                  rightIcon={<IconBuildingArch />}
                >
                  Join our Endeavor
                </Button>
              </Link>
            </Center>
            <Center>
              <Link href='/services' passHref>
                <Anchor size='sm' color='dimmed' underline>
                  Or discover what we do offer first
                </Anchor>
              </Link>
            </Center>
          </Box>

          {/* <Box sx={{ width: '100%', maxWidth: 180 }} my={24}>
            <Divider variant='dashed' />
          </Box>
          <Center>
            <Blockquote
              cite='– Founder &amp; CEO of AuresX'
              sx={(theme) => ({
                opacity: 0.5,
                maxWidth: 460,
                padding: 0,
                fontSize: theme.fontSizes.sm,
                textAlign: 'center',
              })}
              icon={null}
            >
              Algeria lacks many digital solutions to most of its vital sectors,
              our goal at AuresX is to solve that problem in the most innovative
              way and as fast as we possibly can.
            </Blockquote>
          </Center> */}
        </Stack>
      </Container>
      <Container size='lg'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
          mb={8}
          px={8}
        >
          <Text size='sm' color='dimmed'>
            <Text span weight='bold'>
              Featuring:
            </Text>{' '}
            Genesis™
          </Text>
          <Text size='sm' color='dimmed'>
            Releasing -{' '}
            <Text span weight='bold'>
              Mid 2023
            </Text>
          </Text>
        </Box>
      </Container>
      <Container size='xl'>
        <Box
          sx={(theme) => ({
            borderRadius: 16,
            overflow: 'hidden',
            border: '3px solid',
            '@media (max-width: 755px)': {
              borderRadius: 8,
              border: '2px solid',
              borderColor: theme.colors.teal[5],
            },
            borderColor: theme.colors.teal[5],
          })}
        >
          <NextImage
            src={genesisImageURL}
            alt='project genesis'
            placeholder='blur'
          />
        </Box>
      </Container>
    </>
  )
}

export default Home

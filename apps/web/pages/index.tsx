import {
  Anchor,
  Box,
  Button,
  Center,
  Container,
  Image,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { IconBuildingArch } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'

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
                size={48}
                sx={{
                  lineHeight: 1.1,

                  '@media(max-width: 755px)': {
                    fontSize: 36,
                  },
                }}
                mb={24}
              >
                Aures
                <Box
                  component='span'
                  sx={(theme) => ({ color: theme.colors.teal[5] })}
                >
                  X
                </Box>
                , high-tier technology from the lofty mountains of the Aures
                region.
              </Title>
            </Center>

            <Text color='dimmed' size='lg' align='center' mb={24}>
              AuresX is a software company that took the initiative to provide
              innovative solutions to major digital challenges facing vital
              sectors in Algeria.
            </Text>
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
          <Image
            src={'/images/genesis-ui.png'}
            alt='project genesis'
            // sx={{
            //   filter: 'none',
            //   transition: 'all 200ms ease-in-out',
            //   '&:hover': {
            //     filter: 'grayscale(100%)',
            //   },
            // }}
          />
        </Box>
      </Container>
    </>
  )
}

export default Home

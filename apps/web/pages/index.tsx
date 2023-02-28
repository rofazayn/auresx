import {
  Box,
  Button,
  Container,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconBuildingArch } from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'
import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRef } from 'react'
import PageLayout from '../components/_layouts/page-layout'

// import xSvg from '../public/images/svg/x.svg'

const Home: NextPage = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()

  // carousel autoplay
  const autoplay = useRef(Autoplay({ delay: 3000 }))
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

      <PageLayout>
        <Container size='xl'>
          <Box
            sx={{
              zIndex: 10,
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              height: 'calc(100vh - 160px)',
              paddingInline: 16,
              borderRadius: 16,
            }}
            mb={64}
            pt={160}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                textAlign: 'center',
                maxWidth: 580,
              }}
              mb={24}
            >
              <Title
                order={1}
                sx={{
                  fontSize: 40,
                  '@media(max-width: 768px)': {
                    fontSize: 28,
                  },
                }}
                mb={12}
              >
                Bringing high-tier technology to the lofty mountain peaks of
                Algeria.
              </Title>

              <Text
                size='lg'
                sx={{
                  maxWidth: 520,
                  '@media(max-width: 768px)': {
                    fontSize: theme.fontSizes.sm,
                  },
                }}
                mb={32}
                color='dimmed'
              >
                We are software company that took the initiative to provide
                innovative solutions to major digital challenges facing vital
                sectors in Algeria <Text component='span'>🇩🇿</Text>
              </Text>

              <Link href='/register'>
                <Button
                  size='md'
                  // variant='outline'
                  color='indigo'
                  rightIcon={<IconBuildingArch />}
                >
                  Join our Endeavor
                </Button>
              </Link>
            </Box>
            <Box>
              {/* <Divider variant='dashed' my={8} /> */}
              {/* <Blockquote
                cite='– Founder &amp; CEO of AuresX'
                sx={(theme) => ({
                  opacity: 0.7,
                  maxWidth: 340,
                  fontSize: 12,
                  textAlign: 'center',
                  '@media(max-width: 768px)': {
                    fontSize: 10,
                  },
                })}
                icon={null}
              >
                Algeria lacks many digital solutions to most of its vital
                sectors, our goal at AuresX is to solve that problem in the most
                innovative way and as fast as we possibly can.
              </Blockquote> */}
            </Box>
            {/* <Box
              sx={(theme) => ({
                zIndex: -1,
                opacity: theme.colorScheme === 'dark' ? 0.03 : 0.1,
                width: '90%',
                maxWidth: '700px',
                height: '100%',
                maxHeight: '700px',
                position: 'absolute',
                top: '100px',
                marginInline: 'auto',
                filter: 'grayscale(100%)',
              })}
            >
              <NextImage
                width='100%'
                src={xSvg}
                alt='Extended Solutions'
                aria-label='Extended Solutions'
                layout='fill'

                // placeholder='blur'
              />
            </Box> */}
          </Box>

          {/* <GenesisPreviewCard /> */}
        </Container>
      </PageLayout>
    </>
  )
}

export default Home

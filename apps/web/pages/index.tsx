import {
  Blockquote,
  Box,
  Button,
  Container,
  Grid,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconRadar2 } from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'
import type { NextPage } from 'next'
import Head from 'next/head'

import NextImage from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import InfoBanner from '../components/info-banner'
import Newsletter from '../components/newsletter'
import SolutionsSection from '../components/solutions-section'
import PageLayout from '../components/_layouts/page-layout'
import heroImage from '../public/images/illustrations/hero-3.png'

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
          content='Our team comprises of talented individuals who have taken
          the initiative to offer innovative solutions to address
          significant digital challenges faced by critical sectors
          in Algeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <PageLayout>
        <Container size='xl'>
          <Box
            mb={0}
            sx={{
              paddingTop: 120,
              '@media(max-width: 768px)': {
                paddingTop: 112,
              },
            }}
          >
            <Grid align={'center'} gutter={24}>
              <Grid.Col xs={12} sm={12} md={8} lg={6}>
                <Box
                  sx={{
                    zIndex: 10,
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    // alignItems: 'center',
                    justifyContent: 'center',
                    // paddingInline: 16,
                    borderRadius: 16,
                  }}
                >
                  <Box
                    sx={{
                      width: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                      justifyContent: 'center',
                      // textAlign: 'center',
                      maxWidth: 580,
                    }}
                    mb={32}
                  >
                    <Title
                      order={1}
                      sx={{
                        fontSize: 40,
                        '@media(max-width: 768px)': {
                          fontSize: 40,
                        },
                      }}
                      mb={12}
                    >
                      Bringing high-tier technology to the lofty mountain peaks
                      of Algeria.
                    </Title>

                    <Text size='lg' mb={28} color='dimmed' weight='500'>
                      Our team comprises of talented individuals who have taken
                      the initiative to offer innovative solutions to address
                      significant digital challenges faced by critical sectors
                      in Algeria <Text component='span'>🇩🇿</Text>
                    </Text>

                    <Link href='/register'>
                      <Button
                        size='lg'
                        color='indigo'
                        // variant='outline'
                        rightIcon={<IconRadar2 />}
                      >
                        Join our Endeavor
                      </Button>
                    </Link>
                  </Box>
                  <Box>
                    <Blockquote
                      cite='– Founder &amp; CEO of AuresX'
                      sx={(theme) => ({
                        opacity: 0.5,
                        fontSize: 14,
                        maxWidth: 400,
                        margin: 0,
                        padding: 0,
                        '@media(max-width: 768px)': {
                          fontSize: 12,
                        },
                      })}
                      icon={null}
                    >
                      Algeria lacks many digital solutions to most of its vital
                      sectors, our goal at AuresX is to solve that problem in
                      the most innovative way and as fast as we possibly can.
                    </Blockquote>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col xs={12} sm={12} md={8} lg={6}>
                <Box
                  sx={{
                    display: 'flex',
                    width: '100%',
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <NextImage
                    src={heroImage}
                    alt='AuresX inbound'
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 12,
                      overflow: 'hidden',
                      transform: 'translateY(-24px)',
                    }}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>
          <InfoBanner />
          <SolutionsSection />
          <Newsletter />
        </Container>
      </PageLayout>
    </>
  )
}

export default Home

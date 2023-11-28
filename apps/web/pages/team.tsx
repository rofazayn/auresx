import {
  Blockquote,
  Box,
  Container,
  Grid,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import Autoplay from 'embla-carousel-autoplay'
import type { NextPage } from 'next'
import Head from 'next/head'

import Image from 'next/image'
import { useRef } from 'react'
import PageLayout from '../components/_layouts/page-layout'
import founderImage from '../public/images/ruzo.jpg'
// import heroImage from '../public/images/illustrations/dashboard-services.svg'

const Team: NextPage = () => {
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
        <Container size='md'>
          <Box
            mb={0}
            sx={{
              paddingTop: 80,
              paddingBottom: 80,
              marginTop: 40,
              '@media(max-width: 992px)': {
                paddingTop: 100,
                marginBlock: 0,
              },
            }}
          >
            <Grid align={'center'} gutter={24}>
              <Grid.Col xs={12} sm={12} md={6} lg={6}>
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
                      // maxWidth: 600,
                    }}
                    mb={32}
                  >
                    <Title order={1} mb={12}>
                      Meet the Founder
                    </Title>

                    <Text size='md' mb={12} color='dimmed'>
                      At AuresX, our strength lies in our dedicated team of
                      passionate individuals who are committed to innovation and
                      excellence. Get to know the faces behind our success
                    </Text>

                    {/* <Button
                      component='a'
                      href='https://rofazayn.com'
                      size='sm'
                      color='indigo'
                      // variant='outline'
                      rightIcon={<IconUser width='18px' height='18px' />}
                    >
                      Check the founder's website
                    </Button> */}
                  </Box>
                  <Box>
                    <Blockquote
                      cite='– Abderraouf Zine, Founder &amp; Director of AuresX'
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
              <Grid.Col xs={12} sm={12} md={6} lg={6}>
                <Box
                  sx={{
                    midth: '100%',
                    height: '100%',
                    maxWidth: '120px',
                    borderRadius: 24,
                    overflow: 'hidden',
                    display: 'flex',
                    marginBottom: 20,
                  }}
                >
                  <Image src={founderImage} />
                </Box>
                <Title order={2}>Abderraouf Zine</Title>

                <Text size='lg' color='dimmed'>
                  Founder &amp; Director at AuresX
                </Text>
                <Text size='sm' color='dimmed' mt={12}>
                  Hey, I'm Abderraouf Zine, also known as Rofa or Ruzo. I'm
                  based in Batna, Algeria, deeply immersed in software
                  engineering, web development, and entrepreneurship. My coding
                  journey began when I stumbled upon an ad that introduced me to
                  Codecademy back in 2013. That moment ignited my passion for
                  coding and set me on a path of continuous learning and digital
                  exploration.
                </Text>
              </Grid.Col>
            </Grid>
            {/* <Divider mt={64} variant='dashed' /> */}
          </Box>
        </Container>
      </PageLayout>
    </>
  )
}

export default Team

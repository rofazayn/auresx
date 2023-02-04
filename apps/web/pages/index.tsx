import { Carousel } from '@mantine/carousel'
import {
  AspectRatio,
  Blockquote,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Paper,
  Text,
  ThemeIcon,
  Timeline,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconBuildingArch,
  IconChecks,
  IconCode,
  IconRocket,
  IconSettings,
  IconShoppingCart,
  IconStars,
} from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'
import type { NextPage } from 'next'
import Head from 'next/head'
import NextImage from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import PageLayout from '../components/_layouts/page-layout'
import genesisLogoDark from '../public/images/genesis-logo-dark.png'
import genesisLogoLight from '../public/images/genesis-logo-light.png'
import genesisPreviewLightImage from '../public/images/genesis-preview-light.png'
import genesisPreviewImage from '../public/images/genesis-preview.png'
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
              minHeight: '500px',
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
                maxWidth: 520,
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
                mb={8}
              >
                AuresX, bringing high-tier technology to the lofty mountain
                peaks of the Aures region.
              </Title>

              <Text
                size='md'
                sx={{
                  maxWidth: 420,
                  '@media(max-width: 768px)': {
                    fontSize: theme.fontSizes.sm,
                  },
                }}
                mb={24}
                color='dimmed'
              >
                A software company that took the initiative to provide
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
              <Divider variant='dashed' my={8} />
              <Blockquote
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
              </Blockquote>
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

          <Paper
            sx={{
              paddingBlock: 40,
              paddingBottom: 80,
              paddingInline: 56,
              '@media(max-width: 768px)': {
                paddingBlock: 32,
                paddingInline: 24,
                paddingBottom: 64,
              },
            }}
            radius='lg'
          >
            <Grid align='start' gutter={16}>
              <Grid.Col span={12} md={6}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'start',
                    flexDirection: 'column',
                  }}
                  mb={16}
                >
                  <AspectRatio
                    mb={24}
                    ratio={1 / 1}
                    sx={{
                      width: 80,
                      cursor: 'pointer',
                      '@media (max-width: 768px)': {
                        width: 48,
                      },
                    }}
                  >
                    {colorScheme === 'dark' ? (
                      <NextImage
                        src={genesisLogoDark}
                        alt='AuresX logo'
                        aria-label='AuresX logo'
                        layout='fill'
                        placeholder='blur'
                      />
                    ) : (
                      <NextImage
                        src={genesisLogoLight}
                        alt='AuresX logo'
                        aria-label='AuresX logo'
                        layout='fill'
                        placeholder='blur'
                      />
                    )}
                  </AspectRatio>
                  <Title order={2} sx={{ maxWidth: '520px' }} mb={8}>
                    Introducing next generation offline/online point of sale
                    software
                  </Title>
                  <Text
                    // align='center'
                    size='md'
                    sx={{ maxWidth: '520px' }}
                    color='dimmed'
                    mb={24}
                  >
                    Genesis POS is a point of sale software as a service
                    application that synchronizes, developed, crafted and
                    battle-tested to handle worst case network scenarios
                  </Text>
                  <Group sx={{ width: '100%' }} spacing={8} mb={32}>
                    <Link href='/dashboard/services'>
                      <Button
                        size='sm'
                        leftIcon={<IconShoppingCart size={16} />}
                      >
                        Buy Now
                      </Button>
                    </Link>
                    <Link href='/projects/genesis'>
                      <Button size='sm' color='gray' variant='light'>
                        Read More
                      </Button>
                    </Link>
                  </Group>

                  <Box sx={{ width: '100%', maxWidth: 500 }}>
                    <Carousel
                      sx={{ width: '100%' }}
                      mx='auto'
                      loop
                      withControls={false}
                      plugins={[autoplay.current]}
                      onMouseEnter={autoplay.current.stop}
                      onMouseLeave={autoplay.current.reset}
                    >
                      <Carousel.Slide>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            border: '1px solid',
                            borderColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[1],
                            borderRadius: 16,
                            overflow: 'hidden',
                            maxWidth: 500,
                          }}
                        >
                          {theme.colorScheme === 'dark' ? (
                            <NextImage
                              src={genesisPreviewImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          ) : (
                            <NextImage
                              src={genesisPreviewLightImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          )}
                        </Box>
                      </Carousel.Slide>
                      <Carousel.Slide>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            border: '1px solid',
                            borderColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[1],
                            borderRadius: 16,
                            overflow: 'hidden',
                            maxWidth: 500,
                          }}
                        >
                          {theme.colorScheme === 'dark' ? (
                            <NextImage
                              src={genesisPreviewImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          ) : (
                            <NextImage
                              src={genesisPreviewLightImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          )}
                        </Box>
                      </Carousel.Slide>
                      <Carousel.Slide>
                        <Box
                          sx={{
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'column',
                            border: '1px solid',
                            borderColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[6]
                                : theme.colors.gray[1],
                            borderRadius: 16,
                            overflow: 'hidden',
                            maxWidth: 500,
                          }}
                        >
                          {theme.colorScheme === 'dark' ? (
                            <NextImage
                              src={genesisPreviewImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          ) : (
                            <NextImage
                              src={genesisPreviewLightImage}
                              alt='Genssi preview'
                              aria-label='Genesis preview'
                              // layout='fill'
                              placeholder='blur'
                            />
                          )}
                        </Box>
                      </Carousel.Slide>
                    </Carousel>
                  </Box>
                </Box>
              </Grid.Col>
              <Grid.Col span={12} md={6}>
                <Timeline bulletSize={30} pt={12}>
                  {/* If you do not pass bullet prop, default bullet will be rendered */}
                  <Timeline.Item
                    title='The Idea'
                    bullet={
                      <ThemeIcon
                        size={26}
                        variant='gradient'
                        gradient={{ from: 'lime', to: 'green' }}
                        radius='xl'
                      >
                        <IconChecks size={16} />
                      </ThemeIcon>
                    }
                  >
                    <Text color='dimmed' size='sm'>
                      The idea of developing Genesis POS, came from the need of
                      a point of sale software that is capable of synchronizing
                      data between multiple nodes in an environment where
                      internet connection is not reliable.
                    </Text>
                  </Timeline.Item>

                  {/* You can use any react node as bullet, e.g. Avatar, ThemeIcon or any svg icon */}
                  <Timeline.Item
                    title='Deciding the path'
                    bullet={
                      <ThemeIcon
                        size={26}
                        variant='gradient'
                        gradient={{ from: 'lime', to: 'green' }}
                        radius='xl'
                      >
                        <IconChecks size={16} />
                      </ThemeIcon>
                    }
                  >
                    <Text color='dimmed' size='sm'>
                      In order to develop such a complex software, we had to
                      discover possible ways to achieve seamless flow of data
                      and resolve conflicts as soon as they occur.
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title='Development phase (Current)'
                    bullet={
                      <ThemeIcon
                        size={26}
                        variant='gradient'
                        gradient={{ from: 'indigo', to: 'teal' }}
                        radius='xl'
                      >
                        <IconCode size={16} />
                      </ThemeIcon>
                    }
                    lineVariant='dashed'
                  >
                    <Text color='dimmed' size='sm'>
                      The development for this software started back 2022, first
                      we had to desgin a software architecture to support the
                      heavy data analysis we are willing to perform. Therefore,
                      we developed 3 main modules: the server, the clint and the
                      synchronizer. Each module is responsible for certain
                      functionality and is maintained seperately.
                    </Text>
                  </Timeline.Item>

                  <Timeline.Item
                    title='Optimization &amp; Compatibility'
                    lineVariant='dashed'
                    bullet={<IconSettings size={16} />}
                  >
                    <Text color='dimmed' size='sm'>
                      Our goal at AuresX, is to provide a software that is
                      capable of running on different platforms and operating
                      systems, we heavily rely on ElectronJS and modern
                      technologies to make this possible.
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='Release &amp; Distribution'
                    bullet={<IconRocket size={16} />}
                    lineVariant='dashed'
                  >
                    <Text color='dimmed' size='sm'>
                      We are constantly upgdating our ecosystem so that our
                      future releases are fully compatible with our
                      infratstructure. Genesis POS alpha release will be
                      available for everyone to try in June 2023.
                    </Text>
                  </Timeline.Item>
                  <Timeline.Item
                    title='Future Plans'
                    bullet={<IconStars size={16} />}
                  >
                    <Text color='dimmed' size='sm'>
                      We are planning to support Genesis POS with many other
                      solutions, such as the ability to expose your local store
                      to a national online market with as few intervention from
                      your side. Our goal is to allow small businesses to thrive
                      and market their goods in the most efficient way possible.
                    </Text>
                  </Timeline.Item>
                </Timeline>
              </Grid.Col>
            </Grid>
          </Paper>
        </Container>
      </PageLayout>
    </>
  )
}

export default Home

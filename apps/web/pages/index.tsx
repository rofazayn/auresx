import {
  Anchor,
  Box,
  Button,
  Container,
  Grid,
  Loader,
  Paper,
  Stack,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import { IconBuildingArch } from '@tabler/icons'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import PageLayout from '../components/_layouts/page-layout'
import auresHeroImage from '../public/images/illustrations/hero-image.svg'

const Home: NextPage = () => {
  const theme = useMantineTheme()
  const { colorScheme } = useMantineColorScheme()
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
        <Container
          size='xl'
          sx={{
            '@media (max-width: 992px)': {
              marginInline: 4,
              paddingInline: 4,
            },
          }}
        >
          <Grid gutter={32} grow>
            <Grid.Col span={12} md={5}>
              <Paper
                radius='lg'
                p='xl'
                sx={{
                  '@media (max-width: 768px)': {
                    paddingInline: 16,
                  },
                }}
              >
                <Stack spacing={16}>
                  <Box sx={{ maxWidth: '90%' }}>
                    <Image src={auresHeroImage} alt='AuresX Hero Image' />
                  </Box>
                  <Box pb={24}>
                    <Box mb={16}>
                      <Title
                        order={1}
                        sx={{
                          fontSize: 36,
                          '@media(max-width: 768px)': {
                            fontSize: 28,
                          },
                        }}
                      >
                        AuresX, bringing high-tier technology to the lofty
                        mountain peaks of the Aures region.
                      </Title>
                    </Box>
                    <Box mb={24}>
                      <Text color='dimmed' size='md'>
                        A software company that took the initiative to provide
                        innovative solutions to major digital challenges facing
                        vital sectors in Algeria 🇩🇿
                      </Text>
                    </Box>
                    <Box mb={8}>
                      <Link href='/register'>
                        <Button
                          size='lg'
                          variant='filled'
                          color='indigo'
                          rightIcon={<IconBuildingArch />}
                        >
                          Join our Endeavor
                        </Button>
                      </Link>
                    </Box>
                  </Box>

                  {/* <Divider variant='dashed' sx={{ maxWidth: 300 }} my={8} /> */}

                  {/* <Box>
                <Blockquote
                  cite='– Founder &amp; CEO of AuresX'
                  sx={(theme) => ({
                    opacity: 0.5,
                    maxWidth: 340,
                  })}
                  // icon={null}
                >
                  Algeria lacks many digital solutions to most of its vital
                  sectors, our goal at AuresX is to solve that problem in the
                  most innovative way and as fast as we possibly can.
                </Blockquote>
              </Box> */}
                </Stack>
              </Paper>
            </Grid.Col>
            <Grid.Col span={12} md={7} sx={{ overflow: 'visible' }}>
              <Paper
                radius='lg'
                p='xl'
                sx={(theme) => ({
                  height: '100%',
                  minHeight: 500,
                  // backgroundColor: theme.colors.teal[5],
                  // backgroundImage: theme.fn.gradient({
                  //   from: theme.colors.teal[5],
                  //   to: theme.colors.fluor[5],
                  //   deg: -135,
                  // }),
                })}
              >
                <Box
                  sx={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Title
                    align='center'
                    size={32}
                    weight='bold'
                    sx={{
                      lineHeight: 0.9,
                    }}
                    mb={32}
                  >
                    Coming
                    <br />
                    Soon
                  </Title>
                  <Loader size='lg' variant='dots' color='teal' />
                </Box>
              </Paper>
            </Grid.Col>
          </Grid>
        </Container>
        {/* <Container size='lg'>
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
            '@media (max-width: 768px)': {
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
      </Container> */}
      </PageLayout>
    </>
  )
}

export default Home

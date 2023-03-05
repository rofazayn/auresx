import {
  Blockquote,
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Image,
  Text,
  Title,
  useMantineColorScheme,
  useMantineTheme,
} from '@mantine/core'
import {
  IconBook,
  IconBox,
  IconBriefcase,
  IconBuildingMonument,
  IconBuildingStore,
  IconBuildingWarehouse,
  IconBusinessplan,
  IconFingerprint,
  IconMoon,
  IconNetwork,
  IconPyramid,
  IconRadar2,
  IconStars,
  IconWebhook,
} from '@tabler/icons'
import Autoplay from 'embla-carousel-autoplay'
import type { NextPage } from 'next'
import Head from 'next/head'

import Link from 'next/link'
import { useRef } from 'react'
import SolutionCard from '../components/solution-card'
import PageLayout from '../components/_layouts/page-layout'
import heroImage from '../public/images/illustrations/hero.svg'

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
            mb={96}
            sx={{
              paddingTop: 160,
              '@media(max-width: 768px)': {
                paddingTop: 112,
              },
            }}
          >
            <Grid align={'center'} gutter={40}>
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
                      mb={8}
                    >
                      Bringing high-tier technology to the lofty mountain peaks
                      of Algeria.
                    </Title>

                    <Text size='lg' mb={24} color='dimmed'>
                      We are a team of talents who took the initiative to
                      provide innovative solutions to major digital challenges
                      facing vital sectors in Algeria.{' '}
                      <Text component='span'>🇩🇿</Text>
                    </Text>

                    <Link href='/register'>
                      <Button
                        size='md'
                        // variant='outline'
                        color='indigo'
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
                        opacity: 0.7,
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
                  <Image
                    src={heroImage.src}
                    alt='AuresX inbound'
                    style={{
                      width: '100%',
                      height: '100%',
                      borderRadius: 12,
                      overflow: 'hidden',
                    }}
                  />
                </Box>
              </Grid.Col>
            </Grid>
          </Box>

          <Box mb={80}>
            <Title order={1} mb={8} sx={{ maxWidth: 400 }}>
              Strategic strides with purposeful planning:
            </Title>
            <Box mb={40}>
              <Divider
                variant='dashed'
                label={
                  <Text weight='500' size='md' color='dimmed'>
                    * Phase One: Infrastructural Projects
                  </Text>
                }
                mb={16}
              />
              <Grid gutter={24}>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Secure Data Exchange Platform'
                    icon={<IconWebhook size='20' />}
                    description='The reliable and modern platform for secure data exchange across government agencies and citizens in Algeria.'
                    tags={['Atakor', 'WiP', '2026']}
                  />
                </Grid.Col>

                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Digital Government'
                    icon={<IconBuildingMonument size='20' />}
                    description="Transforming Algeria's public services with e-government: Improving access, efficiency, and transparency for citizens and businesses."
                    tags={['Hokoma', 'WiP', '2026']}
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Distributed Ledger Technology'
                    icon={<IconBox size='20' />}
                    description='Enhancing the security, integrity, and transparency of e-Hokoma services and data exchange on the Atakor platform.'
                    tags={['Hoggar', 'WiP', '2026']}
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Digital Identity'
                    icon={<IconFingerprint size='20' />}
                    description='Digital identity is your virtual fingerprint, providing a secure and convenient way to access online services with confidence.'
                    tags={['Chkon: e-ID', 'WiP', '2026']}
                  />
                </Grid.Col>
              </Grid>
            </Box>
            <Box mb={40}>
              <Divider
                variant='dashed'
                label={
                  <Text weight='500' size='md' color='dimmed'>
                    * Phase Two: Digitalizing Core Essentials
                  </Text>
                }
                mb={16}
              />
              <Grid gutter={24}>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Electronic Taxation'
                    icon={<IconPyramid size='20' />}
                    description='A secure platform that helps to increase tax compliance and reduce tax evasion, benefiting both taxpayers and the government.'
                    tags={['e-Dariba', 'Coming up', '2028']}
                    tagsColor='indigo'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Electronic Banking'
                    icon={<IconBusinessplan size='20' />}
                    description='It enables individuals and businesses to manage their banking needs online. It provides a convenient and secure way to access bank accounts, transfer funds and pay bills.'
                    tags={['e-Sordan', 'Coming up', '2028']}
                    tagsColor='indigo'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Electronic Business Registration'
                    icon={<IconBuildingWarehouse size='20' />}
                    description='Provides a simple and efficient way for businesses to complete registration and filing requirements, such as business licenses, permits, and tax registrations.'
                    tags={['e-Bezness', 'Coming up', '2028']}
                    tagsColor='indigo'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Electronic Commerce'
                    icon={<IconBuildingStore size='20' />}
                    description='Businesses can easily connect with suppliers, customers, and government agencies, streamlining the e-commerce process and increasing efficiency.'
                    tags={['LEKWANA', 'Coming up', '2028']}
                    tagsColor='indigo'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Health Records &amp; Services'
                    icon={<IconMoon size='20' />}
                    description='A platform that enables individuals and healthcare providers to access and exchange health information electronically.'
                    tags={['Lafya', 'Coming up', '2028']}
                    tagsColor='indigo'
                  />
                </Grid.Col>
              </Grid>
            </Box>

            <Box mb={40}>
              <Divider
                variant='dashed'
                label={
                  <Text weight='500' size='md' color='dimmed'>
                    * Phase Three: Innovative Solutions for Public Adoption
                  </Text>
                }
                mb={16}
              />
              <Grid gutter={24}>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Education and Research'
                    icon={<IconBook size='20' />}
                    description='A digital space that enables individuals to access and learn educational content online. It provides a flexible and accessible way for learners to access courses,lectures, and resources from anywhere, anytime.'
                    tags={['Tighri', 'Vision', '2030']}
                    tagsColor='pink'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='Freelance Work'
                    icon={<IconBriefcase size='20' />}
                    description='An online platform that connects freelance workers with businesses and individuals seeking their services. It provides a streamlined and secure way for freelancers to showcase their skills and find new clients.'
                    tags={['Teftoufa', 'Vision', '2030']}
                    tagsColor='pink'
                  />
                </Grid.Col>
                <Grid.Col span={12} md={4} sm={6} xs={12}>
                  <SolutionCard
                    title='And More and More...'
                    icon={<IconStars size='20' />}
                    description='At our company, we are committed to continuously developing and expanding our ecosystem with new and innovative solutions that meet the needs of our users. We believe that collaboration is key to achieving this goal, and we welcome your ideas and input to help shape the future of our ecosystem.'
                    tags={['Ideas', 'Third-parties', '2033']}
                    tagsColor='pink'
                  />
                </Grid.Col>
              </Grid>
            </Box>
          </Box>

          {/* <GenesisPreviewCard /> */}
        </Container>
      </PageLayout>
    </>
  )
}

export default Home

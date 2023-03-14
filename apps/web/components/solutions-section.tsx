import {
  Box,
  Center,
  Divider,
  Grid,
  MediaQuery,
  SegmentedControl,
  Text,
  Title,
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
  IconPyramid,
  IconStars,
  IconTriangles,
  IconWebhook,
} from '@tabler/icons'
import { useState } from 'react'
import SolutionCard from './solution-card'

const SolutionsSection = () => {
  const theme = useMantineTheme()
  const [segment, setSegment] = useState<string>('phase-01')
  let segmentsData: any[] = [
    {
      label: (
        <Center>
          {/* <IconUser size={20} /> */}
          <Box sx={{ marginInlineStart: 10 }}>Phase I</Box>
        </Center>
      ),
      value: 'phase-01',
    },
    {
      label: (
        <Center>
          {/* <IconPalette size={20} /> */}
          <Box sx={{ marginInlineStart: 10 }}>Phase II</Box>
        </Center>
      ),
      value: 'phase-02',
    },
    {
      label: (
        <Center>
          {/* < size={20} /> */}
          <Box sx={{ marginInlineStart: 10 }}>Phase III</Box>
        </Center>
      ),
      value: 'phase-03',
    },
  ]
  return (
    <>
      <Box mb={80}>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: '',
          }}
          mb={16}
        >
          <Grid gutter={16} align='end'>
            <Grid.Col sm={6}>
              <Title order={1}>
                Making purposeful plans to achieve strategic goals.
              </Title>
            </Grid.Col>
            <Grid.Col sm={6}>
              <Text color='dimmed'>
                AuresX&apos;s development process for digital solutions consists
                of three phases: requirement gathering, design and development,
                and testing and deployment.
              </Text>
            </Grid.Col>
          </Grid>
        </Box>
        <Box mb={40}>
          <>
            <Divider
              variant='dashed'
              mb={16}
              mt={32}
              label={'Phase One'}
              labelPosition='right'
            />
            <Grid gutter={24}>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Secure Data Exchange Platform'
                  icon={<IconWebhook size='20' />}
                  description='The reliable and modern platform for secure data exchange across government agencies and citizens in Algeria.'
                  tags={['Atakor', 'WiP', '2026']}
                />
              </Grid.Col>

              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Digital Government'
                  icon={<IconBuildingMonument size='20' />}
                  description="Transforming Algeria's public services with e-government: Improving access, efficiency, and transparency for citizens and businesses."
                  tags={['Hokoma', 'WiP', '2026']}
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Distributed Ledger Technology'
                  icon={<IconBox size='20' />}
                  description='Enhancing the security, integrity, and transparency of e-Hokoma services and data exchange on the Atakor platform.'
                  tags={['Hoggar', 'WiP', '2026']}
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Digital Identity'
                  icon={<IconFingerprint size='20' />}
                  description='Digital identity is your virtual fingerprint, providing a secure and convenient way to access online services with confidence.'
                  tags={['Chkon: e-ID', 'WiP', '2026']}
                />
              </Grid.Col>
            </Grid>
          </>

          <>
            <Divider
              variant='dashed'
              mb={16}
              mt={32}
              label={'Phase Two'}
              labelPosition='right'
            />

            <Grid gutter={24}>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Electronic Taxation'
                  icon={<IconPyramid size='20' />}
                  description='A secure platform that helps to increase tax compliance and reduce tax evasion, benefiting both taxpayers and the government.'
                  tags={['e-Dariba', 'Coming up', '2028']}
                  tagsColor='indigo'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Electronic Banking'
                  icon={<IconBusinessplan size='20' />}
                  description='It enables individuals and businesses to manage their banking needs online. It provides a convenient and secure way to access bank accounts, transfer funds and pay bills.'
                  tags={['e-Sordan', 'Coming up', '2028']}
                  tagsColor='indigo'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Electronic Business Registration'
                  icon={<IconBuildingWarehouse size='20' />}
                  description='Provides a simple and efficient way for businesses to complete registration and filing requirements, such as business licenses, permits, and tax registrations.'
                  tags={['e-Bezness', 'Coming up', '2028']}
                  tagsColor='indigo'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Electronic Commerce'
                  icon={<IconBuildingStore size='20' />}
                  description='Businesses can easily connect with suppliers, customers, and government agencies, streamlining the e-commerce process and increasing efficiency.'
                  tags={['LEKWANA', 'Coming up', '2028']}
                  tagsColor='indigo'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Health Records &amp; Services'
                  icon={<IconMoon size='20' />}
                  description='A platform that enables individuals and healthcare providers to access and exchange health information electronically.'
                  tags={['Lafya', 'Coming up', '2028']}
                  tagsColor='indigo'
                />
              </Grid.Col>
            </Grid>
          </>

          <>
            <Divider
              variant='dashed'
              mb={16}
              mt={32}
              label={'Phase Three'}
              labelPosition='right'
            />

            <Grid gutter={24} mb={24}>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='PoS and Business Management'
                  icon={<IconTriangles size='20' />}
                  description='A user-friendly point of sale software that streamlines business operations. Its key benefit is its ability to synchronize data when an internet connection is available, ensuring that your data is always up-to-date and accessible.'
                  tags={['Gedged', 'Vision', '2030']}
                  tagsColor='pink'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Education and Research'
                  icon={<IconBook size='20' />}
                  description='A digital space that enables individuals to access and learn educational content online. It provides a flexible and accessible way for learners to access courses,lectures, and resources from anywhere, anytime.'
                  tags={['Tighri', 'Vision', '2030']}
                  tagsColor='pink'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='Freelance Work'
                  icon={<IconBriefcase size='20' />}
                  description='An online platform that connects freelance workers with businesses and individuals seeking their services. It provides a streamlined and secure way for freelancers to showcase their skills and find new clients.'
                  tags={['Teftoufa', 'Vision', '2030']}
                  tagsColor='pink'
                />
              </Grid.Col>
              <Grid.Col span={12} md={6} sm={6} xs={12}>
                <SolutionCard
                  title='And More and More...'
                  icon={<IconStars size='20' />}
                  description='At our company, we are committed to continuously developing and expanding our ecosystem with new and innovative solutions that meet the needs of our users. We believe that collaboration is key to achieving this goal.'
                  tags={['Ideas', 'Third-parties', '2033']}
                  tagsColor='pink'
                />
              </Grid.Col>
            </Grid>
          </>
        </Box>
      </Box>
    </>
  )
}

export default SolutionsSection

import { Box, Text, useMantineTheme } from '@mantine/core'
import { IconRocket } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../../components/page-header'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import servicesImage from '../../public/images/illustrations/dashboard-services.svg'

const ServicesDashboard: NextPage = () => {
  const theme = useMantineTheme()

  return (
    <>
      <Head>
        <title>AuresX - Services</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Products & Services' icon={<IconRocket />} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            pt={32}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ maxWidth: 320 }}>
              <Image src={servicesImage} alt='Rocket Illustration' />
            </Box>

            <Text weight='500' size='xl' mb={8}>
              Coming Soon
            </Text>
            <Text color='dimmed' sx={{ maxWidth: 360 }} align='center'>
              Our products and services are still under development, we&apos;ll
              notify you by sending you an email once they are available.
            </Text>
          </Box>
          {/* <Box></Box> */}
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ServicesDashboard

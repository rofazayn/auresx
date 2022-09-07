import { Box, Text, useMantineTheme } from '@mantine/core'
import { IconHome } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../../components/page-header'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import dashboardHomeIllustation from '../../public/images/illustrations/dashboard-home.svg'

const Dashboard: NextPage = () => {
  const theme = useMantineTheme()

  return (
    <>
      <Head>
        <title>AuresX - Dashboard</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Dashboard Home' icon={<IconHome />} />
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
              <Image src={dashboardHomeIllustation} alt='Rocket Illustration' />
            </Box>

            <Text weight='500' size='xl' mb={8}>
              Coming Soon
            </Text>
            <Text color='dimmed' sx={{ maxWidth: 360 }} align='center'>
              Welcome to your dashboard&apos;s homepage, you will see updates
              and news from us once we start launching our products.
            </Text>
          </Box>
          {/* <Box></Box> */}
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Dashboard

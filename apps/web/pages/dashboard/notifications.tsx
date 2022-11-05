import { Box, Text, useMantineTheme } from '@mantine/core'
import { IconNotification } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../../components/page-header'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import dashboardNotificationsIllustration from '../../public/images/illustrations/dashboard-notifications.svg'

const Dashboard: NextPage = () => {
  const theme = useMantineTheme()

  return (
    <>
      <Head>
        <title>AuresX - Notifications</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Notifications' icon={<IconNotification />} />
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
              <Image
                src={dashboardNotificationsIllustration}
                alt='Rocket Illustration'
              />
            </Box>

            <Text weight='500' size='xl' mb={8}>
              Notifications
            </Text>
            <Text color='dimmed' sx={{ maxWidth: 360 }} align='center'>
              There aren&apos;t any unseen notifications at the moment, we will
              let you know by showing you an indicator on your notifications
              button whenever you receive any.
            </Text>
          </Box>
          {/* <Box></Box> */}
        </Box>
      </DashboardLayout>
    </>
  )
}

export default Dashboard

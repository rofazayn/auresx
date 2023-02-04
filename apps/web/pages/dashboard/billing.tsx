import { Box, Text, Title } from '@mantine/core'
import { IconReceipt2 } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../../components/page-header'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import billingIllustration from '../../public/images/illustrations/dashboard-billing.svg'

const BillingDashboard: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Billing</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Payments & Billing' icon={<IconReceipt2 />} />
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
              <Image src={billingIllustration} alt='Rocket Illustration' />
            </Box>

            <Title order={5} mb={8} weight='600'>
              Payment &amp; Billing
            </Title>
            <Text
              color='dimmed'
              size='sm'
              sx={{ maxWidth: 360 }}
              align='center'
            >
              Once you add balance to your account or purchase a service from
              us, we will show you detailed billing reports.
            </Text>
          </Box>
          {/* <Box></Box> */}
        </Box>
      </DashboardLayout>
    </>
  )
}

export default BillingDashboard

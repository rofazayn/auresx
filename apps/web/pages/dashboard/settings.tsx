import {
  ActionIcon,
  Box,
  Button,
  Center,
  Grid,
  MediaQuery,
  SegmentedControl,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import {
  IconEdit,
  IconEye,
  IconGift,
  IconHome,
  IconPalette,
  IconSettings,
  IconUser,
} from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import { useContext, useEffect, useState } from 'react'
import CustomizationSettings from '../../components/customization-settings'
import PageHeader from '../../components/page-header'
import ReferralSettings from '../../components/referral-settings'
import SettingsCard from '../../components/settings-card'
import UserSettings from '../../components/user-settings'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import { AuthContext } from '../../context/auth-context'

const DashboardSettings: NextPage = () => {
  const theme = useMantineTheme()
  const [segment, setSegment] = useState<string>('user')
  let segmentsData: any[] = [
    {
      label: (
        <Center>
          <IconUser size={20} />
          <Box ml={10}>User Settings</Box>
        </Center>
      ),
      value: 'user',
    },
    {
      label: (
        <Center>
          <IconPalette size={20} />
          <Box ml={10}>Customization</Box>
        </Center>
      ),
      value: 'customization',
    },
    {
      label: (
        <Center>
          <IconGift size={20} />
          <Box ml={10}>Referral Program</Box>
        </Center>
      ),
      value: 'referral',
    },
  ]

  return (
    <>
      <Head>
        <title>AuresX - Settings</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Account Settings' icon={<IconSettings />} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Box mb={24}>
            <MediaQuery smallerThan={'sm'} styles={{ display: 'none' }}>
              <SegmentedControl
                value={segment}
                onChange={setSegment}
                color='indigo'
                size='md'
                fullWidth
                radius='md'
                data={segmentsData}
              />
            </MediaQuery>
            <MediaQuery largerThan={'sm'} styles={{ display: 'none' }}>
              <SegmentedControl
                value={segment}
                onChange={setSegment}
                color='indigo'
                size='md'
                fullWidth
                orientation='vertical'
                radius='md'
                data={segmentsData}
              />
            </MediaQuery>
          </Box>

          {segment === 'user' && <UserSettings />}
          {segment === 'customization' && <CustomizationSettings />}
          {segment === 'referral' && <ReferralSettings />}
          {/* cards */}
        </Box>
      </DashboardLayout>
    </>
  )
}

export default DashboardSettings

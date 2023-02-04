import {
  Anchor,
  Avatar,
  Box,
  Divider,
  Group,
  Paper,
  Text,
  Tooltip,
  useMantineTheme,
} from '@mantine/core'
import {
  IconAlertTriangle,
  IconCircleCheck,
  IconClipboardText,
  IconDeviceDesktop,
  IconHeartHandshake,
  IconLocation,
  IconMail,
  IconPhone,
  IconSettings,
  IconUser,
  IconUserCircle,
} from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import NextLink from 'next/link'
import { useContext } from 'react'
import PageHeader from '../../components/page-header'
import DashboardLayout from '../../components/_layouts/dashboard-layout'
import { AuthContext } from '../../context/auth-context'

const DashboardProfile: NextPage = () => {
  const theme = useMantineTheme()
  const { currentUser } = useContext(AuthContext)
  return (
    <>
      <Head>
        <title>AuresX - Profile</title>
        <meta
          name='description'
          content='AuresX is a software company that took the initiative to provide innovative solutions to major digital challenges facing vital sectors in Algeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='User Profile' icon={<IconUserCircle />} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <Text>
            These are your account&apos;s profile informations,
            <br />
            If you wish to change anything, go to your{' '}
            <NextLink href='/dashboard/settings' passHref>
              <Anchor underline>
                <Box
                  sx={{
                    display: 'inline-flex',
                    transform: 'translateY(3px)',
                    alignItems: 'center',
                    gap: 4,
                  }}
                >
                  <Text span weight='500'>
                    Settings
                  </Text>
                  <IconSettings size={16} />
                </Box>
              </Anchor>
            </NextLink>
          </Text>
          <Paper
            radius='md'
            sx={{
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[7]
                  : theme.colors.gray[0],
              // paddingInline: 24,
              overflow: 'hidden',
            }}
            mt={24}
          >
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconUser color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    User Avatar
                  </Text>
                </Group>
              </Box>
              <Box>
                <Avatar
                  size={64}
                  radius='lg'
                  gradient={{
                    from: theme.colors.indigo[4],
                    to: theme.colors.indigo[6],
                    deg: 45,
                  }}
                  variant='gradient'
                >
                  {currentUser?.name.split(' ')[0][0]}
                </Avatar>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconClipboardText color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Full Name
                  </Text>
                </Group>
              </Box>
              <Box>
                <Text weight='500'>{currentUser?.name}</Text>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconMail color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Email Address
                  </Text>
                </Group>
              </Box>
              <Box>
                <Tooltip
                  position='top'
                  label={
                    currentUser?.emailConfirmed
                      ? 'Confirmed Email - Primary'
                      : 'Email Not Verified'
                  }
                  color={currentUser?.emailConfirmed ? 'green' : 'orange'}
                  withArrow
                  arrowSize={10}
                  sx={{ fontWeight: 500 }}
                  // mb={40}
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    {currentUser?.emailConfirmed ? (
                      <IconCircleCheck color='gray' stroke={2} />
                    ) : (
                      <IconAlertTriangle color='orange' stroke={2} />
                    )}
                    <Text weight='500' sx={{ cursor: 'pointer' }}>
                      {currentUser?.email}
                    </Text>
                  </Box>
                </Tooltip>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconPhone color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Phone Number
                  </Text>
                </Group>
              </Box>
              <Box>
                <Text weight='500'>
                  {currentUser?.phoneNumber || 'Not set'}
                </Text>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconLocation color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Country
                  </Text>
                </Group>
              </Box>
              <Box>
                <Text weight='500'>{`${
                  currentUser?.country || 'Unspecified'
                }`}</Text>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconDeviceDesktop color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Profession
                  </Text>
                </Group>
              </Box>
              <Box>
                <Text weight='500'>{`${
                  currentUser?.job || 'Unspecified'
                }`}</Text>
              </Box>
            </Box>
            <Divider variant='dashed' />
            <Box
              py={24}
              sx={{
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'space-between',
                gap: 16,
                '@media (max-width: 520px)': {
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                },
              }}
            >
              <Box>
                <Group spacing={8}>
                  <IconHeartHandshake color='gray' />
                  <Text
                    weight='500'
                    color='dimmed'
                    size='sm'
                    sx={{ minWidth: 140 }}
                  >
                    Registration Date
                  </Text>
                </Group>
              </Box>
              <Box>
                <Text weight='500'>
                  {new Date(currentUser?.createdAt).toDateString()}
                </Text>
              </Box>
            </Box>
          </Paper>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default DashboardProfile

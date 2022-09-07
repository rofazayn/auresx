import { Alert, Box, Button, Divider, Group, Text } from '@mantine/core'
import { IconFileAlert, IconRefreshAlert, IconSend } from '@tabler/icons'
import { useContext } from 'react'
import { AuthContext } from '../context/auth-context'
import {
  useProfileQuery,
  useSendEmailConfirmationMutation,
} from '../generated/graphql'

const EmailAlert = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const [sendEmailConfirmationMutation, { loading: sendLoading }] =
    useSendEmailConfirmationMutation()
  const profileQuery = useProfileQuery()

  async function handleResend() {
    await sendEmailConfirmationMutation()
  }

  async function handleCheck() {
    const res = await profileQuery.refetch()

    if (res.data?.profile) {
      setCurrentUser(res.data.profile)
    }
  }

  if (currentUser && !currentUser.emailConfirmed) {
    return (
      <>
        <Divider variant='dashed' mt={32} mb={24} sx={{ opacity: 0.4 }} />
        <Alert
          variant='outline'
          color='orange'
          title='Confirm your Email'
          icon={null}
          // icon={<IconFileAlert size={24} />}
        >
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              gap: 16,
              paddingBottom: 4,
              '@media (max-width: 768px)': {
                flexDirection: 'column',
                alignItems: 'flex-start',
              },
            }}
          >
            <Box
              sx={{
                maxWidth: 320,
                '@media (max-width: 768px)': { marginBottom: 16 },
              }}
            >
              <Text>
                Please confirm your email by visting the inbox with the address
                of{' '}
                <Text span weight='bold'>
                  {currentUser.email}
                </Text>
              </Text>
            </Box>
            <Group spacing={8}>
              <Button
                variant='subtle'
                color='gray'
                rightIcon={<IconRefreshAlert size='18' />}
                onClick={handleCheck}
                loading={profileQuery.loading}
              >
                Check
              </Button>
              <Button
                variant='light'
                color='orange'
                rightIcon={<IconSend size='18' />}
                onClick={handleResend}
                loading={sendLoading}
              >
                Resend
              </Button>
            </Group>
          </Box>
        </Alert>
      </>
    )
  } else return null
}

export default EmailAlert

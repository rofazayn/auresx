import {
  Box,
  Button,
  Grid,
  Radio,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { IconCheck, IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons'
import { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../context/auth-context'
import { useUpdateOneUserMutation } from '../generated/graphql'

const ReferralSettings = () => {
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const { toggleColorScheme } = useMantineColorScheme()
  const [selectedColorScheme, setSelectedColorScheme] = useState<any>(
    currentUser?.preferredTheme
  )
  const [userUpdateLoading, setUserUpdateLoading] = useState<boolean>(false)

  // useEffect(() => {
  //   if (selectedColorScheme !== 'system') {
  //     toggleColorScheme(selectedColorScheme)
  //   }
  // }, [selectedColorScheme])

  async function handleChangePreferredTheme(e: any) {
    e.preventDefault()
    if (!currentUser) return

    setUserUpdateLoading(true)

    try {
      const updatedUser = await updateOneUserMutation({
        variables: {
          data: {
            preferredTheme: { set: selectedColorScheme },
          },
          where: {
            id: currentUser.id,
          },
        },
      })

      if (updatedUser.data?.updateOneUser) {
        setCurrentUser({
          currentUser,
          ...updatedUser.data.updateOneUser,
        })
      }

      if (selectedColorScheme !== 'system') {
        toggleColorScheme(selectedColorScheme)
      }

      setUserUpdateLoading(false)
    } catch (error) {}

    setUserUpdateLoading(false)
  }

  const [updateOneUserMutation] = useUpdateOneUserMutation()

  return (
    <Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          gap: 16,
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        }}
        mb={24}
      >
        <Box>
          <Text size='md' weight='500' mb={4}>
            Referral Program
          </Text>
          <Text size='sm' color='dimmed' sx={{ maxWidth: 420 }}>
            From this panel, you will be able to invite your friends to join
            AuresX and get bonuses from us{' '}
            <Text span color='orange' weight='500'>
              (coming soon)
            </Text>
          </Text>
        </Box>
      </Box>

      {/* <Grid gutter={12}>
        <Grid.Col span={12} sm={4}>
          <Box
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.darken(theme.colors.dark[7], 0.25)
                  : theme.colors.gray[1],
              display: 'flex',
              // flexDirection: 'column',
              padding: 12,
              paddingBottom: 24,
              gap: 16,
              cursor: 'pointer',
            })}
            onClick={() => setSelectedColorScheme('light')}
          >
            <Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                mb={8}
              >
                <IconSun size='24' />
                <Text weight='500'>Light Theme</Text>
              </Box>
              <Text size='sm' color='dimmed'>
                For those who can handle the light and eye strain, go with light
                theme.
              </Text>
            </Box>
            <Box>
              <Radio
                checked={selectedColorScheme === 'light'}
                color='indigo'
                size='md'
                value={'light'}
                onChange={() => {}}
              />
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <Box
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.darken(theme.colors.dark[7], 0.25)
                  : theme.colors.gray[1],
              display: 'flex',
              // flexDirection: 'column',
              padding: 12,
              paddingBottom: 24,
              gap: 16,
              cursor: 'pointer',
            })}
            onClick={() => setSelectedColorScheme('dark')}
          >
            <Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                mb={8}
              >
                <IconMoon size='24' />
                <Text weight='500'>Dark Theme</Text>
              </Box>
              <Text size='sm' color='dimmed'>
                If you would like to reduce strain on your eyes, choose dark
                mode.
              </Text>
            </Box>
            <Box>
              <Radio
                checked={selectedColorScheme === 'dark'}
                color='indigo'
                size='md'
                value={'dark'}
                onChange={() => {}}
              />
            </Box>
          </Box>
        </Grid.Col>
        <Grid.Col span={12} sm={4}>
          <Box
            sx={(theme) => ({
              borderRadius: theme.radius.md,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.fn.darken(theme.colors.dark[7], 0.25)
                  : theme.colors.gray[1],
              display: 'flex',
              // flexDirection: 'column',
              padding: 12,
              paddingBottom: 24,
              gap: 16,
              cursor: 'pointer',
            })}
            onClick={() => setSelectedColorScheme('system')}
          >
            <Box>
              <Box
                sx={{ display: 'flex', alignItems: 'center', gap: 8 }}
                mb={8}
              >
                <IconDeviceDesktop size='24' />
                <Text weight='500'>System (Default)</Text>
              </Box>
              <Text size='sm' color='dimmed'>
                Not sure which theme to choose? select this option and let us
                decide.
              </Text>
            </Box>
            <Box>
              <Radio
                checked={selectedColorScheme === 'system'}
                color='indigo'
                size='md'
                value={'system'}
                onChange={() => {}}
              />
            </Box>
          </Box>
        </Grid.Col>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 16,
          justifyContent: 'space-between',
          width: '100%',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
          },
        }}
        mt={24}
      >
        <Box sx={{ maxWidth: 520 }}>
          <Text weight='500' mb={4}>
            Save your changes
          </Text>
          <Text color='dimmed'>
            Don&apos;t forget to verify and save your settings after editing
            them.
          </Text>
        </Box>
        <Box
          sx={{
            // flexGrow: 1,
            '@media (max-width: 768px)': {
              width: '100%',
              flexGrow: 1,
            },
          }}
        >
          <Button
            rightIcon={<IconCheck size={24} />}
            variant='filled'
            color='indigo'
            size='md'
            loading={userUpdateLoading}
            sx={{
              '@media (max-width: 768px)': {
                width: '100%',
              },
            }}
            onClick={handleChangePreferredTheme}
          >
            Save Changes
          </Button>
        </Box>
      </Box> */}
    </Box>
  )
}

export default ReferralSettings

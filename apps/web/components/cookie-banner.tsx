import {
  Anchor,
  Box,
  Button,
  Container,
  Divider,
  Group,
  Paper,
  Stack,
  Text,
  Title,
} from '@mantine/core'
import { useScrollLock } from '@mantine/hooks'
import { IconCake, IconCheck, IconCookie, IconMoon } from '@tabler/icons'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CookieBanner = () => {
  const [cookiesConsent, setCookiesConsent] = useState<string | null>('yes')

  useEffect(() => {
    const consent = localStorage.getItem('cookies-accepted')
    setCookiesConsent(consent)
  }, [])

  const [_scrollLocked, setScrollLocked] = useScrollLock()

  useEffect(() => {
    if (cookiesConsent !== 'yes') {
      setScrollLocked(true)
    } else {
      setScrollLocked(false)
    }
  }, [cookiesConsent, setScrollLocked])

  return cookiesConsent !== 'yes' ? (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        bottom: 0,
        top: 0,
        left: 0,
        right: 0,
        marginInline: 'auto',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.rgba(theme.colors.dark[9], 0.5)
            : theme.fn.rgba(theme.colors.dark[5], 0.5),
        zIndex: 999,
        backdropFilter: 'blur(5px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      })}
    >
      <Container size='xs' sx={{ maxWidth: 440 }}>
        <Paper p='lg' radius='lg' sx={{ marginInline: 8 }}>
          <Group position='apart' spacing={2}>
            <Title order={6}>Cookie Consent</Title>
            <Text size='xs' weight='500' color='dimmed'>
              For your privacy, you have to accept our{' '}
              <Link href='/cookies'>
                <Anchor color='indigo' weight='bold' underline={true}>
                  Cookies Policy
                </Anchor>
              </Link>{' '}
              to proceed with using the website.
            </Text>

            <Box my={12} sx={{ width: '100%', opacity: 0.7 }}>
              <Divider variant='dashed' />
            </Box>

            <Group spacing={'xs'} sx={{ width: '100%' }}>
              <Button
                sx={{ width: '100%' }}
                size='sm'
                variant='light'
                color='indigo'
                onClick={() => {
                  localStorage.setItem('cookies-accepted', 'yes')
                  setCookiesConsent('yes')
                }}
                rightIcon={<IconCookie size='20' />}
              >
                Accept Necessary Ones
              </Button>
              <Button
                sx={{ width: '100%' }}
                size='sm'
                // variant='light'
                color='indigo'
                onClick={() => {
                  localStorage.setItem('cookies-accepted', 'yes')
                  setCookiesConsent('yes')
                }}
                rightIcon={<IconCake size='20' />}
              >
                Accept All Cookies
              </Button>
            </Group>
          </Group>
        </Paper>
      </Container>
    </Box>
  ) : null
}

export default CookieBanner

import {
  Anchor,
  Box,
  Button,
  Container,
  Group,
  Stack,
  Text,
} from '@mantine/core'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const CookieBanner = () => {
  const [cookiesConsent, setCookiesConsent] = useState<string | null>('yes')

  useEffect(() => {
    const consent = localStorage.getItem('cookies-accepted')
    setCookiesConsent(consent)
  }, [])

  return cookiesConsent !== 'yes' ? (
    <Box
      sx={(theme) => ({
        position: 'fixed',
        bottom: 0,
        insetInline: 0,
        marginInline: 'auto',
        minHeight: 48,
        paddingBlock: 16,
        width: '100%',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.gray[9]
            : theme.colors.gray[1],
        zIndex: 999,
      })}
    >
      <Container size='sm'>
        <Group position='apart'>
          <Text
            size='xs'
            weight='bold'
            inline={true}
            sx={(theme) => ({
              color:
                theme.colorScheme === 'dark'
                  ? theme.colors.gray[4]
                  : theme.colors.gray[6],
            })}
          >
            You have to accept our{' '}
            <Link href='/cookies'>
              <Anchor underline={true}>Cookies Policy</Anchor>
            </Link>{' '}
            to use this website, you also have the right to refuse and leave.
          </Text>

          <Button
            size='sm'
            variant='light'
            color={'gray'}
            sx={{ width: '100%' }}
            onClick={() => {
              localStorage.setItem('cookies-accepted', 'yes')
              setCookiesConsent('yes')
            }}
          >
            Accept &amp; Continue
          </Button>
        </Group>
      </Container>
    </Box>
  ) : null
}

export default CookieBanner

import {
  Anchor,
  Box,
  Button,
  Checkbox,
  Grid,
  Stack,
  Text,
  TextInput,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { IconRadio } from '@tabler/icons'
import Link from 'next/link'

const Newsletter = () => {
  const theme = useMantineTheme()
  return (
    <Box
      mb={80}
      sx={{
        borderRadius: 16,
        width: '100%',
        minHeight: 168,
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        // padding: 40,
      }}
    >
      <Grid gutter={0}>
        <Grid.Col xs={12} sm={12} md={6}>
          <Box
            sx={{
              padding: 40,
              minHeight: '100%',
              width: '100%',
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.fluor[5]
                  : theme.colors.fluor[3],
              '@media (max-width: 992px)': {
                padding: '32px 16px',
              },
            }}
          >
            <Stack spacing={16}>
              <Title color='black'>
                AuresX Insider - Get Exclusive News and Updates on Our Journey
                to Building an Algerian Digital Community
              </Title>
              <Text color='black' size='lg'>
                Want to be the first to know about our latest updates and
                milestones at AuresX? Subscribe to AuresX Insider today! Our
                newsletter is your insider&apos;s guide to our journey of
                building a digital community in Algeria. We&apos;ll share
                exclusive news and updates on our product development, marketing
                strategy, and fundraising efforts, as well as insights and
                lessons learned from our team members and advisors.
              </Text>
            </Stack>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={6}>
          <Box
            sx={{
              width: '100%',
              minHeight: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: 40,
              backgroundColor:
                theme.colorScheme === 'dark'
                  ? theme.colors.dark[7]
                  : theme.colors.gray[0],
              '@media (max-width: 992px)': {
                padding: '32px 16px',
              },
            }}
          >
            <Stack
              spacing={16}
              mb={32}
              sx={{
                width: '100%',
              }}
            >
              <TextInput
                variant='filled'
                type='text'
                label='Full Name'
                placeholder='Enter your full name'
                description='What should we call you?'
                size='lg'
                name='name'
                // value={values.name}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.name && errors.name}
                required
              />
              <TextInput
                variant='filled'
                label='Email'
                placeholder='Enter your email'
                description='You can unsubscribe at anytime!'
                size='lg'
                name='email'
                type='email'
                // value={values.email}
                // onChange={handleChange}
                // onBlur={handleBlur}
                // error={touched.email && errors.email}
                required
              />
              <Checkbox
                required
                size='xl'
                sx={{ alignItems: 'center' }}
                // checked={agreedToTerms}
                // onChange={() => setAgreedToTerms(!agreedToTerms)}
                // disabled={true}
                label={
                  <Text size='sm' sx={{ maxWidth: 360 }}>
                    <b>I agree</b> to the{' '}
                    <Link href='/terms' passHref>
                      <Anchor
                        underline
                        weight='500'
                        color='dimmed'
                        sx={{ fontWeight: 'bold' }}
                      >
                        Terms of Use
                      </Anchor>
                    </Link>{' '}
                    and to the{' '}
                    <Link href='/privacy-policy' passHref>
                      <Anchor
                        underline
                        weight='500'
                        color='dimmed'
                        sx={{ fontWeight: 'bold' }}
                      >
                        Privacy Policy
                      </Anchor>
                    </Link>{' '}
                    provided by AuresX.
                  </Text>
                }
              />
            </Stack>
            <Button
              size='lg'
              variant='default'
              // color={theme.colorScheme === 'dark' ? 'gray' : 'indigo'}
              // color='teal'
              rightIcon={<IconRadio />}
              fullWidth
            >
              Subscribe to Newsletter
            </Button>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default Newsletter

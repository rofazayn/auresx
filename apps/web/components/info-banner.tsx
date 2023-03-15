import {
  Box,
  Divider,
  Grid,
  MediaQuery,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconBuildingBank, IconCoin, IconUsers } from '@tabler/icons'

const InfoBanner = () => {
  const theme = useMantineTheme()
  return (
    <Box
      mb={80}
      mt={0}
      sx={{
        borderRadius: 12,
        width: '100%',
        // minHeight: 168,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        display: 'flex',
        alignItems: 'center',
        padding: '20px',
      }}
    >
      <Grid gutter={24} sx={{ width: '100%' }}>
        <Grid.Col xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              minHeight: 80,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '@media (max-width: 992px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',

                '@media (max-width: 992px)': {
                  paddingBottom: 24,
                },
              }}
            >
              <Box sx={{ display: 'flex' }} mb={8}>
                <IconCoin
                  color={
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[5]
                      : theme.colors.gray[7]
                  }
                  size='28px'
                />
              </Box>

              <Text
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
                weight='bold'
              >
                Money Raised
              </Text>
              <Text
                // color={
                //   theme.colorScheme === 'dark'
                //     ? theme.colors.teal[4]
                //     : theme.colors.teal[5]
                // }
                color='dimmed'
                weight='bold'
                sx={{ fontFamily: 'monospace' }}
                size='lg'
              >
                0.00 DZD
              </Text>
            </Box>
            <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
              <Divider
                sx={{ opacity: 0.3 }}
                orientation='vertical'
                variant='dashed'
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
              />
            </MediaQuery>
            <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
              <Divider
                sx={{ opacity: 0.3 }}
                orientation='horizontal'
                variant='dashed'
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
              />
            </MediaQuery>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              minHeight: 80,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '@media (max-width: 992px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '@media (max-width: 992px)': {
                  paddingBottom: 24,
                },
              }}
            >
              <Box sx={{ display: 'flex' }} mb={8}>
                <IconBuildingBank
                  color={
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[5]
                      : theme.colors.gray[7]
                  }
                  size='28px'
                />
              </Box>

              <Text
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
                weight='bold'
              >
                Government Approval
              </Text>
              <Text
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.orange[4]
                    : theme.colors.orange[6]
                }
                weight='bold'
                sx={{ fontFamily: 'monospace' }}
                size='lg'
              >
                Awaiting Approval
              </Text>
            </Box>
            <MediaQuery smallerThan={'md'} styles={{ display: 'none' }}>
              <Divider
                sx={{ opacity: 0.3 }}
                orientation='vertical'
                variant='dashed'
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
              />
            </MediaQuery>
            <MediaQuery largerThan={'md'} styles={{ display: 'none' }}>
              <Divider
                sx={{ opacity: 0.3 }}
                orientation='horizontal'
                variant='dashed'
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
              />
            </MediaQuery>
          </Box>
        </Grid.Col>
        <Grid.Col xs={12} sm={12} md={4} lg={4}>
          <Box
            sx={{
              minHeight: 80,
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              '@media (max-width: 992px)': {
                flexDirection: 'column',
              },
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                '@media (max-width: 992px)': {
                  // paddingBottom: 24,
                },
              }}
            >
              <Box sx={{ display: 'flex' }} mb={8}>
                <IconUsers
                  color={
                    theme.colorScheme === 'dark'
                      ? theme.colors.gray[5]
                      : theme.colors.gray[7]
                  }
                  size='28px'
                />
              </Box>

              <Text
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.gray[5]
                    : theme.colors.gray[7]
                }
                weight='bold'
              >
                Team Size
              </Text>
              <Text
                color={
                  theme.colorScheme === 'dark'
                    ? theme.colors.teal[4]
                    : theme.colors.teal[5]
                }
                weight='bold'
                sx={{ fontFamily: 'monospace' }}
                size='lg'
              >
                1 Member(s)
              </Text>
            </Box>
          </Box>
        </Grid.Col>
      </Grid>
    </Box>
  )
}

export default InfoBanner

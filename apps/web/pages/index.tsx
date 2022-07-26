import {
  Blockquote,
  Container,
  Divider,
  Stack,
  Text,
  Timeline,
} from '@mantine/core'
import { NextLink } from '@mantine/next'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>AuresX - Let&apos;s Go!</title>
        <meta
          name='description'
          content='AuresX is a software company that took the initiative to provide innovative solutions to major digital challenges facing vital sectors in Algeria.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Container size='xs' px={'xl'}>
        <Stack spacing={30}>
          <Stack spacing={4}>
            <Text weight='bold' size='md'>
              # Briefing
            </Text>
            <Text color='dimmed'>
              AuresX is a software company that took the initiative to provide
              innovative solutions to major digital challenges facing vital
              sectors in Algeria.
            </Text>
          </Stack>
          <Blockquote
            cite='– Founder &amp; CEO of AuresX'
            sx={(theme) => ({
              padding: 0,
              fontSize: theme.fontSizes.md,
            })}
          >
            Algeria lacks many digital solutions to most of its vital sectors,
            our goal at AuresX is to solve that problem in the most innovative
            way and as fast as we possibly can.
          </Blockquote>
          <Divider variant='dotted' my={8} />
          <Stack spacing={4}>
            <Text weight='bold' size='md'>
              # Projects
            </Text>
            <Text color='dimmed'>
              Our main goal is to target the most vital sectors first such as
              business, commerce, banking, health and education. From there we
              will decide where to go.
            </Text>
          </Stack>
          <Timeline active={0} bulletSize={18} lineWidth={4} color={'cyan'}>
            <Timeline.Item title='Genesis'>
              <Text color='dimmed' size='sm'>
                A hybrid online/offline business management system for small to
                large businesses, it provides solution to most of the problems
                encountered by business owners and entrepreneurs.
              </Text>
              <Text size='xs' mt={4}>
                Planned launch: first quarter of 2023
              </Text>
            </Timeline.Item>
            <Timeline.Item title='Clientello'>
              <Text color='dimmed' size='sm'>
                An online service where individuals and business owners can
                publish their work and contribute to a national online market,
                it also provides a platform for e-commerce businesses where they
                can thrive.
              </Text>
              <Text size='xs' mt={4}>
                Planned launch: first quarter of 2024
              </Text>
            </Timeline.Item>
            <Timeline.Item title='HoggarX' lineVariant='dashed'>
              <Text color='dimmed' size='sm'>
                A national proof of authority (PoA) blockchain network to
                enhance and secure online transactions and exchange of assets of
                any kind.
              </Text>
              <Text size='xs' mt={4}>
                Planned launch: 2025
              </Text>
            </Timeline.Item>
            <Timeline.Item title='Other Projects'>
              <Text color='dimmed' size='sm'>
                Many and many other projects are being planned for AuresX, but
                for now our team will focus on the three main ones mentioned
                above.
              </Text>
              <Text size='xs' mt={4}>
                Planned launch: 2025 - Future
              </Text>
            </Timeline.Item>
          </Timeline>
          <Divider variant='dotted' my={8} />
          <Stack spacing={4}>
            <Text weight='bold' size='md'>
              # Endeavour
            </Text>
            <Text color='dimmed'>
              Our aim at AuresX is to convince brilliant minds and skillful
              individuals to join our endeavour, if you are interested or you
              need more information about the project, feel free to email us at{' '}
              <NextLink
                href='mailto:rofazayn@gmail.com'
                style={{ textDecoration: 'none' }}
                passHref
              >
                <Text
                  component='span'
                  color='cyan'
                  weight='bold'
                  sx={{ textDecoration: 'none' }}
                >
                  rofazayn@gmail.com
                </Text>
              </NextLink>
            </Text>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export default Home

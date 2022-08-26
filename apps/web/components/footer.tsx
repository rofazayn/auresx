import {
  ActionIcon,
  Anchor,
  Container,
  Divider,
  Group,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const Footer = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container
      size='xl'
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBlock: 40,
      }}
    >
      <Divider variant='dotted' mb={32} />
      <Group position='apart'>
        <Text size={'sm'} color='dimmed'>
          AuresX Algeria &copy; 2022
        </Text>

        <Group spacing={12}>
          <ActionIcon
            variant='subtle'
            size='sm'
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === 'dark' ? (
              <IconSun size={16} />
            ) : (
              <IconMoon size={16} />
            )}
          </ActionIcon>
          <Link href='/privacy-policy' passHref>
            <Anchor color='dimmed' size='sm'>
              Privacy Policy
            </Anchor>
          </Link>
          <Link href='/terms' passHref>
            <Anchor color='dimmed' size='sm'>
              Terms of Use
            </Anchor>
          </Link>
          <Link href='/cookies' passHref>
            <Anchor color='dimmed' size='sm'>
              Cookies
            </Anchor>
          </Link>
        </Group>
      </Group>
    </Container>
  )
}

export default Footer

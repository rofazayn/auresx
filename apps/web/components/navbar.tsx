import {
  ActionIcon,
  AspectRatio,
  Button,
  Container,
  Divider,
  Grid,
  Group,
  Image,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container size='xl' mb={32}>
      <Group position='apart'>
        <Link href='/' passHref>
          <AspectRatio
            ratio={1 / 1}
            sx={{
              width: 40,
              // paddingInlineStart: 0,
              cursor: 'pointer',
            }}
          >
            <Image
              src={'/images/logo.png'}
              alt='AuresX logo'
              aria-label='AuresX logo'
              sx={{
                display: colorScheme === 'dark' ? 'block' : 'none !important',
              }}
            />
            <Image
              src={'/images/logo-light.png'}
              alt='AuresX logo'
              aria-label='AuresX logo'
              sx={{
                display: colorScheme !== 'dark' ? 'block' : 'none !important',
              }}
            />
          </AspectRatio>
        </Link>

        <Group spacing={8}>
          <ActionIcon
            variant='subtle'
            size='lg'
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === 'dark' ? (
              <IconSun size={16} />
            ) : (
              <IconMoon size={16} />
            )}
          </ActionIcon>

          {/* <Button variant='subtle' color='gray'>
            Sign in
          </Button> */}
          <Link href='/register'>
            <Button variant='default' color='gray'>
              Join us
            </Button>
          </Link>
        </Group>
      </Group>
    </Container>
  )
}

export default Navbar

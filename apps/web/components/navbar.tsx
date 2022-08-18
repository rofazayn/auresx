import {
  ActionIcon,
  AspectRatio,
  Box,
  Button,
  Container,
  Group,
  Image,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container size='xl' mb={32} sx={{ paddingTop: 28 }}>
      <Group position='apart'>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Link href='/' passHref>
            <AspectRatio
              ratio={1 / 1}
              sx={{
                width: 44,
                // paddingInlineStart: 0,
                cursor: 'pointer',
                marginInlineEnd: 80,
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
        </Box>

        <Group spacing={16}>
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

          <Link href='/register'>
            <Button variant='light' color='teal' size='md'>
              Join us
            </Button>
          </Link>
        </Group>
      </Group>
    </Container>
  )
}

export default Navbar

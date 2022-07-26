import {
  ActionIcon,
  AspectRatio,
  Container,
  Divider,
  Grid,
  Image,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container size='xs' mb={32} px={'xl'}>
      <Grid align={'center'}>
        <Grid.Col
          span={4}
          sx={{
            display: 'flex',
            justifyContent: 'start',
          }}
        >
          <Link href='/' passHref>
            <AspectRatio
              ratio={1 / 1}
              sx={{
                width: 48,
                paddingInlineStart: -24,
                cursor: 'pointer',
              }}
            >
              <Image
                sx={(theme) => ({
                  borderRadius: theme.radius.xl,
                })}
                src={'/images/logo.png'}
                alt='AuresX logo'
                aria-label='AuresX logo'
              />
            </AspectRatio>
          </Link>
        </Grid.Col>

        <Grid.Col
          span={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text size={'sm'} weight='bold' color='dimmed'>
            Introduction
          </Text>
        </Grid.Col>

        <Grid.Col
          span={4}
          sx={{
            display: 'flex',
            justifyContent: 'end',
          }}
        >
          <ActionIcon
            variant='light'
            // color={'cyan'}
            size='lg'
            radius={'md'}
            onClick={() => toggleColorScheme()}
          >
            {colorScheme === 'dark' ? (
              <IconSun size={18} />
            ) : (
              <IconMoon size={18} />
            )}
          </ActionIcon>
        </Grid.Col>
      </Grid>
      <Divider mt={24} variant={'dotted'} />
    </Container>
  )
}

export default Navbar

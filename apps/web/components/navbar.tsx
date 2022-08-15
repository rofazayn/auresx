import {
  ActionIcon,
  AspectRatio,
  Container,
  Grid,
  Image,
  useMantineColorScheme,
} from '@mantine/core'
import { IconMoon, IconSun } from '@tabler/icons'
import Link from 'next/link'

const Navbar = () => {
  const { colorScheme, toggleColorScheme } = useMantineColorScheme()
  return (
    <Container size='lg' mb={32}>
      <Grid align={'center'}>
        <Grid.Col
          span={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-start',
          }}
        >
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
        </Grid.Col>

        {/* <Grid.Col
          span={4}
          sx={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <Text size={'sm'} weight='bold' color='dimmed'>
            Introduction
          </Text>
        </Grid.Col> */}

        <Grid.Col
          span={6}
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
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
              <IconSun size={16} />
            ) : (
              <IconMoon size={16} />
            )}
          </ActionIcon>
        </Grid.Col>
      </Grid>
      {/* <Divider mt={24} variant={'dotted'} /> */}
    </Container>
  )
}

export default Navbar

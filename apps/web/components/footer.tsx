import { Button, Container, Divider, Group, Text } from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'

const Footer = () => {
  const [_scroll, scrollTo] = useWindowScroll()
  return (
    <Container
      size='xs'
      px={'xl'}
      sx={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        paddingBlock: 32,
      }}
    >
      <Divider variant='dotted' mb={30} />
      <Group position='apart'>
        <Group spacing={8}>
          <Text size={'sm'} color={'dimmed'}>
            AuresX Algeria &copy; 2022
          </Text>
        </Group>
        <Group spacing={8}>
          <Group spacing={8}>
            <Button
              color={'fluor'}
              variant='light'
              onClick={() => scrollTo({ y: 0 })}
            >
              Back to top
            </Button>
          </Group>
        </Group>
      </Group>
    </Container>
  )
}

export default Footer

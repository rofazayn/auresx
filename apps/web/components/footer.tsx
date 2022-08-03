import {
  ActionIcon,
  Button,
  Container,
  Divider,
  Group,
  Text,
} from '@mantine/core'
import { useWindowScroll } from '@mantine/hooks'
import { IconChevronUp } from '@tabler/icons'

const Footer = () => {
  const [_scroll, scrollTo] = useWindowScroll()
  return (
    <Container size='xs' mt={60} pr={'xl'}>
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
              color={'gray'}
              variant='light'
              onClick={() => scrollTo({ y: 0 })}
              rightIcon={<IconChevronUp size='16' />}
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

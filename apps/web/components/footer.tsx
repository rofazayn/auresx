import { ActionIcon, Container, Divider, Group, Text } from '@mantine/core'
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
            <Text size={'sm'} color={'dimmed'}>
              Back to top
            </Text>
            <ActionIcon
              variant='light'
              size='lg'
              radius={'md'}
              onClick={() => scrollTo({ y: 0 })}
            >
              <IconChevronUp size={16} />
            </ActionIcon>
          </Group>
        </Group>
      </Group>
    </Container>
  )
}

export default Footer

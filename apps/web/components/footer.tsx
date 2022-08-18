import { Anchor, Container, Divider, Group, Text } from '@mantine/core'
import Link from 'next/link'

const Footer = () => {
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

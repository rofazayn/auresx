import { Anchor, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface CustomLinkProps {
  href: string
  text: string
}

const CustomLink = ({ href, text }: CustomLinkProps) => {
  const theme = useMantineTheme()
  return (
    <Link href={href || '/'} passHref>
      <Anchor
        aria-label={text || 'unset_link_text'}
        sx={{
          padding: '8px 16px',
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[4]
              : theme.colors.dark[3],
          transition: 'color, transform 250ms ease-in-out',
          '&:hover': {
            color: theme.colorScheme === 'dark' ? 'white' : 'black',
            transform: 'translateY(-1px)',
          },
        }}
        weight='500'
        variant='text'
      >
        {text || 'unset_link_text'}
      </Anchor>
    </Link>
  )
}

export default CustomLink

import { Anchor, MantineStyleSystemProps, useMantineTheme } from '@mantine/core'
import Link from 'next/link'
import React from 'react'

interface CustomLinkProps extends MantineStyleSystemProps {
  href: string
  text: string
}

const CustomLink = ({ href, text, ...props }: CustomLinkProps) => {
  const theme = useMantineTheme()
  return (
    <Link href={href || '/'} passHref>
      <Anchor
        aria-label={text || 'unset_link_text'}
        sx={{
          fontSize: 15,
          fontFamily: theme.fontFamily,
          padding: '8px 12px',
          color:
            theme.colorScheme === 'dark'
              ? theme.colors.gray[4]
              : theme.colors.dark[5],
          transition: 'color, transform 250ms ease-in-out',
          '&:hover': {
            color: theme.colorScheme === 'dark' ? 'white' : 'black',
            transform: 'translateY(-1px)',
          },
        }}
        weight='500'
        variant='text'
        {...props}
      >
        {text || 'unset_link_text'}
      </Anchor>
    </Link>
  )
}

export default CustomLink

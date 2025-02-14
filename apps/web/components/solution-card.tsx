import {
  ActionIcon,
  Badge,
  Box,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconExternalLink, IconLamp } from '@tabler/icons'
import Link from 'next/link'
import React from 'react'

interface ISolutioCardProps {
  title: string
  icon?: any
  description: string
  tags: string[]
  tagsColor?: string
  link?: string
}

const SolutionCard = ({
  title,
  icon,
  description,
  tags,
  tagsColor,
  link,
}: ISolutioCardProps) => {
  const theme = useMantineTheme()
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        minHeight: 224,
        display: 'flex',
        flexDirection: 'column',
        borderRadius: 12,
        justifyContent: 'space-between',
        transition: 'all 150ms ease-in-out',
        // cursor: 'pointer',
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[7]
            : theme.colors.gray[0],
        padding: '16px',
        // '&:hover': {
        //   backgroundColor:
        //     theme.colorScheme === 'dark'
        //       ? theme.colors.dark[6]
        //       : theme.colors.gray[1],
        // },

        // userSelect: 'none',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
        }}
      >
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            mb={8}
          >
            <Text weight='bold' size='md'>
              {title}
            </Text>
            <Box sx={{ display: 'flex' }}>{icon || <IconLamp size='20' />}</Box>
          </Box>
        </Box>
        <Box mb={20}>
          <Text color='dimmed'>{description}</Text>
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 12,
        }}
      >
        <Group spacing={8}>
          {tags &&
            tags.length > 0 &&
            tags.map((tag: string) => (
              <Badge
                color={tagsColor || 'teal'}
                size='md'
                variant='dot'
                radius='sm'
                key={tag}
              >
                {tag}
              </Badge>
            ))}
        </Group>
        {link && (
          <Box sx={{ marginInlineEnd: '4px' }}>
            <ActionIcon
              variant='default'
              size='md'
              color='gray'
              component={'a'}
              href={link}
              target='_blank'
            >
              <IconExternalLink width='16px' height='16px' />
            </ActionIcon>
          </Box>
        )}
      </Box>
    </Box>
  )
}

export default SolutionCard

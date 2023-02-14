import { Box, createStyles } from '@mantine/core'
import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

const useStyles = createStyles((theme, _params, getRef) => {
  const icon: any = getRef('icon')
  return {
    link: {
      display: 'flex',
      alignItems: 'center',
      textDecoration: 'none',
      fontSize: 15,
      // fontSize: theme.fontSizes.md,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[1]
          : theme.colors.gray[7],
      padding: `${theme.spacing.md}px ${theme.spacing.sm}px`,
      borderRadius: theme.radius.md,
      fontWeight: 500,
      transitionProperty: 'color, background-color',
      transition: 'ease-in-out 200ms',
      position: 'relative',
      // fontFamily: 'Epilogue',
      lineHeight: 1,
      // ...theme.fn.focusStyles(),

      '&::before': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        marginBlock: 'auto',
        left: -2,
        width: 3,
        height: 24,
        background: 'transparent',
        zIndex: 1,
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        opacity: 0.7,
        transition: 'background-color ease-in-out 200ms',
      },

      '&:hover': {
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.colors.dark[6]
            : theme.colors.gray[0],
        color: theme.colorScheme === 'dark' ? theme.white : theme.black,

        [`& .${icon}`]: {
          color: theme.colorScheme === 'dark' ? theme.white : theme.black,
        },
      },
    },

    linkIcon: {
      ref: icon,
      color:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[2]
          : theme.colors.gray[6],
      marginInlineEnd: 12,
      // transitionProperty: 'stroke fill path',
      transition: 'ease-in-out 200ms',
    },

    linkActive: {
      fontWeight: 'bold',
      '&::before': {
        backgroundColor: theme.colors.teal[5],
      },
      '&, &:hover': {
        paddingBlock: `${theme.spacing.md}px`,
        backgroundColor: theme.fn.variant({
          variant: 'light',
          color: 'teal',
        }).background,
        color: theme.fn.variant({ variant: 'light', color: 'teal' }).color,
        [`& .${icon}`]: {
          color: theme.fn.variant({
            variant: 'light',
            color: 'teal',
          }).color,
        },
      },
    },
  }
})

function NavLink({ item }: any) {
  const { classes, cx } = useStyles()
  const [active, setActive] = useState<boolean>(false)
  const router = useRouter()

  return (
    <Box>
      <NextLink href={item.link} passHref>
        <a
          className={cx(classes.link, {
            [classes.linkActive]:
              (router.pathname === '/dashboard/' ||
                router.pathname === '/dashboard') &&
              item.label === 'Home'
                ? true
                : router.pathname.includes(item.label.toLowerCase()),
          })}
          key={item.label}
          onClick={(event) => {
            setActive(item.label)
          }}
        >
          <item.icon className={classes.linkIcon} stroke={2} size={25} />
          <span>{item.labelExtended || item.label}</span>
        </a>
      </NextLink>
    </Box>
  )
}

export default NavLink

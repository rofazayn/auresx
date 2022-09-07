import { Box, Paper, useMantineTheme } from '@mantine/core'
import { IconSettings } from '@tabler/icons'
import NavLink from './nav-link'
import { NavbarLinks } from './navbar-links'
import SidebarHeader from './sidebar-header'
import UserControllerBadge from './user-controller-badge'

const Sidebar = () => {
  const theme = useMantineTheme()
  return (
    <Paper
      radius='md'
      sx={{
        padding: 24,
        marginBlock: 24,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Box>
            <SidebarHeader />
          </Box>
          <Box mt={16}>
            <NavbarLinks />
          </Box>
        </Box>
        <Box>
          <Box mb={16}>
            <NavLink
              item={{
                link: '/dashboard/settings',
                label: 'Settings',
                labelExtended: 'Account Settings',
                icon: IconSettings,
              }}
            />
          </Box>
          <UserControllerBadge />
        </Box>
      </Box>
    </Paper>
  )
}

export default Sidebar

import { Box } from '@mantine/core'
import { IconHome, IconReceipt2, IconSettings, IconShip } from '@tabler/icons'
import NavLink from './nav-link'

const data = [
  {
    link: '/dashboard',
    label: 'Home',
    labelExtended: 'Dashboard Home',
    icon: IconHome,
  },
  {
    link: '/dashboard/services',
    label: 'Services',
    labelExtended: 'Explore our Services',
    icon: IconShip,
  },
  {
    link: '/dashboard/billing',
    label: 'Billing',
    labelExtended: 'Payments and Billing',
    icon: IconReceipt2,
  },
]

export function NavbarLinks({
  withSettings = false,
}: {
  withSettings?: boolean
}) {
  return (
    <Box>
      {data.map((item: any, id) => (
        <NavLink item={item} key={id} />
      ))}
      {withSettings && (
        <NavLink
          item={{
            link: '/dashboard/settings',
            label: 'Settings',
            labelExtended: 'Account Settings',
            icon: IconSettings,
          }}
        />
      )}
    </Box>
  )
}

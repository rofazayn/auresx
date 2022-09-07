import { Box } from '@mantine/core'
import { IconHome, IconReceipt2, IconRocket, IconSettings } from '@tabler/icons'
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
    labelExtended: 'Products and Services',
    icon: IconRocket,
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

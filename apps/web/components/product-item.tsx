import {
  Badge,
  Box,
  Button,
  Divider,
  Group,
  Text,
  useMantineTheme,
} from '@mantine/core'
import { IconBuildingStore, IconCoin, IconShoppingCart } from '@tabler/icons'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface ProductItemProps {
  product: any
}

const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter()
  const theme = useMantineTheme()
  return (
    <Box
      sx={{
        width: '100%',
        padding: 16,
        paddingBottom: 20,
        borderRadius: 12,
        backgroundColor:
          theme.colorScheme === 'dark'
            ? theme.fn.darken(theme.colors.dark[7], 0.25)
            : theme.colors.gray[1],
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Group spacing={8}>
          <IconBuildingStore />
          <Text weight='bold' size='md'>
            {product.name}{' '}
          </Text>
          <Group spacing={4}>
            <Badge size='md' variant='dot'>
              Alpha Release - 2023
            </Badge>
            <Badge size='md' color='pink' variant='dot'>
              New
            </Badge>
          </Group>
        </Group>
        {/* <Box>
          <Badge size='md' radius='lg' color='pink' variant='dot'>
            New Product
          </Badge>
        </Box> */}
      </Box>

      <Divider variant='solid' my={16} sx={{ opacity: 0.4 }} />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
        mb={16}
      >
        <Text sx={{ maxWidth: 440 }} size='md'>
          {product.description}{' '}
          <Link href='/projects/genesis'>
            <Text
              component='span'
              color='dimmed'
              size='md'
              weight='500'
              sx={{ textDecoration: 'underline', cursor: 'pointer' }}
            >
              Read More
            </Text>
          </Link>
        </Text>
      </Box>
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap: 24,
            alignItems: 'flex-start',
          },
        }}
      >
        <Box>
          <Text color='dimmed' weight='500' size='sm'>
            * Monthly Subscription -{' '}
            <Text component='span' weight='600' color='teal'>
              {product.monthPrice} DA
            </Text>
          </Text>
          <Text color='dimmed' weight='500' size='sm'>
            * Money Back Guarantee -{' '}
            <Text component='span' weight='600' color='teal'>
              {product.cancelDuration} Days
            </Text>
          </Text>
          <Text color='dimmed' weight='500' size='sm'>
            * Free Online Trial -{' '}
            <Text component='span' weight='600' color='orange'>
              {/* {product.trialDuration} Days */}Available Soon
            </Text>
          </Text>
        </Box>
        <Group spacing={8}>
          <Button color='gray' variant='subtle' sx={{ cursor: 'not-allowed' }}>
            Trial (Soon)
          </Button>
          <Button
            rightIcon={<IconShoppingCart size='18' />}
            onClick={() =>
              router.push(`/dashboard/services/subscribe/${product.id}`)
            }
            color='teal'
            variant='light'
          >
            Subscribe Now
          </Button>
        </Group>
      </Box>
    </Box>
  )
}

export default ProductItem

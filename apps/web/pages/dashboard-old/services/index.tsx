import {
  Box,
  Group,
  Loader,
  Stack,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { IconRocket, IconShip } from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import PageHeader from '../../../components/page-header'
import ProductItem from '../../../components/product-item'
import DashboardLayout from '../../../components/_layouts/dashboard-layout'
import { useProductsQuery } from '../../../generated/graphql'
import servicesImage from '../../../public/images/illustrations/dashboard-services.svg'

const ServicesDashboard: NextPage = () => {
  const theme = useMantineTheme()
  const { data } = useProductsQuery()
  // const data: any = null // mimic loading products
  // const data: any = { products: [] } // mimic no products in db

  return (
    <>
      <Head>
        <title>AuresX - Explore</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader label='Explore our Services' icon={<IconShip />} />
        </Box>
        <Box
          sx={{
            flexGrow: 1,
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box sx={{ width: '100%' }}>
              {data?.products && data.products.length === 0 ? (
                <Box
                  sx={{
                    flexGrow: 1,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <Box
                    pt={32}
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Box sx={{ maxWidth: 320 }}>
                      <Image src={servicesImage} alt='Rocket Illustration' />
                    </Box>

                    <Title order={5} mb={8} weight='600'>
                      Available Services
                    </Title>
                    <Text
                      color='dimmed'
                      sx={{ maxWidth: 360 }}
                      align='center'
                      size='sm'
                    >
                      Our products and services are still under development,
                      we&apos;ll notify you by sending you an email once they
                      are available.
                    </Text>
                  </Box>
                </Box>
              ) : data?.products && data.products.length > 0 ? (
                <Stack spacing={12}>
                  {data?.products?.map((product: any) => (
                    <ProductItem key={product.id} product={product} />
                  ))}
                </Stack>
              ) : (
                <Box>
                  <Group spacing={8}>
                    <Loader size='sm' color='teal' />
                    <Text color='dimmed'>
                      Searching the database for products, please be patient!
                    </Text>
                  </Group>
                </Box>
              )}
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ServicesDashboard

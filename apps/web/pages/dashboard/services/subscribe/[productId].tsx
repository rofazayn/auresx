import {
  Badge,
  Box,
  Button,
  Divider,
  Grid,
  Group,
  Loader,
  LoadingOverlay,
  Radio,
  Text,
  Title,
  useMantineTheme,
} from '@mantine/core'
import { showNotification } from '@mantine/notifications'
import {
  IconBuildingStore,
  IconCheck,
  IconCoin,
  IconInfoCircle,
  IconShoppingCart,
} from '@tabler/icons'
import { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useContext, useEffect, useState } from 'react'
import PageHeader from '../../../../components/page-header'
import DashboardLayout from '../../../../components/_layouts/dashboard-layout'
import { AuthContext } from '../../../../context/auth-context'
import {
  useCreateOneSubscriptionMutation,
  useCreateOneTransactionMutation,
  useProductQuery,
  useUpdateOneUserMutation,
} from '../../../../generated/graphql'
import formatMoney from '../../../../utils/to-money'
import {
  getAccessToken,
  getRefreshToken,
} from '../../../../utils/tokens-operations'

const NODE_ENV = process.env.NODE_ENV! || 'development'
const synchroEndPoint: string = `${
  NODE_ENV === 'development'
    ? 'http://localhost:8888'
    : 'https://synchro.auresx.com'
}`

const ProductSubscription: NextPage = () => {
  const router = useRouter()
  const theme = useMantineTheme()
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const { data: productData, loading: productLoading } = useProductQuery({
    variables: { where: { id: `${router.query.productId}` } },
  })
  const [selectedPlan, setSelectedPlan] = useState<number>(0)
  const [selectedDuration, setSelectedDuration] = useState<number>(0)
  const [calculatedDuration, setCalculatedDuration] = useState<number>(1)
  const [total, setTotal] = useState<number>(
    productData?.product?.monthPrice || 2000
  )
  const [discountAmount, setDiscountAmount] = useState<number>(
    productData?.product?.monthPrice || 2000
  )
  const [globalError, setGlobalError] = useState<any>(null)
  const [globalLoading, setGlobalLoading] = useState<boolean>(false)

  useEffect(() => {
    if (productData?.product?.monthPrice) {
      let total: number = 0
      let totalDiscountAmount: number = 0
      let planMonthPrice =
        selectedPlan === 1
          ? productData.product.monthPrice * 1.9
          : selectedPlan === 2
          ? productData.product.monthPrice * 2.8
          : productData.product.monthPrice
      let durationInMonths: number =
        selectedDuration === 1 ? 3 : selectedDuration === 2 ? 12 : 1
      let discountInUnits: number =
        selectedDuration === 1
          ? planMonthPrice * 0.1
          : selectedDuration === 2
          ? planMonthPrice * 0.2
          : 0
      total = (planMonthPrice - discountInUnits) * durationInMonths
      totalDiscountAmount =
        planMonthPrice * durationInMonths -
        (planMonthPrice - discountInUnits) * durationInMonths

      setCalculatedDuration(durationInMonths)
      setDiscountAmount(totalDiscountAmount)
      setTotal(total)
    }
  }, [productData, selectedPlan, selectedDuration])

  const [
    createOneSubscriptionMutation,
    {
      data: subscriptionData,
      loading: subscriptionLoading,
      error: subscriptionError,
    },
  ] = useCreateOneSubscriptionMutation()
  const [
    createOneTransaction,
    {
      data: transactionData,
      loading: transactionLoading,
      error: transactionError,
    },
  ] = useCreateOneTransactionMutation()
  const [
    updateOneUser,
    {
      data: updatedUserData,
      loading: updatedUserLoading,
      error: updatedUserError,
    },
  ] = useUpdateOneUserMutation()

  async function onSubscribeToProduct() {
    let date = new Date()
    const expiryDate = new Date(
      date.setMonth(date.getMonth() + calculatedDuration)
    )

    if (currentUser.balance < total) {
      return
    }

    setGlobalLoading(true)
    try {
      await createOneSubscriptionMutation({
        variables: {
          data: {
            product: {
              connect: {
                id: `${router.query.productId!}`,
              },
            },
            user: {
              connect: { id: `${currentUser.id!}` },
            },
            expiryDate: expiryDate,
            totalPaid: total,
            renewCounter: 0,
          },
        },
      }).then(async (res) => {
        console.log(res.data?.createOneSubscription)
        if (res.data?.createOneSubscription) {
          let accessToken = getAccessToken()
          let refreshToken = getRefreshToken()

          const synchroSubscriptionMutation = `
            mutation {
              createOneSubscription(data: {
                renewCounter: 0,
                totalPaid: ${total},
                axId: "${res.data.createOneSubscription.id}",
                user: {
                  connectOrCreate: {
                    where: {axId: "${currentUser.id}"},
                    create: {
                      axId: "${currentUser.id}",
                      email: "${currentUser.email}",
                      name: "${currentUser.name}",
                      role: "SUPER",
                    }
                  }
                }
              }) {
                id
                axId
                userId
                totalPaid
                renewCounter
                expiryDate
                createdAt
                updatedAt
              }
            }`
          const response = await fetch(synchroEndPoint + '/graphql', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
              'x-access-token': `Bearer ${accessToken}`,
              'x-refresh-token': `Bearer ${refreshToken}`,
            },
            body: JSON.stringify({
              query: synchroSubscriptionMutation,
            }),
          })
          await createOneTransaction({
            variables: {
              data: {
                type: 'PAYMENT',
                status: 'SUCCESS',
                message: `${productData?.product?.name} - ${calculatedDuration} Month(s) Subscription`,
                amount: total,
                user: {
                  connect: { id: `${currentUser.id}` },
                },
              },
            },
          }).then(async () => {
            const updatedUser = await updateOneUser({
              variables: {
                data: {
                  balance: { decrement: total },
                },
                where: {
                  id: `${currentUser.id}`,
                },
              },
            })

            if (updatedUser.data?.updateOneUser) {
              setCurrentUser({
                currentUser,
                ...updatedUser.data?.updateOneUser,
              })
            }

            showNotification({
              title: 'Success',
              message: `You've successfully subscribed to ${productData?.product?.name}`,
              color: 'pink',
              icon: <IconCheck />,
            })
          })
          console.log(response.json())
        }
      })
      setGlobalLoading(false)
    } catch (error) {
      setGlobalLoading(false)
      setGlobalError(error)
    }
  }

  return (
    <>
      <Head>
        <title>AuresX - Subscribe</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <DashboardLayout>
        <Box>
          <PageHeader
            label='Subscribe to a Product'
            icon={<IconShoppingCart />}
          />
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
                  position: 'relative',
                }}
              >
                <LoadingOverlay
                  visible={globalLoading}
                  overlayBlur={3}
                  radius='md'
                  loaderProps={{ color: 'indigo', variant: 'dots' }}
                />
                {productLoading ? (
                  <Box>
                    <Group spacing={8}>
                      <Loader size='sm' color='indigo' />
                      <Text color='dimmed' size='sm'>
                        Searching the database for your specific product, please
                        be patient!
                      </Text>
                    </Group>
                  </Box>
                ) : productData?.product && !productLoading ? (
                  <>
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
                        <Title order={6}>{productData.product.name}</Title>
                        <Group spacing={4}>
                          <Badge size='lg' color='teal' variant='dot'>
                            Alpha Release - 2023
                          </Badge>
                          <Badge size='lg' color='teal' variant='dot'>
                            New
                          </Badge>
                        </Group>
                      </Group>
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
                        {productData.product.description}{' '}
                        <Link href='/dashboard/services/'>
                          <Text
                            component='span'
                            color='dimmed'
                            size='md'
                            weight='500'
                            sx={{
                              textDecoration: 'underline',
                              cursor: 'pointer',
                            }}
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
                    ></Box>
                    <Divider variant='dashed' my={16} sx={{ opacity: 0.7 }} />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',

                        flexDirection: 'column',
                      }}
                      // mb={16}
                    >
                      <Text weight='bold' size='md' mb={6}>
                        1 - Pick a Subscription Plan
                      </Text>
                      <Text sx={{ maxWidth: 440 }} color='dimmed' size='sm'>
                        Choose the subscription plan that suits your needs from
                        the available ones down below.
                      </Text>
                      <Grid mt={16}>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedPlan(0)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              minHeight: 200,
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={selectedPlan === 0 ? 'pink' : 'unset'}
                                >
                                  Starter Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  For individuals and <br />
                                  small businesses
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'starter'}
                                  checked={selectedPlan === 0}
                                  onChange={() => setSelectedPlan(0)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>
                                -{' '}
                                <Text component='span' weight='bold'>
                                  One
                                </Text>{' '}
                                Synchronization Engine
                              </Text>
                              <Text size='sm'>
                                - Up to{' '}
                                <Text component='span' weight='bold'>
                                  (2)
                                </Text>{' '}
                                Branches
                              </Text>
                              <Text size='sm'>- Free Software Updates</Text>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm' weight='500' color='dimmed'>
                                Starts at
                              </Text>
                              <Text>
                                <Text size='xl' weight='bold' component='span'>
                                  {formatMoney(productData.product.monthPrice)}{' '}
                                  DA
                                </Text>{' '}
                                <Text component='span' color='dimmed'>
                                  / Month
                                </Text>
                              </Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedPlan(1)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              minHeight: 200,
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={selectedPlan === 1 ? 'pink' : 'unset'}
                                >
                                  Business Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  For businesses of small <br />
                                  to medium size
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'business'}
                                  checked={selectedPlan === 1}
                                  onChange={() => setSelectedPlan(1)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>
                                -{' '}
                                <Text component='span' weight='bold'>
                                  (2)
                                </Text>{' '}
                                Synchronization Engines
                              </Text>
                              <Text size='sm'>
                                - Up to{' '}
                                <Text component='span' weight='bold'>
                                  (4)
                                </Text>{' '}
                                Branches
                              </Text>
                              <Text size='sm'>- Free Software Updates</Text>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm' weight='500' color='dimmed'>
                                Starts at
                              </Text>
                              <Text>
                                <Text size='xl' weight='bold' component='span'>
                                  {formatMoney(
                                    productData.product.monthPrice * 1.9
                                  )}{' '}
                                  DA
                                </Text>{' '}
                                <Text component='span' color='dimmed'>
                                  / Month
                                </Text>
                              </Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedPlan(2)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              minHeight: 200,
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={selectedPlan === 2 ? 'pink' : 'unset'}
                                >
                                  Entreprize Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  For medium businesses <br />
                                  to large entreprizes
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'business'}
                                  checked={selectedPlan === 2}
                                  onChange={() => setSelectedPlan(2)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>
                                -{' '}
                                <Text component='span' weight='bold'>
                                  (3)
                                </Text>{' '}
                                Synchronization Engines
                              </Text>
                              <Text size='sm'>
                                - Up to{' '}
                                <Text component='span' weight='bold'>
                                  (8)
                                </Text>{' '}
                                Branches
                              </Text>
                              <Text size='sm'>- Free Software Updates</Text>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm' weight='500' color='dimmed'>
                                Starts at
                              </Text>
                              <Text>
                                <Text size='xl' weight='bold' component='span'>
                                  {formatMoney(
                                    productData.product.monthPrice * 2.8
                                  )}{' '}
                                  DA
                                </Text>{' '}
                                <Text component='span' color='dimmed'>
                                  / Month
                                </Text>
                              </Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                      </Grid>
                    </Box>
                    <Divider variant='dashed' my={16} sx={{ opacity: 0.7 }} />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      // mb={16}
                    >
                      <Text weight='bold' size='md' mb={6}>
                        2 - Pick your Subscription Duration
                      </Text>
                      <Text sx={{ maxWidth: 440 }} color='dimmed' size='sm'>
                        Choose the subscription duration you wan&apos;t to start
                        with{' '}
                        <Text component='span' weight='500'>
                          (we offer you a 7 days money back guarantee)
                        </Text>
                      </Text>
                      <Grid mt={16}>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedDuration(0)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={
                                    selectedDuration === 0 ? 'pink' : 'unset'
                                  }
                                >
                                  Monthly Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  One month subscription, <br />
                                  cancel anytime
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'starter'}
                                  checked={selectedDuration === 0}
                                  onChange={() => setSelectedDuration(0)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>- No savings for this plan</Text>
                              <Text size='sm'>- Data backed-up on demand</Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedDuration(1)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={
                                    selectedDuration === 1 ? 'pink' : 'unset'
                                  }
                                >
                                  Quarterly Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  Three months subscription, <br />
                                  cancel anytime
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'business'}
                                  checked={selectedDuration === 1}
                                  onChange={() => setSelectedDuration(1)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>
                                - Save{' '}
                                <Text
                                  component='span'
                                  color='teal'
                                  weight='bold'
                                >
                                  10%
                                </Text>{' '}
                                of your money
                              </Text>
                              <Text size='sm'>- Data backed-up monthly</Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                        <Grid.Col span={12} sm={4}>
                          <Box
                            onClick={() => setSelectedDuration(2)}
                            sx={{
                              cursor: 'pointer',
                              display: 'flex',
                              flexDirection: 'column',
                              width: '100%',
                              borderRadius: 8,
                              backgroundColor:
                                theme.colorScheme === 'dark'
                                  ? theme.colors.dark[7]
                                  : 'white',
                              paddingBlock: 8,
                              paddingInline: 12,
                            }}
                          >
                            <Box
                              sx={{
                                display: 'flex',
                                alignItem: 'flex-start',
                                justifyContent: 'space-between',
                              }}
                            >
                              <Box>
                                <Text
                                  size='lg'
                                  mb={3}
                                  weight='bold'
                                  color={
                                    selectedDuration === 2 ? 'pink' : 'unset'
                                  }
                                >
                                  Annually Plan
                                </Text>
                                <Text
                                  color='dimmed'
                                  size='xs'
                                  sx={{ lineHeight: 1.2 }}
                                >
                                  One year subscription, <br />
                                  cancel anytime
                                </Text>
                              </Box>
                              <Box pt={4}>
                                <Radio
                                  value={'business'}
                                  checked={selectedDuration === 2}
                                  onChange={() => setSelectedDuration(2)}
                                  size='md'
                                  color='pink'
                                />
                              </Box>
                            </Box>
                            <Box mt={16}>
                              <Text size='sm'>
                                - Save{' '}
                                <Text
                                  component='span'
                                  color='teal'
                                  weight='bold'
                                >
                                  20%
                                </Text>{' '}
                                of your money
                              </Text>
                              <Text size='sm'>- Data backed-up monthly</Text>
                            </Box>
                          </Box>
                        </Grid.Col>
                      </Grid>
                    </Box>
                    <Divider variant='dashed' my={16} sx={{ opacity: 0.7 }} />
                    <Box
                      sx={{
                        width: '100%',
                        display: 'flex',
                        flexDirection: 'column',
                      }}
                      // mb={16}
                    >
                      <Text weight='bold' size='md' mb={6}>
                        3 - Check your Subscription Details
                      </Text>
                      <Text sx={{ maxWidth: 440 }} color='dimmed' size='sm'>
                        Check the plan that you&apos;ve picked then click on
                        <Text component='span' weight='500'>
                          &quot;Purchase {productData.product.name}&quot;
                        </Text>{' '}
                        button to finish your subscription process.
                      </Text>

                      <Box mt={16}>
                        <Box

                        // sx={{
                        //   cursor: 'pointer',
                        //   display: 'flex',
                        //   flexDirection: 'column',
                        //   width: '100%',
                        //   borderRadius: 8,
                        //   backgroundColor:
                        //     theme.colorScheme === 'dark'
                        //       ? theme.colors.dark[7]
                        //       : 'white',
                        //   paddingBlock: 12,
                        //   paddingInline: 12,
                        // }}
                        >
                          <Box
                            sx={{
                              display: 'flex',
                              aligItems: 'center',
                              justifyContent: 'space-between',
                              '@media (max-width: 768px)': {
                                flexDirection: 'column',
                              },
                            }}
                          >
                            <Box mt={16}>
                              <Group spacing={2}>
                                <Text size='sm' weight='500' color='dimmed'>
                                  Payment Information
                                </Text>
                                <IconCoin size='16' />
                              </Group>
                              <Divider my={16} variant='dashed' />
                              <Group>
                                <Box>
                                  <Text color='dimmed' size='xs'>
                                    Current plan saves
                                  </Text>
                                  <Text
                                    color='teal'
                                    component='span'
                                    sx={{
                                      fontFamily: 'monospace',
                                    }}
                                    size='xl'
                                    weight='bold'
                                  >
                                    {formatMoney(discountAmount)} DA
                                  </Text>
                                </Box>
                                <Box>
                                  <Text color='dimmed' size='xs'>
                                    Included Tax (TVA)
                                  </Text>
                                  <Text
                                    // color='teal'
                                    component='span'
                                    sx={{
                                      fontFamily: 'monospace',
                                      lineHeight: 1.2,
                                    }}
                                    weight='bold'
                                  >
                                    (19%)
                                  </Text>
                                </Box>
                              </Group>
                              <Divider my={16} variant='dashed' />
                              <Box>
                                <Text size='xs' color='dimmed'>
                                  Amount to Pay
                                </Text>
                                <Text
                                  // size='xl'
                                  component='span'
                                  sx={{
                                    fontFamily: 'monospace',
                                    lineHeight: 1.2,
                                    fontSize: 40,
                                  }}
                                  weight='bold'
                                >
                                  {formatMoney(total)} DA
                                </Text>
                              </Box>
                            </Box>

                            <Box
                              sx={{
                                display: 'flex',
                                alignItems: 'flex-end',
                                '@media (max-width: 768px)': {
                                  flexDirection: 'column',
                                  alignItems: 'flex-start',
                                  marginTop: 16,
                                },
                              }}
                              mt={16}
                              // pb={8}
                            >
                              <Button
                                size='md'
                                rightIcon={<IconShoppingCart />}
                                fullWidth
                                onClick={onSubscribeToProduct}
                                disabled={globalLoading}
                                loading={globalLoading}
                              >
                                Purchase {productData.product.name}
                              </Button>
                            </Box>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <Text
                      color='teal'
                      sx={{ display: 'flex', alignItems: 'center' }}
                      weight='500'
                    >
                      <IconInfoCircle style={{ marginInlineEnd: 8 }} /> The
                      product you are looking for wasn&apos;t found in our
                      database!
                    </Text>
                    <Button
                      size='sm'
                      color='teal'
                      variant='outline'
                      onClick={() => router.push('/dashboard/services')}
                    >
                      Go Back
                    </Button>
                  </Box>
                )}
              </Box>
            </Box>
          </Box>
        </Box>
      </DashboardLayout>
    </>
  )
}

export default ProductSubscription

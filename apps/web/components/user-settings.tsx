import {
  Box,
  Button,
  Divider,
  Grid,
  InputBase,
  Loader,
  Select,
  Text,
  TextInput,
  useMantineTheme,
} from '@mantine/core'
import {
  IconCheck,
  IconDeviceDesktop,
  IconLocation,
  IconPhone,
  IconRocket,
  IconUser,
  IconWallpaper,
} from '@tabler/icons'
import { Field, Form, Formik } from 'formik'
import { useContext, useEffect, useMemo, useState } from 'react'
import InputMask from 'react-input-mask'
import countryList from 'react-select-country-list'
import { AuthContext } from '../context/auth-context'
import { useUpdateOneUserMutation } from '../generated/graphql'
import settingsCountryImage from '../public/images/illustrations/settings-country.svg'
import settingsJobImage from '../public/images/illustrations/settings-job.svg'
import settingsNameImage from '../public/images/illustrations/settings-name.svg'
import settingsPhoneImage from '../public/images/illustrations/settings-phone.svg'
import { capitalizeWords } from '../utils/input-formatter'
import { userSettingsSchema } from '../validation/settings-validation'
import SettingsCard from './settings-card'

const UserSettings = () => {
  const theme = useMantineTheme()
  const { currentUser, setCurrentUser } = useContext(AuthContext)
  const [initialValues, setInitialValues] = useState({
    name: '',
    phoneNumber: '',
    country: '',
    // region: '',
    // city: '',
    job: '',
  })

  useEffect(() => {
    if (currentUser) {
      setInitialValues({
        name: currentUser.name,
        phoneNumber: currentUser.phoneNumber,
        country: currentUser.country,
        job: currentUser.job,
      })
    }
  }, [currentUser])

  const [updateOneUserMutation] = useUpdateOneUserMutation()
  const options = useMemo(() => countryList().getData(), [])

  if (currentUser) {
    return (
      <Box>
        {currentUser.name && initialValues && (
          <Formik
            initialValues={initialValues}
            validationSchema={userSettingsSchema}
            enableReinitialize={true}
            onSubmit={async (values) => {
              if (!currentUser) return

              try {
                const updatedUser = await updateOneUserMutation({
                  variables: {
                    data: {
                      name: values.name
                        ? { set: capitalizeWords(values.name.trim()) }
                        : null,
                      phoneNumber: { set: values.phoneNumber },
                      country: values.country
                        ? { set: values.country.trim() }
                        : null,
                      job: values.job ? { set: values.job.trim() } : null,
                    },
                    where: {
                      id: currentUser.id,
                    },
                  },
                })

                if (updatedUser.data?.updateOneUser) {
                  setCurrentUser({
                    currentUser,
                    ...updatedUser.data.updateOneUser,
                  })
                }
              } catch (error) {}
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
              setFieldValue,
            }) => (
              <Form onSubmit={handleSubmit}>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'flex-end',
                    justifyContent: 'space-between',
                    gap: 16,
                    '@media (max-width: 768px)': {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    },
                  }}
                  mb={24}
                >
                  <Box>
                    <Text size='md' weight='500' mb={4}>
                      User Settings
                    </Text>
                    <Text size='sm' color='dimmed' sx={{ maxWidth: 420 }}>
                      Check your settings, set or change your details then press
                      the save button to save your changes to the database.
                    </Text>
                  </Box>
                </Box>
                <Grid gutter={12}>
                  <Grid.Col span={12} sm={6}>
                    <SettingsCard
                      data={{
                        label: 'Full Name',
                        description: 'Change your full name',
                        imageUrl: settingsNameImage,
                      }}
                    >
                      <TextInput
                        sx={(theme) => ({
                          input: {
                            backgroundColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[7]
                                : theme.colors.gray[1],
                          },
                        })}
                        variant='filled'
                        rightSection={<IconUser color='gray' />}
                        type='text'
                        placeholder='Enter your full name'
                        size='md'
                        name='name'
                        value={values.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.name}
                      />
                    </SettingsCard>
                  </Grid.Col>
                  <Grid.Col span={12} sm={6}>
                    <SettingsCard
                      data={{
                        label: 'Phone Number',
                        description: 'Set your phone number',
                        imageUrl: settingsPhoneImage,
                      }}
                    >
                      {/* // eslint-disable */}
                      <InputBase
                        component={InputMask}
                        mask={'+213 (0999) 999-999'}
                        sx={(theme) => ({
                          input: {
                            backgroundColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[7]
                                : theme.colors.gray[1],
                          },
                        })}
                        variant='filled'
                        rightSection={<IconPhone color='gray' />}
                        type='text'
                        placeholder='Enter your phone number'
                        size='md'
                        name='phoneNumber'
                        value={values.phoneNumber}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.phoneNumber}
                      />
                    </SettingsCard>
                  </Grid.Col>
                  <Grid.Col span={12} sm={6}>
                    <SettingsCard
                      data={{
                        label: 'Country',
                        description: 'Change your country',
                        imageUrl: settingsCountryImage,
                      }}
                    >
                      {/* <TextInput
                      sx={(theme) => ({
                        input: {
                          backgroundColor:
                            theme.colorScheme === 'dark'
                              ? theme.colors.dark[7]
                              : theme.colors.gray[1],
                        },
                      })}
                      variant='filled'
                      rightSection={<IconLocation color='gray' />}
                      type='text'
                      placeholder='Enter your country'
                      size='md'
                      name='country'
                      value={values.country}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={errors.country}
                    /> */}
                      <Field
                        name='country'
                        as={Select}
                        data={
                          options
                            ? options.map((country) => ({
                                value: country.label,
                                label: country.label,
                              }))
                            : []
                        }
                        sx={(theme: any) => ({
                          input: {
                            backgroundColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[7]
                                : theme.colors.gray[1],
                          },
                        })}
                        variant='filled'
                        rightSection={<IconLocation color='gray' />}
                        type='text'
                        placeholder='Enter your country'
                        size='md'
                        // name='country'
                        value={values.country}
                        onChange={(value: string | null) =>
                          setFieldValue('country', value)
                        }
                        onBlur={handleBlur}
                        error={errors.country}
                        searchable
                        nothingFound='No countries listed'
                        allowDeselect
                        maxDropdownHeight={200}
                      />
                    </SettingsCard>
                  </Grid.Col>
                  <Grid.Col span={12} sm={6}>
                    <SettingsCard
                      data={{
                        label: 'Job Title',
                        description: 'What you do for living',
                        imageUrl: settingsJobImage,
                      }}
                    >
                      <TextInput
                        sx={(theme) => ({
                          input: {
                            backgroundColor:
                              theme.colorScheme === 'dark'
                                ? theme.colors.dark[7]
                                : theme.colors.gray[1],
                          },
                        })}
                        variant='filled'
                        rightSection={<IconDeviceDesktop color='gray' />}
                        type='text'
                        placeholder='Enter your job title'
                        size='md'
                        name='job'
                        value={values.job}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={errors.job}
                      />
                    </SettingsCard>
                  </Grid.Col>
                </Grid>
                <Divider variant='dashed' my={24} sx={{ opacity: 0.4 }} />
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 16,
                    justifyContent: 'space-between',
                    width: '100%',
                    '@media (max-width: 768px)': {
                      flexDirection: 'column',
                      alignItems: 'flex-start',
                    },
                  }}
                  mt={24}
                >
                  <Box sx={{ maxWidth: 520 }}>
                    <Text weight='500' mb={4}>
                      Save your changes
                    </Text>
                    <Text color='dimmed'>
                      Don&apos;t forget to verify and save your settings after
                      editing them.
                    </Text>
                  </Box>
                  <Box
                    sx={{
                      // flexGrow: 1,
                      '@media (max-width: 768px)': {
                        width: '100%',
                        flexGrow: 1,
                      },
                    }}
                  >
                    <Button
                      type='submit'
                      rightIcon={<IconCheck size={24} />}
                      variant='filled'
                      color='indigo'
                      size='md'
                      loading={isSubmitting}
                      sx={{
                        '@media (max-width: 768px)': {
                          width: '100%',
                        },
                      }}
                    >
                      Save Changes
                    </Button>
                  </Box>
                </Box>
              </Form>
            )}
          </Formik>
        )}
      </Box>
    )
  } else {
    return <Loader size='sm' />
  }
}

export default UserSettings

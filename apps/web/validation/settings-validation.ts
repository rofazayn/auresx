import * as Yup from 'yup'

export const userSettingsSchema = Yup.object({
  name: Yup.string().min(5).max(20).required(),
  phoneNumber: Yup.string().test(
    'len',
    'Incorrect phone number',
    (val: any) => {
      if (!val) return true
      const val_length_without_dashes = val.replace(/-|_/g, '').length
      return val_length_without_dashes === 18
    }
  ),
  country: Yup.string().max(20).nullable(true),
  job: Yup.string().min(4).max(20).nullable(true),
})

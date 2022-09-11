import * as Yup from 'yup'

export const loginSchema = Yup.object({
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
})

export const registerSchema = Yup.object({
  name: Yup.string()
    .min(5)
    .max(25)
    .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, 'Please enter your full name.')
    .required(),
  email: Yup.string().email().required(),
  password: Yup.string().min(8).required(),
})

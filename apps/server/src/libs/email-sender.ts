import nodemailer from 'nodemailer'
import { ACCOUNTS_EMAIL_ADDRESS, ACCOUNTS_EMAIL_SECRET } from '../constants'

// create reusable transporter object using the default SMTP transport
const transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: ACCOUNTS_EMAIL_ADDRESS,
    pass: ACCOUNTS_EMAIL_SECRET,
  },
})

export async function sendConfirmationSMTP(
  email: string,
  receiverName: string,
  confirmationLink: string
) {
  let htmlBody = `
    <p>Hello ${receiverName}.</p>
    <p>Please confirm your email to proceed with using your AuresX account.<br/> Press on the link to confirm your email <a href="${confirmationLink}" target="_blank">Confirm your Email</a>.</p>
    <p>Best wishes,<br />AuresX Accounts.</p>
  `

  try {
    await transporter.sendMail({
      from: '"AuresX Accounts" <accounts@auresx.com>', // sender address
      to: email, // list of receivers
      subject: 'Please confirm your email address', // Subject line
      // text: 'plain text'
      html: htmlBody, // html body
    })
  } catch (error) {
    console.log(error)
  }

  return
}

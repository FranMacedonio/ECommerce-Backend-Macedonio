import { config } from 'dotenv'
config()

import { createTransport } from 'nodemailer'

const mail = process.env.MAIL
const mailPassword = process.env.MAILPASSWORD
export const transporter = createTransport({
    service: 'gmail',
    auth: {
        user: mail,
        pass: mailPassword
    }
})
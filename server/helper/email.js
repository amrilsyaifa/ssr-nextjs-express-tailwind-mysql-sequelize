require('dotenv').config()
const nodemailer = require('nodemailer');
const email = process.env.EMAIL;
const email_password = process.env.EMAIL_PASSWORD;

const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    requireTLS: true,
    auth: {
        user: email,
        pass: email_password
    }
});


exports.sendEmailConfig = dataEmail => {
    transporter.sendMail(dataEmail)
        .then((info) => console.log(`email terkirim: ${info}`))
        .catch((err) => console.log(`error: `, err))
}
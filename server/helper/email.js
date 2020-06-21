require('dotenv').config()
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-handlebars');
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

transporter.use('compile', hbs({
    viewEngine: {
        extName: '.handlebars',
        partialsDir: 'server/views/email',
        defaultLayout: '',
    },
    viewPath: 'server/views/email',
    extName: '.handlebars',
}));



exports.sendEmailConfig = dataEmail => {
    transporter.sendMail(dataEmail)
        .then((info) => console.log(`email terkirim: ${info}`))
        .catch((err) => console.log(`error: `, err))
}
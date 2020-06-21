require('dotenv').config()
const { sendEmailConfig } = require('../helper/email')
const { validatorSendEmail } = require('../validator/emailValidator')

const email = process.env.EMAIL;

exports.sendEmail = async (req, res) => {
    const {
        to,
        subject,
        template
    } = req.body;

    const { errors, isValid } = validatorSendEmail(req.body)

    if (!isValid) {
        return res.status(500).send({
            'status': 'error',
            'messages': 'error',
            'data': errors
        });
    }

    const templateEmail = {
        from: email, // sender address
        to,
        subject,
        template,
        context: {
            name: 'Amril Syaifa Yasin',
            url: 'https://www.google.com/'
        }
        // html,
    };
    sendEmailConfig(templateEmail)
    return res.status(200).json({
        message: "Email Terkirim"
    })

}
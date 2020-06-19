require('dotenv').config()
const { kirimEmail } = require('../helper/email')

const email = process.env.EMAIL;

exports.sendEmail = async (req, res) => {
    const {
        to,
        subject,
        html
    } = req.body;
    const templateEmail = {
        from: email, // sender address
        to,
        subject,
        html
    };

    kirimEmail(templateEmail)
    return res.status(200).json({
        message: "Email Terkirim"
    })
}
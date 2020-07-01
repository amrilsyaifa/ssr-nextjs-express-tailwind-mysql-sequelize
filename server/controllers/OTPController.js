require('dotenv').config()
const Speakeasy = require("speakeasy");
const { sendEmailConfig } = require('../helper/email')

const remaining = 60
const emailFromENV = process.env.EMAIL;

module.exports = {
    generateOTP: (req, res) => {
        const { methodSend, toAdress, name } = req.body
        var secret = Speakeasy.generateSecret({ length: 20 });
        var token = Speakeasy.totp({
            secret: secret.base32,
            encoding: "base32",
            step: remaining,
        })
        res.status(200).send({
            'status': 'success',
            'messages': 'Token berhasil digenerate',
            'data': {
                secret: secret.base32,
                token,
                remaining
            }
        });
        if (methodSend === "email") {
            const templateEmail = {
                from: emailFromENV, // sender address
                to: toAdress,
                subject: "[Diingat] Verifikasi Kode OTP.",
                template: 'verifikasi-token',
                context: {
                    name,
                    token
                }
            };
            sendEmailConfig(templateEmail)
        }
    },
    validateOTP: (req, res) => {
        const { token, secret } = req.body
        var valid = Speakeasy.totp.verify({
            secret,
            encoding: "base32",
            token,
            step: remaining,
            window: 0
        })
        if (valid) {
            res.status(200).send({
                'status': 'success',
                'messages': 'Token berhasil digenerate',
                'data': {
                    isValid: valid
                }
            });
        } else {
            res.status(400).send({
                'status': 'error',
                'messages': 'error',
                'data': '',
            })
        }

    }
}
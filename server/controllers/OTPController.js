const Speakeasy = require("speakeasy");

module.exports = {
    generateOTP: (req, res) => {
        var secret = Speakeasy.generateSecret({ length: 20 });
        var token = Speakeasy.totp({
            secret: secret.base32,
            encoding: "base32"
        })
        res.status(200).send({
            'status': 'success',
            'messages': 'Token berhasil digenerate',
            'data': {
                secret: secret.base32,
                token,
                remaining: 60
            }
        });
    },
    validateOTP: (req, res) => {
        var valid = Speakeasy.totp.verify({
            secret: req.body.secret,
            encoding: "base32",
            token: req.body.token,
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
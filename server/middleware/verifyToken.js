require('dotenv').config()
var jwt = require('jsonwebtoken');
var secret = process.env.SECRET

function VerifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        req.token = bearerToken;
        jwt.verify(bearerToken, secret, function (err, decoded) {
            if (err) {
                return res.status(403).send({
                    'status': 'error',
                    'messages': 'Failed to authenticate token.',
                    'data': ''
                });
            }
            // if everything good, save to request for use in other routes
            console.log('isi decoded ', decoded)
            next();
        });
    } else {
        return res.status(403).send({
            'status': 'error',
            'messages': 'No token provided.',
            'data': ''
        });
    }
}

module.exports = VerifyToken;
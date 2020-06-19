require('dotenv').config()
var jwt = require('jsonwebtoken');
var secret = process.env.SECRET

function getAuth(bearerHeader, callback) {
    if (bearerHeader) {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1];
        jwt.verify(bearerToken, secret, function (err, decoded) {
            if (err) {
                callback(err)
            } else {
                callback(null, decoded)
            }

        });
    }
}

module.exports = getAuth;
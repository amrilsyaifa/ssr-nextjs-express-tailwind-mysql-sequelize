var validator = require('validator');

exports.validatorSendEmail = data => {
    var errors = {};
    var isValid = true;
    if (!validator.isEmail(data.to)) {
        Object.assign(errors, { to: "Only Email" })
        isValid = false
    };

    return { errors, isValid }
}
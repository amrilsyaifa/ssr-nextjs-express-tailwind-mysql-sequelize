const model = require('../models')
const Roles = model.Roles;

module.exports = {
    addRoles: (req, res) => {
        const { name } = req.body;
        Roles.create({
            name
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'Roles berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    }
}
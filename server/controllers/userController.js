const model = require('../models')
var bcrypt = require('bcrypt');
var salt = bcrypt.genSaltSync(10);

module.exports = {
    getAllUsers: (req, res) => {
        model.users.findAll({ include: [model.jabbers] })
            .then((datas) => {
                res.status(200).send({
                    'status': 'success',
                    'messages': '',
                    'data': datas
                });
            }).catch((error) => res.status(400).send({
                'status': 'error',
                'messages': error.messages,
                'data': {}
            }));
    },
    postUser: (req, res) => {
        const {
            username,
            email,
            password,
            phone_number,
            id_card_number,
            full_name,
            address
        } = req.body;
        var hashPassword = bcrypt.hashSync(password, salt)
        model.users.create({
            username,
            email,
            password: hashPassword,
            phone_number,
            id_card_number,
            full_name,
            address
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'User berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    }
}
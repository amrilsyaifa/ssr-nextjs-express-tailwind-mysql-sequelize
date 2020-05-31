const model = require('../models')

module.exports = {
    getAllUsers: (req, res) => {
        model.users.findAll()
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
            name,
            email,
            gender,
            phoneNumber
        } = req.body;

        model.users.create({
            name,
            email,
            gender,
            phone_number: phoneNumber
        }).then((data) => {
            res.status(200).send({
                'status': 'success',
                'messages': 'User berhasil ditambahkan',
                'data': data
            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': {},
        }))
    }
}
const model = require('../models')
const bcrypt = require('bcrypt');
// const salt = bcrypt.genSaltSync(10);
const Users = model.Users;
const Roles = model.Roles;

module.exports = {
    getAllUsers: (req, res) => {
        Users.findAll({
            include: [{
                model: Roles,
            }]
        })
            .then((data) => {
                res.status(200).send({
                    'status': 'success',
                    'messages': '',
                    'data': data
                });
            }
            ).catch((error) =>
                res.status(400).send({
                    'status': 'error',
                    'messages': error.messages,
                    'data': error
                })
            );


    },
    // postUser: (req, res) => {
    //     const {
    //         username,
    //         email,
    //         password,
    //         phone_number,
    //         id_card_number,
    //         full_name,
    //         address
    //     } = req.body;
    //     var hashPassword = bcrypt.hashSync(password, salt)
    //     model.users.create({
    //         username,
    //         email,
    //         password: hashPassword,
    //         phone_number,
    //         id_card_number,
    //         full_name,
    //         address
    //     }).then((data) => {
    //         res.status(200).send({
    //             'status': 'success',
    //             'messages': 'User berhasil ditambahkan',
    //             'data': data
    //         });
    //     }).catch((error) => res.status(400).send({
    //         'status': 'error',
    //         'messages': error.message,
    //         'data': error.errors,
    //     }))
    // }
}
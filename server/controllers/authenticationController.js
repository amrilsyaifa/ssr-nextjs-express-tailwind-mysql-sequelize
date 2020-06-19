var jwt = require('jsonwebtoken');
var bcrypt = require('bcrypt');
require('dotenv').config()

const model = require('../models')
var salt = bcrypt.genSaltSync(10);
var secret = process.env.SECRET

module.exports = {
    login: (req, res) => {
        const {
            email,
            password,
        } = req.body;
        const passwordFromBody = password
        model.users.findOne({ where: { email } })
            .then((datas) => {
                if (datas) {
                    const {
                        id,
                        username,
                        email,
                        password,
                        phone_number,
                        id_card_number,
                        full_name,
                        address } = datas
                    var hash = datas.password;
                    var token = jwt.sign({
                        id,
                        username,
                        email,
                        password,
                        phone_number,
                        id_card_number,
                        full_name,
                        address
                    }, secret);
                    var cek = bcrypt.compareSync(passwordFromBody, hash);
                    if (cek) {
                        res.status(200).send({
                            'status': 'success',
                            'messages': '',
                            'token': token,
                            'data': datas,

                        });
                    } else {
                        res.status(402).send({
                            'status': 'error',
                            'messages': 'username or password not match',
                            'data': {}
                        });
                    }
                } else {
                    res.status(402).send({
                        'status': 'error',
                        'messages': 'Empty data',
                        'data': []
                    });
                }


            }).catch((error) => res.status(400).send({
                'status': 'error',
                'messages': error.messages,
                'data': {}
            }));
    },
    register: (req, res) => {
        const {
            username,
            email,
            password,
            phone_number,
            id_card_number,
            full_name,
            address,
            latitude,
            longitude
        } = req.body;
        var hashPassword = bcrypt.hashSync(password, salt)

        model.users.create({
            username,
            email,
            password: hashPassword,
            phone_number,
            id_card_number,
            full_name,
            address,
            latitude,
            longitude
        }).then((data) => {
            var token = jwt.sign({
                id: data.id,
                username,
                email,
                password,
                phone_number,
                id_card_number,
                full_name,
                address
            }, secret);
            res.status(200).send({
                'status': 'success',
                'messages': 'User berhasil ditambahkan',
                'token': token,
                'data': data,

            });
        }).catch((error) => res.status(400).send({
            'status': 'error',
            'messages': error.message,
            'data': error.errors,
        }))
    }
}
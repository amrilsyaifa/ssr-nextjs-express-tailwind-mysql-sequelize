require('dotenv').config()
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const salt = bcrypt.genSaltSync(10);
const moment = require('moment');

const model = require('../models')
const { sendEmailConfig } = require('../helper/email')
const secret = process.env.SECRET
const emailFromENV = process.env.EMAIL;
const Users = model.Users;
const Roles = model.Roles;
const UsersRoles = model.UsersRoles;


module.exports = {
    login_with_email: (req, res) => {
        const {
            email,
            password,
        } = req.body;
        const passwordFromBody = password
        Users.findOne({
            where: { email }, include: [{
                model: Roles,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
            .then((datas) => {
                if (datas) {
                    const {
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address } = datas
                    var hash = datas.password;
                    var token = jwt.sign({
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address
                    }, secret, { expiresIn: '1d' });
                    var cek = bcrypt.compareSync(passwordFromBody, hash);
                    if (cek) {
                        var token_permanent = jwt.sign({
                            username: datas.username,
                            email: datas.email,
                            phone_number: datas.phone_number,
                            id_card_number: datas.id_card_number,
                            full_name: datas.full_name,
                            address: datas.address,
                            roles: datas.Roles
                        }, secret);
                        Users.update({ lastLogin: moment().format('YYYY-MM-DD, HH:mm:ss '), token_permanent }, { where: { id } }).then(() => {
                            Users.findOne({
                                where: { email }, include: [{
                                    model: Roles,
                                    attributes: ['id', 'name'],
                                    through: {
                                        attributes: []
                                    }
                                }]
                            }).then((dataFinish) => {
                                res.status(200).send({
                                    'status': 'success',
                                    'messages': '',
                                    'data': dataFinish,
                                    'token': token,

                                });
                            }).catch((error) => {
                                res.status(402).send({
                                    'status': 'error',
                                    'messages': error.messages,
                                    'data': {}
                                });
                            })

                        }).catch((error) => {
                            res.status(402).send({
                                'status': 'error',
                                'messages': error.messages,
                                'data': {}
                            });
                        })

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
    login_with_phone: (req, res) => {
        const {
            phone_number,
            password,
        } = req.body;
        const passwordFromBody = password
        Users.findOne({
            where: { phone_number }, include: [{
                model: Roles,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
            .then((datas) => {
                if (datas) {
                    const {
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address } = datas
                    var hash = datas.password;
                    var token = jwt.sign({
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address
                    }, secret, { expiresIn: '1d' });
                    var cek = bcrypt.compareSync(passwordFromBody, hash);
                    if (cek) {
                        var token_permanent = jwt.sign({
                            username: datas.username,
                            email: datas.email,
                            phone_number: datas.phone_number,
                            id_card_number: datas.id_card_number,
                            full_name: datas.full_name,
                            address: datas.address,
                            roles: datas.Roles
                        }, secret);
                        Users.update({ lastLogin: moment().format('YYYY-MM-DD, HH:mm:ss '), token_permanent }, { where: { id } }).then(() => {
                            Users.findOne({
                                where: { email }, include: [{
                                    model: Roles,
                                    attributes: ['id', 'name'],
                                    through: {
                                        attributes: []
                                    }
                                }]
                            }).then((dataFinish) => {
                                res.status(200).send({
                                    'status': 'success',
                                    'messages': '',
                                    'data': dataFinish,
                                    'token': token,

                                });
                            }).catch((error) => {
                                res.status(402).send({
                                    'status': 'error',
                                    'messages': error.messages,
                                    'data': {}
                                });
                            })

                        }).catch((error) => {
                            res.status(402).send({
                                'status': 'error',
                                'messages': error.messages,
                                'data': {}
                            });
                        })

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
    login_with_username: (req, res) => {
        const {
            username,
            password,
        } = req.body;
        const passwordFromBody = password
        Users.findOne({
            where: { username }, include: [{
                model: Roles,
                attributes: ['id', 'name'],
                through: {
                    attributes: []
                }
            }]
        })
            .then((datas) => {
                if (datas) {
                    const {
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address } = datas
                    var hash = datas.password;
                    var token = jwt.sign({
                        id,
                        username,
                        email,
                        phone_number,
                        id_card_number,
                        full_name,
                        address
                    }, secret, { expiresIn: '1d' });
                    var cek = bcrypt.compareSync(passwordFromBody, hash);
                    if (cek) {
                        var token_permanent = jwt.sign({
                            username: datas.username,
                            email: datas.email,
                            phone_number: datas.phone_number,
                            id_card_number: datas.id_card_number,
                            full_name: datas.full_name,
                            address: datas.address,
                            roles: datas.Roles
                        }, secret);
                        Users.update({ lastLogin: moment().format('YYYY-MM-DD, HH:mm:ss '), token_permanent }, { where: { id } }).then(() => {
                            Users.findOne({
                                where: { email }, include: [{
                                    model: Roles,
                                    attributes: ['id', 'name'],
                                    through: {
                                        attributes: []
                                    }
                                }]
                            }).then((dataFinish) => {
                                res.status(200).send({
                                    'status': 'success',
                                    'messages': '',
                                    'data': dataFinish,
                                    'token': token,

                                });
                            }).catch((error) => {
                                res.status(402).send({
                                    'status': 'error',
                                    'messages': error.messages,
                                    'data': {}
                                });
                            })

                        }).catch((error) => {
                            res.status(402).send({
                                'status': 'error',
                                'messages': error.messages,
                                'data': {}
                            });
                        })

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
    register: async (req, res) => {
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

        const emailRegistered = await Users.findOne({ where: { email } });

        if (emailRegistered === null) {
            var token_permanent = jwt.sign({
                username,
                email,
                phone_number,
                id_card_number,
                full_name,
                address,
                roles: [{
                    "id": 3,
                    "name": "Seller"
                }]
            }, secret);
            Users.create({
                username,
                email,
                password: hashPassword,
                phone_number,
                id_card_number,
                full_name,
                address,
                latitude,
                longitude,
                token_permanent
            }).then(async (data) => {

                await UsersRoles.create({ UserId: data.id, RoleId: 3 });

                Users.findOne({
                    where: { id: data.id }, include: [{
                        model: Roles,
                        attributes: ['id', 'name'],
                        through: {
                            attributes: []
                        }
                    }]
                })
                    .then((datas) => {
                        var token = jwt.sign({
                            id: datas.id,
                            username: datas.username,
                            email: datas.email,
                            phone_number: datas.phone_number,
                            id_card_number: datas.id_card_number,
                            full_name: datas.full_name,
                            address: datas.address,
                            roles: datas.Roles
                        }, secret, { expiresIn: '1d' });

                        res.status(200).send({
                            'status': 'success',
                            'messages': 'User berhasil ditambahkan',
                            'data': datas,
                            'token': token
                        });

                        const templateEmail = {
                            from: emailFromENV, // sender address
                            to: email,
                            subject: "[Diingat] Konfirmasi Pendaftaran Akun Diingat.",
                            template: 'register',
                            context: {
                                name: username,
                                url: 'https://www.google.com/'
                            }
                        };

                        sendEmailConfig(templateEmail)

                    }).catch((error) => res.status(400).send({
                        'status': 'error',
                        'messages': error.message,
                        'data': error.errors,
                    }))

            }).catch((error) => res.status(400).send({
                'status': 'error',
                'messages': error.message,
                'data': error.errors,
            }))
        } else {
            res.status(400).send({
                'status': 'error',
                'messages': 'Email registered',
                'data': '',
            })
        }


    },
    checkUserActive: async (req, res) => {
        const bearerHeader = req.headers['authorization'];
        if (bearerHeader) {
            const bearer = bearerHeader.split(' ');
            const bearerToken = bearer[1];
            const {
                email
            } = req.body;
            Users.findOne({
                where: { email }, attributes: ['id', 'token_permanent'],
            }).then((token) => {
                if (token.token_permanent === bearerToken) {
                    res.status(200).send({
                        'status': 'success',
                        'messages': 'Token berhasil ditemukan',
                        'data': token,

                    });
                } else {
                    res.status(400).send({
                        'status': 'error',
                        'messages': 'Token is already in use',
                        'data': '',

                    });
                }

            }).catch((error) => res.status(400).send({
                'status': 'error',
                'messages': error.message,
                'data': error.errors,
            }))
        } else {
            res.status(400).send({
                'status': 'error',
                'messages': 'Not token provided',
                'data': '',
            })
        }
    }
}
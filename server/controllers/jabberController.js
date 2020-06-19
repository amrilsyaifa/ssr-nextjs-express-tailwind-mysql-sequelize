require('dotenv').config()
var xmpp = require('simple-xmpp');
const Jabbers = require('../models').jabbers
var getAuth = require('../helper/getAuth')


module.exports = {
    getJabber: (req, res) => {
        Jabbers.findAll({})
            .then((datas) => {
                res.status(200).send({
                    'status': 'success',
                    'messages': '',
                    'data': datas
                });
            }).catch((error) => res.status(400).send({
                'status': 'error',
                'messages': error.messages,
                'data': { error }
            }));
    },
    postJabber: (req, res) => {
        getAuth(req.headers['authorization'], function (err, result) {
            if (err) {
                res.status(400).send({
                    'status': 'error',
                    'messages': error.message,
                    'data': {},
                })
            } else {
                const {
                    jid,
                    password,
                    host,
                    port
                } = req.body;
                Jabbers.create({
                    jid,
                    password,
                    host,
                    port,
                    userId: result.id
                }).then((data) => {
                    res.status(200).send({
                        'status': 'success',
                        'messages': '',
                        'data': data
                    });
                }).catch((error) => res.status(400).send({
                    'status': 'error',
                    'messages': error.message,
                    'data': {},
                }))
            }
        })

    },
    sendMessage: (req, res) => {
        const {
            to, message
        } = req.body;
        xmpp.send(to, message, false);
        res.status(400).send({
            'status': 'success',
            'messages': 'message sent',
            'data': ''
        });

    }
}
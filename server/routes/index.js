
var express = require('express');
var router = express.Router();
var verifyToken = require('../middleware/verifyToken');
const userController = require('../controllers/userController')
const authenticationController = require('../controllers/authenticationController')
const jabberController = require('../controllers/jabberController')
const emailController = require('../controllers/emailController')


// route here
router.post('/register', authenticationController.register);
router.post('/login', authenticationController.login);

router.get('/users', verifyToken, userController.getAllUsers);
router.post('/user', verifyToken, userController.postUser);

router.get('/jabbers', verifyToken, jabberController.getJabber);
router.post('/jabber', verifyToken, jabberController.postJabber);

router.post('/send-message', verifyToken, jabberController.sendMessage);

router.post('/send-email', verifyToken, emailController.sendEmail);

module.exports = router;
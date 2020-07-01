
var express = require('express');
var router = express.Router();
var VerifyToken = require('../middleware/VerifyToken');
const UserController = require('../controllers/UserController')
const AuthenticationController = require('../controllers/AuthenticationController')
const RolesController = require('../controllers/RolesController')
const OTPController = require('../controllers/OTPController')


// route here
router.get('/users', VerifyToken, UserController.getAllUsers);

router.post('/register', AuthenticationController.register);
router.post('/login-with-email', AuthenticationController.login_with_email);
router.post('/login-with-phone', AuthenticationController.login_with_phone);
router.post('/login-with-username', AuthenticationController.login_with_username);

router.post('/add-roles', RolesController.addRoles);

router.post('/generate-otp-auth', VerifyToken, OTPController.generateOTP);
router.post('/validate-otp-auth', VerifyToken, OTPController.validateOTP);

router.post('/check-user-active', VerifyToken, AuthenticationController.checkUserActive);



module.exports = router;
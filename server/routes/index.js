
var express = require('express');
var router = express.Router();
var VerifyToken = require('../middleware/VerifyToken');
const UserController = require('../controllers/UserController')
const AuthenticationController = require('../controllers/AuthenticationController')
const RolesController = require('../controllers/RolesController')
const OTPController = require('../controllers/OTPController')
const ProductController = require('../controllers/ProductController')


// route here

//authentication
router.post('/register', AuthenticationController.register);
router.post('/login-with-email', AuthenticationController.login_with_email);
router.post('/login-with-phone', AuthenticationController.login_with_phone);
router.post('/login-with-username', AuthenticationController.login_with_username);

//users
router.get('/users', VerifyToken, UserController.getAllUsers);

//roles
router.post('/add-roles', VerifyToken, RolesController.addRoles);

//OTP
router.post('/generate-otp-auth', VerifyToken, OTPController.generateOTP);
router.post('/validate-otp-auth', VerifyToken, OTPController.validateOTP);

//check user active
router.post('/check-user-active', VerifyToken, AuthenticationController.checkUserActive);

//product
router.post('/product', VerifyToken, ProductController.createProduct);
router.get('/product', VerifyToken, ProductController.findAllProduct);
router.put('/product', VerifyToken, ProductController.updateProduct);
router.delete('/product', VerifyToken, ProductController.deleteProduct);
router.get('/product-find-one', VerifyToken, ProductController.findOneProduct);

//product type
router.post('/product-type', VerifyToken, ProductController.createProductType);
router.get('/product-type', VerifyToken, ProductController.findAllProductType);
router.put('/product-type', VerifyToken, ProductController.updateProductType);
router.delete('/product-type', VerifyToken, ProductController.deleteProductType);
router.get('/product-type-find-one', VerifyToken, ProductController.findOneProductType);

//product details
router.post('/product-details', VerifyToken, ProductController.createProductDetail);
router.get('/product-details', VerifyToken, ProductController.findAllProductDetail);
router.put('/product-details', VerifyToken, ProductController.updateProductDetail);
router.delete('/product-details', VerifyToken, ProductController.deleteProductDetail);
router.get('/product-details-find-one', VerifyToken, ProductController.findOneProductDetail);

module.exports = router;
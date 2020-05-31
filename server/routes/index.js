
var express = require('express');
var router = express.Router();
const userController = require('../controllers/userController')

// route here
router.get('/shows', userController.getAllUsers);
router.post('/shows', userController.postUser);

module.exports = router;
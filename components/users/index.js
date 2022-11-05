var express = require('express');
var router = express.Router();
const usersController = require('./usersController');

router.get('/profile', usersController.profile);

router.post('/register', usersController.register);

router.post('/login', usersController.login);
module.exports = router;

var express = require('express');
var app = express();

var AuthController = require('../auth/AuthController');
app.use('/api/auth', AuthController);

var UserController = require('../control/UserController');
app.use('/users', UserController);

module.exports = app;
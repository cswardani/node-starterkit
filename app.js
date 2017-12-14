var express = require('express');
var app = express();
var db = require('./app/db/db');

var mainroutes = require('./app/routes/main-routes');
app.use('/', mainroutes);

module.exports = app;
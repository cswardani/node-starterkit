var app = require('./app');

//configure the API domain
//var domain = '10.14.206.217';
var domain = '127.0.0.1';

// Configure the API port
var port = 8080;

var server = app.listen(port, domain, function() {
  console.log('Express server listening on ' + domain + ':' + port);
});
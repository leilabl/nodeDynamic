var router = require('./router.js');

var http = require('http');
var https = require('https');
var router = require('./router.js');

http.createServer(function(request, response) {
  router.home(request, response);
  router.user(request, response);
}).listen(3000);
console.log('Server running');


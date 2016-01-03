//check out github.com/expressjs/morgan
//create a logger.js outside with app.js
module.exports = function (req, res, next) {
  // body...
  var start = +new Date();
  //standard output is a writeable stream that can access
  var stream = process.stdout;
  var url = req.url;
  var method = req.method;

  res.on('finish', function(){
    var duration = +new Date - start;
    var message = method + ' to ' + url +
      '\ntook ' + duration + ' ms\n\n';

      stream.write(message);
  })

  next()
}

//in app.js
var express = require('express');
var app = express();
var logger = require('./logger');
app.use(logger);
app.use(express.static('public'));
app.listen(3000);

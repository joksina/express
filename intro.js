//npm install express
//to specify the version
//npm install express@4.9

var express = require('express');
//instance of the function express
var app = express();

//Get function creates a route and creates a http get request
app.get('/', function(request, response){
  //response.send('Hello World'); //using express API
  response.write('Hello World'); // using node
  response.end(); // using node by ending the write function
});
app.listen(3030, function(){
  console.log('listening on port 3030');
});

//to run this
//node intro.js

//to issue the app
//curl http://localhost:3000/

//Responding with JSON
//this converts objects and arrays to JSON
app.get('/blocks', function(request, response) {
  var blocks = ['fixed', 'movable', 'heavy'];
  response.send(blocks);
  //OR
  response.json(blocks);
});

//curl -i http://localhost:3000/blocks
//the above code prints out the statuscode, and the content type of application/json

//Responding with html
app.get('/blocks', function(request, response) {
  var blocks = '<ul><li>fixed</li><li>movable</li></ul>';
  response.send(blocks);
  //OR
  response.json(blocks);
});
//the above code prints out the statuscode, and the content type of text/html

//Redirecting the Path and set the status code to move permanently
app.get('/blocks', function(request, response) {
  response.redirect(301, '/parts');
});
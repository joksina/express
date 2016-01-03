var express = require('express');
var app = express();
//app.use(express.static('public'));

app.get('/blocks', function(request, response) {
  var blocks = ['fixed', 'movable', 'heavy'];
  if(request.query.limits >= 0){
    //return a portion of the array using slice
    response.json(blocks.slice(0, request.query.limits));
  } else {
  response.json(blocks);
  }
});
app.listen(3000);

//query strings parameter... setting limits
//to run this
//curl http://localhost:3000/blocks?limit=1

//creating dynamic path
var express = require('express');
var app = express();
//app.use(express.static('public'));

var blocks = {
  'fixed': 'fastened securely',
  'movable': 'can be moved',
  'heavy': 'very heave'
};

app.get('/blocks:name', function(request, response) {
  var description = blocks[request.params.name]
  if(!description){
    //return an error if the description is not found
    //curl -i http://localhost:3000/blocks/banana
    response.status(404).json('No description found for ' + request.params.name);
  } else {
  response.json(description);
  }
});
app.listen(3000);
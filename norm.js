var blocks = {
  'fixed': 'fastened securely',
  'movable': 'can be moved',
  'heavy': 'very heave'
};

app.get('/blocks:name', function(request, response) {
  var name = request.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  var description = blocks[block];
  if(!description){
    //return an error if the description is not found
    //curl -i http://localhost:3000/blocks/banana
    response.status(404).json('No description found for ' + request.params.name);
  } else {
  response.json(description);
  }
});
app.listen(3000);

//app.params is useful for precondition on dynamic routes
var location = {
  'fixed': 'First floor',
  'movable': 'lobby',
  'heavy': 'kitchen'
};
app.param('name', function(request, response, next) {
  var name = request.params.name;
  var block = name[0].toUpperCase() + name.slice(1).toLowerCase();
  var description = blocks[block];
  if(!description){
    //return an error if the description is not found
    //curl -i http://localhost:3000/blocks/banana
    response.status(404).json('No description found for ' + request.params.name);
  } else {
  response.json(description);
  }
  request.blockName = block;
  next();
});
app.listen(3000);
//index.html in public folder
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <title>Building Blocks </title>
</head>
<body>
  <h1> Blocks </h1>
  <p><img src='blocks.png'></p>
  <ul class="block-list"> </ul>
  <script src='jquery.js'> </script>
  <script src='client.js'> </script>
</body>
</html>

//app.js
var express = require('express');
var app = express();

//__dirname returns the current part of the file
app.get('/', function(req, res) {
  res.sendFile(__dirname + '/public/index.html');
});

app.listen(3000);

//Mounting middleware instead of above code
//static defaults to serve the index.html
var express = require('express');
var app = express();
app.use(express.static('public'));
app.listen(3000);

//loading data from express using ajax
//in client.js all this will be in public folder except app.js
$(function(){
  $get('/blocks', appendToList);

  function appendToList(blocks) {
    var list = [];
    for(var i in blocks) {
      list.push($('<li>', {text: blocks[i]}))
    }
    $('.block-list').append(list);
  }
});

//in app.js
app.get('/blocks', function(request, response) {
  var blocks = ['fixed', 'movable', 'heavy'];
  response.json(blocks);
});

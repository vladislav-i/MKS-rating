var express = require('express');
var bodyParser = require('body-parser');
var data = require('./data/data.js');

var app = express();

app.use(express.static(__dirname + '/../Client'));
app.use(express.static(__dirname + '/../node_modules'));
app.use(bodyParser.json());

app.get('/data', function(req, res) {
  console.log('GET:', req.path, req.params);
  res.send(data);
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

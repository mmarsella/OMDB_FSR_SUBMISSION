var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require("path");
// var db = require("./models");
var methodOverride = require("method-override");
var morgan = require("morgan");

app.set('view engine', 'ejs');
app.use(methodOverride('_method'));
//server-side logger.  Logs requests to the terminal
app.use(morgan('tiny'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static(__dirname + '/public'));



app.use('/css',express.static(path.join(__dirname, '../client/css')));
app.use('/js',express.static(path.join(__dirname, '../client/js')));
app.use('/templates',express.static(path.join(__dirname, '../client/templates')));


app.use('/api/movies');


app.get('*', function(req,res){
  res.sendFile(path.join(__dirname, '../client', 'index.html'));
});

// start the server
app.listen(3000, function () {
  console.log("Starting a server on localhost:3000");
  });

module.exports = app;
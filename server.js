// server.js
// load the things we need
var express = require('express');
var app = express();

var path = require('path');
var expressLayouts = require('express-ejs-layouts');

app.set('views', path.join(__dirname, 'views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// defaults to 'layout' '
app.set('layout', 'layout');
// use res.render to load up an ejs view file

// Serve static files----------------------
// http://expressjs.com/api.html#app.use#
app.use(express.static('static'));
app.use(expressLayouts);

// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 8080));


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
	res.render('pages/index.ejs', { title: "Index"});
});

app.listen(8080);
console.log('8080 es el puerto mágico :3');


// var server = app.listen(8080, function () {
//   var host = server.address().address;
//   var port = server.address().port;

  // console.log('Corriendo en la dir:port == http://10.6.128.92:8080', host, port);
  console.log("Corriendo en la dir:port ==:" + app.get('port'));
// });

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
app.use(express.static('.'));
app.use(expressLayouts);

// Luego la consultamos con app.get('port')
app.set('port', (process.env.PORT || 8080));

/*
* body-parser is a piece of express middleware that
* reads a form's input and stores it as a javascript
* object accessible through `req.body`
*
* 'body-parser' must be installed (via `npm install --save body-parser`)
* For more info see: https://github.com/expressjs/body-parser
*/
// instruct the app to use the `bodyParser()` middleware for all routes
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
// A browser's default method is 'GET', so this
// is the route that express uses when we visit
// our site initially.
app.get('/', function(req, res){
	// The form's action is '/' and its method is 'POST',
	// so the `app.post('/', ...` route will receive the
	// result of our form
	res.render('body', { title: "form"});
});


// index page
// app.get('/', function(req, res) {
//     res.render('pages/index');
// });

// about page
// app.get('/about', function(req, res) {
//     res.render('pages/about');
// });

// This route receives the posted form.
// As explained above, usage of 'body-parser' means
// that `req.body` will be filled in with the form elements
app.post('/', function(req, res){
	var userName = req.body.userName;
	res.render('greet', {userName: userName, title: 'greet'});
});
app.listen(8080);
console.log('8080 es el puerto mágico :3');

app.get('/', function (req, res) {
  res.send('Hello World!');
});

// var server = app.listen(8080, function () {
//   var host = server.address().address;
//   var port = server.address().port;

  // console.log('Corriendo en la dir:port == http://10.6.128.92:8080', host, port);
  console.log("Corriendo en la dir:port ==:" + app.get('port'));
// });

// server.js
// load the things we need
var express = require('express');
var app = express();

var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var Temperatura = require("./static/js/temperatura.js");

app.set('views', path.join(__dirname, 'views'));

// set the view engine to ejs
app.set('view engine', 'ejs');

// defaults to 'layout' '
app.set('layout', 'layout');
// use res.render to load up an ejs view file

// app.use(express.static('static'));
app.use(express.static('.'));
app.use(expressLayouts);

app.set('port', (process.env.PORT || 8080));

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function(req, res){
	res.render('pages/index.ejs', { title:"Conversor de Temperatura", result: " "});
});


app.post('/', function(req, res){
	var temper = new Temperatura(req.body.original);
	var respuesta = temper.calcular();
	// res.render('pages/index.ejs', { title: "Index"});
	res.render('pages/index.ejs',{title:"Conversor de Temperatura", result: "Temperatura convertida ="+respuesta});
});
app.listen(8080);
console.log('8080 es el puerto mágico :3');


//  var server = app.listen(8080, function () {
// var host = server.address().address;
//   var port = server.address().port;
//
//   // console.log('Corriendo en la dir:port == http://10.6.128.92:8080', host, port);
   console.log("Corriendo en la localhost:port ==:" + app.get('port'));
//  });

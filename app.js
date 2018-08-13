// Require Packages

const express 			= require('express'),
	  sassMiddleware	= require('node-sass-middleware')
	  path				= require('path');


//Require Route Files
const indexRoutes		= require('./routes/index');

//Init Express
const app = express();

//Configure Express
app.use(sassMiddleware({
	src:  __dirname + '/sass',
	dest: __dirname + '/public',
	debug: true
}))
app.set("view engine","ejs");
app.use(express.static(__dirname + '/public'));

//Load Routes
app.use(indexRoutes);

app.listen('8080','127.0.0.1', () => console.log('Aviation Project --- Node.js / Express Server successfully started'));


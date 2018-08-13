// Require Packages

const express 			= require('express'),
	  sassMiddleware	= require('node-sass-middleware')
	  bodyparser		= require('body-parser'),
	  mongoose			= require('mongoose'),
	  passport			= require('passport'),
	  localStrategy		= require('passport-local'),
	  methodOverride	= require('method-override'),
	  expressSession	= require('express-session');


//Require Route Files
const indexRoutes		= require('./routes/index');

//Initialize Mongo DB

mongoose.connect('mongodb://localhost:27017/avdb',{useNewUrlParser: true});

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
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodOverride("_method"));


//Load Routes
app.use(indexRoutes);

app.listen('8080','127.0.0.1', () => console.log('Aviation Project --- Node.js / Express Server successfully started'));


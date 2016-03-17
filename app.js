/*
*	Importing required modules in app.js
*/
var express = require('express'),
	path = require('path'),
	bodyParser = require('body-parser'),
	fController = require('./server/controller/friendzoneCtrl'),
	multer  = require('multer'),
	app = express();

const dest = './client/images/';

var server = require('./server')(app);

/*
*	Configuring multer for acessing form data and file name/upload in a specific destination.
*/
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, dest)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now()+'_'+file.originalname)
  }
});

var upload = multer({ storage: storage });

/*
*	Built-in middleware express.static for making files such as images/css/js accessable
*/
	app.use(express.static('client/'));
	app.use(express.static('dist/'));
	app.use(express.static('node_modules'));
	
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: false }));

/*
*   Middleware to set request header. Added manually. Next method is called to jump into next middleware function
*/
		app.use(function(req, res, next){
		  res.set('X-Powered-By', 'Friend Zone Application');
		  next();
		});


//Render landing page
app.get('/', function(req, res){
	res.sendFile(__dirname + '/server/landingPage.html');
});
app.get('/api/user.json', fController.retrieveUsers);
app.post('/api/user.json', upload.single('file'), fController.saveUser);

/*
*	Handling incoming http request
*/



/*
*	Error Handler. Development error handler.
*/
if (app.get('env') === 'development') {
		  app.use(function(err, req, res, next) {
		  	console.log(err);
			res.status(err.status || 500);
			res.render('error', {
			  message: "Currently we are experiencing technical difficulties. Please try after some time.",
			  error: err
			});
		  });
}


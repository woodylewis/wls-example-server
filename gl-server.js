var express	= require('express');
var app	= express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
var mongoose = require('mongoose');
//---- Replace with real credentials -------
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@mongodb_instance');
//---- Local dev instance
//mongoose.connect('mongodb://localhost/api');

//var Stock = require('./app/models/stock');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var port = 7100;

var router = express.Router();

//----- LOG EVENTS ------------
router.use(function(req, res, next) {
	console.log('An Event');
	next();
});

//----- TEST ROUTE ------------
router.get('/', function(req, res, next){
	res.json({ message: 'TEST RESPONSE'});
});
//----- REGISTER ROUTES ----------
app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port);

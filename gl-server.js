var express	= require('express');
var app	= express();
var bodyParser = require('body-parser');
var cors = require('cors');

app.use(cors());
var mongoose = require('mongoose');
//---- Replace with real credentials -------
//mongoose.connect('mongodb://<dbuser>:<dbpassword>@mongodb_instance');
mongoose.connect('mongodb://wls:~griOt99@ds043210.mongolab.com:43210/wls1');
//---- Local dev instance
//mongoose.connect('mongodb://localhost/api');

var Narration = require('./models/narration');

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

router.route('/narrations')
.get(function(req, res) {
	Narration.find().
			  sort('_id').
			  exec( function (err, narrations) {
			 	if(err) {
			 		res.send(err);
			 	}
			 	res.json(narrations);
			 });
});

router.route('/new') 
.post(function(req, res, next) {
	//res.json({message: req.body.alpha});
	var title = req.body.alpha;
	console.log(req.body);

	var narration = new Narration();
	narration.title = req.body.alpha;
	narration.url = "/test-piece";
	narration.date = "09-04-2015";
	narration.body = "TEST COPY";

	narration.save(function (err) {
		if(err) {
			res.send(err);
		}
		res.json({message: 'Narration Created'});
	});

}), function(err) {
	if(err) {
		res.send(err);
	}
};

//----- REGISTER ROUTES ----------
app.use('/', router);

app.listen(port);
console.log('Listening on port ' + port);

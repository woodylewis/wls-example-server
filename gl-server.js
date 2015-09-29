var express	= require('express');
var app	= express();
var bodyParser = require('body-parser');
var cors = require('cors');

var foo = {
	one:'alpha',
	two:'beta'
}

var ex = require('example')(foo);
console.log('OUTSIDE - ', ex);

app.use(cors());
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

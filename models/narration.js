var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var NarrationSchema = new Schema ({
	title: String,
	url: String,
	date: Date,
	body: String
});

module.exports = mongoose.model('Narration', NarrationSchema);

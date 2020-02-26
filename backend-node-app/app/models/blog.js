var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var BlogSchema   = new Schema({
	id: String,
	post: String,
	title: String,
	approvedBy : String
});

module.exports = mongoose.model('Blog', BlogSchema);
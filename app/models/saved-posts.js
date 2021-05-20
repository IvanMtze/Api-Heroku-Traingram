// get an instance of mongoose and mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
require('mongoose-double')(mongoose);

// set up a mongoose model and pass it using
// module.exports

module.exports = mongoose.model('Saved-Posts', new Schema({
 post_id: String,
 owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Users'
 },
 date: { type: Date, default: Date.now }
}));

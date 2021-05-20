// get an instance of mongoose and mongo
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model and pass it using
// module.exports

module.exports = mongoose.model('Notifications-User', new Schema({
 title: String,
 description: String,
 date: {type:Date,default:new Date()},
 is_unread: {type:Boolean, default:true},
 owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
 },
}));

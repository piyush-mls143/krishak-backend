var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// set up a mongoose model
module.exports = mongoose.model('User', new Schema({
    firstname: String,
    lastname: String,
    email: String,
    phone: String,
    password: String,
    passwordConf: String,
    user_status: String,
    admin: Boolean,
}));
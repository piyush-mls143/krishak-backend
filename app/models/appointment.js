var mongoose = require('mongoose');
var Schema = mongoose.Schema;

appointmentSchema = new Schema({

    name: String, // column name name with data_type String
    petname: String,
    email: String,
    phone: String,
    date: String,
    time: String,
    message: String
});
appointment = mongoose.model('appointment', appointmentSchema); // Table name will be appointment

module.exports = appointment;
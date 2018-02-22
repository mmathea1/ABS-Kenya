var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    fname: {
        type: String,
        required: true,
        max: 100
    },
    lname: {
        type: String,
        required: true,
        max: 100
    },
    idno: {
        type: Number,
        required: true,
        max: 20
    },
    email: {
        type: Mixed,
        required: true,
        max: 100
    },
    mobile: {
        type: Number,
        required: true,
        max: 100
    },
    gender: {
        type: String,
        required: true,
        max: 100
    },
    country: {
        type: String,
        required: true,
        max: 100
    },
    password: {
        type: Mixed,
        required: true,
        max: 100
    },
});

//export model
module.exports = mongoose.model('signupmodel', UserSchema);

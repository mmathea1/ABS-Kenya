var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ApplicantSchema = new Schema({
    fname: {
        type: String,
        required: true,

    },
    lname: {
        type: String,
        required: true,

    },
    idnum: {
        type: Number,
        required: true,

    },
    email: {
        type: String,
        required: true,

    },
    mobile: {
        type: Number,
        required: true,

    },
    gender: {
        type: String,
        required: true,

    },
    country: {
        type: String,
        required: true,

    },
    pass: {
        type: String,
        required: true,
        max: 100
    }
});


//export module
var Applicant = mongoose.model('Applicant', ApplicantSchema);
module.exports = Applicant;

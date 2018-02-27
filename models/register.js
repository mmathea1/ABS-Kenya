var mongoose = require('mongoose');


var ApplicantSchema = new mongoose.Schema({
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

ApplicantSchema.pre('save', function (next) {
    var applicant = this;
    bcrypt.hash(applicant.pass, 10, function (err, hash) {
        if (err) {
            return next(err);
        }
        applicant.pass = hash;
        next();
    });

});

//export module
var Applicant = mongoose.model('Applicant', ApplicantSchema);
module.exports = Applicant;

var mongoose = require('mongoose');
Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
//resist brute-force attacks
//set default value explicitly
SALT_WORK_FACTOR = 10;


var LoginSchema = new Schema({
    email: {
        type: String,
        required: true,
        index: {
            unique: true
        }
    },

    pass: {
        type: String,
        required: true
    }
});
// always hash pass when document is saved to db
LoginSchema.pre('save', function (next) {
    var applicant = this;
    //hash password only when modified
    if (!applicant.isModified('pass')) return next();


    //generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function (err, salt) {
        if (err) return next(err);

        //hash pass with new salt
        bcrypt.hash(applicant.pass, salt, function (err, hash) {
            if (err) return next(err);

            //override cleartext pass
            applicant.pass = hash;
            next();
        });
    });
});

//password verification
LoginSchema.methods.comparePassword = function (applicantPassword, cb) {
    bcrypt.compare(applicantPassword, this.pass, function (err, isMatch) {
        if (err) return cb(err);
        cb(null, isMatch);
    });
};
module.exports = mongoose.model('OldApplicant', LoginSchema)

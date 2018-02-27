var express = require('express');
var path = require('path');
//require('express-session');

var Applicant = require('../models/register');
var oldApplicant = require('../models/login');
var bcrypt = require('bcrypt');
//create router object
var router = express.Router();

//export Router
module.exports = router;

router.get('/', function (req, res) {
    res.render('pages/index');
});

router.get('/info', function (req, res) {
    res.render('pages/info');
});

router.get('/register', function (req, res) {
    res.render('pages/register');
});

router.post('/register', function (req, res) {

    var applicant = new Applicant({
        fname: req.body.fname,
        lname: req.body.lname,
        email: req.body.email,
        idnum: req.body.idnum,
        mobile: req.body.mobile,
        gender: req.body.gender,
        country: req.body.country,
        pass: req.body.pass
    });
    applicant.save()
        .then(item => {
            res.send("Applicant has been saved");
        })
        .catch(err => {
            res.status(400).send("unable to save to db" + err);
        });
});

router.get('/login', function (req, res) {
    res.render('pages/login');
});

router.post('/login', function (req, res) {

    //fetch user
    var email = req.body.email;
    var pass = req.body.pass;

    Applicant.findOne({
        email: email
    }, function (err, applicant) {
        if (err) {
            return (err);
        } else if (!applicant) {
            var err = new Error('User not found!');
            err.status = 401;
            console.log(err);
        }
        bcrypt.compare(pass, Applicant.pass, function (err, result) {
            if (result === true) {
                return (null, applicant);
            } else {
                return "callback(something)";
            }
        });
    })

});

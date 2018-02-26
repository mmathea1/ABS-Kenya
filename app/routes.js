var express = require('express');
var path = require('path');

var Applicant = require('../models/register');

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

router.get('/signup', function (req, res) {
    res.render('pages/signup');
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

router.get('/signin', function (req, res) {
    res.render('pages/signin');
});

router.post('/signin', function (req, res) {
    res.send('Sign In sent!');
});

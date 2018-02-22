var express = require('express');
var path = require('path');

//create router object
var router = express.Router();

//export Router
module.exports = router;

router.get('/', function(req, res){
    res.render('pages/index');
});

router.get('/info', function(req, res){
    res.render('pages/info');
});

router.get('/signup', function(req, res){
    res.render('pages/signup');
});

router.post('/signup', function(req, res){
    res.send('Sign Up Sent!');
});

router.get('/signin', function(req, res){
    res.render('pages/signin');
});

router.post('/signin', function(req, res){
    res.send('Sign In sent!');
});

var express = require('express');
var explayout = require('express-ejs-layouts');
var mongoose = require('moongoose');
var app = express();
var port = 3000;

//express layouts
app.set('view engine', 'ejs');
app.use(explayout);


var router = require('./app/routes');
app.use('/', router);

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ABS_db');
mongoose.Promise = global.Promise;
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log('DB connected');
});

//static files
app.use(express.static(__dirname + '/public'));

//start server
app.listen(port, function () {
    console.log('App started');
})

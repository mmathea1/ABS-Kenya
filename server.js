var express = require('express');
var explayout = require('express-ejs-layouts');
var mongoose = require('moongoose');
var app = express();
var port = 3000;
var bodyparser = require('body-parser');
//parse user input,
//convert to json and send to db
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({
    extended: true
}));
//express layouts
app.set('view engine', 'ejs');
app.use(explayout);

//routing
var router = require('./app/routes');
app.use('/', router);


//connect to DB
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/ABS_db');
//handles fail or success on save
//returned when db completes
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
});

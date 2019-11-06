// import files and packages up here
const morgan = require('morgan');
const express = require('express');
const topSpots = require('./data.json');

// create your express server below
var app = express();
app.use(morgan('dev'));

// add your routes and middleware below
app.get('/', function(req, res){
    res.status(200).send('hello world!');
});

app.get('/data', function(req, res){
    res.status(200).send(topSpots);
});

// finally export the express application
module.exports = app;

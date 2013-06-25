var express = require('express');
var resource = require('express-resource-new');
var controller = require('./controllers');

var app = express();

app.configure(function(){
    app.set('views', __dirname + '/views');
    app.set('controllers', __dirname + '/controllers');
});

app.listen(8000);
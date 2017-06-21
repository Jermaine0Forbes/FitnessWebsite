var goose = require('mongoose');
var db = goose.connection;
var data = require('debug')('mongodb: ');
var dbURI = 'mongodb://localhost/fitness';
goose.connect(dbURI);

db.on('connected', function(){
    data("database connected");
});

db.on('error', function(err){
    data(err)
});

db.on('disconnected', function(){
    data("database disconnected");
});


require('./schema')

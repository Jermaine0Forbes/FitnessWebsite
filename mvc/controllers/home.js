var goose = require('mongoose');
var p = goose.model('Item');
var debug = require('debug');
var dg = debug('home:');
var defaultData = require('../../config/local');



module.exports.page = function(req,res){
    dg('hello world')
    console.log(defaultData.home);
    var data = defaultData.home;
    res.render('home', data);

}


exports.insert = function(req,res){
    dg('i am inside insert')
    res.render('insert');
}


module.exports.create = function(req,res){
    data = req.body;
    p.create(data, function(err, docs){
        if(err){
            throw err;
        }

        dg(docs.firstName+" has been created");
        res.redirect('/');
    })

}

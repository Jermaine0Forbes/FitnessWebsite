var goose = require('mongoose');
goose.Promise = require("bluebird");
var p = goose.model('Item');
var blog = goose.model('Blog');
var slide = goose.model('Slide');
var debug = require('debug');
var dg = debug('home:');
var defaultData = require('../../config/local');



module.exports.page = function(req,res){
    dg('hello world');
    var data = defaultData.home;
    blog.find({subject:"diet"})
        .limit(3)
        .exec()
        .then(function(docs){
            data.diet = docs;
            return blog.find({subject: "hot topics"}).limit(3);

        })
        .then(function(docs){
            data.hot = docs;
            return slide.find({}).limit(4);
        })
        .then(function(docs){
            data.slide = docs;

            res.render('home', data);
        })


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

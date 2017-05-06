var goose = require('mongoose');
var p = goose.model('Item');
var debug = require('debug');
var dg = debug('profile:');


module.exports.page = function(req,res){

    p.find({}, function(err,docs){
        if(err){
            throw err;
        }
        dg('page');
        res.render('profile', {profile:docs});
    })



}


module.exports.ajax = function(req,res){


    p.findOne({firstName:req.params.name , _id:req.params.id}, function(err, doc){
        if(err){
            throw err;
        }

        var name = doc.firstName+" "+doc.lastName;
        var body = doc.body;

         res.send( {body:body, name:name});
    })

}

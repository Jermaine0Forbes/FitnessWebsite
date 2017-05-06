var goose = require('mongoose');
var p = goose.model('Item');
var debug = require('debug');
var dg = debug('delete:');


exports.page = function(req,res){

    p.find({}, function(err,docs){
        if(err){
            throw err;
        }
        dg('page');
        res.render('delete', {profile:docs});
    })



}




exports.deletePerson = function(req,res){
    p.remove({firstName:req.params.name , _id:req.params.id}, function(err, doc){
        if(err){
            throw err;
        }
        dg(doc.firstName+" has been removed");
    });


}

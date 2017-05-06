var goose = require('mongoose');
var p = goose.model('Item');
var debug = require('debug');
var dg = debug('update:');
var f = require('../../config/functions');


module.exports.page = function(req,res){

    p.find({}, function(err,docs){
        if(err){
            throw err;
        }
        f.hello();
        dg('page');
        res.render('update', {profile:docs});
    })



}


module.exports.getPerson = function(req,res){


    p.findOne({firstName:req.params.name , _id:req.params.id}, function(err, doc){
        if(err){
            throw err;
        }


         res.send(doc);
    })

}

exports.putPerson = function(req,res){
    var updatedData = req.body;
    dg(updatedData);
    p.findOneAndUpdate({firstName:req.params.name , _id:req.params.id},updatedData, function(err, doc){
        if(err){
            throw err;
        }
        dg(doc.firstName+" has been updated");
    });


}

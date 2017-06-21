var goose = require('mongoose');
goose.Promise = require("bluebird");
var promise = require("bluebird");
<<<<<<< HEAD
var blog = goose.model('Blog');
var slide = goose.model('Slide');
// var debug = require('debug');
// var dg = debug('article');
=======
var p = goose.model('Item');
var blog = goose.model('Blog');
var slide = goose.model('Slide');
var debug = require('debug');
var dg = debug('article');
>>>>>>> d46a95594ee75be02adb89788bc25fe5ba871be0
var fun = require('../../config/functions');// GLOBAL FUNCTIONS
var defaultData = require('../../config/local'); // LOCAL VARIABLES



module.exports.page = function(req,res){
<<<<<<< HEAD
    // dg('page')
=======
    dg('page')
>>>>>>> d46a95594ee75be02adb89788bc25fe5ba871be0
    // console.log(req.params.name);
    var blogTitle = fun.decodeStr(req.params.name);
    // console.log(blogTitle);
    var data = defaultData.article;
    data.Title = blogTitle;
    blog.findOne({title:data.Title})
        .exec()
        .then(function(docs){
                if (docs == null || docs == "")
                {
                    return promise.reject();
                }
                data.art = docs;

                return blog.find({}).limit(4).sort("-updatedAt");
             }
            )
        .then(function(docs){
            data.side = docs;
            res.render("article", data);

        })
        .catch(function(err){
            var err = "Error: "+err;
             res.render('error/404',{msg:err});
            }

        )


}

module.exports.update = function(req, res){

    blog.find({})
}

var goose = require('mongoose');
goose.Promise = require("bluebird");
var promise = require("bluebird");
var blog = goose.model('Blog');
var slide = goose.model('Slide');
// var debug = require('debug');
// var dg = debug('article');
var fun = require('../../config/functions');// GLOBAL FUNCTIONS
var defaultData = require('../../config/local'); // LOCAL VARIABLES



module.exports.page = function(req,res){
    var $ = req.params, path = req.path;

    // console.log(blogTitle);
    var data = defaultData.article;
    blog.findOne({slug:$.slug, year:$.year, month:$.month})
        .select('title author date body image')
        .exec()
        .then(function(docs){
                if (docs == null || docs == "")
                {
                    return promise.reject();
                }
                data.art = docs;

                return blog.find({}).select('subject year month title slug').limit(4).sort("-updatedAt");
             }
            )
        .then(function(docs){
            data.side = docs;
            data.Title +=": "+data.art.title;
            res.render("article", data);

        })
        .catch(function(err){
            var err = "Error: "+err;
             data.msg = path;
             res.render('404',data);
            }

        )


}

module.exports.update = function(req, res){

    blog.find({})
}

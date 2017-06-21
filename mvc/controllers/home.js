var goose = require('mongoose');
goose.Promise = require("bluebird");
// var p = goose.model('Item');
var blog = goose.model('Blog');
var slide = goose.model('Slide');
// var debug = require('debug');
// var dg = debug('home:');
var defaultData = require('../../config/local');



module.exports.page = function(req,res){
    // dg('hello world');
    var hots,slides,diets;

    var data = defaultData.home;
    blog.find({subject:"diet"})
        .select('title image slug body shares comments month year')
        .limit(3)
        .exec()
        .then(function(docs){
            diets = docs;
            return blog.find({subject: "hot-topics"}).limit(3);

        })
        .then(function(docs){
            hots = docs;
            return slide.find({}).limit(4);
        })
        .then(function(docs){
            slides = docs;

            //
            // function dataToObject(data, object){
            //     var x = 0;
            //     for( var obj of object){
            //         //  console.log("data is "+ JSON.stringify(data))
            //           data[x]= obj.toObject();
            //         //   console.log("data with toObject "+ JSON.stringify(data))
            //         x++;
            //
            //     }
            //
            // }
            // var dataArr = [hot, slide, diet];
            // var objArr = [data.hot, data.slide, data.diet];
            // for (var x = 0 ; x < objArr.length ; x++){
            //
            //     dataToObject(dataArr[x], objArr[x]);
            //
            // }

            // hot = JSON.stringify(hot);
            // slide = JSON.stringify(slide);
            // diet = JSON.stringify(diet);
            // data = JSON.stringify(data);
            // console.log(` HOT!!!! ${hots}\n, SLIDE!!! ${slides}\n, DIET!!! ${diets}`);
            res.render('home', {hot:hots, slide:slides, diet:diets});

            // console.log(data)
            // res.render('home', data);
        })


}

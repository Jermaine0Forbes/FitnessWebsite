var goose = require('mongoose');
goose.Promise = require("bluebird");
var blog = goose.model('Blog');
var slide = goose.model('Slide');
var defaultData = require('../../config/local');



module.exports.page = function(req,res){
    var hots,slides,diets, error ={};
    error.Title = "404 page not found", error.path = req.path;


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
            res.render('home', {Title:"Welcome To Fitness", hot:hots, slide:slides, diet:diets});

            // console.log(data)
            // res.render('home', data);
        })
        .catch((err)=>{
            console.log(err);
            res.render('404', {Title:error.Title, msg:error.path})
        })

}

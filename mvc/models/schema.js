var goose = require('mongoose');
var schema = goose.Schema;

// var persons = new schema({
//     firstName:String,
//     lastName:String,
//     age:Number,
//     body:String
// },
// {timestamps: true}
// );

var blog = new schema({
    title: String,
    body: String,
    subject: String,
    link: String,
    comments:{type:Number , default:0},
    shares: {type:Number , default:0},
    image:String,
    author:String,
    date: String,
},
{timestamps:true}
);

var slide = new schema({
    image:String,
    title:String,
    body:String,
    link:String
});


   goose.model("Blog", blog);

   goose.model("Slide", slide);

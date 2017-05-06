var goose = require('mongoose');
var schema = goose.Schema;

var persons = new schema({
    firstName:String,
    lastName:String,
    age:Number,
    body:String
},
{timestamps: true}
);

   goose.model('Item', persons);

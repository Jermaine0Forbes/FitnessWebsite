require('./mvc/models/db');
var  express = require('express');
var  body = require('body-parser');
var cookie = require('cookie-parser');
var fs = require('fs');
var path = require('path');
var routes = require('./mvc/routes/router');
var ip = '10.132.38.98';
// var ip = '104.236.44.154';
var port = process.env.NODE || 8800;
var app = express();
var viewPath = path.join(__dirname,'mvc', 'views');


 // *** LIQUID CONFIGURATION ***
// var liquid = require('express-liquid');
// var options = {
//
// 	includeFile: function(filename,callback){
// 	 fs.readFile(filename, 'utf8', callback);
// 	},
// 	context: liquid.newContext(),
// 	customTags:{},
// 	traceError:false
// };
// app.set('view engine', 'liquid');
// app.engine('liquid', liquid(options));
// app.use(liquid.middleware);


// *** NUNJUCKS CONFIGURATION ***
var jucks = require('nunjucks');
jucks.configure(viewPath,{
    autoescape:false,
    express:app

})
app.engine('html', jucks.render);
app.set('view engine', 'html');


app.set('views',viewPath );
app.use(express.static(path.join(__dirname,'public')));
app.use(body.json());
app.use(body.urlencoded({extended:false}));
app.use(cookie());

app.use('/', routes);

app.use(function(req,res,next){
	if(res.status(404)){
	  res.render('error/404');
	}
});

app.use(function(err,req,res){
  if(err){
	  var title = err;
    res.render('error/500',{errTitle:title});
  }
})

app.listen(port, ip, function(){
  // console.log(process.env)
  console.log("Server connected to port "+port)
})

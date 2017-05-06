require('./mvc/models/db');
var  express = require('express');
var  body = require('body-parser');
var cookie = require('cookie-parser');
var liquid = require('express-liquid');
var fs = require('fs');
var path = require('path');
var routes = require('./mvc/routes/router');
var app = express();
var options = {

	includeFile: function(filename,callback){
	 fs.readFile(filename, 'utf8', callback);
	},
	context: liquid.newContext(),
	customTags:{},
	traceError:false
};
var ip = '10.132.101.140';
var port = process.env.NODE || 8000;

app.set('view engine', 'liquid');
app.engine('liquid', liquid(options));
app.use(liquid.middleware);
app.set('views', path.join(__dirname,'mvc', 'views'));
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
  console.log("Server connected to port "+port)
})

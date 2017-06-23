var express = require('express');
var route = express.Router();
var home = require('../controllers/home');
var article = require('../controllers/article');
var profile = require('../controllers/profile');

route.get('/', home.page);

route.get('/test', function(req,res){
    res.render('test',{ test:"this is a test"})
})

// ARTICLES FOR TOPICS LIKE HOT TOPICS, DIET, ETC

route.get('/diet/:year/:month/:slug',article.page);
route.get('/hot-topics/:year/:month/:slug',article.page);

route.get("/articles", article.update);



// route.get('/profile', profile.page);
// route.get('/:name/:id', profile.ajax);



module.exports = route;

var express = require('express');
var route = express.Router();
var home = require('../controllers/home');
var article = require('../controllers/article');
var profile = require('../controllers/profile');

route.get('/', home.page);



// ARTICLES FOR TOPICS LIKE HOT TOPICS, DIET, ETC

route.get('/hot-topics/:name',article.page);
route.get('/diet/:name',article.page);
route.get("/articles", article.update);



route.get('/profile', profile.page);
route.get('/:name/:id', profile.ajax);



module.exports = route;

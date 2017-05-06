var express = require('express');
var route = express.Router();
var home = require('../controllers/home');
var profile = require('../controllers/profile');
var update = require('../controllers/update');
var del = require('../controllers/delete');

route.get('/', home.page);

route.get('/insert', home.insert);
route.post('/insert', home.create);

route.get('/profile', profile.page);
route.get('/:name/:id', profile.ajax);



route.get('/update', update.page);
route.get('/get/:name/:id', update.getPerson);
route.put('/put/:name/:id', update.putPerson);


route.get('/delete', del.page);
route.delete('/delete/:name/:id', del.deletePerson);




module.exports = route;

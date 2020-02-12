const express = require('express');
const app = express();

const userRout = require('./user.js');

app.use('/user', userRout);

app.use(function(req, res, next){
	console.log('!!!');
	res.send('Hello');
});

/*app.get('/user', function(req, res, next){
   res.send('User');
   next();
});

app.use(function(req, res, next){
   console.log('!!!');
   res.send('Hello');
});*/

/*
с указанием маршрута
app.use('/user', function(req, res, next){
   res.send('User');
});

app.use('/', function(req, res, next){
   res.send('Hello');
});
*/

/*
без указания маршрута
app.use(function(req, res, next){
    console.log('Time: ', Date.now());
    next();
});

app.use(function(req, res, next){
    res.send('User');
});*/

app.listen(8080);

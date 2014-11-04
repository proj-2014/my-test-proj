
var express = require('express');
var config = require('./config');

var site = require('./controllers/site');
var user = require('./controllers/user');
var sign = require('./controllers/sign');



var router = express.Router();

router.get('/', site.index);


if(config.allow_sign_up){
	router.get('/signup', sign.showSignup);
	//router.post('/signup', sign.signup);
}

router.get('/user/:name', user.index);



module.exports = router;
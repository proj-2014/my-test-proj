
var config = require('../config');

var User = require('../proxy').User;

exports.index = function (req, res, next){
	var user_name = req.params.name;
	res.send('hello ' + user_name);
	//res.send('Hello ABC');
}
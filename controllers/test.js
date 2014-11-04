
var config = require('../config.js');
var User = require('../models/mysql-test');

exports.test1 = function (req, res){
	console.log('get the test1 for test router');
	res.send('this is test1 for test router');
}

exports.test2 = function (req, res){
	res.render('test.html', {'input': 'test by nunjucks'});
	
}

exports.test3 = function (req, res){
	
	tmp = {items: [{
        'title': 'Facebook',
        'body': 'Facebook is a social utility that connects people with friends and others who work, study and live around them.'
    }, {
        'title': 'Twitter',
        'body': 'Twitter is an online social networking and microblogging service that enables users to send and read "tweets", which are text messages limited to 140 characters.'
    }, {
        'title': 'LinkedIn',
        'body': 'LinkedIn is a social networking website for people in professional occupations.'
    }]
	};
	
	return res.render('test-flask.html',tmp);
}

exports.index = function (req, res){
	
	res.render('test-ajax.html', {page_name: 'abc'});
}
exports.ajaxTest = function (req, res){
	
    var videoObject = {
        id     : 'vid01',
        title  : 'Erin Brockovich',
        length : 98,
        views  : 1203
    };

    // res.json is just a shortcut for setting up the content-type, length and
    // so on for returning a JSON formatted response.
    res.json(videoObject);
}

exports.mysqlTest = function(req, res){
	/*
	app.get('/users/:userid',function(req,res){
	 */
    var userid = req.params.userid;
    var user = new User();
    user.find(userid,function(err,result){
        if(err){
            res.send('not found');
        }
        res.send(result.length === 1 ? result[0]:result);
    });
   
}
	

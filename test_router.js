
var express = require('express');

var config = require('./config');
var test = require('./controllers/test');

var router = express.Router();


router.get('/1', test.test1);
router.get('/2', test.test2);
router.get('/flask', test.test3);

router.get('/', test.index);
router.get('/ep/grabjsondata', test.ajaxTest);
router.post('/ep/grabjsondata', test.ajaxTest);

router.get('/user/:userid', test.mysqlTest);



module.exports = router;
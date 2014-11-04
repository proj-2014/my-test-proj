
var express = require('express');

var userAPI = require('./api/user');

var router = express.Router();

router.get('/api/user/:loginname', userAPI.show);

module.exports = router;
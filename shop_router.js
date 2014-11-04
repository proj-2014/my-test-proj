
var express = require('express');

var router = express.Router();

var shop = require('./controllers/shop');

router.get('/', shop.index);

module.exports = router;




var config = require('./config');

var path = require('path');
var express = require('express');
var session = require('express-session');
var nunjucks = require('nunjucks');

require('./models');
var webRouter = require('./web_router');


var bodyParser = require('body-parser');




var urlinfo = require('url').parse(config.host);
config.hostname = urlinfo.hostname || config.host;

var app = express();

// configuration for env
//app.set('views', path.join(__dirname, 'views'));
// 设置模板  ... 
// .......
//var env = new nunjucks.Environment( new nunjucks.FileSystemLoader(['public/tpl', 'templates']));
//var env = new nunjucks.Environment( path.join(__dirname, 'views'));


var env = new nunjucks.Environment( new nunjucks.FileSystemLoader(['public/tpl', 'views']));
env.express( app );



//app.use(require('response-time')());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
/*
app.use(require('method-override')());
app.use(require('cookie-parser')(config.session_secret));
app.use(session({
    secret: config.session_secret,
    store: new MongoStore({
        url:config.db
    }),
    resave: true;
    saveUninitialized: true,
}));
*/

var staticDir = path.join(__dirname,'public');
app.use('/static', express.static(staticDir));
var extDir = path.join(__dirname, 'public/ext');
app.use('/', express.static(extDir));


// routes
app.use('/', webRouter);


var testRouter = require('./test_router');
app.use('/test', testRouter);

var shopRouter = require('./shop_router');
app.use('/shop', shopRouter);



app.listen(config.port, function(){
    console.log("this site Base on Nodeclub, listening on port: %d in %s mode", config.port, app.settings.env);
});

module.exports = app;









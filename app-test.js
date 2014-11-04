

var mysql = require('mysql');

var connection = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    port: '3306',  
    database: 'nodedb'
});

connection.connect(function(err){
	if(err){     
	    console.log('[query] - :'+err);
        return;
     }

     console.log('[connection connect]  succeed!');
});

var  userAddSql = 'INSERT INTO userinfo(Id,UserName,UserPass) VALUES(0,"aa","bb")';
var  userAddSql_Params = ['Wilson', 'abcd'];

connection.query(userAddSql,userAddSql_Params,function (err, result) {

    if(err){
        console.log('[INSERT ERROR] - ',err.message);
    
    return;

    }       

console.log('--------------------------INSERT----------------------------');

console.log('INSERT ID:',result);       

console.log('-----------------------------------------------------------------');
});

connection.end();


var config = {
	
	debug: true,
	
	// 网站配置信息
	name: 'My E-Shop',
	descripton: '又一个电子商务网站',
	keywords: 'shop, node, express',
	
	site_static_host: '',
	host: 'localhost',
	
	allow_sign_up: true,
	
	// mongodb 配置
	db: 'mongodb://127.0.0.1/my_eshop_dev',
	db_name: 'my_eshop_dev',
	
	session_secret: 'my_eshop_secret',
	auth_cookie_name: 'my_eshop',
	
	port: 3000,	
	
	// mysql 配置
	mysql_dev: {
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'nodedb',
		connectionLimit: 10,
		supportBigNumbers: true		
	},
	
	blank4end: ''
	
}

module.exports = config;
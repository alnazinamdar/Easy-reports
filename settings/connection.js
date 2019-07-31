const mysql = require('mysql');

const mysql_connection = function(){
	console.log('Database is connected!');
	return mysql.createConnection({
			host:'localhost',
			user:'root',
			password:'',
			database:'easy_news'
	});
}

module.exports = function(){
	console.log('Autoloaded database connection module!');
	return mysql_connection;
}
		
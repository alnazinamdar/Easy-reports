const mysql = require('mysql');

const mysql_connection = function(){
	console.log('Database is connected!');
	return mysql.createConnection({
			host : 'localhost',
			port : 3306,
			user : 'root',
			password : '',
			database : 'mysql_base'
	});
}

module.exports = function(){
	console.log('Running database connection!');
	return mysql_connection;
}
		
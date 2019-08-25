const mysql = require('mysql');

const mysql_connection = () => {
	console.log('Database is connected!');
	return mysql.createConnection({
			host : 'localhost',
			port : 3306,
			user : 'root',
			password : '',
			database : 'mysql_base'
	});
}

mysql_connection().connect((err) => {
	if(err){
		console.log("Cannot Connect to Database. Error: " + err);
	}
	else{
		console.log("Database connection successfully!");
	}
});


module.exports = function(){
	console.log('Running database connection..');
	return mysql_connection;
}
		
const mysql = require('mysql');

const mysql_connection = () => {
	console.log('Database is connected!');
	return mysql.createConnection({
			host : 'db4free.net',
			user : 'h3gon101',
			password : 'H3gon100life!',
			database : 'h3gon101'
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
		
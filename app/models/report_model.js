module.exports = function(){
	this.get_reports = function(connection, callback){
		connection.query('select * from report', callback);
	}

	this.get_report = function(connection, callback){
		connection.query('select * from report where report_id = 1', callback);
	}

	this.save_report = function(report, connection, callback){
		connection.query('insert into report set ?', report, callback);
	}
	
	return this;
}
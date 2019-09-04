module.exports = () => {
	this.get_reports = (connection, callback) => {
		connection.query('select * from report', callback);
	}
	this.get_report = (connection, callback) => {
		connection.query('select * from report where report_id = 1', callback);
	}
	this.save_report = (report, connection, callback) => {
		connection.query('insert into report set ?', report, callback);
	}
	return this;
}
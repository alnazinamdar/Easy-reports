// module.exports = class Report {
// 	constructor(){

// 	}
// 	get_reports(connection, callback) {
// 		connection.query('select * from report', callback);
// 	}
// 	get_report(connection, callback) {
// 		result = connection.query('select * from report where report_id = 1', (err, result, fields) => {
// 			if (err) throw (err);
// 			console.log(result);
// 		});
// 	}
// 	save_report(report, connection, callback) {
// 		connection.query('insert into report set ?', report, callback);
// 	}
// }
module.exports = function(app){
	app.get('/add_report',function(req,res){
		res.render('admin/add_report');
	});

	app.post('/reports/save', function(req,res){
		const report = req.body;

		const connection = app.settings.connection();
		const report_model = app.app.models.report_model;

		report_model.save_report(report, connection, function(error, result){
			res.redirect('/reports');
		});
	
	});
}
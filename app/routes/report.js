module.exports = function(app){
	app.get('/report',function(req,res){
	
		const connection = app.settings.connection();
		const report_model = app.app.models.report_model;

		report_model.get_report(connection, function(error, result){
			res.render('reports/report',{report:result});
		});
		
	});

}
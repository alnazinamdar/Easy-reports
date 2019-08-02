module.exports = function(app){

	app.get('/reports',function(req,res){

	const connection = app.settings.connection();

	const report_model = app.app.models.report_model;

	report_model.get_reports(connection, function(error, result){
		res.render('reports/reports',{report:result});
	});
		
});

}
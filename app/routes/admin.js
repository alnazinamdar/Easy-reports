module.exports = function(app){
	app.get('/add_news',function(req,res){
		res.render('admin/add_news');
	});

	app.post('/noticias/salvar', function(req,res){
		var noticia = req.body;

		var connection = app.config.dbConnection();
		var noticiasModel = app.app.models.noticiasModel;

		noticiasModel.salvarNoticias(noticia, connection, function(error, result){
			res.redirect('/noticias');
		});
	
	});
}
module.exports = function(app){
	app.get('/signin',function(req,res){
		  res.render('signin');
    });

    app.get('/signup',function(req,res){
		  res.render('signup');
    });

    app.post('/signup', function(req, res){
      res.redirect('/signin');
    });
}
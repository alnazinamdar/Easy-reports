module.exports.signin = (application, req, res) => {
    res.render('signin');
};

module.exports.signinPost = (application, req, res) => {
    const data = req.body;
    const user = new application.app.models.User.create;
    res.send(user);
};
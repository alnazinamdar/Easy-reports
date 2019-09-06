module.exports.signup = (app, req, res) => {
    res.render('signup');
};

module.exports.signupPost = (app, req, res) => {
    const data = req.body;
    // res.redirect('signin');
};

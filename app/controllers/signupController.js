module.exports.signup = (req, res) => {
    res.render('signup');
};

module.exports.signupPost = (req, res) => {
    res.redirect('signin');
};

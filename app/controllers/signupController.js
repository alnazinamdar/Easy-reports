module.exports.signup = (req, res) => {
    res.render('signup');
};

module.exports.signupPost = (req, res) => {
    const data = req.body;
    // res.redirect('signin');
};

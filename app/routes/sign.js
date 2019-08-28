module.exports = application => {
  application.get('/signin', (req, res) => {
      application.app.controllers.signinController.signin(req, res);
  });
  application.get('/signup', (req,res) => {
    application.app.controllers.signupController.signup(req, res);
  });

  application.post('/signup', (req, res) => {
    application.app.controllers.signupController.signupPost(req, res);
  });
}
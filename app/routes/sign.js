module.exports = application => {
  application.get('/signin', (req, res) => {
      application.app.controllers.signinController.signin(application, req, res);
  });
  application.post('/signin', (req, res) => {
    application.app.controllers.signinController.signinPost(application, req, res);
});
  application.get('/signup', (req,res) => {
    application.app.controllers.signupController.signup(application, req, res);
  });
  application.post('/signup', (req, res) => {
    application.app.controllers.signupController.signupPost(application, req, res);
  });
}
module.exports = application => {
    application.get('/', (app, req, res) => {
        application.app.controllers.indexController.index(req, res);
    });
}
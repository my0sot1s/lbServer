const weather = require('./weather').weatherApi;

module.exports = function (app) {
  var router = app.loopback.Router();
  router.get('/weather/:city', function (req, res) {
    weather((data) => {
      res.send(data)
    }, req.params.city);
  });
  app.use(router);
}
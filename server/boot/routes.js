const weather = require('./weather').weatherApi;

module.exports = function (app) {
  var router = app.loopback.Router();
  router.get('/weather/:city/:type', function (req, res) {
    if (req.params.type === 'weather') {
      weather((data) => {
        res.send(data).end()
      }, req.params.city, 'weather');
    } else {
      weather((data) => {
        res.send(data).end()
      }, req.params.city, 'forecast');
    }

  });
  app.use(router);
}
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

  router.get('/weather/:lat/:lon', function (req, res) {
    weather((data) => {
      res.send(data).end()
    }, 'forecast', req.params.lat, req.params.lon);
  });


  app.use(router);
}
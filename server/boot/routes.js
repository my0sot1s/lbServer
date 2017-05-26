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

  const data = {
    hat: {
      link: 'http://i.imgur.com/Fm78yn7.jpg',
      tag: 'hats',
      title: 'Hats'
    },
    pies: {
      link: 'http://i.imgur.com/7TTqKsx.jpg',
      tag: 'pies',
      title: 'Pies'
    },
    coffee: {
      link: 'http://i.imgur.com/6yMZLA0.jpg',
      tag: 'coffee',
      title: 'Coffee'
    },
    honey: {
      link: 'http://i.imgur.com/jj3Y7FE.jpg',
      tag: 'honey',
      title: 'Honey'
    },
    camera: {
      link: 'http://i.imgur.com/Q1kqFA0.jpg',
      tag: 'camera',
      title: 'Camera'
    },
    tree: {
      link: 'http://i.imgur.com/UFUGlGn.jpg',
      tag: 'tree',
      title: 'Tree'
    },
    vegetable: {
      link: 'http://i.imgur.com/PBCuYl6.jpg',
      tag: 'vegetabe',
      title: 'Vegetable'
    },
  }

  router.get('/natural', (req, res) => {
    res.send(data)
  })



  app.use(router);
}
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

  const data = [
    {
      link: 'http://i.imgur.com/Fm78yn7.jpg',
      tag: 'hats',
      title: 'Hats'
    }, {
      link: 'http://i.imgur.com/7TTqKsx.jpg',
      tag: 'pies',
      title: 'Pies'
    }, {
      link: 'http://i.imgur.com/6yMZLA0.jpg',
      tag: 'coffee',
      title: 'Coffee'
    }, {
      link: 'http://i.imgur.com/jj3Y7FE.jpg',
      tag: 'honey',
      title: 'Honey'
    }, {
      link: 'http://i.imgur.com/Q1kqFA0.jpg',
      tag: 'camera',
      title: 'Camera'
    }, {
      link: 'http://i.imgur.com/UFUGlGn.jpg',
      tag: 'tree',
      title: 'Tree'
    }, {
      link: 'http://i.imgur.com/PBCuYl6.jpg',
      tag: 'vegetabe',
      title: 'Vegetable'
    }
  ]

  router.get('/natural', (req, res) => {
    res.send(data)
  })






  const data2 = [
    {
      link: 'http://i.imgur.com/s8ZMf7O.jpg',
      tag: 'bánh trứng',
      title: 'Bánh trứng',
      price: 30000,
      fomular: ''
    }, {
      link: 'http://i.imgur.com/H2j7aTk.jpg',
      tag: 'năng xào',
      title: 'Măng xào nấm',
      price: 40000,
      fomular: ''

    }, {
      link: 'http://i.imgur.com/fdkkip8.jpg',
      tag: 'bánh rán',
      title: 'Bánh rán',
      price: 40000,
      fomular: ''

    }, {
      link: 'http://i.imgur.com/cUWRPkc.jpg',
      tag: 'patte',
      title: 'Pate bò',
      price: 40000,
      fomular: ''

    }, {
      link: 'http://i.imgur.com/bIx25r5.jpg',
      tag: 'cháo ớt',
      title: 'Cháo ớt',
      price: 40000,
      fomular: ''

    }, {
      link: 'http://i.imgur.com/sX8txA1.jpg',
      tag: 'thịt hầm',
      title: 'Thịt hầm',
      price: 40000,
      fomular: ''

    }, {
      link: 'http://i.imgur.com/DCbYbzJ.jpg',
      tag: 'thịt kho',
      title: 'Thịt kho tiêu dừa',
      price: 40000,
      fomular: ''

    }
  ]

  router.get('/food', (req, res) => {
    res.send(data2)
  })
  app.use(router);
}
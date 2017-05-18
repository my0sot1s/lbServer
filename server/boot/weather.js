const http = require('http')

const weatherApi = (cb, city) => {
  http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&mode=json&units=metric&APPID=97daf377ab057bdfa9ef9f7a45296b78`, response => {
    var buffer = '';
    var data = '';

    if (response.statusCode === 502) {
      cb(`Không tìm được thành phố/quốc gia`);// eslint-disable-line
    } else {
      response.on('error', e => console.log(`api Provider error or can not connect:${e}`));
      response.on('data', chunk => {
        buffer += chunk;
      });
      response.on('end', err => {
        data = JSON.parse(buffer);
        cb(data)
      });
    }
  });
}

exports.weatherApi = weatherApi;
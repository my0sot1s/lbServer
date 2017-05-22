const http = require('http')

const weatherApi = (cb, city, type, lat, lon) => {
  let location = `q=${city}`;
  if (lat && lon) {
    location = `lat=${lat}&lon=${lon}`;
  }

  http.get(`http://api.openweathermap.org/data/2.5/${type}?${location}&mode=json&units=metric&APPID=97daf377ab057bdfa9ef9f7a45296b78`, response => {
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
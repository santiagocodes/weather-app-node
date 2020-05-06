const request = require("postman-request");
require("dotenv").config();

const forecast = (latitute, longitude, callback) => {
  const weatherURL = `http://api.weatherstack.com/current?access_key=${process.env.accessKey_weatherStack}&query=${latitute},${longitude}`;

  request({ url: weatherURL, json: true }, (error, response) => {
    if (error) {
      callback("Unable to connect to weather services :/", undefined);
    } else if (response.body.success === false) {
      callback("Unable to find location.", undefined);
    } else {
      const degree = response.body.current.temperature;
      const degreeFeel = response.body.current.feelslike;
      const description = response.body.current.weather_descriptions[0];
      callback(
        undefined,
        `${description}. It is currently ${degree} degrees out. It feels like ${degreeFeel} degrees.`
      );
    }
  });
};

module.exports = forecast;

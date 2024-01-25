const convertToCelsius = function(fahrenheit) {
  return ((fahrenheit+273.15)*9/5).toFixed(1)
};

const convertToFahrenheit = function(celsius) {
  return ((celsius+459.67)*5/9).toFixed(1)
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

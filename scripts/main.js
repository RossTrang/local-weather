// Selectors
let bckgrndImg = document.querySelector('body')
let currLoc = document.querySelector('#location')
let pictogram = document.querySelector('#picto')
let adj = document.querySelector('#adjective')
let temperature = document.querySelector('#temperature')
let forecast = document.querySelector('#description')

let weather = ''
let longitude = -4.7, latitude = 55.9

//Get request
function getWeather() {
  let url = 'https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139'
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      weather = JSON.parse(xhr.responseText);
    } else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
    // Make DOM changes
    currLoc.textContent = weather.name;
    temperature.textContent = Math.round(weather.main.temp);
    switch (true) {
    case (weather.main.temp <= 0):
      adj.textContent = 'FREEZING'
      break;
    case (weather.main.temp <= 7):
      adj.textContent = 'cold'
      break;
    case (weather.main.temp <= 12):
      adj.textContent = 'chilly'
      break;
    case (weather.main.temp <= 17):
      adj.textContent = 'pleasant'
      break;
    case (weather.main.temp <= 23):
      adj.textContent = 'nice'
      break;
    case (weather.main.temp <= 28):
      adj.textContent = 'warm'
      break;
    case (weather.main.temp <= 35):
      adj.textContent = 'hot'
      break;
    case (weather.main.temp > 35):
      adj.textContent = 'SIZZLING'
      break;
    }
    forecast.textContent = weather.weather[0].description;
    pictogram.src = weather.weather[0].icon;
  };
  xhr.send();
}

document.addEventListener('DOMContentLoaded', getWeather());

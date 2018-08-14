// Selectors
let backing = document.querySelector('body');
let currLoc = document.querySelector('#location');
let pictogram = document.querySelector('#picto');
let adj = document.querySelector('#adjective');
let temperature = document.querySelector('#temperature');
let forecast = document.querySelector('#description');
// Variables
let weather = '';
let longitude = 2;
let latitude = 2;

let imgs = {
  freezing: '../imgs/freezing.jpg',
  clear: '../imgs/clear.jpg',
  cloudy: '../imgs/cloudy.jpg',
  rainy: '../imgs/rainy.jpg',
  hot: '../imgs/hot.jpg',
  sizzling: '../imgs/sizzling.jpg'
}

// Get location
function getLoc() {
  navigator.geolocation.getCurrentPosition(function(position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    getWeather(latitude, longitude);
  });
}

// Get info from API request
function getWeather(latitude, longitude) {
  const url = `https://fcc-weather-api.glitch.me/api/current?lat=${latitude}&lon=${longitude}`;
  fetch(url).then(response => response.json()).then(weather => buildPage(weather))
}


// Make DOM changes
function buildPage (weather) {
    currLoc.textContent = weather.name;
    pictogram.src = weather.weather[0].icon;
    switch (true) {
    case (weather.main.temp <= 2):
      adj.textContent = 'FREEZING';
      //bckgrndImg.css.background = imgs.freezing;
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
      adj.textContent = 'hot';
      //backing.background-image = 'url(imgs.sizzling);'
      break;
    case (weather.main.temp > 35):
      adj.textContent = 'SIZZLING'
      break;
    }
    temperature.textContent = Math.round(weather.main.temp);
    forecast.textContent = weather.weather[0].description;
}

document.addEventListener('DOMContentLoaded', getLoc());

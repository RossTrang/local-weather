// Selectors
const bckgrndImg = document.querySelector('body')
const currLoc = document.querySelector('.header#location')
const pictogram = document.querySelector('#picto')
const adj = document.querySelector('.text#adjective')
const temperature = document.querySelector('.text#temperature')
const forecast = document.querySelector('.text#description')

let longitude = -4.7, latitude = 55.9

//Get request
function getWeather() {
  let url = 'https://fcc-weather-api.glitch.me/api/current?lat=55.9&lon=-4.7';
  const xhr = new XMLHttpRequest();
  xhr.open('GET', url);
  xhr.onload = function() {
    if (xhr.status === 200) {
      weather = JSON.parse(xhr.responseText);
    } else {
      alert('Request failed.  Returned status of ' + xhr.status);
    }
  };
  xhr.send();
}

getWeather()
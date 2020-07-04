const API_KEY = "9a5eeb9566eb2bb30c82da7a09dc54c9";
const COORD = "coord";
const temperture = document.querySelector(".js-temperture");
const currentLocation = document.querySelector(".js-location");

function getWeather(lat, lon) {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric
    `)
    .then(function (response) {
      return response.json();
    })
    .then(function (json) {
      const temp = json.main.temp;
      const locationName = json.name;
      temperture.innerText = `${temp}°`;
      currentLocation.innerText = locationName;
    });
}

function saveCoords(coordsObj) {
  localStorage.setItem(COORD, JSON.stringify(coordsObj));
}

function handlePositionSuccess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = { latitude, longitude };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handlePositionError() {
  console.log("error");
}
function askForCoord() {
  navigator.geolocation.getCurrentPosition(
    handlePositionSuccess,
    handlePositionError
  );
}

function loadCoord() {
  const loadedCoord = localStorage.getItem(COORD);
  if (loadedCoord === null) {
    askForCoord();
  } else {
    const parsedCoord = JSON.parse(loadedCoord);
    getWeather(parsedCoord.latitude, parsedCoord.longitude);
  }
}

function init() {
  loadCoord();
}

init();

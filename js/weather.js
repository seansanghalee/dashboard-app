// navigator.geolocation.getCurrentPosition();

// function onGeoOk(position) {
//   console.log(position);
// }

// function onGeoError() {
//   alert("Geolocation Error!");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

// const weather = document.querySelector("#weather span:first-child");
// const city = document.querySelector("#weather span:last-child");
// const API_KEY = "241051bf13976dd3ddf8b8d9f247255e";

// function onGeoOk(position) {
//   const lat = position.coords.latitude;
//   const lon = position.coords.longitude;
//   const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;

//   // fetch calls the url, it's a promise
//   // promise doesn't heppen immediately, that's why you need to use 'then'
//   fetch(url)
//     .then((response) => response.json())
//     .then((data) => {
//       city.innerText = data.name;
//       weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
//     });
// }

// function onGeoError() {
//   alert("Can't find you. No weather for you.");
// }

// navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

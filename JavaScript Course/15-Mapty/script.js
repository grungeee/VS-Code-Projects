'use strict';

// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

//* Displaying a Map Using Leaflet Library

//> Takes 2 callback functions -> 1: on success, 2: error
//. Success function
navigator.geolocation.getCurrentPosition(
  function (position) {
    console.log(position); //: gets pretty accurate coordinates 🗺️
    // const latitude = position.coords
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    //- "Leaflet" library integration
    // const map = L.map('map').setView([51.505, -0.09], 13);
    //> 1: parameter is coordinates array, 2: Zoom level
    const map = L.map('map').setView(coords, 13);

    //> it is possible to use another map f.a.: Goggle maps
    //> also you can change the appearance of the map tiles (map squares)
    // L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
      .addTo(map)
      .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
      .openPopup();
  },
  //. Error funtion
  function () {
    alert('Could not get your position');
  }
);

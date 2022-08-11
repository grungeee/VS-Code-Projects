'use strict';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

//* Displaying a Map Using Leaflet Library

let map, mapEvent;

class Wourkout {
  date = new Date();
  id = (Date.now() + '').slice(-10);

  constructor(coords, distance, duration) {
    this.coords = coords; //: [lat, lng]
    this.distance = distance; //: in km
    this.duration = duration; //: in min
  }
}

//- Children

//. Running
class Running extends Wourkout {
  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
  }

  calcPace() {
    //: min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}

//. Cycling
class Cycling extends Wourkout {
  constructor(coords, distance, duration, eleveationGain) {
    super(coords, distance, duration);
    this.eleveationGain = eleveationGain;
  }

  calcSpeed() {
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

//: test if the objects are working
// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

//* Application Architatcutre

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

class App {
  #map;
  #mapEvent;
  constructor() {
    this._getPosition;

    //- Form Events
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
  }

  _getPosition() {
    //> Takes 2 callback functions -> 1: on success, 2: error
    //. Success function
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),

        //. Error funtion
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    console.log(position); //: gets pretty accurate coordinates 🗺️
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(latitude, longitude);
    console.log(`https://www.google.com/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    //- "Leaflet" library integration
    //> 1: parameter is coordinates array, 2: Zoom level
    // const map = L.map('map').setView([51.505, -0.09], 13);
    this.#map = L.map('map').setView(coords, 13);

    //> it is possible to use another map f.a.: Goggle maps
    //> also you can change the appearance of the map tiles (map squares)
    L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    //- Handling clicks on map
    //> leaflet object
    this.#map.on('click', this._showForm.bind(this));
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _toggleElevationField(e) {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    e.preventDefault();

    // Get data from form

    const type = inputType.value;
    const distnace = inputDistance.value;
    const cadence = inputCadence.value;
    const elevation = inputElevation.value;

    //Check if datis valid

    // If workout runngin, create running object

    // If workout cycling, create cycling object

    // Add new object tor workout array

    // Render workout on map as array

    //. Clear input fields
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    //. Display marker
    const { lat, lng } = this.#mapEvent.latlng;
    console.log(this);
    L.marker([lat, lng])
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          maxHeight: 100,
          autoClose: false,
          closeOnClick: false,
          className: 'running-popup',
        })
      )
      .setPopupContent('Workout')
      .openPopup();
  }
}

const app = new App();
app._getPosition();

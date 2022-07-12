'use strict';

// //* Default Prametters

// const bookings = [];

// //> ES6: assingning a dafault value: arguments = num
// const createBooking = function (
//   flightNum,
//   numPassengers = 1,
//   //> order is important! price before numPassenger is a no-go
//   price = 199 * numPassengers
// ) {
//   //> ES5: If we wanted to assign a default value
//   // numPassengers = numPassengers || 1;
//   // price = price || 199;

//   const booking = {
//     flightNum,
//     numPassengers,
//     price,
//   };
//   console.log(booking);
//   bookings.push(booking);
// };

// createBooking('LH123');
// createBooking('LH123', 2, 800);
// createBooking('LH1234', 2);

// //> giving a value of undefined is the same as not giving a value
// createBooking('LH123', undefined, 1000); //: flightNum: 'LH123', numPassangers: 1, price: 1000

//& END

// //* How Passing Arguments Works: Value vs. Reference

// const flight = 'LH234';
// const jonas = {
//   name: 'Jonas Shmedtmann',
//   passport: 24739479284,
// };

// const checkIn = function (flightNum, passenger) {
//   flightNum = 'LH999';
//   passenger.name = 'Mr. ' + passenger.name;

//   if (passenger.passport === 24739479284) {
//     alert('Check in');
//   } else {
//     alert('Wrong passport!');
//   }
// };
// // checkIn(flight, jonas);
// // console.log(flight);
// // console.log(jonas);

// //. Is the same as:
// //> Pasing a variable into a funtion is like
// // const flightNum = flight; //: it is being assingned to a new one
// //> Passig an object into a function is like
// // const passenger = jonas; //: it will just point to thr object in thr Memory Heap

// const newPassport = function (person) {
//   person.passport = Math.trunc(Math.random() * 100000000);
// };

// //> changeing the object multiple times will lead to different outcomes on every call
// newPassport(jonas);
// checkIn(flight, jonas);

// //. Passing by Reference and Passing by Value
// //> JavaScript doesn't have passing by reference -> only by value

// //* First Class and Higher Order funcions

// const oneWord = function (str) {
//   return str.replace(/ /g, '').toLowerCase(); //: instead of replaceAll
// };

// const upperFirstWord = function (str) {
//   const [first, ...others] = str.split(' ');
//   return [first.toUpperCase(), ...others].join(' ');
// };

// //. Higher-order funcion
// const transformer = function (str, fn) {
//   console.log(`Original string: ${str}`);
//   console.log(`Transformed string: ${fn(str)}`);
//   //> besides methods funcions can have properties
//   console.log(`Transformed by: ${fn.name}`);
// };

// transformer('JavaScript is the best!', upperFirstWord);

// transformer('JavaScript is the best!', oneWord);

// const high5 = function () {
//   console.log('🤘');
// };
// //> in this case 'addEventListener' is a higher-order funcion and 'high5' is call-back funcion
// document.body.addEventListener('click', high5);

// //> .forEach - is a method thatd does something for each element/variable, in this case array
// ['Jonas', 'Martha', 'Adam'].forEach(high5); //: 3 times '🤘'

// //* Functions Returning Functions

// // > Closure is the reason this works 😬
// const greet = function (greeting) {
//   return function (name) {
//     console.log(`${greeting} ${name}`);
//   };
// };

// const greeterHey = greet('Hey');
// greeterHey('Jonas');
// greeterHey('Nikita');

// // > 'Hello' is (greeting) - 'Jonas' is (name)
// jgreet('Hello')('Jonas');

// //. a little chalenge: rewriting the funcion above into an arrow-function
// const greetArr = greeting => name => console.log(`${greeting} ${name}`); //: really minimalistic 🆒
// greetArr('Greetings')('traveler');

//* The call and apply Methods

const lufthansa = {
  airLine: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //> Enhanced object literal syntax (defining functions without 'function') -> before: book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airLine} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann');
lufthansa.book(635, 'John Smith');

const eurowings = {
  airLine: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
  // book,
};

//> making a reusable by assigning the one we already made for lufthansa
const book = lufthansa.book;

//- function methods: [call, apply, bind]

//. call() method
//: tells explicitly/manually what 'this' should be like

//> this does NOT work
//> becasue this is a regular funcion call and 'this' point to 'undefined'
//> [const book] -> is no longer a method in the lufthansa object, it is a seperate function
// book(23, 'Sarah Williams');

//> This called NOT the function, insted we call the 'call' method
//> -> which called the 'book' function with 'this' keyword set to 'eurowings'
book.call(eurowings, 23, 'Sarah Williams');
console.log(eurowings);

//: same with lufthansa
book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airLine: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');

//. apply() method
//> like call(), but takes an array[] array after the 'this' keyword

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

//. a better way -> to use the spread operator
book.call(swiss, ...flightData);

//* The bind() method
//> returns a new function with 'this' set to whatever it needs to be

// book.call(eurowings, 23, 'Sarah Williams');
const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);
bookEW(23, 'Steven Williams');

//. specific for flight 23
//> basically 23 is the first argument of book(flightNum, name)
const bookEW23 = book.bind(eurowings, 23);
//: now only 'name' (paassagner name) is needed
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');

//! Specifying parts of the argument beforehand is called: "partial application"

//. With Event Listeners
//: adding a property plane to the object lufthansa{}
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  //> 'this' KW is showing at the button, not lufthansa{} -> it is inside the event-handler
  console.log(this);

  this.planes++;
  console.log(this.planes);
};
document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

//. Partial application

const addTax = (rate, value) => value + value * rate; //: tax calc funcion
console.log(addTax(0.1, 200)); //: 10% of 200 + 200 = 220

//: presetting a value of VAT tax -> which is always 23% [this is a new fn based on addTax]
const addVAT = addTax.bind(null, 0.23); //> there is no this so we use 'null'
//> this is like
// addVat = value => value + vlaue * 0.23;

console.log(addVAT(230));

//. Challenge make a returning funcion which does the same as addTax()
function addTaxRate(rate) {
  return function (value) {
    console.log(value + value * rate);
  };
}
const vatOf = addTaxRate(0.23);
vatOf(360);
addTaxRate(0.23)(360);

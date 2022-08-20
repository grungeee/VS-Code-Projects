'use strict';

//* >==========================< WORDLE >==========================< //

//* Part of the code which picks a random word from the database
const testDB = [
  'agama',
  'banty',
  'chert',
  'dewar',
  'emmys',
  'feens',
  'gouch',
  'homey',
  'idola',
  'jowed',
  'kisan',
  'lurex',
  'moony',
  'nikau',
  'oxbow',
  'poled',
  'query',
  'redox',
  'swack',
  'tased',
  'umiak',
  'verve',
  'woops',
  'xylan',
  'yanks',
  'zoril',
];
console.log(testDB.length); //: 26

//* Creates a sorted DB
const alphabeticStructure = {
  a: [],
  b: [],
  c: [],
  d: [],
  e: [],
  f: [],
  g: [],
  h: [],
  i: [],
  j: [],
  k: [],
  l: [],
  m: [],
  n: [],
  o: [],
  p: [],
  q: [],
  r: [],
  s: [],
  t: [],
  u: [],
  v: [],
  w: [],
  x: [],
  y: [],
  z: [],
};

const entries = Object.entries(alphabeticStructure);

//- Sortred DB
//. Safe -> short list
const wordleDB = testDB.forEach(word => {
  //! Unsafe -> long list
  // const wordleDB = wordsList.forEach(word => {
  entries.forEach(entry => {
    const [key, value] = entry;
    if (word[0] === key) {
      value.push(word);
    }
  });
});
//todo : create a funtion
console.log(entries);

//* RNG funcion: generates number -> strings(index) in the array
//: Better random init generator (min, max)
function newRNG(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(newRNG(0, testDB.length));

//* This picks a random word for 'wordle' from database

const wordle = testDB[newRNG(0, testDB.length)];
console.log(wordle);
const guess = 'swack';
console.log(guess);

//* This code looks for the matching word in the database
function isInDB() {
  return console.log(testDB.includes(guess));
  //! change to this to use bool
  // return testDB.includes(guess);
}
isInDB();

//* This merges chars into a string
const c1 = 's';
const c2 = 'w';
const c3 = 'a';
const c4 = 'c';
const c5 = 'k';
let guess2 = '';
// guess2 = c1 + c2 + c3 + c4 + c5;
//: aternative:
// guess2 = [c1, c2, c3, c4, c5].join('');
// console.log(typeof guess2, guess2);

//& Notes
/*
todo: probably needs another solution
*/
//&

// //* Compare guess to wordle
// //> needs a rework
// //! before comparing set to lovercase
// console.log('--- LOGIC TEST ---');
// console.log(`Input length: ${guess.length} letters `);
// for (let i = 0; i < guess.length; i++) {
//   if (guess.length > 5) {
//     console.log('The word you are looking for has exactly 5 letters!');
//     break;
//   } else if (wordle[i] === guess[i]) {
//     console.log(`${guess[i]} - green`);
//   } else if (wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - yellow`);
//   } else if (!wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - gray`);
//   }
// }

//* This changes text to UPPERCASE on input (DOM)
// const charInput = document.querySelectorAll('.char');
// for (let i = 0; i < charInput.length; i++) {
//   charInput[i].addEventListener('input', function () {
//     //todo 1: Need to make a function that changes color on selection MAYBE?
//     //todo 2: need to make a funcion that goes to the next input box
//     this.style.backgroundColor = '#deaede';
//     this.value = this.value.toUpperCase();
//     console.log(this.value);
//   });
//   //: this listens to all keydown events but NOT on the inputfields
//   charInput.forEach(el => {
//     el.addEventListener('keydown', event => {
//       console.log('press');
//     });
//   });
// }
const rowsContainer = document.querySelector('.rows-container');
const rows = document.querySelectorAll('.row');
const charInput = document.querySelectorAll('.char');
console.log(charInput);

const body = document.querySelector('body');
const c8 = document.querySelector('.c-8');
console.log(c8);

//. Allowed Charcters
//! add this before passing the input value to the input field
const allowedLC = `a b c d e f g h i j k l m n o p q r s t u v w x y z`.split(
  ' '
);
const allowedUC = allowedLC.join(' ').toUpperCase().split(' ');
const allowedAll = allowedLC.concat(allowedUC);
console.log(allowedLC, allowedUC, allowedAll);

function charInputEvents() {
  charInput.forEach(function (char) {
    char.addEventListener('input', function () {
      //: set input to upper case
      this.value = this.value.toUpperCase();
      //: on input go to next field (if not last)
      if (
        this.value.length >= this.maxLength &&
        this !== this.parentElement.lastElementChild
      ) {
        this.nextElementSibling.focus();
      }

      //todo : start filling the fields from the whole body
      //todo : start only at c1 or the one that is not full
      //todo : event propagainon needed ->  catch/capture the key press form child
    });

    char.addEventListener('keydown', function (e) {
      console.log(e);
      //: enter -> going to the next row (if the last one)
      if (
        e.key === 'Enter' &&
        e.target === e.target.parentElement.lastElementChild
      ) {
        e.target.parentElement.nextElementSibling.firstElementChild.focus();
        //: go to previous field on delete (if maxlength = 0)
      } else if (
        e.key === 'Backspace' &&
        e.target !== e.target.parentElement.firstElementChild &&
        e.target.value.length < e.target.maxLength
      ) {
        e.target.previousElementSibling.focus();
      }
    });
  });
}
charInputEvents();

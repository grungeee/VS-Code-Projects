'use strict';

//* WORDLE //

// // combining green, yellow, red
// console.log("--- LOGIC TEST ---");
// for (let i = 0; i < guess.length; i++) {
//   if (wordle[i] === guess[i]) {
//     console.log(`${guess[i]} - green`);
//   } else if (wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - yellow`);
//   } else if (!wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - gray`);
//   }
// }

// // * Versoin with a warning for too many letters
// const wordle = "actor";
// const guess = "acorn";

// console.log("--- LOGIC TEST ---");
// console.log(`Input length: ${guess.length} letters `);
// for (let i = 0; i < guess.length; i++) {
//   if (guess.length > 5) {
//     console.log("The word you are looking for has exactly 5 letters!");
//     break;
//   } else if (wordle[i] === guess[i]) {
//     console.log(`${guess[i]} - green`);
//   } else if (wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - yellow`);
//   } else if (!wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - gray`);
//   }
// }
//* Part of the code which picks a random word from the database
const wordleDataBase = [
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
  //-
  // 'starn',
  // 'swack',
  //-
];
console.log(wordleDataBase.length);

//* Dynamically Creating Object with alphabetical order
const alphabeticStructure = {
  a: ['alert'],
  b: ['books'],
  d: ['dusty'],
  e: [],
  f: [],
};

// wordleDataBase.forEach((word, i) => {
//   //todo : need to compare word[0] to all keys
//   if (word[0] === Object.keys(alphabeticStructure)[i]) {
//     console.log(word);
//   }
// });

wordleDataBase.forEach((word, i) => {
  //todo : need to compare word[0] to all keys
  //> I am trying to compare the first letter of word with a keys value of alphaStru
  if (Object.keys(alphabeticStructure).contains(word[0])) {
    console.log(word);
  }
});

console.log(alphabeticStructure);
console.log(Object.keys(alphabeticStructure));
// console.log(Object.keys(alphabeticStructure)[0]);

// const map = new Map();
// map.set('a', 'alpha');
// console.log(map);

//* RNG funcion: generates number -> strings(index) in the array
//: Better random init generator (min, max)
function newRNG(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
// console.log(newRNG(0, wordleDataBase.length));

// //* This picks a random word for 'wordle' from database
// let wordle = wordleDataBase[rng()];
// console.log(wordle);
// let guess = "swack";
// console.log(guess);
// //* This code looks for the matching word in the database
// function isInDB() {
//   return wordleDataBase.includes(guess)
//     ? console.log("yes")
//     : console.log("no");
// }
// isInDB();

//* This code should merge characters into one sting
let c1 = 's';
let c2 = 'w';
let c3 = 'a';
let c4 = 'c';
let c5 = 'k';
let guess2 = '';
// guess2 = c1 + c2 + c3 + c4 + c5;
//: aternative:
// guess2 = [c1, c2, c3, c4, c5].join('');
// console.log(typeof guess2, guess2);

//* This changes text to UPPERCASE on input
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

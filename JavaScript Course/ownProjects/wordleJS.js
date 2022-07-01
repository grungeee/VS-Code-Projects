"use strict";

//* WORDLE //

// // combining green, yellow, red
// console.log("--- LOGIC TEST ---");
// for (let i = 0; i < guess.length; i++) {
//   if (wordle[i] === guess[i]) {
//     console.log(`${guess[i]} - green`);
//   } else if (wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - yellow`);
//   } else if (!wordle.includes(guess[i])) {
//     console.log(`${guess[i]} - red`);
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
  "women",
  "nikau",
  "swack",
  "feens",
  "fyles",
  "poled",
  "clags",
  "starn",
  "bindi",
  "woops",
];

//? RNG funcion: generates number = strings(index) in the array
function rng() {
  return Math.trunc(Math.random() * wordleDataBase.length);
}
//* This picks a random word for 'wordle' from database
let wordle = wordleDataBase[rng()];
console.log(wordle);
let guess = "swack";
console.log(guess);
//* This code looks for the matching word in the database
function isInDB() {
  return wordleDataBase.includes(guess)
    ? console.log("yes")
    : console.log("no");
}
isInDB();

//* This code should merge characters into one sting
let c1 = "s";
let c2 = "w";
let c3 = "a";
let c4 = "c";
let c5 = "k";
let guess2 = "";
guess2 = c1 + c2 + c3 + c4 + c5;
console.log(typeof guess2, guess2);

//! This should change text to UPPERCASE on input but rn works only the first class
document.querySelector(".character").addEventListener("input", function () {
  document.querySelector("body").style.backgroundColor = "#000";
  // let p = this.selectionStart;
  // this.value = this.value.toUpperCase();
  // this.setSelectionRange(p, p);
  this.value = this.value.toUpperCase();
});

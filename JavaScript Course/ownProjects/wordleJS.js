"use strict";

//* WORDLE //

// const wordle = "actor";
// const guess = "acorn";

// loops thou a word and spits out it's letters from start to end
// for (let i = 0; i < wordle.length; i++) {
//   console.log(wordle[i]);
// }

// // compares the first letter of a hidden word to a guess word
// if (wordle[0] === guess[0]) {
//   console.log("green");
// } else {
//   console.log("red");
// }

// // test if a letter from guess is in the word if it works log should print 'yellow for a letter in the word but not in right position
// if (wordle.includes(guess[4])) {
//   console.log("yellow");
// } else {
//   console.log("red");
// }

// combining green, yellow, red
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

//* Versoin with a warning for too many letters
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
let p = 0;

if (p === 0) {
  console.log("0");
  p++;
}

if (p === 1) {
  console.log("1");
  p--;
}

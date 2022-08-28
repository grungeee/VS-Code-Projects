'use strickt';
//* Tests for the wordle app
// const wordle = 'renos'.split('');
//     const guess = 'rotno'.split('');

//     console.log('wordle: ', wordle);
//     console.log('guess: ', guess);
//   console.log(guess.join(''));

//   const include = guess.forEach((letter, i) => {
//     console.log(
//       wordle[i].toUpperCase(),

//       wordle[i] === guess[i]
//         ? '[ ✅ ]'
//           : wordle1.includes(letter) &&
//           guess.findIndex(char => char === letter) === i
//         ? '[ 🟨 ]'
//         : '[ 🟥 ]',
//       // wordle.includes(letter) ? '[ ✅ ]' : '[ ❌ ]',
//       letter.toUpperCase()
//     );
//     //:
//     // console.log(guess.filter((letter, _, arr) => letter === guess[i]));
//     //>
//       // console.log(guess.filter(letter => letter === guess1[i]).length);
//       //:
//       // guess1.find(l => console.log(l );)
//     //:
//     console.log(
//         guess.findIndex(char => char === letter),
//               guess[guess.findIndex(char => char === letter)],
//           i === guess.findIndex(char => char === letter)
//     );

//     const doesInclude = guess.some(letter => wordle.includes(letter));
//   });

//   console.log('countInArray(guess, o) :>> ', countInArray(guess1, 'o'));
// function countInArray(array, what) {
//   return array.filter(item => item === what).length;
// }

//&

//: |=========================|
//: |======/ Functions /======|
function countInArray(array, what) {
  array.filter(item => item === what).length;
}
//: |=========================|
//: |=======/ Colors /========|
const green = '[ 🟩 ]';
const yellow = '[ 🟨 ]';
const none = '[ 🔳 ]';
//: |=========================|
const wordle = 'jorty'; //: previous: 'jotty'
const guess = 'trert';
//. cl logs
const wordleSplit = wordle.split('');
const guessSplit = guess.split('');
//: |=========================|
console.log(wordleSplit);
console.log(guessSplit);
//: |=========================|
//: |====/ Adding Colors /====|

//> --------| Arrays |--------
//? maybe an array with all duplicates and no '' stings
const gArr = [];
const wArr = [];
for (g of guess) {
  wordle.includes(g) && gArr.push(g);
}
for (w of wordle) {
  guess.includes(w) && wArr.push(w);
}

console.log('g in wordle: ', gArr, 'w in guess: ', wArr);
// console.log('shallow copy', gArr.slice());

wordleSplit.forEach((w, index) => {
  //> ------| Variables |-------
  const g = guess[index];
  const wordleIncludesG = wordle.includes(g);
  const guessIncludesG = guess.includes(w);
  const gInWordle = wordle.includes(g) ? g : '-';
  const wInGuess = guess.includes(w) ? w : '-';

  //> ----| Pushing to Arr |----
  // gArr.push(wordle.includes(g) ? g : guess.includes(w) ? w : '');

  //> ------| cl logs |-------
  console
    .log
    // '-------------'
    // gInWordle,
    // wInGuess /* gInWordle === wInGuess */,
    // gArr
    ();
  //> ------------------------
  if (w === g) {
    console.log(w.toUpperCase(), green, g.toUpperCase());
  } else if (wordleIncludesG && gArr[index] === wArr[index]) {
    console.log(w.toUpperCase(), yellow, g.toUpperCase());
  } else {
    console.log(w.toUpperCase(), none, g.toUpperCase());
  }
  //> w === a = value if wordleSplit.contains(value) !== guessSplit.contains(value) ? remove last yellow
  //> add as many yellow as there is value in wordleSplit
  //> add as many yellow if wordleSplit.contains(value).length === guessSplit.contains(value).length
});
//: |=========================|

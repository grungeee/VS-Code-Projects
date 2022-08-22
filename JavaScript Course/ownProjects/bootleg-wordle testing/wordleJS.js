//* <=====< test DB >=====>
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
  'aabbb',
  'after',
  'react',
  'areal',
  'great',
  'treat',
];
// console.log(testDB);
//* <=====< xxx end xxx >=====>

const body = document.querySelector('body');
const rows = document.querySelector('.rows-container');
const row = rows.querySelector('.row'); //: r-1
const char = row.querySelector('.char'); //: c-1

const rowsAll = rows.querySelectorAll('.row');
// const rowsAllArr = [...rows.querySelectorAll('.row')];
const rowsAllArr = Array.from(rows.querySelectorAll('.row'));
// console.log(rowsAll);
const charAll = rows.querySelectorAll('.char');
const charAllArr = [...row.querySelectorAll('.char')];
// console.log(charAll, charAllArr);

//. Allowed Charcters
//! add this before passing the input value to the input field
const allowedSys = [
  'Backspace',
  'Enter',
  'Escape',
  'OS',
  'Tab',
  'Alt',
  'Control',
  'Shift',
  'CapsLock',
];
const allowedLC = `a b c d e f g h i j k l m n o p q r s t u v w x y z`.split(
  ' '
);
const allowedUC = allowedLC.join(' ').toUpperCase().split(' ');
const allowedLetters = allowedLC.concat(allowedUC);
const allowedAll = allowedLC.concat(allowedUC, allowedSys);

let guess;
const testGuess = 'hello';

let count = 0;
let currentRow = 0;
let testCount = 0;
let currentCharacter = 1;

const curChar = rows.querySelector('.r-1').querySelector(`.c-${count}`);

//- prevent paste event
document.onpaste = e => e.preventDefault();

//- keydown event
document.addEventListener('keydown', keydown);

function keydown(e) {
  //! tests:
  // console.log(e);
  // console.log('count-before: ', count);

  //.presettings
  //: if a key is not a sys key -> remove it if non latin char -> if lat char to uppercase
  const key = !allowedSys.includes(e.key)
    ? e.key.toUpperCase().replace(/[\W\d]/g, '')
    : '';

  //- rows
  // [...rows.children].forEach((r, index) => {
  rowsAllArr.forEach((r, index) => {
    // console.log(r.children[0]);
    // console.log(r.children);

    //- one row per event
    if (currentRow !== index) return;
    // if (r.dataset.row !== index) return;

    //- chars
    Array.from([...r.children]).forEach((c, i) => {
      // [...r.children].forEach((c, i) => {
      // charAll.forEach((c, i) => {

      //. one char per event
      if (count !== i) return;

      //- input values + game logic?
      if (c.maxLength !== c.value.length && key !== '') {
        (c.value = key), c.focus();

        //> maybe going to make it here
        // console.log(c.value.toLowerCase(), wordleTest[i]);
        // if (wordleTest[i] === c.value.toLowerCase()) console.log('green');
        // if (wordleTest.includes(c.value.toLowerCase())) console.log('yellow');
      }

      //- clearing field
      if (e.key === 'Backspace') {
        e.preventDefault();
        c.value = '';
        c.previousElementSibling?.focus();
      }

      //- animation on field change
      if (c.value !== '') c.classList.add('char-transition');
      if (c.value === '') c.classList.remove('char-transition');

      //- next row + game logic
      if (
        e.key === 'Enter' &&
        c.value !== '' &&
        testDB.includes(guess.toLowerCase())
      ) {
        currentRow++;
        count = 0;
        //&  ////////////////// start //////////////////////////

        //. comparing guess and wordle

        // for (l of guess) {
        guess.split('').forEach((l, guessIndex) => {
          console.log(l, guessIndex, c.value);
          // [...r.children].forEach(
          // child => console.log(child.value)
          // child.value === l && child.classList.contains('char--green')
          // );
          // [...r.children][4].classList
          if (wordleTest[guessIndex] === l.toLowerCase()) {
            r.children[guessIndex].classList.add('char--green');
          } else if (wordleTest.includes(l.toLowerCase()))
            r.children[guessIndex].classList.add('char--yellow');
        });

        //&  ////////////////// end //////////////////////////

        //. if false
      } else if (
        e.key === 'Enter' &&
        c.value !== '' &&
        !testDB.includes(guess.toLowerCase())
      ) {
        //: done with a css trick -> look into offsetWidth
        r.classList.remove('row--false');
        r.offsetWidth; //> returns read-only property of layout width of element
        r.classList.add('row--false');
      }

      //> testing
      //. result test:
      if (e.key === 'Enter') {
        console.log(guess ?? 'no value');
        console.log(testDB.includes(guess.toLowerCase()) ?? 'no value');
      }
    });

    //. sets a 'guess' word form characters
    guess = Array.from([...r.children]).reduce((acc, cur, i, arr) => {
      return acc + cur.value;
    }, Array.from([...r.children][0]));
  });

  //- next char
  if (!allowedSys.includes(e.key) && count !== 4) count++;
  if (e.key === 'Backspace' && count !== 0) count--;

  // if (e.key === 'Enter') console.log(guess);
  //: just in case
  // if (e.key === 'Enter' && count === 4) currentRow++, (count = 0);
  // console.log(currentRow);
}

// [...rows.children].forEach((r, index) => {
//   if (currentRow !== index) return;

//   guess = [...r.children].reduce((acc, cur, i, arr) => {
//     console.log(i, acc);
//     return acc + cur.value;
//   }, 0);
// });

const wordleTest = 'aaabb';
const guessTest = 'woops';
//* Compare guess to wordle
//> needs a rework
//! before comparing set to lowercase
// console.log('--- LOGIC TEST ---');
// console.log(`Input length: ${guessTest.length} letters `);
// for (let i = 0; i < guessTest.length; i++) {
//   if (guessTest.length > 5) {
//     console.log('The word you are looking for has exactly 5 letters!');
//     break;
//   } else if (wordleTest[i] === guessTest[i]) {
//     console.log(`${guessTest[i]} - green`);
//   } else if (wordleTest.includes(guessTest[i])) {
//     console.log(`${guessTest[i]} - yellow`);
//   } else if (!wordleTest.includes(guessTest[i])) {
//     console.log(`${guessTest[i]} - gray`);
//   }
// }

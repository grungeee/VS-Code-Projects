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
  'waste',
  'react',
  'tears',
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

let count = 0;
let currentRow = 0;

let testCount = 0;

const curChar = rows.querySelector('.r-1').querySelector(`.c-${count}`);

//- prevent paste event
document.onpaste = e => e.preventDefault();

//- keydown event
document.addEventListener('keydown', keydown);

function keydown(e) {
  //! tests:

  // console.log('count-before: ', count);

  //-presettings
  //: works fine but umlauts still going through
  // if (!allowedAll.includes(e.key)) return;
  //. setting key to uppercase & removing non latin charcters
  //: if a key is not a sys key -> remove it if non latin char -> if lat char -> to uppercase
  const key = !allowedSys.includes(e.key)
    ? e.key.toUpperCase().replace(/[\W\d]/g, '')
    : '';

  //> try to add preventDefoult for not needed keys
  // ? e.key.toUpperCase().replace(/[\W\d]/g, '')
  // : '';
  //. preventDefault()

  // if (allowedSys.includes(e.key)) e.preventDefault();

  //: need a solution for deleting with one tap
  // if (!allowedSys.includes(e.key) && count < 4) count++;

  //- rows
  // [...rows.children].forEach((r, index) => {
  rowsAllArr.forEach((r, index, rowArr) => {
    //! js dataset test
    r.dataset.index = index;
    let rowIndex = r.dataset.index;
    // console.log(r.dataset);

    //- one row per event
    // rowArr[0].firstElementChild.focus();

    if (currentRow !== index) return;

    //- chars
    Array.from([...r.children]).forEach((c, i, charArr) => {
      //! js dataset test
      c.dataset.index = i;
      let fieldIndex = c.dataset.index;

      // [...r.children].forEach((c, i) => {
      // charAll.forEach((c, i) => {
      //- one char per event
      if (count !== i) return;

      //- input values + next char?
      if (c.maxLength !== c.value.length && key !== '') {
        (c.value = key), c.focus();

        //! troubleshooting
        console.log(`+ [character: ${c.value}][index: ${i}][count: ${count}]`);
        console.log(fieldIndex);
      }

      //- clearing field
      // console.log(charArr[4]);
      if (
        e.key === 'Backspace' &&
        c.dataset.char === charArr[4].dataset.char &&
        charArr[4].value !== ''

        // c.dataset.char === r.lastElementChild.dataset.char
      ) {
        console.log('yass');
        e.preventDefault();
        r.lastElementChild.value = '';
      } else if (e.key === 'Backspace' && c.dataset.char > 0) {
        // e.preventDefault();
        // c.value = '';
        // c.previousElementSibling?.focus();
        // count--;

        //! troubleshooting
        console.log(`- [character: ${c.value}][index: ${i}][count: ${count}]`);
        // c.value = '';
        c.previousElementSibling?.focus();
        count--;
      }

      //- animation on field change
      if (c.value !== '') c.classList.add('char-transition');
      if (c.value === '') c.classList.remove('char-transition');

      //- next row + game logic (on enter)
      //. if true
      if (
        e.key === 'Enter' &&
        c.value !== '' &&
        testDB.includes(guess.toLowerCase())
      ) {
        currentRow++;
        count = 0;

        guess.split('').forEach((l, letterIndex) => {
          if (wordleTest[letterIndex] === l.toLowerCase())
            charArr[letterIndex].classList.add('char--green');
          else if (wordleTest.includes(l.toLowerCase())) {
            const firstIndex = guess.split('').findIndex(char => char === l);
            charArr[firstIndex].classList.add('char--yellow');
          }
        });

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

      //! testing
      //. result test:
      if (e.key === 'Enter') {
        console.log(guess ?? 'no value');
        console.log(testDB.includes(guess.toLowerCase()) ?? 'no value');
      }
    });

    //- sets a 'guess' word form characters
    guess = Array.from([...r.children]).reduce((acc, cur, i, arr) => {
      return acc + cur.value;
    }, Array.from([...r.children][0]));
  });

  //- next/previous char

  if (!allowedSys.includes(e.key) && count !== 4) count++;
  // if (e.key === 'Backspace' && count !== 0) count--;

  console.log(count);
  //: just in case
  // if (e.key === 'Enter' && count === 4) currentRow++, (count = 0);
  // console.log(currentRow);
}

//&  ////////////////// start //////////////////////////
//&  ////////////////// end //////////////////////////
const wordleTest = 'waste';
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

//&  ////////////////// OLD CODE //////////////////////////

// 'use strict';

// //* >==========================< WORDLE >==========================< //

// //* Part of the code which picks a random word from the database
// const testDB = [
//   'agama',
//   'banty',
//   'chert',
//   'dewar',
//   'emmys',
//   'feens',
//   'gouch',
//   'homey',
//   'idola',
//   'jowed',
//   'kisan',
//   'lurex',
//   'moony',
//   'nikau',
//   'oxbow',
//   'poled',
//   'query',
//   'redox',
//   'swack',
//   'tased',
//   'umiak',
//   'verve',
//   'woops',
//   'xylan',
//   'yanks',
//   'zoril',
// ];
// console.log(testDB.length); //: 26

// //* Creates a sorted DB
// const alphabeticStructure = {
//   a: [],
//   b: [],
//   c: [],
//   d: [],
//   e: [],
//   f: [],
//   g: [],
//   h: [],
//   i: [],
//   j: [],
//   k: [],
//   l: [],
//   m: [],
//   n: [],
//   o: [],
//   p: [],
//   q: [],
//   r: [],
//   s: [],
//   t: [],
//   u: [],
//   v: [],
//   w: [],
//   x: [],
//   y: [],
//   z: [],
// };

// const entries = Object.entries(alphabeticStructure);

// //- Sortred DB
// //. Safe -> short list
// const wordleDB = testDB.forEach(word => {
//   //! Unsafe -> long list
//   // const wordleDB = wordsList.forEach(word => {
//   entries.forEach(entry => {
//     const [key, value] = entry;
//     if (word[0] === key) {
//       value.push(word);
//     }
//   });
// });
// //todo : create a funtion
// console.log(entries);

// //* RNG funcion: generates number -> strings(index) in the array
// //: Better random init generator (min, max)
// function newRNG(min, max) {
//   return Math.floor(Math.random() * (max - min + 1) + min);
// }
// // console.log(newRNG(0, testDB.length));

// //* This picks a random word for 'wordle' from database

// // const wordle = testDB[newRNG(0, testDB.length)];
// // const wordle = 'aabbb';
// // console.log(wordle);
// // const guess = 'swack';
// // console.log(guess);

// //* This code looks for the matching word in the database
// // function isInDB() {
// // return console.log(testDB.includes(guess));
// //! change to this to use bool
// // return testDB.includes(guess);
// // }
// // isInDB();

// //* This merges chars into a string
// const c1 = 's';
// const c2 = 'w';
// const c3 = 'a';
// const c4 = 'c';
// const c5 = 'k';
// let guess2 = '';
// // guess2 = c1 + c2 + c3 + c4 + c5;
// //: aternative:
// // guess2 = [c1, c2, c3, c4, c5].join('');
// // console.log(typeof guess2, guess2);

// //& Notes
// /*
// todo: probably needs another solution
// */
// //&

// //* Compare guess to wordle

// const wordle = 'treat';
// console.log(wordle);
// const guess = 'areal';
// console.log(guess);

// //> needs a rework
// //! before comparing set to lowercase
// console.log('--- LOGIC TEST ---');
// console.log(`Input length: ${guess.length} letters `);
// for (let i = 0; i < guess.length; i++) {
//   if (wordle[i] === guess[i]) {
//     console.log(`${guess[i]} - green`);
//   } else if (wordle.includes(guess[i]) && wordle[i] !== guess[i]) {
//     console.log(`${guess[i]} - yellow`);
//   } else {
//     console.log(`${guess[i]} - x`);
//   }
// }

// //* This changes text to UPPERCASE on input (DOM)
// // const charInput = document.querySelectorAll('.char');
// // for (let i = 0; i < charInput.length; i++) {
// //   charInput[i].addEventListener('input', function () {
// //     //todo 1: Need to make a function that changes color on selection MAYBE?
// //     //todo 2: need to make a funcion that goes to the next input box
// //     this.style.backgroundColor = '#deaede';
// //     this.value = this.value.toUpperCase();
// //     console.log(this.value);
// //   });
// //   //: this listens to all keydown events but NOT on the inputfields
// //   charInput.forEach(el => {
// //     el.addEventListener('keydown', event => {
// //       console.log('press');
// //     });
// //   });
// // }
// const rowsContainer = document.querySelector('.rows-container');
// const rows = document.querySelectorAll('.row');
// const charInput = document.querySelectorAll('.char');
// console.log(charInput);

// const body = document.querySelector('body');
// let currentKey;

// //. Allowed Charcters
// //! add this before passing the input value to the input field
// const allowedLC = `a b c d e f g h i j k l m n o p q r s t u v w x y z`.split(
//   ' '
// );
// const allowedUC = allowedLC.join(' ').toUpperCase().split(' ');
// const allowedAll = allowedLC.concat(allowedUC);
// // console.log(allowedLC, allowedUC, allowedAll);

// function charInputEvents() {
//   charInput.forEach(function (char) {
//     char.addEventListener('input', function () {
//       //: set input to upper case
//       this.value = this.value.toUpperCase();
//       //: on input go to next field (if not last)
//       if (
//         this.value.length >= this.maxLength &&
//         this !== this.parentElement.lastElementChild
//       ) {
//         this.nextElementSibling.focus();
//       }

//       //todo : start filling the fields from the whole body
//       //todo : start only at c1 or the one that is not full
//       //todo : event propagainon needed ->  catch/capture the key press form child
//     });

//     char.addEventListener('keydown', function (e) {
//       console.log(e);
//       //: enter -> going to the next row (if the last one)
//       if (
//         e.key === 'Enter' &&
//         e.target === e.target.parentElement.lastElementChild
//       ) {
//         e.target.parentElement.nextElementSibling.firstElementChild.focus();
//         //: go to previous field on delete (if maxlength = 0)
//       } else if (
//         e.key === 'Backspace' &&
//         e.target !== e.target.parentElement.firstElementChild &&
//         e.target.value.length < e.target.maxLength
//       ) {
//         e.target.previousElementSibling.focus();
//       }
//     });
//   });
// }
// charInputEvents();

// body.addEventListener('keydown', function (e) {
//   currentKey = e.key;
//   console.log(currentKey);
// });

// // console.log(charInput.children);
// // charInput.firstElementChild.value = currentKey;
// //& <====================/ /====================>

// // function inputGlobal() {}
// // body.addEventListener('keydown', function (e) {
// //   if (allowedAll.includes(e.key)) {
// //     console.log(this);
// //     this.value = e.key.toUpperCase();
// //   }
// // });

// // function inputEvList() {
// //   console.log(this);
// //   console.log(this.value);
// //   console.log(this.value.length);
// //   //: set input to upper case
// //   this.value = this.value.toUpperCase();
// //   //: on input go to next field (if not last)
// //   if (
// //     this.value.length >= this.maxLength &&
// //     this !== this.parentElement.lastElementChild
// //   ) {
// //     this.nextElementSibling.focus();
// //   }

// //   //todo : start filling the fields from the whole body
// //   //todo : start only at c1 or the one that is not full
// // }

// // function keydownEvList(e) {
// //   console.log(e);
// //   //: enter -> going to the next row (if the last one)
// //   if (
// //     e.key === 'Enter' &&
// //     e.target === e.target.parentElement.lastElementChild
// //   ) {
// //     e.target.parentElement.nextElementSibling.firstElementChild.focus();
// //     //: go to previous field on delete (if maxlength = 0)
// //   } else if (
// //     e.key === 'Backspace' &&
// //     e.target !== e.target.parentElement.firstElementChild &&
// //     e.target.value.length < e.target.maxLength
// //   ) {
// //     e.target.previousElementSibling.focus();
// //   }
// // }

// // //> 2
// // function charCallback(char) {
// //   char.addEventListener('input', inputEvList);
// //   char.addEventListener('keydown', keydownEvList);
// //   body.addEventListener('keydown', function (e) {
// //     if (allowedAll.includes(e.key)) {
// //       console.log(this);
// //       // this.value = e.key.toUpperCase();
// //     }
// //   });
// // }

// // //> 1
// // charInput.forEach(charCallback);

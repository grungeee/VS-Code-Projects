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

//* Sortred DB

//- Safe -> short list
// const wordleDB = testDB.forEach(word => {

//! Unsafe -> long list
const wordleDB = wordsList.forEach(word => {
  entries.forEach(entry => {
    const [key, value] = entry;
    if (word[0] === key) {
      value.push(word);
    }
  });
});
//todo : create a funtion

console.log(alphabeticStructure);
console.log(entries);
const values = Object.values(alphabeticStructure);
// console.log(Object.values(alphabeticStructure).length);
// console.log(Object.values(alphabeticStructure)[0][1]);

//* RNG funcion: generates number -> strings(index) in the array
//: Better random init generator (min, max)
function newRNG(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

//* This picks a random word for 'wordle' from database
const valuesLengthRNG = newRNG(0, values.length);
console.log(valuesLengthRNG);

const valuesWordsArr = Object.values(alphabeticStructure)[valuesLengthRNG];
console.log(valuesWordsArr);

const valuesArrayLengthRNG = newRNG(0, valuesWordsArr.length);
console.log(valuesArrayLengthRNG);

const wordle = valuesWordsArr[valuesArrayLengthRNG];
console.log(wordle);

//* This code looks for the matching word in the database
const guessTest = 'jasps';

console.log('object test: ');
// const isInDBTEST = entries.forEach(entry => {
//   const [key, value] = entry;
//   if (guessTest[0] === key && value.includes(guessTest)) {
//     return true;
//   }
// });

// console.log(guessTest, isInDBTEST);

String.prototype.isInDB = function () {
  entries.forEach(function (entry) {
    const [key, value] = entry;
    if (this[0] === key && value.includes(this)) {
      console.log('true');
      return true;
    }
  });
};

guessTest.isInDB();

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

const wordleTest = 'waste';
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
          if (wordle[letterIndex] === l.toLowerCase())
            charArr[letterIndex].classList.add('char--green');
          else if (wordle.includes(l.toLowerCase())) {
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

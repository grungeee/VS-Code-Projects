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
];
console.log(testDB);
//* <=====< xxx end xxx >=====>
const body = document.querySelector('body');
const rows = document.querySelector('.rows-container');
const row = rows.querySelector('.row'); //: r-1
const char = row.querySelector('.char'); //: c-1
const charAll = row.querySelectorAll('.char');

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
let currentCharacter = 1;

const curChar = rows.querySelector('.r-1').querySelector(`.c-${count}`);

//- prevent paste event
document.onpaste = e => e.preventDefault();

//- keydown event
document.addEventListener('keydown', keydown);

function keydown(e) {
  //! tests:
  // console.log(e);
  console.log('count-before: ', count);

  //.presettings
  //: if a key is not a sys key -> remove it if non latin char -> if lat char to uppercase
  const key = !allowedSys.includes(e.key)
    ? e.key.toUpperCase().replace(/[\W\d]/g, '')
    : '';
  //. rows
  [...rows.children].forEach((r, index) => {
    if (currentRow !== index) return;

    //. chars
    [...r.children].forEach((c, i) => {
      if (count !== i) return;

      if (c.maxLength !== c.value.length && key !== '')
        (c.value = key), c.focus();
      if (e.key === 'Backspace') {
        e.preventDefault();
        c.value = '';
        c.previousElementSibling?.focus();
      }

      //. on change
      if (c.value !== '') c.classList.add('char-transition');
      if (c.value === '') c.classList.remove('char-transition');

      //. next row
      if (e.key === 'Enter' && c.value !== '') currentRow++, (count = 0);
    });

    guess = [...r.children].reduce((acc, cur, i, arr) => {
      console.log(i, acc);
      return acc + cur.value;
    });
  });

  //. next char
  if (!allowedSys.includes(e.key) && count !== 4) count++;
  if (e.key === 'Backspace' && count !== 0) count--;

  //: just in case
  // if (e.key === 'Enter' && count === 4) currentRow++, (count = 0);
  // console.log(currentRow);
}

[...rows.children].forEach((r, index) => {
  if (currentRow !== index) return;

  guess = [...r.children].reduce((acc, cur, i, arr) => {
    console.log(i, acc);
    return acc + cur.value;
  }, 0);
});

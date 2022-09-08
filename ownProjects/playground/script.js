'use strickt';
//* Tests for the wordle app

// //: |=========================|
// //: |======/ Functions /======|
// function countInArray(array, what) {
//   array.filter(item => item === what).length;
// }
// //: |=========================|
// //: |=======/ Colors /========|
// const green = '[ 🟩 ]';
// const yellow = '[ 🟨 ]';
// const none = '[ 🔳 ]';
// //: |=========================|
// const wordle = 'otott'; //: previous: 'jotty'
// const guess = 'toyyt';
// //> ------| cl logs |-------
// const wordleSplit = wordle.split('');
// const guessSplit = guess.split('');
// //: |=========================|
// console.log('w: ', wordleSplit);
// console.log('g: ', guessSplit);
// //: |=========================|
// //: |====/ Adding Colors /====|

// //> --------| Arrays |--------
// //? maybe an array with all duplicates and no '' stings
// const gArr = [];
// const wArr = [];
// const wArrTwo = [];

// //> ------| Filtering |-------
// //. 1 uses an external arr
// for (w of wordle) guess.includes(w) && wArr.push(w);

// //. 2 Filter
// const wArrFilter = wordleSplit.filter(w => guess.includes(w));
// // wArrTwo.push(wordleSplit.filter(w => guess.includes(w)));

// //. 3 - use .map() to return an array
// wordleSplit.forEach(w => guess.includes(w) && wArrTwo.push(w));

// //> ------| cl logs |-------
// console.log('wArrFilter: ', wArrFilter);
// console.log('wArrTwo: ', wArrTwo);
// console.log('w in guess: ', wArr);
// //>
// // console.log('shallow copy', gArr.slice());
// //> ------------------------

// wordleSplit.forEach((w, index) => {
//   //> ------| Variables |-------
//   const g = guess[index];

//   //> --------| Logic |--------
//   if (w === g) {
//     console.log(w.toUpperCase(), green, g.toUpperCase());
//     wArrFilter.splice(wArrFilter.indexOf(g), 1);
//   } else if (wArrFilter.includes(g)) {
//     console.log(w.toUpperCase(), yellow, g.toUpperCase());
//     wArrFilter.splice(wArrFilter.indexOf(g), 1);
//   } else {
//     console.log(w.toUpperCase(), none, g.toUpperCase());
//   }
// });
// /**
//  *Notes:
//  *~ w === a = value if wordleSplit.contains(value) !== guessSplit.contains(value) ? remove last yellow
//  *~ add as many yellow as there is value in wordleSplit
//  *~ add as many yellow if wordleSplit.contains(value).length === guessSplit.contains(value).length
//  */

// //: |=========================|
// //: |======/Remove test/======|
// const test = 'abcabc';
// const testArr = test.split('');
// const testArrCopy = testArr.slice();

// //> ---------------------------
// //: removes duplicates -> return an array with unique values
// const testFiltered = testArr.filter(
//   (item, index) => index !== testArr.indexOf(item)
// );
// // console.log(testArr, testFiltered);
// //> ---------------------------
// const testCharIndex = [];
// testArr.forEach((c, i) => testCharIndex.push(i));
// // console.log(testCharIndex);
// //> ---------------------------
// // const testRemoved = testArr.slice().splice(testArr.indexOf('b'));
// const testLastIndex = testArr.lastIndexOf('b');
// const testRemoved = testArrCopy.splice(testLastIndex, 1);

// //> --------| cl logs |---------
// // console.log(testArr.slice());
// // console.log(testLastIndex);
// // console.log('array: ', testArr);
// // console.log('array copy: ', testArrCopy);
// // console.log('removed: ', testRemoved);

// //: |=========================|

// let nonExistent;
// let existentArr;
// // function init() {
// //   existantArr = nonExistant && nonExistant.split('');
// // }

// existentArr = nonExistent && nonExistent.split(''); //: undefined
// nonExistent = 'hello';
// existentArr = nonExistent && nonExistent.split(''); //: defined
// // init(); //: defined

// console.log(nonExistent);
// console.log(existentArr);

/**
 * & from stack overflow: single global-scoped variable 
 * ~ need to fugure out how to share values between functions without creating an object
 * 
think your best bet here may be to define a single global-scoped variable, and dumping your variables there:

var MyApp = {}; // Globally scoped object

function foo(){
    MyApp.color = 'green';
}

function bar(){
    alert(MyApp.color); // Alerts 'green'
} 
*/

// //* Using a value from another function

// //: |=========================|

// //> ---------------------------
// const char = document.querySelector('.char');
// //> ---------------------------
// let key;
// let keyKB;
// //> ---------------------------

// document.addEventListener('keydown', keydown);

// function keydown(e) {
//   key = e.key;

//   char.focus();
//   key === 'Backspace' && console.log('Backspace detected');
//   key !== 'Backspace' && (char.value = key.toUpperCase());

//   console.log('key -->', key);
// }
// //> ---------------------------

// document.addEventListener('click', click);
// function click(ev) {
//   keyKB = ev.target.classList[1]?.slice(3);

//   //   keyKB === 'Backspace' ?
//   const keydownEvent = new KeyboardEvent('keydown', { key: keyKB });
//   const backspaceEvent = new KeyboardEvent('keydown', {
//     event: 'Backspace',
//   });
//   console.log(keydownEvent);
//   console.log(backspaceEvent);

//   document.dispatchEvent(keyKB === 'Backspace' ? backspaceEvent : keydownEvent);

//   //   keyKB === 'Backspace' && document.dispatchEvent(backspaceEvent);

//   console.log('keyKB -->', keyKB);
// }
// function click(ev) {
//   keyKB = ev.target.classList[1]?.slice(3);
//   keyKB === 'Backspace' && document.dispatchEvent(backspaceEvent);
//   keyKB !== 'Backspace' && (char.value = keyKB);

//   console.log('keyKB -->', keyKB);
// }
//> ---------------------------
// const backspaceEvent = new KeyboardEvent('keydown', { event: 'Backspace' });
// const backspaceEvent = new Event('keydown', 'Backspace');
//> ---------------------------
// function consoleLog(string, what) {
//   console.log(what, key);
// }

//* Universal slicing: remove all cars after index 2
// const click = { key: e.target.classList[1]?.split('').slice(2, -1) };
// const e = 'k--Backspace';
// const click = { key: e.slice(3) };

//* Going through loop iterations on change

// const testWord = '_____'.toUpperCase().split('');
// const guess = 'world'.toUpperCase().split('');
// console.log(testWord);

// testWord.forEach((c, i, arr) => {
//   arr[i] = guess[i];
//   //   arr.splice(i, i + 1, 'A');
// });

// // const alteredWord = testWord.splice(2, 1, 'A');

// console.log(testWord);
// // console.log(alteredWord);

// const guess = 'wo___'.toUpperCase().split('');

// guess.forEach((c, i, arr) => {
//   const char = c;

//   switch (char) {
//     case c:
//       i !== '_' && console.log(c);
//       break;
//     case c:
//       i !== '_' && console.log(c);
//       break;
//     case c:
//       i !== '_' && console.log(c);
//       break;
//     case c:
//       i !== '_' && console.log(c);
//       break;
//     default:
//       console.log('fail');
//   }
// });
//: --------------------------------
//   (function classLoopSelfinvoking(i) {
//     setTimeout(function () {
//       // console.log('hello'); //  your code here
//       if (--i) classLoopSelfinvoking(i);
//     }, 500);
//   }
// )(10);

//: --------------------------------

// //* Adding a class after a delay
// //: --------------------------------
// const rows = [...document.querySelectorAll('.row')];
// const chars = [...document.querySelectorAll('.char')];
// const keys = [...document.querySelectorAll('.key')];

// let count = -1;
// let rowCount = 0;

// //: --------------------------------

// document.addEventListener('keydown', keydown);

// function keydown(e) {
//   const syskeys = ['Enter', 'Backspace', 'Shift'];
//   const isSyskey = syskeys.includes(e.key);

//   if (count !== 2 && e.key !== '' && !isSyskey) count++;
//   if (e.key === 'Backspace') e.preventDefault();

//   //- rows
//   rows.forEach((row, idx, arr) => {
//     // console.log(idx, rowCount);
//     if (idx !== rowCount) return;

//     //- chars
//     const currentRow = [...row.children];
//     currentRow.forEach((char, ix, ar) => {
//       if (ix !== count) return;

//       //- add values
//       if (e.key.length === 1 && !char.value.length) char.value = e.key;

//       //- remove values
//       if (e.key === 'Backspace' && ix !== -1) (char.value = ''), count--;

//       //- next row
//       if (e.key === 'Enter' && currentRow.at(-1)) rowCount++, (count = -1);

//       if (e.key === 'Enter' && currentRow.at(-1)) {
//         // classLoop();
//         ar.forEach((c, i) => {
//           setTimeout(function () {
//             console.log(c, i);
//             c.classList.add('char--rotate');
//             c.classList.add('char--yellow');
//           }, i * 500);
//         });
//       }

//       //^!________________
//     });
//   });
// }
// //: --------------------------------

// let index = 0;
// let arr = keys;

// function classLoop() {
//   setTimeout(function () {
//     arr[index].classList.add('char--rotate');
//     arr[index].classList.add('char--green');
//     // arr[index].style.animationPlayState = running ? 'paused' : 'running';
//     index++;
//     if (index < arr.length) {
//       classLoop();
//     }
//   }, 500);
// }
// classLoop();
// //: --------------------------------

// function testLoop() {
//   setTimeout(function () {
//     arr[index].classList.add('char--rotate');
//     arr[index].classList.add('char--green');
//     // arr[index].style.animationPlayState = running ? 'paused' : 'running';
//     index++;
//     if (index < arr.length) {
//       testLoop();
//     }
//   }, 500);
// }
// // testLoop();

//* Adding an HTML element with JS
containers = document.querySelectorAll('.container');

console.log(containers);

containers[0].insertAdjacentHTML(
  'afterbegin',
  `
<div> This is a test </div>
`
);

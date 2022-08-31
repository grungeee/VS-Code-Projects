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

//* Using a value from another function

//: |=========================|

//> ---------------------------
const char = document.querySelector('.char');
const keyKB = document.querySelectorAll('.key');
//> ---------------------------
let key;
let kbKey;
//> ---------------------------
document.addEventListener('keydown', keydown);

function keydown(e) {
  key = char.value = e.key.toUpperCase();
  consoleLog();
}
//> ---------------------------
document.addEventListener('click', click);

function click(ev) {
  key = char.value = ev.target.classList[1]?.at(-1);

  consoleLog();
}
//> ---------------------------
function consoleLog() {
  const keyTwo = key;
  //   keyTwo.add(keydown);
  console.log('key-> ', key);
  console.log('keyTwo -> ', keyTwo);
  console.log('kbKey -> ', kbKey);
}

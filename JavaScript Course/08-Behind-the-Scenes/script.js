"use strict";

// function calcAge(birthYear) {
//   const age = 2030 - birthYear;
//   //? functions are "funcion scopes"
//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     //? if-statements are "block scopes"
//     if (birthYear >= 1981 || birthYear <= 1996) {
//       var millenial = true;
//       //? Creating NEW varibale with same name as outer scope's variable
//       const firstName = "Steven";
//       const str = `Oh, and you're a millenial, ${firstName}`;
//       console.log(str);
//       //? funtion inside the "block scope" -> "inner scope"
//       function add(a, b) {
//         return a + b;
//       }
//       //? Reassigning the outer scope variable
//       output = "NEW OUTPUT!";
//     }
//     //! It is not possible to acces variable/funciton down/inside the block scope of a sibling (fctScp->blkScp->...)
//     // console.log(str);
//     // console.log(add(2, 3));
//     //* Unless it is a 'var' variable - this makes it accessable from anywhere
//     console.log(millenial);
//     //* Unless funciton is executed without strict mode [ "use strict"; ]
//     // console.log(add(2, 3));
//     //* Redefind variable is logged to console after the first definintion
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = "Jonas";
// calcAge(1991);
// //! it is not possible to access age from the global scope (which is inside the function block)
// // console.log(age);
// //! the same is with the funcion nested insede the other funcion
// // printAge();

// //? Varibles
// //! 'me' will NOT be logged, it's declared as 'var' and IS hoisted but to the value of UNDEFINED
// // console.log(me);
// // //! 'job' and 'year will NOT be logged, they are declared as 'let' and 'const' so they are uninitialized and inaccessible from the TDZ
// console.log(job);
// console.log(year);

// var me = "Jonas";
// let job = "teacher";
// const year = "1991";

// //? Functions
// //* Will log a value, because funcion DECLARATION is hoisted
// console.log(addDecl(2, 3));
// //! EXPRESSION and ARROW funcions do not log a value, as they are not hoisted
// //! If used with `var` no value will be logged, as they -> UNDEFINED and are NOT functions so no call is possible
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// //? Example
// //? ! -> [NOT] 10 -> true; NOT TRUE -> FALSE; ![10 = ture] -> 10 = false
// //! 'var' is UNDEFINED is FALSE -> ! [NOT] false -> true this means if numProducts[undefined] === true execute the funcion!!!
// //* funcion executes because UNDEFINED set to true
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//   console.log("All products deleted!");
// }

// let zero = 0;
// let number = 10;
// console.log(typeof !zero, typeof zero, zero, Boolean(zero));
// console.log(typeof !zero, typeof zero, zero, Boolean(!zero));
// console.log(typeof !number, typeof number, number, Boolean(number));
// console.log(typeof !number, typeof number, number, Boolean(!number));

// // //? Window is a global object in JS in the borweser
// var x = 1;
// let y = 2;
// const z = 3;

// console.log(x === window.x);
// // console.log(y === window.y); -> false
// // console.log(z === window.z); -> false

// //* 3. --- This Keyword ---

// //? this KW in the global scope is the window object
// console.log(this);

// //? 'this' KW is undefined
// const calcAge = function (birthYear) {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAge(1991);

// //!Arrow funcion doesen't have its own 'this' keyword, so it uses lexical 'this' KW of its parent -> window
// const calcAgeArrow = birthYear => {
//   console.log(2037 - birthYear);
//   console.log(this);
// };
// calcAgeArrow(1980);

// //? 'this' points to the object that is calling the mehtod
// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
// };
// //! 'jonas' [Object] called the 'calcAge'[Method] so 'this' poits at -> 'jonas' [Object]
// jonas.calcAge();

// const matilda = {
//   year: 2017,
// };
// //* -- Method Borrowing --
// //? Copies the method form 'jonas' to 'matilda'
// matilda.calcAge = jonas.calcAge;
// //? the output is 20 -> calcAge: funcion() {console.log(2037 - this.year)} [this.year = 2017 in this case :)]
// matilda.calcAge();

// //* Taking out the function out of 'jonas'
// //? We copy jonas.calcAge funcion to f (because it a value), we could have written it from scratch

// const f = jonas.calcAge;
// //? f = undefined as 'this' inside the funcion is not pointing to anything
// f();

//* --- Regular Funcions Vs. Arrow funcions ---

// //! 'var' creates 'firstName' property on the GLOBAL OBJECT
// //? So this will log "Matilda" becasue this points at the global scope -> 'window'
// var firstName = "Matilda";
// console.log(this.firstName);

// //! This is NOT a code block and doesn"t create a scope -> this is an OBJECT lITERAL
// const jonas = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   //? this points to its parent KW -> 'jonas' is not a function so it is using the KW of the golobal scope -> 'window'
//   greet: () => {
//     console.log(this);
//     //? after defining 'var' -> firstName in fornt of the object literal 'this' will do the same as in line 151 -> 'Matilda'
//     console.log(` Hey = ${this.firstName}`);
//   },
// };
// jonas.greet();

// //? Regular Function Expression
// const jonas1 = {
//   firstName: "Jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(this);
//     console.log(2037 - this.year);
//   },
//   greet: function () {
//     console.log(this);
//     console.log(` Hey = ${this.firstName}`);
//   },
// };
// //* This will log "Hey = Jonas"
// jonas1.greet();

// //* -- TRICKY STUFF --

// // ? Solution #1 [Pre ES6]
// const jonas = {
//   firstNmae: "jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);
//     //* Solution #1: puts the this up the socope through the "Scope Chain" -> JS goes up the scope to the parent 'calcAge'
//     //* is called "self" or also "that" -> used pre ES6
//     const self = this;
//     const isMillenial = function () {
//       console.log(self);
//       console.log(self.year >= 1981 && self.year <= 1996);
//       //? this is how the funtion looked before the solution #1
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     //! this is a regular function call even tho it is inside the method 'calcAge'
//     //! inside the regular funtion call the 'this' KW must be UNDEFINED
//     //? So this makes the funcion 'isMillenial" perform like it is outside of the method
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

//? Solutoions #2

// const jonas = {
//   firstNmae: "jonas",
//   year: 1991,
//   calcAge: function () {
//     console.log(2037 - this.year);

//     //* Soution #2: Turn this funtion into an Arrow Funcion so it will automatically look for "this" in its parent
//     //* It basically inherits its parent scope's 'this' KW
//     const isMillenial = () => {
//       console.log(this);
//       console.log(this.year >= 1981 && this.year <= 1996);
//       //? this is how the funtion looked before the solution #1 & #2
//       // console.log(this.year >= 1981 && this.year <= 1996);
//     };
//     isMillenial();
//   },

//   greet: () => {
//     console.log(this);
//     console.log(`Hey ${this.firstName}`);
//   },
// };
// jonas.greet();
// jonas.calcAge();

// //* --- Arguments Keyword ---

// //* Does ONLY work for regular funtions
// const addExpr = function (a, b) {
//   console.log(arguments);
//   return a + b;
// };
// addExpr(2, 5);

// //! Doesn't work for Arrow funcions
// var addArrow = (a, b) => {
//   console.log(arguments);
//   return a + b;
// };

// addArrow(2, 5, 8);

//* -- Primitives VS Objects --

// //? Primitives: Numbers, Strings, Booleans, Undefined, Null, Symbol, BigInt

// let age = 30;
// let oldAge = age;
// age = 31;
// console.log(age);
// console.log(oldAge);

// const me = {
//   name: "Jonas",
//   age: 30,
// };
// const friend = me;
// friend.age = 27;
// console.log("friend:", friend);
// console.log("Me:", me);

//* --- Primitive Types ---

let lastName = "Williams";
let oldlastName = lastName;
lastName = "Davis";
console.log(lastName, oldlastName);

//* --- Reference Types ---

const jessica = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = "Davis";
console.log("Before marriage:", jessica.lastName);
console.log("After marriage:", marriedJessica.lastName);

//* -- Copying Objects --
const jessica2 = {
  firstName: "Jessica",
  lastName: "Williams",
  age: 27,
};
//? Object.assign() -  Merges two objects and returns a new one (with an empty string)
//! this works only on the first level - if we have an object inside the inner object
const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = "Davis";
console.log("Before marriage:", jessica2);
console.log("After marriage:", jessicaCopy);

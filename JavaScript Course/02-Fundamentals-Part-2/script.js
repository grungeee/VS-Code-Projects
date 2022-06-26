"use strict";

let hasDriversLicense = false;
const passTest = true;

if (passTest) hasDriversLicense = true;
if (hasDriversLicense) console.log("I can drive :D");

function logger() {
  console.log("My Name is Jonas");
}

// calling / running / invoking functionq
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
  const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
  return juice;
}

// 5, 0 are the arguments of the funcion
const appleJuice = fruitProcessor(5, 0);
console.log(appleJuice);

// console.log(fruitProcessor(5, 0));
const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);

//Number is a built in function like console.log()
const num = Number("23");

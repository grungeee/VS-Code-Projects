// Remember, we're gonna use strict mode in all scripts now!
"use strict";

//?
//* PROBLEM:
// We work for a company building a samrt home thermometer. Our most recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind  that sometimes there might be a sendor error."

//? 1) Understanding the problem
// What is temperature amplitude? - This is the difference between highes and lowest temperature in the array
// How to compute max and min temperatures?
// Whats senser 'error and what to do?
//? 2) Braking up into sub-problems
// How to igonore sensor error [in for continue]
// Get the LOWEST temperature out of the array
// Get the HIGHEST temperature out of the array
// Subtract LOWEST form the HIGHEST -> amplitude

//* Solution
//

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    if (temps[i] === "error") {
      continue;
    } else if (temps[i] > max) {
      max = Math.max(temps[i]);
    } else if (temps[i] < min) {
      min = Math.min(temps[i]);
    }
  }
  return console.log(`The tempertaure amplitude is: ${max - min}ºC`);
}
// calcTempAmplitude(temperatures);

// const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures2 = [-7, 18];
const temperaturesSum = [];
//* Mergin both arrays
function arrayAdder(arr) {
  let sum = [];
  for (let i = 0; i < arr.length; i++) {
    // sum.push(arguments[i]);
  }
  return console.log(sum);
}

arrayAdder(temperatures2, temperatures);

//* A lot cleaner solution by the teacher
// const calcTemplate = funcion (temps) {
function calcTempAmplitude(temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return console.log(`The tempertaure amplitude is: ${max - min}ºC`);
}

calcTempAmplitude(temperatures);

//* Problem 2:
// Function should now recieve 2 arrays of temps

// ? 1) Understanding the problem
// - With 2 arrays, should we imnplement funcionality twice? NO!
// + Merge both arrays

// ? 2) Breaking up into sub-problems
// - How to merge 2 arrays
// * I think temps.push(array1[i], array[2])

// const temps1 = [-6, 17, 12, 12, 14];
const temps2 = [-7, 18, 3, 3, 4, 6];
//* concatinatinon of arrays
// const temps2 = [-7, 18, 3, 3, 4, 6];

const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

function calcTempAmplitudeNew(t1, t2) {
  const temps = t1.concat(t2);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp != "number") continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  return console.log(`The tempertaure amplitude is: ${max - min}ºC`);
}

// calcTempAmplitude(temperatures);
calcTempAmplitudeNew(temps1, temps2);

//* function doesn't take any arguments
const measureKelvin = function () {
  const measurement = {
    type: "temp",
    unit: "celsius",
    //? C) FIX
    // value: Number(prompt("Degrees celsius:")),
    value: 10,
  };
  //? B) FIND
  // console.log(measurement); //! shows that -> prompt turns a number value into a string
  console.table(measurement);

  console.log(measurement.value);
  const kelvin = measurement.value + 273;
  return kelvin;
};
// //? A) IDENTIFY!
console.log(measureKelvin());

//* There is also other methods for console
// console.warn()
// console.error()

// Developer Skills & Editor Setup
// Coding Challenge #1
// Given an array of forecasted maximum temperatures, the thermometer displays a
// string with the given temperatures. Example: [17, 21, 23] will print "... 17ºC in 1
// days ... 21y in 2 days ... 23ºC in 3 days ..."
// Your tasks:
//Todo: 1. Create a function 'printForecast' which takes in an array 'arr' and logs a
//todo string like the above to the console. Try it with both test datasets.
//Todo: 2. Use the problem-solving framework: Understand the problem and break it up
//todo into sub-problems!
//* Test data:
//* § Data 1: [17, 21, 23]
//* § Data 2: [12, 5, -5, 0, 4]

const forecast1 = [17, 21, 23];
const forecast2 = [12, 5, -5, 0, 4];

function printForecast(arr) {
  // let str = [];
  let str = "";
  for (let i = 0; i < arr.length; i++) {
    //* can't use push because I have to print a sting not an object > ,<
    // tr.push(( ...  ${arr[i]}ºC in ${ar.indexOf(arr[ii) + 11} days));
    str += ` ... ${arr[i]}ºC in ${arr.indexOf(arr[i]) + 1} days`;
  }
  return console.log(`${str} ... `);
}
printForecast(forecast1);

//? Debugging
console.log(`--- DEBUGGING ---`);
console.log(typeof forecast1, forecast1);
console.log(typeof forecast1[0], forecast1[0]);
console.log(typeof forecast1.length, forecast1.length);
console.log(forecast1.indexOf(forecast1[0]));
console.log(forecast1.indexOf(17));
console.log(forecast1.indexOf(23));

//?
// PROBLEM:
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

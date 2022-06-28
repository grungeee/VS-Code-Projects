// Coding Challenge #4
// Steven wants to build a very simple bill calculator for whenever he goes eating in a
// restaurant. In his country, it's usual to tip 15% if the bill value is between 50 and
// 300. If the value is different, the tip is 20%.
// Your tasks:
// 1. Calculate the tip, depending on the bill value. Create a variable called 'tip' for
// this. It's not allowed to use an if/else statement � (If it's easier for you, you can
// start with an if/else statement, and then try to convert it to a ternary
// operator!)
// 2. Print a string to the console containing the bill value, the tip, and the final value
// (bill + tip). Example: “The bill was 275, the tip was 41.25, and the total value
// 316.25”
// Test data:
// § Data 1: Test for bill values 275, 40 and 430
// Hints:
// § To calculate 20% of a value, simply multiply it by 20/100 = 0.2
// § Value X is between 50 and 300, if it's >= 50 && <= 300 �

//Todo: 1. calc tip, var - 'tip', NO if/else, TERNARY OPERATOR “The bill was 275, the tip was 41.25, and the total value
//todo     316.25”

//Todo: 2. print bill value, tip, bill+tip.

// //* Data 1

// const bill = 275;
// console.log(
//   `The bill was ${bill}, the tip was ${(tip =
//     bill <= 300 && bill >= 50
//       ? bill * 0.15
//       : bill * 0.2)} and the total value ${bill + tip} `
// );

// Coding Challenge #2
// Steven is still building his tip calculator, using the same rules as before: Tip 15% of
// the bill if the bill value is between 50 and 300, and if the value is different, the tip is
// 20%.
// Your tasks:
// 1. Write a function 'calcTip' that takes any bill value as an input and returns
// the corresponding tip, calculated based on the rules above (you can check out
// the code from first tip calculator challenge if you need to). Use the function
// type you like the most. Test the function using a bill value of 100
// 2. And now let's use arrays! So create an array 'bills' containing the test data
// below
// 3. Create an array 'tips' containing the tip value for each bill, calculated from
// the function you created before
// 4. Bonus: Create an array 'total' containing the total values, so the bill + tip
// Test data: 125, 555 and 44
// Hint: Remember that an array needs a value in each position, and that value can
// actually be the returned value of a function! So you can just call a function as array
// values (so don't store the tip values in separate variables first, but right in the new
// array) �

//Todo: 1. function 'calcTip' takes any bill value as input and returns the coresponding tip - test with value 100
//Todo: 2. array 'bills' contain test data
//Todo: 3. array 'tips' contain tip value for each bill calculated form 'calcTip'
//Todo: 4. Bonus: array 'total' contaioning total values, bill + tip

//* Test data: 125, 555 and 44

// function calcTip(bill) {
//   if (bill <= 300 && bill >= 50) {
//     // tips.push(bill * 0.15);
//     return bill * 0.15;
//   } else {
//     // tips.push(bill * 0.2);
//     return bill * 0.2;
//   }
//   // return `The bill was ${bills}, the tip was ${tips} and the total is: ${total.push(
//   // bills[bills.length - 1] + tips[tips.length - 1]
//   // )}`;
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// console.log(bills, tips);
// const total = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(total);

// Coding Challenge #4
// Let's improve Steven's tip calculator even more, this time using loops!
// Your tasks:
// 1. Create an array 'bills' containing all 10 test bill values
// 2. Create empty arrays for the tips and the totals ('tips' and 'totals')
// 3. Use the 'calcTip' function we wrote before (no need to repeat) to calculate
// tips and total values (bill + tip) for every bill value in the bills array. Use a for
// loop to perform the 10 calculations!
// Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
// Hints: Call ‘calcTip ‘in the loop and use the push method to add values to the
// tips and totals arrays �
// Bonus:
// 4. Bonus: Write a function 'calcAverage' which takes an array called 'arr' as
// an argument. This function calculates the average of all numbers in the given
// array. This is a difficult challenge (we haven't done this before)! Here is how to
// solve it:
// 4.1. First, you will need to add up all values in the array. To do the addition,
// start by creating a variable 'sum' that starts at 0. Then loop over the
// array using a for loop. In each iteration, add the current value to the
// 'sum' variable. This way, by the end of the loop, you have all values
// added together
// 4.2. To calculate the average, divide the sum you calculated before by the
// length of the array (because that's the number of elements)
// 4.3. Call the function with the 'totals' array

//Todo: 1. array 'bills' cantaining 10 test bill vaules
//Todo: 2. empty arrays - 'tips' and 'totals'
//Todo: 3. use again funcion 'calcTip'  (bill + tip) - for loop for calculations
//Todo: Bonus: Write a function 'calcAverage' which takes a array called 'arr' as an argument

//* Test data: 22, 295, 176, 440, 37, 105, 10, 1100, 86 and 52
const bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
const tips = [];
const totals = [];
function calcTip(bill) {
  if (bill <= 300 && bill >= 50) {
    return bill * 0.15;
  } else {
    return bill * 0.2;
  }
}

for (let i = 0; i < bills.length; i++) {
  tips.push(calcTip(bills[i]));
  totals.push(bills[i] + tips[i]);
}
console.log(bills, tips, totals);

function calcAverage(arr) {
  // const calcAverage = function (arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}
console.log(calcAverage(totals));

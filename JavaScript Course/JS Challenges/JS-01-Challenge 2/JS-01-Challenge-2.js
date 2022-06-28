// JavaScript Fundamentals – Part 1
// Coding Challenge #1
// Mark and John are trying to compare their BMI (Body Mass Index), which is
// calculated using the formula:
// BMI = mass / height ** 2 = mass / (height * height) (mass in kg
// and height in meter).
// Your tasks:
// 1. Store Mark's and John's mass and height in variables
// 2. Calculate both their BMIs using the formula (you can even implement both
// versions)
// 3. Create a Boolean variable 'markHigherBMI' containing information about
// whether Mark has a higher BMI than John.
// Test data:
// § Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
// m tall.
// § Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
// m tall.

//  SOLUTION  //

//Todo: Storing the values

//Data #1

// Mark
const weightMark = 78; //kg
const heightMark = 1.69; //m

// John
const weightJohn = 92; //kg
const heightJohn = 1.95; //m

//Data #3

// Mark
const weightMarkV2 = 95; //kg
const heightMarkV2 = 1.88; //m

// Johnk
const weightJohnV2 = 95; //kg
const heightJohnV2 = 1.76; //m

//Todo: Calculating BMI

// Mark's BMI Data #1
const bmiMark = weightMark / heightMark ** 2;
// John's BMI Data #1
const bmiJohn = weightJohn / heightJohn ** 2;

// Mark's BMI Data #2
const bmiMarkV2 = weightMarkV2 / heightMarkV2 ** 2;
// John's BMI Data #2
const bmiJohnV2 = weightJohnV2 / heightJohnV2 ** 2;

//Todo: bool 'markHigherBMI -> Is Mark higher than John?
// Data #1
// const markHigherBMI = bmiMark > bmiJohn;
// Data #2
// const markHigherBMIV2 = bmiMarkV2 > bmiJohnV2;

//? DOES IT WORK?
// console.log(markHigherBMI, markHigherBMIV2);

// Coding Challenge #2
// Use the BMI example from Challenge #1, and the code you already wrote, and
// improve it.
// Your tasks:
// 1. Print a nice output to the console, saying who has the higher BMI. The message
// is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
// BMI (28.3) is higher than John's (23.9)!"

// SOLUTION //

//Todo: 1. Print console output with information on WHO has the highest BMI
//Todo: 2. Use: Template Literal to include BMI values in the message

//? X's BMI (123.4) is higher than Y's (122.3)

// console.log(`${highestBMIPerson}`);

if (bmiMark > bmiJohn) {
  console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
} else {
  console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
}

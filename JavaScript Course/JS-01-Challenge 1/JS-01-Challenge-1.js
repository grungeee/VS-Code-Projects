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
const weightMark = "78"; //kg
const heightMark = "1.69"; //m

// John
const weightJohn = "92"; //kg
const heightJohn = "1.95"; //m

//Data #2

// Mark
const weightMarkV2 = "95"; //kg
const heightMarkV2 = "1.88"; //m

// Johnk
const weightJohnV2 = "85"; //kg
const heightJohnV2 = "1.76"; //m

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
const markHigherBMI = bmiMark > bmiJohn;
// Data #2
const markHigherBMIV2 = bmiMarkV2 > bmiJohnV2;

//? DOES IT WORK?
console.log(markHigherBMI, markHigherBMIV2);

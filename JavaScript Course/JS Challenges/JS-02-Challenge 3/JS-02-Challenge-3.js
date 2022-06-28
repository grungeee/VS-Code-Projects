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
// const weightMark = 78; //kg
// const heightMark = 1.69; //m

// // John
// const weightJohn = 92; //kg
// const heightJohn = 1.95; //m

// //Data #3

// // Mark
// const weightMarkV2 = 95; //kg
// const heightMarkV2 = 1.88; //m

// // Johnk
// const weightJohnV2 = 95; //kg
// const heightJohnV2 = 1.76; //m

// //Todo: Calculating BMI

// // Mark's BMI Data #1
// const bmiMark = weightMark / heightMark ** 2;
// // John's BMI Data #1
// const bmiJohn = weightJohn / heightJohn ** 2;

// // Mark's BMI Data #2
// const bmiMarkV2 = weightMarkV2 / heightMarkV2 ** 2;
// // John's BMI Data #2
// const bmiJohnV2 = weightJohnV2 / heightJohnV2 ** 2;

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

// if (bmiMark > bmiJohn) {
//   console.log(`Mark's BMI (${bmiMark}) is higher than John's (${bmiJohn})!`);
// } else {
//   console.log(`John's BMI (${bmiJohn}) is higher than Mark's (${bmiMark})!`);
// }

// Coding Challenge #3
// Let's go back to Mark and John comparing their BMIs! This time, let's use objects to
// implement the calculations! Remember: BMI = mass / height ** 2 = mass
// / (height * height) (mass in kg and height in meter)
// Your tasks:
// 1. For each of them, create an object with properties for their full name, mass, and
// height (Mark Miller and John Smith)
// 2. Create a 'calcBMI' method on each object to calculate the BMI (the same
// method on both objects). Store the BMI value to a property, and also return it
// from the method
// 3. Log to the console who has the higher BMI, together with the full name and the
// respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"
// Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
// tall.
// GOOD LUCK �

//Todo: 1. Object with: full Name, mass, height [Mark Miller, John Smith]
//Todo: 2. 'calcBMI' method to each object - calculate BMI - store value of BMI to a propery and return it from mothod
//Todo: 3. console.log() who has highest BMI, with full name, BMI value -> "JOhn's BMI (28.3) is higher than Mark's (23.9)!"

//* Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m
const mark = {
  fullName: "Mark Miller",
  mass: 78,
  height: 1.69,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

const john = {
  fullName: "John Smith",
  mass: 92,
  height: 1.95,
  calcBMI: function () {
    this.bmi = this.mass / this.height ** 2;
    return this.bmi;
  },
};

// console.log(
//   `${
//     mark.calcBMI > john.calcBMI ? mark.fullName[0] : john.fullName[0]
//   }'s BMI (${
//     mark.calcBMI > john.calcBMI ? mark.calcBMI() : john.calcBMI()
//   }) higher than ${
//     mark.calcBMI < john.calcBMI ? john.fullName[0] : mark.fullName[0]
//   } (${mark.calcBMI < john.calcBMI ? john.calcBMI : mark.calcBMI()})`
// );
mark.calcBMI();
john.calcBMI();

// Super stupid way :D
console.log(
  `${mark.bmi > john.bmi ? mark.fullName : john.fullName}'s BMI (${
    mark.bmi > john.bmi ? mark.bmi : john.bmi
  }) higher than ${mark.bmi > john.bmi ? john.fullName : mark.fullName}'s (${
    mark.bmi > john.bmi ? john.bmi : mark.bmi
  })`
);

if (mark.bmi > john.bmi) {
  console.log(`${mark.fullName}'s BMI (${mark.bmi})
  is higher than ${john.fullName}'s (${john.bmi})`);
} else {
  console.log(`${john.fullName}'s BMI (${john.bmi})
  is higher than ${mark.fullName}'s (${mark.bmi})`);
}

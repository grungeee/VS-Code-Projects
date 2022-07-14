// Coding Challenge #2
// Let's go back to Julia and Kate's study about dogs. This time, they want to convert
// dog ages to human ages and calculate the average age of the dogs in their study.
// Your tasks:
// Create a function 'calcAverageHumanAge', which accepts an arrays of dog's
// ages ('ages'), and does the following things in order:
// 1. Calculate the dog age in human years using the following formula: if the dog is
// <= 2 years old, humanAge = 2 * dogAge. If the dog is > 2 years old,
// humanAge = 16 + dogAge * 4
// 2. Exclude all dogs that are less than 18 human years old (which is the same as
// keeping dogs that are at least 18 years old)
// 3. Calculate the average human age of all adult dogs (you should already know
// from other challenges how we calculate averages �)
// 4. Run the function for both test datasets
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]

// const data1 = [5, 2, 4, 1, 15, 8, 3];

// function calcAverageHumanAge(ages) {
//   const humanAges = ges.map(age =>
//     //: Calculating dogs age -> in human years
//     age <= 2 ? 2 * age : 16 + age * 4
//   );
//   //: Excluding all dogs that are less then 18 human years
//   const adultDogsInHY = humanAges.filter(age => age >= 18);
//   //: Calculating the everage of human age of all adult dogs
//   const avgAdultDogsInHY =
//     // adultDogsInHY.reduce((acc, age, i, arr) => acc + age, 0) /
//     // adultDogsInHY.length;
//     adultDogsInHY.reduce((acc, age, i, arr) => acc + age / arr.length, 0); //: Alternative way but not as efficient

//   //> tests
//   console.log(humanAges);
//   console.log(adultDogsInHY);
//   console.log(avgAdultDogsInHY);
// }

// calcAverageHumanAge(data1);
//& It is also possible to chain everything 😄

// Coding Challenge #3
// Rewrite the 'calcalcAverageHumanAge' function from Challenge #2, but this time
// as an arrow function, and using chaining!
// Test data:
// § Data 1: [5, 2, 4, 1, 15, 8, 3]
// § Data 2: [16, 6, 10, 5, 6, 1, 4]
// GOOD LUCK �

const data1 = [5, 2, 4, 1, 15, 8, 3];

const calcAverageHumanAge = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

console.log(calcAverageHumanAge(data1));

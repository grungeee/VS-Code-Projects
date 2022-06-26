// "use strict";

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log("I can drive :D");

// function logger() {
//   console.log("My Name is Jonas");
// }

// // calling / running / invoking functionq
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//   const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//   return juice;
// }

// // 5, 0 are the arguments of the funcion
// const appleJuice = fruitProcessor(5, 0);
// console.log(appleJuice);

// // console.log(fruitProcessor(5, 0));
// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// //Number is a built in function like console.log()
// const num = Number("23");


// Function declaration
// function calcAge1(birthYear) {
//   return 2037 - birthYear;
// }
// const age1 = calcAge1(1991);
// console.log(age1);

// // Function expression
// const calcAge2 = function (birthYear) {
//   return 2037 - birthYear;
// };
// const age2 = calcAge2(1991);

// console.log(age1, age2);

// // Arrow function
// const calcAge3 = birthYear => 2037 - birthYear;
// const age3 = calcAge3 (1991);
// console.log(age3)


// const yearsUntilRetirement = (birthYear, firstName) => {
//   const age = 2037 - birthYear;
//   const retirement = 65 - age;
//   // return retirement;
//   return `${firstName} retires in ${retirement}`
// } 

// console.log(yearsUntilRetirement(1991, 'Johnas'))
// console.log(yearsUntilRetirement(1999,'Nikita'))



// // Calling for function from another function
// function cutFruitPieces(fruit) {
//   return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
// const applePieces = cutFruitPieces(apples)
// const orangePieces = cutFruitPieces(oranges)

//   const juice = `Juice with ${applePieces } peices of apples and ${orangePieces} pieces of oranges.`;
//   return juice;
// };

// console.log(fruitProcessor(2,3 ));

const calcAge = function(birthYear) {
  return 2037 - birthYear
}

const yearsUntilRetirement = function (birthYear, firstName) {

  const age = calcAge(birthYear);
  const retirement = 65 - age;

  if(retirement > 0 ) {
    return retirement;
  }else {
    return `${firstName} has already retiered`;
  }
  
  return retirement;
  // return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement(1991, "Jonas"));
console.log(yearsUntilRetirement(1970, "Mike"));

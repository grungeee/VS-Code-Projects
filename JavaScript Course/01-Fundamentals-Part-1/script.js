// let js = "amazing";
// console.log(40 + 8 + 23 - 10);

// console.log("Jonas");

// let firstName = "Nikita";

// console.log(firstName);
// console.log(firstName);
// console.log(firstName);

// let;

// let javascriptIsFun = true;
// console.log(javascriptIsFun);

// console.log(typeof true);
// console.log(typeof javascriptIsFun);
// console.log(typeof 23);
// console.log(typeof "Nikita");

// javascriptIsFun = "Yes!";
// console.log(typeof javascriptIsFun);

// let year;
// console.log(year);
// console.log(typeof year);

// year = 1991;
// console.log(typeof year);
// an interesting bug because it returns 'object'
// console.log(typeof null);

// Math operators
// const now = 2037;
// const ageNikita = now - 1991;
// const ageSarah = now - 2018;
// console.log(ageNikita, ageSarah);

// console.log(ageNikita * 2, ageNikita / 10, 2 ** 3);
// // 2 ** 3 means 2 to the power of 3 = 2 ** 2

// const firstName = "Nikita";
// const lastName = "Sharapa";
// console.log(firstName + " " + lastName);

// // Assignment operators
// let x = 10 + 5;
// x += 10; //x = x + 10 = 25
// x *= 4; //x = x * 4 = 100
// x++; //x = x + 1 = 101
// x--; //x = x + 1 = 100
// x--; //x = x + 1 = 99
// console.log(x);

// // Comparison operators
// console.log(ageNikita > ageSarah); // >, <, >=, <=
// console.log(ageSarah >= 18); //is Sarah of full age (At least 18 y/o or exactly 18)
// // Storing the value in case we would need it later in our code
// const isFullAge = ageSarah >= 18;
// // Comparison in one step (now - ageNikita > now -ageSarah)
// console.log(now - 1991 > now - 2018);

// const now = 2037;
// const ageNikita = now - 1991;
// const ageSarah = now - 2018;

// console.log(now - 1991 > now - 2018);

// let x, y;
// x = y = 25 - 10 - 5; // x = y = 10, x = 10h
// console.log(x, y); // 10, 10

// const averageAge = ageNikita + ageSarah / 2;
// console.log(ageNikita, ageSarah, averageAge);
// // First ageSarah will be devided by 2 then ageNikita added to the quotient

// const firstName = "Jonas";
// const job = "teacher";
// const birthYear = 1991;
// const year = 2037;

// const jonas =
//   "I'm " + firstName + ", a " + (year - birthYear) + " years old " + job + "!";
// console.log(jonas);

// const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
// console.log(jonasNew);

// console.log(`Just a regualr string...`);

// console.log("String with \n\
// multiple  \n\
// lines");

// console.log(`String
// with
// lines`);

// const age = 15;

// if (age >= 18) {
//   console.log("Sarah can start her driving license 🚗");
// } else {
//   const yearsLeft = 18 - age;
//   console.log(`Sarah is too young. Wait another ${yearsLeft} years :)`);
// }

// const birthYear = 1991;

// let century;
// if (birthYear <= 2000) {
//   let century = 20;
// } else {
//   let century = 21;
// }

// console.log(century);

///////////////////////////////////////////////////////////////

// TYPE CONVERSION

// const inputYear = "1991";
// console.log(Number(inputYear), inputYear);
// console.log(Number(inputYear) + 18);

// // NaN - Not a Number (Invalid Number)
// console.log(Number("Jonas"));

// console.log(String(23));

// // JS can convert only to 3 types: Numbers, Strings, Boolean

// // TYPE COERCION

// // JS automatically coerces the number "23" to a string
// console.log("I am " + 23 + "years old");
// // JS automatically coerces the strings "23" and "10" to numbers (= 10) (if subtracted)
// console.log("23" - "10" - 3);
// // JS automatically coerces the number "3" to a string "23103" (if added)
// console.log("23" + "10" + 3);
// console.log("23" / "2");

// let n = "1" + 1; //converts to "11" string
// n = n - 1; //converts to "10" number
// console.log(n);

// console.log("10" - "4" - "3" - 2); // = 1

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean("Jonas"));
// console.log(Boolean({}));
// console.log(Boolean(""));

// const money = 100;
// if (money) {
//   console.log("Don't spend it all ;)"); //if money > 0
// } else {
//   console.log("You should get a job!"); //if money <= 0
// }

// let height = 0;
// if (height) {
//   console.log("DEFINED");
// } else {
//   console.log("UNDEFINED");
// }

/////////////////////////////////////////////

// // =  ASSIGNMENT OPERATOR
// const age = 18;
// // ===  STRIKT EQUALITY OPERATOR [COMPARATIVE]
// if (age === 18) console.log("You just became an adult :D");
// console.log("18" === 18); // -> false
// // == LOOSE EQUALITY OPERATOR (Does type coercion) [COMPARATIVE]
// if (age == 18) console.log("You just became an adult :D");
// console.log("18" == 18); // -> true

// const favorite = Number(prompt("What's your  favorite number?"));
// console.log(favorite);
// console.log(typeof favorite);

// // '23' == 23 WITH === this won't work! unless we specify that the value we are recieving is a number
// if (favorite === 23) {
//   console.log("Cool! 23 is an amzing number!");
// } else if (favorite === 7) {
//   console.log("7 is also a cool number ");
// } else if (favorite === 9) {
//   console.log("9 is also a cool number ");
// } else {
//   console.log("Number is not 23 or 7");
// }
// // DIFFERENT != (loose) !== (strikt)
// if (favorite !== 23) console.log("Why not 23?");

///////////////////////////////////////
// const hasDriversLicense = true; // A
// const hasGoodVision = false; //B

// console.log(hasDriversLicense && hasGoodVision); //AND -> false
// console.log(hasDriversLicense || hasGoodVision); //OR -> true
// console.log(!hasDriversLicense); //NOT (reverses) -> false

// // if (hasDriversLicense && hasGoodVision) {
// //   console.log("You can drive!");
// // } else {
// //   console.log("Sorry, you got to walk :(");
// // }

// const isTired = true; // C
// console.log(hasDriversLicense && hasGoodVision && isTired);

// if (hasDriversLicense && hasGoodVision && !isTired) {
//   console.log("You can drive!");
// } else {
//   console.log("Sorry, you got to walk :(");
// }

// const day = "thursday";

// switch (day) {
//   case "monday": // day === 'monday'
//     console.log("Plan course structure");
//     console.log("Go to coding meetup");
//     break; //without a break the code will continue to execute
//   case "tuesday":
//     console.log("Prepare theory videos");
//     break;
//   case "wednesday":
//   case "thursday":
//     console.log("Write code examples");
//     break;
//   case "friday":
//     console.log("Record videos");
//     break;
//   case "saturday":
//   case "sunday":
//     console.log("Enjoy the weekend :D");
//     break;
//   default:
//     console.log("Not a valid day!");
// }

// // with if / else statements

// const day = "thursday";

// if (day === "monday") {
//   console.log("Plan course structure");
//   console.log("Go to coding meetup");
// } else if (day === "tuesday") {
//   console.log("Prepare theory videos");
// } else if (day === "wednesday" || "thursday") {
//   console.log("Write code examples");
// } else if (day === "friday") {
//   console.log("Record videos");
// } else if (day === "saturday" || "sunday") {
//   console.log("Enjoy the weekend :D");
// } else {
//   console.log("Not a valid day!");
// }

const age = 23;
age >= 18
  ? console.log("I like to drink wine 🍷") //* ? = if
  : console.log("I like to drink water 💧"); // : = else

const drink = age >= 18 ? "wine" : "water";
console.log(drink);

let drink2;
if (age >= 18) {
  drink2 = "wine 🍷";
} else {
  drink2 = "water 💧";
}
console.log(drink2);

console.log(`I like to drink ${age >= 18 ? "wine" : "water"}`);

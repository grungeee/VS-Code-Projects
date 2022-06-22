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

const now = 2037;
const ageNikita = now - 1991;
const ageSarah = now - 2018;

console.log(now - 1991 > now - 2018);

let x, y;
x = y = 25 - 10 - 5; // x = y = 10, x = 10h
console.log(x, y); // 10, 10

const averageAge = ageNikita + ageSarah / 2;
console.log(ageNikita, ageSarah, averageAge);
// First ageSarah will be devided by 2 then ageNikita added to the quotient

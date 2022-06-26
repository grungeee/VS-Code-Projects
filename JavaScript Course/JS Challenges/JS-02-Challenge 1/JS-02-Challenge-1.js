// JavaScript Fundamentals – Part 2
// Coding Challenge #1
// Back to the two gymnastics teams, the Dolphins and the Koalas! There is a new
// gymnastics discipline, which works differently.
// Each team competes 3 times, and then the average of the 3 scores is Galculated (so
// one average score per team).
// A team only wins if it has at least double the average score of the other team.
// Otherwise, no team wins!
// Your tasks:
// 1. Create an arrow function 'calcAverage' to calculate the average of 3 scores
// 2. Use the function to calculate the average for both teams
// 3. Create a function 'checkWinner' that takes the average score of each team
// as parameters ('avgDolhins' and 'avgKoalas'), and then logs the winner
// to the console, together with the victory points, according to the rule above.
// Example: "Koalas win (30 vs. 13)"
// 4. Use the 'checkWinner' function to determine the winner for both Data 1 and
// Data 2
// 5. Ignore draws this time
// Test data:
// § Data 1: Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// § Data 2: Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
// Hints:
// § To calculate average of 3 values, add them all together and divide by 3
// § To check if number A is at least double number B, check for A >= 2 * B.
// Apply this to the team's average scores �

//Todo: 1. arrow function 'calcAverage' - average of 3 scores
//Todo: 2. function to calculate average for both teams
//Todo: 3. function 'checkWinner' - takes avg score of 'avgDolphins' and 'avgKoalas' - winner to console + points "Koalas win (30 vs. 13)"
//Todo: 3. 'checkWinner; function - use for Data 1 & 2

// const avgDolphins = (scoreDolphins1, scoreDolphins2, scoreDolphins3) =>
//   (scoreDolphins1 + scoreDolphins2+ scoreDolphins3) / 3;
// const avgKoalas = (scoreKoalas1, scoreKoalas2, scoreKoalas3) =>
//   (scoreKoalas1+   scoreKoalas2+ scoreKoalas3) / 3;

const calcAverage = (a, b, c) => (a + b + c) / 3;

let avgDolhins = calcAverage;
let avgKoalas = calcAverage;

console.log(avgDolhins(44, 23, 71));

console.log(avgKoalas(65, 54, 49));

//! First made it with arrow function but I like a 'Declaration Function' more
// const checkWinner = (avgDolphins, avgKoalas) => {
function checkWinner(avgDolphins, avgKoalas) {
  if (avgDolphins >= avgKoalas * 2) {
    return `Dolphins win (${avgDolphins} vs. ${avgKoalas})`;
  } else if (avgKoalas >= avgDolphins * 2) {
    return `Koalas win (${avgKoalas} vs. ${avgDolphins})`;
  } else {
    return `No winner`;
  }
}

//* Data 1 Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49
// console.log(checkWinner((44, 23, 71), (65, 54, 49)));
//* Data 2 Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27
console.log(checkWinner(avgDolhins(85, 54, 41), avgKoalas(23, 34, 27)));
console.log(avgDolhins(85, 54, 41), avgKoalas(23, 34, 27));

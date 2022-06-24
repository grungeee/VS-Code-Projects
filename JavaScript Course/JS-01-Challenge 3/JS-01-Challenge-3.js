// Coding Challenge #3
// There are two gymnastics teams, Dolphins and Koalas. They compete against each
// other 3 times. The winner with the highest average score wins a trophy!
// Your tasks:
// 1. Calculate the average score for each team, using the test data below
// 2. Compare the team's average scores to determine the winner of the competition,
// and print it to the console. Don't forget that there can be a draw, so test for that
// as well (draw means they have the same average score)
// 3. Bonus 1: Include a requirement for a minimum score of 100. With this rule, a
// team only wins if it has a higher score than the other team, and the same time a
// score of at least 100 points. Hint: Use a logical operator to test for minimum
// score, as well as multiple else-if blocks �
// 4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when
// both teams have the same score and both have a score greater or equal 100
// points. Otherwise, no team wins the trophy
// Test data:
// § Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
// § Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
// § Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106

//Todo: 1. Calculate average score for each team using the data sheet
//*
//Todo: 2. Compare the average scores - Winner?/Draw? - print to console
//*
//Todo: 3. Bonus 1: Mini requirement score rule - 100
//*
//Todo: 4. Bonus 2: No winner if draw + score < 100
//

// //* Data 1
const averageScoreDolphins = Number((96 + 108 + 89) / 3);
const averageScoreKoalas = Number((88 + 91 + 110) / 3);
console.log(averageScoreDolphins, averageScoreKoalas);

if (averageScoreDolphins > averageScoreKoalas) {
  console.log("Dolphins Won!");
} else if (averageScoreDolphins === averageScoreKoalas) {
  console.log("Draw");
} else {
  console.log("Koalas Won!");
}

// //* Data 2 | Bonus 1
const averageScoreDolphins2 = Number((97 + 112 + 101) / 3);
const averageScoreKoalas2 = Number((109 + 95 + 123) / 3);
console.log(averageScoreDolphins2, averageScoreKoalas2);

if (
  averageScoreDolphins2 > averageScoreKoalas2 &&
  averageScoreDolphins2 >= 100
) {
  console.log("Dolphins Won!");
} else if (averageScoreDolphins2 === averageScoreKoalas2) {
  console.log("Draw");
} else if (
  averageScoreDolphins2 < averageScoreKoalas2 &&
  averageScoreKoalas2 >= 100
) {
  console.log("Koalas Won!");
}

//* Data 3 | Bonus 2
const averageScoreDolphins3 = Number((97 + 112 + 17) / 3);
const averageScoreKoalas3 = Number((109 + 95 + 16) / 3);
console.log(averageScoreDolphins3, averageScoreKoalas3);

if (
  averageScoreDolphins3 > averageScoreKoalas3 &&
  averageScoreDolphins3 >= 100
) {
  console.log("Dolphins Won!");
} else if (
  averageScoreDolphins3 < averageScoreKoalas3 &&
  averageScoreKoalas3 >= 100
) {
  console.log("Koalas Won!");
} else if (
  averageScoreDolphins3 === averageScoreKoalas3 &&
  averageScoreDolphins3 >= 100 &&
  averageScoreKoalas3
) {
  console.log("Draw");
} else {
  console.log("No one wins the trophy :(");
}

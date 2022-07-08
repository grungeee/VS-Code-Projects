const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  scorers: {},
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};
// Coding Challenge #2
// Let's continue with our football betting app! Keep using the 'game' variable from
// before.
// Your tasks:
//- 1. Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")
// //. Solution 1.
// let score = 1;
// for (player of game.scored) {
// console.log(`Goal ${score++}: ${player}`);
// }

// //. Solution 2. (with Object.entries())
// //> Object.entries(obj) method - returns an array of a given object's own enumerable string sring-keyed property [key, value] paris
// //: with indexOf() won't work becuase goals 1&3 were scored by the same player [index: 0, 1, 0, 3]
// for (const [i, player] of Object.entries(game.scored)) {
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

// //. Solution by the teacher
// //> .entries() method - returns a new iterator object that contains the [key, value] pairs for each element in the Map [game.scores]
// //! If i no not mistaking this works only on arrays
// for (const [i, player] of game.scored.entries()) {
//   console.log(`Goal ${Number(i) + 1}: ${player}`);
// }

//- 2. Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

// //. Solution 1. (versetile funcion for any ammount of arguments)
// function avg() {
//   let sum = 0;
//   for (argument of arguments) {
//     sum += argument;
//   }
//   return sum / arguments.length;
// }
// console.log(avg(...Object.values(game.odds)));

// //. Solution by the teacher
// //: Basically the same but with hardcoded odds
// const odds = Object.values(game.odds);
// let average = 0;
// for (const odd of odds) average += odd;
// //: And this new shorthand [average = average / odds.length]
// average /= odds.length;
// console.log(average);

//- 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them
// (except for "draw"). Hint: Note how the odds and the game objects have the
// same property names �

// //! NEVER FORGET: about NESTED objects!
// const {
//   odds: { team1: team1, x: draw, team2: team2 },
// } = game;
// console.log(team1, draw, team2);
//. Solution (logic by the teacher)
// const odds = Object.entries(game.odds);

// const team1 = game.team1;
// const team2 = game.team2;
// for (let [team, odd] of odds) {
//   const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
//   console.log(`Odd of victory ${teamStr}: ${odd}`);
// }
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

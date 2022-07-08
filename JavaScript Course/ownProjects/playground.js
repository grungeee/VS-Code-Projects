'use strickt';

// var str = "How can mirrors be real if our eyes aren't real";

// console.log(`--- TEST ---`);
// const toJadenCase = function (prototype) {
//   //...
//   str = prototype;
//   for (i = 0; i < prototype.length; i++)
//     if (prototype[i] === prototype[i].lowerCase) {
//       return console.log("lower");
//     } else if (prototype[i] === prototype[i].uppercase) {
//       return console.log("upper");
//     }
// };

// toJadenCase(str);

// //* I think temps.push(array1[i], array[2])

// const temps1 = [-6, 17, 12, 12, 14];
// const temps2 = [-7, 18, 3, 3, 4, 6];
// //* Combining both arrays
// function arrayAdder(arr) {
//   // sum = 0
//   const temporar = [];
//   const tempsSum = [];
//   for (let i = 0; i < arr.length; i++) {
//     temporar.push(arr);
//     tempsSum.push(temporar[i]);
//   }

//   return console.log(arr, tempsSum);
// }

// arrayAdder(temps1, temps2);

// const temps2 = [-7, 18, 3, 3, 4, 6];

// const temps1 = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
// // const temps = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// function calcTempAmplitudeNew(t1, t2) {
//   const temps = t1.concat(t2);

//   let max = temps[0];
//   let min = temps[0];
//   for (let i = 0; i < temps.length; i++) {
//     const curTemp = temps[i];
//     if (typeof curTemp != "number") continue;
//     if (curTemp > max) max = curTemp;
//     if (curTemp < min) min = curTemp;
//   }
//   return console.log(`The tempertaure amplitude is: ${max - min}ºC`);
// }

// // calcTempAmplitude(temperatures);
// calcTempAmplitudeNew(temps1, temps2);
//* I want to concatinate n arrays, basically withot defining n ammount of parameters
// const temps1 = [-6, 17, 12, 12, 14];
// const temps2 = [-7, 18, 3, 3, 4, 6];
// function arraySum() {
//   let temps = [];
//   let temporar = [];
//   for (let i = 0; i < arguments.length; i++) {
//     //  let temps = [];
//     // let temporar = [];
//     // temps = arguments[0].concat(arguments[1]);
//     temps = temporar.concat(arguments[i]);
//   }
//   return console.log(temps);
// }
// arraySum(temps1, temps2);

// console.log(`--- TEST concatinate ---`);
// console.log(temps1.indexOf(temps1[]));
//*
// function arraySum(arr) {
//   let i = 0;
//   const temps = [];

//   while (temps < arraySum[i]) {
//     temps.concat(arraySum[i]);
//   }
// return console.log(temps);
// }

// arraySum(temps1, temps2);
// function arraySum(arr) {
// let sum = arr[arraySum[1]].concat(arr[arraySum[0]]);
// return sum;
// console.log(arr);
// }
// arraySum(temps1, temps2);
// console.log(arraySum(temps1, temps2));
// console.log(typeof arraySum(temps1, temps2));
// console.log(temps1, temps2);

// ? Reverse string function
// const str = "apple";

// function reverse(str) {
//   let ctr = "";
//   for (i = str.length; i !== 0; i--) {
//     ctr += str[i - 1];
//   }
//   return ctr;
// }
// console.log(reverse(str));

// const str = "apple";

// function reverse(str) {
//   let reversed = "";
//   for (let character of str) {
//     //* This basically means we put "character" in front of reversed
//     reversed = character + reversed;
//   }
//   return reversed;
// }

// console.log(reverse(str));
// //? Stupid little funcion to add things into an array multiple times
// function runMultiplyer(multiplyWhat, multiplyBy) {
//   let result = [];
//   for (let i = 0; i < multiplyBy; i++) {
//     result += multiplyWhat;
//   }
//   return console.log(result);
// }
// runMultiplyer(5, 3);

//* --- Last part of the challenge

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

// 4. Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:
// {
//  Gnarby: 1,
//  Hummels: 1,
//  Lewandowski: 2
// }

//: game -> scored =[p1, p2, p1, p4], scorers = {key, value}
// game.scored [p1, p2, p1, p3]
// > make ammount of strings = to strings
// let arr = [];
// for (player of game.scored) {
// console.log(player === game.scored[player.indexOf()]);
// console.log(player.indexOf(game.scored));
// if (player )
// }
// let arr = [];
// let scr = [];
// for (let i = 0; i < game.scored.length; i++) {
//   !arr.includes(game.scored[i]) && arr.push(game.scored[i]);
//   arr.includes(game.scored[i]) && scr.push(`${game.scored[i]}: ${+1}`);
//   //> if arr includes a player add 1 to his score if not do nothing
// }
// console.log(arr);
// console.log(scr);
//-
//& scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
//. Step 1: Logic with a temp list -> take an item from it
//. -> through it and remove the item which was looped through it
let tempScored = [];
tempScored = game.scored;
for (let i = 0; i < tempScored.length; i++) {
  if (tempScored.includes(tempScored[i])) {
    //: if an array has this name then ->
    game.scorers[tempScored[i]] = i;
    console.log(game.scorers);
    // console.log(tempScored[i], i);
    // const tempPlayer = tempScored[i]; //: temporary stored players name
    // const tempGoal = i; //: temporary sotered players goal count
    // game.scorers[tempPlayer] = tempGoal;
    // const tempProprty = { tempPlayer: tempScore };
    // Object.assign(game.scorers, {Object.keys( tempPlayer ));
    // game.scorers = { ...game.scorers, tempPlayer,  };
    // game.scorers = { ...game.scorers, tempPlayer, tempScore };
    // game.scorers[i] = {, tempProprty };
  }
  // tempScored.filter(tempScored[i]);
}
// console.log(game.scorers);

//
//
//
//
//
//
//
//
//
// Object.assign(game.scorers, { p1: 1, p2: 2 });
// const { p1 = 1, p2, p3 } = game.scorers;
// console.log(game.scorers);
// const {scorers: {p1: 2, p2: 1,},} = game;
//: Not defined yet
// console.log(scorers);

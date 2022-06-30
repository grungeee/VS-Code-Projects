"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

//! Made a more DRY code
function displayMessage(message) {
  document.querySelector(".message").textContent = message;
}
// console.log(displayMessage("Message from the function"));

//? Random Number generator
let secretNumber = Math.trunc(Math.random() * 10 + 1);
let score = 20;
let highscore = 0;

console.log(typeof highscore, highscore);

document.querySelector(".check").addEventListener("click", function () {
  //? Number that is being input for guess game
  const guess = Number(document.querySelector(".guess").value);

  //? When there is no input
  if (!guess) {
    displayMessage("No number!");

    //? When player wins
  } else if (guess === secretNumber) {
    displayMessage("Congratulations, You Won!");
    //? reveals tehe secret number on win
    document.querySelector(".number").textContent = secretNumber;
    //? Sets a new highscore
    // score > highscore ? (highscore = score) : highscore;
    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
    //* CSS SYLING
    document.querySelector("body").style.backgroundColor = "#60b347";
    document.querySelector(".number").style.width = "30rem";
  }
  //? If the guess is wrong
  else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "Too high!" : "Too low!");
      score--;
      document.querySelector(".score").textContent = Number(score);
    } else {
      displayMessage("You lost the game! :(");
      document.querySelector(".score").textContent = 0;
      document.querySelector("body").style.backgroundColor = "#F65438";
    }
  }
});
//? If the guess is too LOW
// } else if (guess > secretNumber) {
//   if (score > 1) {
//     document.querySelector(".message").textContent = "Too high!";
//     score--;
//     document.querySelector(".score").textContent = Number(score);
//   } else {
//     document.querySelector(".message").textContent = "You lost the game! :(";
//     document.querySelector(".score").textContent = 0;
//   }

//? If the guess is too HIGH
//   } else if (guess < secretNumber) {
//     if (score > 1) {
//       document.querySelector(".message").textContent = "Too low!";
//       score--;
//       document.querySelector(".score").textContent = Number(score);
//     } else {
//       document.querySelector(".message").textContent = "You lost the game! :(";
//       document.querySelector(".score").textContent = 0;
//     }
//   }
// });

// JavaScript in the Browser: DOM and Events
// Coding Challenge #1
// Implement a game rest functionality, so that the player can make a new guess!
// Your tasks:
// 1. Select the element with the 'again' class and attach a click event handler
// 2. In the handler function, restore initial values of the 'score' and
// 'secretNumber' variables
// 3. Restore the initial conditions of the message, number, score and guess input
// fields
// 4. Also restore the original background color (#222) and number width (15rem)

document.querySelector(".again").addEventListener("click", function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 10 + 1);
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  displayMessage("Start guessing...");
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").textContent = "";
  document.querySelector(".number").textContent = "?";
});

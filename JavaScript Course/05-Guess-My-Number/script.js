"use strict";

// console.log(document.querySelector(".message").textContent);
// document.querySelector(".message").textContent = "Correct Number!";
// console.log(document.querySelector(".message").textContent);
// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 10;

// document.querySelector(".guess").value = 23;
// console.log(document.querySelector(".guess").value);

const secretNumber = Math.trunc(Math.random() * 10 + 1);
document.querySelector(".number").textContent = secretNumber;
document.querySelector("highscore").value = Number(
  score > highscore ? (highscore = score) : highscore
);

let score = 20;
let highscore = 1;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);

  //? When there is no input
  if (!guess) {
    document.querySelector(".message").textContent = "No number!";
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent =
      "Congratulations, You Won!";

    //? If the guess is too LOW
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = Number(score);
    } else {
      document.querySelector(".message").textContent = "You lost the game! :(";
      document.querySelector(".score").textContent = 0;
    }

    //? If the guess is too HIGH
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = Number(score);
    } else {
      document.querySelector(".message").textContent = "You lost the game! :(";

      document.querySelector(".score").textContent = 0;
    }
  }
});

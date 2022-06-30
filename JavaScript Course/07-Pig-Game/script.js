"use strict";

//? Selecting elements
const player0EL = document.querySelector(".player--0");
const player1EL = document.querySelector(".player--1");
const btnNew = document.querySelector(".btn--new");
const btnRoll = document.querySelector(".btn--roll");
const btnHold = document.querySelector(".btn--hold");
const diceEl = document.querySelector(".dice");
const currentScoreEl = document.querySelector(".current-score");
const score0El = document.querySelector("#score--0");
const score1El = document.getElementById("score--1");
const current0El = document.getElementById("current--0");
const current1El = document.getElementById("current--1");
const playerActive = document.querySelector(".player--active");

//* FUNCIONS
//? My own function to hide elements
function hide(element) {
  element.classList.add("hidden");
}
//? reveal funcion
function reveal(element) {
  element.classList.remove("hidden");
}
//? set Player as active (change background)
function active(element) {
  element.classList.toggle("player--active");
}
//? set the winner color
function winner(element) {
  element.classList.toggle("player--winner");
}
//? everything on what happens on player swithing
function switchPlayer() {
  const currentPlayer = document.getElementById(`current--${activePlayer}`);
  currentPlayer.textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  active(player0EL);
  active(player1EL);
}
//? RNG
// let dice = 0;
// function roll() {
// return (dice = Math.trunc(Math.random() * 6 + 1));
// }
//? Starting conditions
score0El.textContent = 0;
score1El.textContent = 0;
hide(diceEl);
const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
let playing = true;

//?

btnRoll.addEventListener("click", function () {
  if (playing) {
    //! I made it to make the code a bit cleaner
    const currentPlayer = document.getElementById(`current--${activePlayer}`);
    //!
    // 1. Generationg a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;
    console.log(dice);
    // 2. Display dice
    reveal(diceEl);
    diceEl.src = `dice-${dice}.png`;
    // 3. Check for rolled 1: if true, swith to next player
    if (dice !== 1) {
      currentScore += dice;
      currentPlayer.textContent = currentScore;
    } else {
      // Swithch to next player
      switchPlayer();
    }
  }
});
btnHold.addEventListener("click", function () {
  if (playing) {
    const currentPlayer = document.getElementById(`current--${activePlayer}`);
    const currentPlayerScore = document.getElementById(
      `score--${activePlayer}`
    );
    const currentPlayerCard = document.querySelector(
      `.player--${activePlayer}`
    );
    //1. add current socore to the active player
    scores[activePlayer] += currentScore;
    console.log(scores);
    // finish the game
    currentPlayerScore.textContent = scores[activePlayer];
    if (scores[activePlayer] >= 10) {
      playing = false;
      hide(diceEl);
      active(currentPlayerCard);
      winner(currentPlayerCard);
    } else {
      // else switch players
      switchPlayer();
    }
  }
});

btnNew.addEventListener("click", function () {});

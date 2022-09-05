'use strict';

const BG_COLOR = '#231f20';
const SNAKE_COLOR = '#c2c2c2';
const FOOD_COLOR = '#e66916';

const canvas = document.getElementById('canvas');
const context = canvas.getContext('2d');

canvas.width = canvas.height = 400;

const FR = 10; //frame rate
const S = 20; //screen size
const T = canvas.width / S; //tile

let pos, vel, food, snake;

function init() {
  (pos = { x: 10, y: 10 }), (vel = { x: 0, y: 0 });

  snake = [
    { x: 8, y: 10 },
    { x: 9, y: 10 },
    { x: 10, y: 10 },
  ];

  randomFood();
}

init();

function randomFood() {
  food = {
    x: Math.floor(Math.random() * T),
    y: Math.floor(Math.random() * T),
  };

  for (let cell of snake) {
    if (cell.x === food.x && food.y === cell.y) {
      return randomFood();
    }
  }
}

document.addEventListener('keydown', keydown);

function keydown(e) {
  switch (e.keyCode) {
    case 37: {
      return (vel = { x: -1, y: 0 });
    }
    case 38: {
      return (vel = { x: 0, y: -1 });
    }
    case 39: {
      return (vel = { x: 1, y: 0 });
    }
    case 40: {
      return (vel = { x: 0, y: 1 });
    }
  }
}

setInterval(() => {
  requestAnimationFrame(gameLoop);
}, 1000 / FR);

function gameLoop() {
  context.fillStyle = BG_COLOR;
  context.fillRect(0, 0, canvas.width, canvas.height);

  context.fillStyle = SNAKE_COLOR;
  for (let cell of snake) {
    context.fillRect(cell.x * S, cell.y * S, S, S);
  }

  context.fillStyle = FOOD_COLOR;
  context.fillRect(food.x * S, food.y * S, S, S);

  pos.x += vel.x;
  pos.y += vel.y;

  if (pos.x < 0 || pos.x > T || pos.y < 0 || pos.y > T) {
    init();
  }

  if (food.x === pos.x && food.y === pos.y) {
    snake.push({ ...pos });
    pos.x += vel.x;
    pos.y += vel.y;
    randomFood();
  }

  if (vel.x || vel.y) {
    for (let cell of snake) {
      if (cell.x === pos.x && cell.y === pos.y) {
        return init();
      }
    }
    snake.push({ ...pos });
    snake.shift();
  }
}

// Coding Challenge #4
// Julia and Kate are still studying dogs, and this time they are studying if dogs are
// eating too much or too little.
// Eating too much means the dog's current food portion is larger than the
// recommended portion, and eating too little is the opposite.
// Eating an okay amount means the dog's current food portion is within a range 10%
// above and 10% below the recommended portion (see hint).
// Your tasks:
// & Test data:
const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];
//. 1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate
// the recommended food portion and add it to the object as a new property. Do
// not create a new array, simply loop over the array. Forumla:
// recommendedFood = weight ** 0.75 * 28. (The result is in grams of
// food, and the weight needs to be in kg)

dogs.forEach(dog => (dog.recFood = Math.trunc(dog.weight ** 0.75 * 28)));
dogs.forEach(dog => console.log(dog.recFood));

//. 2. Find Sarah's dog and log to the console whether it's eating too much or too
// little. Hint: Some dogs have multiple owners, so you first need to find Sarah in
// the owners array, and so this one is a bit tricky (on purpose) �
console.log(...dogs);

// const sarahsDog = dogs.forEach(dog => {
// if ([...dog.owners].includes('Sarah')) {
const sarahsDog = dogs.find(dog => {
  if (dog.owners.includes('Sarah')) {
    // dog.curFood >= dog.recFood * 1.1 ? console.log("Sarah's dog overeats") : '';
    // dog.curFood <= dog.recFood * 0.9 ? console.log("Srah's dog undereats") : '';
    console.log(
      `Sarah's dog is eating too ${
        dog.curFood > dog.recFood
          ? 'much'
          : '' || dog.curFood < dog.recFood
          ? 'litte'
          : ''
      }`
    );
  }
});
console.log(sarahsDog);

//. 3. Create an array containing all owners of dogs who eat too much
//. ('ownersEatTooMuch') and an array with all owners of dogs who eat too little
//. ('ownersEatTooLittle').

let ownersEatTooMuch = [];
let ownersEatTooLittle = [];

// dogs.forEach(dog => {
dogs.filter(dog => {
  dog.curFood > dog.recFood ? ownersEatTooMuch.push(...dog.owners) : '';
  dog.curFood < dog.recFood ? ownersEatTooLittle.push(...dog.owners) : '';
});

console.log(ownersEatTooMuch, ownersEatTooLittle);

//> Solution by the teacher

const ownersEatTooMuchTEACHER = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLitteTEACHER = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);

// console.log(ownersEatTooMuchTEACHER, ownersEatTooLitteTEACHER);
//. 4. Log a string to the console for each array created in 3., like this: "Matilda and
//. Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat
//. too little!"

console.log(`${ownersEatTooMuch.join(' and ')} dogs eat too much!`);
console.log(`${ownersEatTooLittle.join(' and ')} dogs eat too little!`);

// const message = ownersEatTooMuch.concat(ownersEatTooLittle).forEach(owener => owener);
// console.log(message);

//. 5. Log to the console whether there is any dog eating exactly the amount of food
//. that is recommended (just true or false)

console.log(dogs.some(dog => dog.curFood === dog.recFood));

//. 6. Log to the console whether there is any dog eating an okay amount of food
//. (just true or false)

const checkDogEatsOk = dog =>
  dog.curFood < dog.recFood * 1.1 && dog.curFood > dog.recFood * 0.9;

console.log(dogs.some(checkDogEatsOk));

//. 7. Create an array containing the dogs that are eating an okay amount of food (try
//. to reuse the condition used in 6.)

let dogsEatOK = [];
dogs.filter(dog =>
  dog.curFood <= dog.recFood * 1.1 && dog.curFood >= dog.recFood * 0.9
    ? dogsEatOK.push(dog)
    : ''
);
console.log(dogsEatOK);

console.log(dogs.filter(checkDogEatsOk));
//. 8. Create a shallow copy of the 'dogs' array and sort it by recommended food
// portion in an ascending order (keep in mind that the portions are inside the
// array's objects �)

sortedRecFood = dogs.slice().sort(
  (a, b) => a.recFood - b.curFood
  // if (a.recFood > b.recFood) return 1;
  // if (a.recFood < b.recFood) return -1;
);
console.log(sortedRecFood);

//. Hints:
// § Use many different tools to solve these challenges, you can use the summary
// lecture to choose between them �
// § Being within a range 10% above and below the recommended portion means:
// current > (recommended * 0.90) && current < (recommended *
// 1.10). Basically, the current portion should be between 90% and 110% of the
// recommended portion.
//& Test data:
//  const dogs = [
//  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
//  { weight: 8, curFood: 200, owners: ['Matilda'] },
//  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
//  { weight: 32, curFood: 340, owners: ['Michael'] },
//  ];

'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainIndex) {
    //! returns an array [] based on the given indexes
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`
    );
  },
  //! first argument gets sotered in the mainIngredient, the rest in totherIngredients
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

//* --- Nullish Coalescing Operator ---

//* OR (Short Circuit) to set a default value for guest if they are not defined
//! Basically the same as if operator. It will log the 1st value if true, if false '10'
//! Used solutions won't work if number of guest is 0
//? logs: 10 if number of guest was defined as 0
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//* Solution to the problem
//! It works with the concept of nullish values instead of falsy values
//! Nullish: null and undefined (NOT 0 or '') it's like OR operator but Nullish values or for it TRUTHY
//? logs: 0 if number of guest was defined as 0
const guestCorrect = restaurant.numGuests ?? 10;
console.log(guestCorrect);

//* --- Short Circuiting ---

//* - AND operator -
//! OR statement can use ANY data type, return ANY data type, short-circuiting
//! the result of OR operation doesn't always needs to be a boolean

//! In case of OR operator: short circuiting means that if the first value is a truthy value, it will immediatrly return that first value
console.log(3 || 'Jonas'); //? Will return: 3
console.log('' || 'Jonas'); //? Will return: Jonas
console.log(true || 0); //? Will return: true
console.log(undefined || null); //? Will return true

//! The following OR chain starts with 0 [falsy] -> '' [falsy] -> 'Hello' [truthy]
//? logs 'Hello'
console.log(undefined || 0 || '' || 'Hello' || 23 || null);

//* IF statement to set a default value for guests if they are not defined
//? We want to define a variable based on the number of guests
//! If the guests number = guests then it will keep the number, else it is basically undefined and a value '10' will be assigned
// restaurant.numGuests = 23;
const guests1 = restaurant.numGuests ? restaurant.numGuests : 10;
//? logs: 10 if numGuests is undefined else '23'
console.log(guests1);

//* OR (Short Circuit) to set a default value for guest if they are not defined
//? Basically the same as if operator. It will log the 1st value if true, if false '10'
const guests2 = restaurant.numGuests || 10;
console.log(guests2);

//* Used solutions won't work if number of guest is 0
//! Because 0 is a falsy value it will go from 1st value [0] to 2nd [10]
//? logs: 10

//* - AND Operator -
//! If the first value is falsy it will return this value, It is like OR but reversed
//? logs: 0 (because Falsy)
console.log(0 && 'Jonas');
//? logs: Jonas (because Truthy)
console.log(7 && 'Jonas');
//! The followng AND chain starts with 'Hello' [truthy] -> '23' [truthy] -> null [falsy]
console.log('Hello' && 23 && null && 'jonas');

//* Real-World example: Ordering Pizza

//! If there is an order Pizza method it will call it
//? it executes a funcion
if (restaurant.orderPizza) {
  restaurant.orderPizza('mushrooms', 'spinach');
}

//! AND statemnt best suits if we just want to check if something does exist
//! IF there is an order Pizza method it will call it
//? it executes a funcion
restaurant.orderPizza && restaurant.orderPizza('mushrooms', 'spinach');

// //* --- Rest Pattern and Parameters

// //* Rest with Arrays
// //! SPREAD, because on RIGHT side of =
// const arr = [1, 2, ...[3, 4]];
// console.log(arr);

// //! REST, because on LEFT side of =
// const [a, b, ...others] = [1, 2, 3, 4, 5];
// console.log(a, b, others);

// //? creating new varibles, spreading arrays on the right side of [=] and assigning those elements to new vaiables
// //! mainMenu has 3 elements, and the one that is skipped between [pizza, , risotto] is NOT assigned to otherFood
// //! There can be only ONE rest in destructuring assignment
// const [pizza, , risotto, ...otherFood] = [
//   ...restaurant.mainMenu,
//   ...restaurant.starterMenu,
// ];
// console.log(pizza, risotto, otherFood);
// //
// //* Rest with Objects
// //
// const { sat, ...weekdays } = restaurant.openingHours;
// console.log(sat, weekdays);
// //
// //* Rest with Funtions
// //! Takes multiple numbers and puts them into one array
// //? This funcion will add the numbers (2, 3) -> 5 and so on
// const add = function (...numbers) {
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   return console.log(sum);
// };
// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 5, 1, 4);
// //? We want to add this array by calling the add funcion
// const x = [23, 5, 7];
// //! We need to spread it first
// add(...x);

// //* Real-World example with Rest: Restaurant order

// restaurant.orderPizza("mushrooms", "onion", "olives", "spinache");
//
//
//
//
//
//
// //* --- Spread Operator ---

// //* Manually adding the elements
// //? We are creating a new array based on 'arr' array [Bad Solution]
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// //* using the Spread Operator
// //? using the 3 dots '...' in front of an array in order to add them to 'goodArray'
// //! [Expand an Array] we use it when we otherwise would write multiple values by comma
// const goodArray = [1, 2, 3]
// console.log(goodArray);

// //? This one is useful to pass multiple values into a funcion
// //! Whenever we need the elements of an array individully, then we can use the Spread Operator
// console.log(...badNewArr);

// //? Now we will create a new array 'newMenu'
// //! By expanding the array 'mainMenu' we can now make an new one with added element "Gnocci" - NOT MANIPULATON!
// //! The differance between Spreading and Destrucuring is that it takes all the elements from the array and it also doesn't create new variables.
// //! As a conseuqance we can only use it in places where we would write values separated by commas.
// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);

// //* Two important usecases of the spread operator: creatin of Shallow Copies of arrays and Merge two arrays togather
// //? Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// //? Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);

// //! Spread operator works on all Iterables
// //! Iterables are: arrays, strings, maps, sets, etc. but NOT Objects
// //? Spreading a string
// const str = "Jonas";
// const letters = [...str, " ", "S."];
// console.log(letters);
// console.log(...str);
// //! This: won't work as ${} does NOT expect multiple values separated by a comma
// console.log(`${...str} Schmedtmann`);
// //! Spreading works when passing arguments into a funtion re when we build a new array
// //
// //* A Real-World Example: Ordering Pasta
// //! Escaping: We can write: 'Let\'s make pasta!' with single quotes and use a backslash to ignore the single quote AFTER it
// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt("Ingredient 2?"),
//   prompt("Ingredient 3"),
// ];
// //? this logs an array -> ["mushrooms", "aspargus", "cheese"]
// console.log(ingredients);
// //? this logs a spreaded array -> mushrooms aspargus cheese
// console.log(...ingredients);
// //? Manualy adding the ingrediants to 'orderPasta' function
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //? Adding the ingredients to the funcion by Spreading the input [mushrooms]
// restaurant.orderPasta(...ingredients);

// //! Objects do work with spreading since ES6
// const newRestaurant = { foundedIn: 1998, ...restaurant, founder: "Guiseppe" };
// console.log(newRestaurant);

// //* Shallow copy of an Object
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// //? This logs a new name (as it is a copy)
// console.log(restaurantCopy.name);
// //? This logs an old name (orginal)
// console.log(restaurant.name);
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
// //* --- Destructuring Objects ---

// //? This will create 3 new variables
// const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// // console.log(restaurantName);
// //? Default values
// const { menu = [], starterMenu: starters = [] } = restaurant;
// console.log(menu, starters);

// //? Mutating variables
// let a = 11;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// //! Destructuring assingnment has to be wrapped in parenthesis
// ({ a, b } = obj);

// console.log(a, b);

// // //* Nested objects
// const {
//   fri: { open: o, close: c },
// } = openingHours;
// console.log(o, c);
/////////////////////////////////
// //* --- Destructuring Arrays ---
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// //? Destructuring assignment
// const [x, y, z] = arr;
// console.log(x, y, z);
// console.log(arr);

// //? assigns the 1st and 2nd elements of the array to "first" and "second"
// const [first, second] = restaurant.categories;
// console.log(first, second);

// //? assigns the 1st and 3nd elements of the array to "first" and "second"
// const [first, , second] = restaurant.categories;
// console.log(first, second);

// //* Switching main food categories from Italian to Vegetaian WITHOUT destructuring
// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //? 'main' [Italian] is assigned to 'temp' [temporar] -> 'main' [Italian] is assigned to 'secondary' -> 'secondary' is assigned to 'temp'
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// //* Destructuring

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// //* Ordering in the restaurant
// console.log(restaurant.starterMenu[2]);
// console.log(restaurant.mainMenu[0]);
// //! returns an array [] based on the given indexes
// console.log("bouth menues:", restaurant.order(2, 0));

// //? Destructuring assignment
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// //* Nested destructuring

// const nested = [2, 4, [5, 6]];
// const [i, , j] = nested;
// //? the output is: 2, [5, 6]
// console.log(i, j);
// const [i, , [j, k]] = nested;
// //? the output is: 2, 5, 6
// console.log(i, j, k);

// //* Default values
// //? if p, q, r are not definded by the assignment attempt  p = 8, q = 9, r = undefined
// const [p, q, r] = [8, 9];
// //? if variables have a default vlue, they will keep it if, won't get a new one, instead of staying undefined
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

// //* Belongs to the 2nd funcion
// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

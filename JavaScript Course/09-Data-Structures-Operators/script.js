// "use strict";

// // Data needed for a later exercise
// const flights =
//   "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// // Data needed for first part of the section
// const restaurant = {
//   name: "Classico Italiano",
//   location: "Via Angelo Tavanti 23, Firenze, Italy",
//   categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
//   starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
//   mainMenu: ["Pizza", "Pasta", "Risotto"],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },
//   order: function (starterIndex, mainIndex) {
//     //! returns an array [] based on the given indexes
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
//     console.log(
//       `Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     );
//   },
// };

// restaurant.orderDelivery({
//   time: "22:30",
//   address: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });

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

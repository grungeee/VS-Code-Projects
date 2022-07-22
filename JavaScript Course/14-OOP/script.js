'use strict';

// //* Constructor function and teh new Opwerator

// const Person = function (firstName, birthYear) {
//   this.firstName = firstName;
//   this.birthYear = birthYear;

//   //! Never creat e a method inside of a consutrucion function -> bad for performance
//   // this.calcAge = function () {
//   // console.log(2037 - this.birthYear);
//   // };
// };

// //> 1. New Obbject is created
// //> 2. function is called, this = {}
// //> 3. {} linked to prototype
// //> 3. function automatically returns {}

// //> this is an instance
// const jonas = new Person('Jonas', 1991);
// console.log(jonas);

// const matilda = new Person('Matilda', 2017);
// const jack = new Person('Jack', 1975);

// console.log(matilda, jack);

// //* Prorotypes

// console.log(Person.prototype);

// //. Adding a method to the prototype propery
// Person.prototype.calcAge = function () {
//   console.log(2037 - this.birthYear);
// };

// jonas.calcAge();
// matilda.calcAge();

// //> This works becasue any object always has access to the methods and properties from its prtotype
// //> -> the prototype of jonas and matilda if the Person.protoype

// console.log(jonas.__proto__);
// //: {calcAge: ƒ, constructor: ƒ}
// //: calcAge: ƒ ()
// //: constructor: ƒ (firstName, birthYear)
// //: [[Prototype]]: Object

// //> prototype of the Jonas opject is the prototype property of the constructor function
// //> Person.prototype is actually not prototype of Person -> it is what is going to be as the prototype of all the objects that are created with the Person constructor function
// console.log(jonas.__proto__ === Person.prototype); //: true

// //. checking if this is a prototype of another object
// //> Person.prototype -> is protoype of jonas
// console.log(Person.prototype.isPrototypeOf(jonas)); //: true
// console.log(Person.prototype.isPrototypeOf(Person)); //: false

// //& should probably be called -> .prototypeOfLinkedObjects

// //. setting properties on prototype object is possible too
// Person.prototype.species = 'Homo Sapiens';
// console.log(jonas);

// console.log(jonas.species, matilda.species); //: Homo Sapiens Homo Sapiens

// console.log(jonas.hasOwnProperty('firstName')); //: true
// console.log(jonas.hasOwnProperty('species')); //: false -> is not inside of the jonas object, but has access to it becuase of it's prototype property Person

// //*  Prototypal Inheritance on Built-In Object

// console.log(jonas.__proto__);
// console.log(jonas.__proto__.__proto__);
// console.log(jonas.__proto__.__proto__.__proto__); //: null

// console.log(Person.prototype.constructor); //: -> points back at Person

// //- looking into the array ptrototype
// //> using arr = [1, 5, 4, 8, 1, 3, 7]; is the same as -> new Array(1, 5, ...)

// const arr = [1, 5, 4, 8, 1, 3, 7];
// console.log(arr.__proto__);
// console.log(arr.__proto__ === Array.prototype); //: true

// //- adding a new method to the prototype propery of Array constructor
// //! in practice not a good idea
// Array.prototype.unique = function () {
//   //: Set() takes the insides of an array, removes the duplicates and
//   [...new Set(this)];
// };

// console.log(arr.unique());

// //. Prototype Chain
// const h1 = document.querySelector('h1');
// console.dir(h1);

// //: h1 -> HTMLHeadingElement -> HTMLElement -> Element -> Node -> EventTarget -> Object

// //.

// console.dir(x => x + 1);

// //* ES6 Classes

// //- class expression
// // const PersonCl = class {}

// //- class declaration
// class PersonCl {
//   constructor(firstName, birthYear) {
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }

//   //> methods that are set outside of constructor -> will be on the prototype of the objects
//   calcAge() {
//     console.log(2037 - this.birthYear);
//   }

//   greet() {
//     console.log(`Hey ${this.firstName}`);
//   }
// }

// const jessica = new PersonCl('Jessica', 1996);
// console.log(jessica);
// jessica.calcAge();

// console.log(jessica.__proto__ === PersonCl.prototype); //: true

// //> Works the same way as setting the method directly in the class
// // PersonCl.prototype.greet = function () {
// //   console.log(`Hey ${this.firstName}`);
// // };
// jessica.greet();

// //& Notes:
// //: 1. Classes are NOT hoisted (unlike funnctions, which can be used before they are declared in the code)
// //: 2. Classes are first-class citizens (can pass into functions and return form them)
// //: 3. Classes are executed in strict mode

//* Setters and Getters

//> Every object in JS can have Setter and Getter properties
//> special properties -> Assesor properties
//> normal properties -> Data properties
//> Setter and Getter look like regular properties but -> are funcions that set and get vlues

class PersonCl {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }

  //> methods that are set outside of constructor -> will be on the prototype of the objects
  calcAge() {
    console.log(2037 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }

  get age() {
    return 2037 - this.birthYear;
  }

  set fullName(name) {
    console.log(name);
    //> the fullName has to be changed in order to avid a conflict with the constructor fullName -> _fullName
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not a full name`);
  }
  //> now it is impossible to access the fullName variable becasue it was overwitten by -> _fullName
  //> solution: now we need to set getter for the fullName property which ruturns _fullName
  get fullName() {
    return this._fullName; //: returns _fullName if called for fullName
  }
}

const jessica = new PersonCl('Jessica Davis', 1996);
console.log(jessica);
jessica.calcAge();

const walter = new PersonCl('Walter', 1);

const account = {
  owner: 'jonas',
  movement: [200, 530, 120, 300],
  get latest() {
    //: gets the last value of movement into a new array -> pop() takes it out
    return this.movement.slice(-1).pop();
  },
  //> setter has to have at least 1 parameter
  set latest(mov) {
    this.movement.push(mov);
  },
};

//> without get -> latest() -> account.latest()
console.log(account.latest);

account.latest = 50;

console.log(account.movement);

console.log(jessica.age);
console.log(jessica.fullName);

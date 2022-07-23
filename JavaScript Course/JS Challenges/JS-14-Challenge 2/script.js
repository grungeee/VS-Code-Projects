// Object Oriented Programming (OOP)
// Coding Challenge #1
// Your tasks:
// 1. Use a constructor function to implement a 'Car'. A car has a 'make' and a
// 'speed' property. The 'speed' property is the current speed of the car in
// km/h
// 2. Implement an 'accelerate' method that will increase the car's speed by 10,
// and log the new speed to the console
// 3. Implement a 'brake' method that will decrease the car's speed by 5, and log
// the new speed to the console
// 4. Create 2 'Car' objects and experiment with calling 'accelerate' and
// 'brake' multiple times on each of them
// Test data:
// § Data car 1: 'BMW' going at 120 km/h
// § Data car 2: 'Mercedes' going at 95 km/h

function Car(make, speed) {
  this.make = make;
  this.speed = speed;
}

// const bmw = new Car('BMW', 120);
// const mercedes = new Car('Mercedes', 95);
// const mercedes = new Car('Mercedes going at 95 km/h')

Car.prototype.accelerate = function () {
  console.log(`${this.make} is going at ${(this.speed += 10)} km/h`);
};

Car.prototype.brake = function () {
  console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
};

// console.log(bmw.make);
// console.log(bmw.speed);
// bmw.accelerate();
// bmw.brake();
// bmw.brake();

// console.log(mercedes.make);
// console.log(bmw.speed);
// mercedes.accelerate();
// mercedes.brake();
// mercedes.brake();

//& <===/ /===>
// Coding Challenge #2
// Your tasks:
// 1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
// 2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide
// by 1.6)
//. 3. Add a setter called 'speedUS' which sets the current speed in mi/h (but
//. converts it to km/h before storing the value, by multiplying the input by 1.6)
// 4. Create a new car and experiment with the 'accelerate' and 'brake'
// methods, and with the getter and setter.
// Test data:
// § Data car 1: 'Ford' going at 120 km/
//& <===/ /===>

class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }
  accelerate() {
    console.log(`${this.make} is going at ${(this.speed += 10)} km/h`);
  }

  brake() {
    console.log(`${this.make} is going at ${(this.speed -= 5)} km/h`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(convSpeed) {
    this.speed = convSpeed * 1.6;
  }
}

ford = new CarCl('Ford', 120);

console.log(ford.speed);
console.log(ford.speedUS);

ford.brake();
ford.brake();
ford.brake();
ford.brake();

console.log(ford.speedUS);
console.log((ford.speedUS = 100));

console.log(ford.speed);

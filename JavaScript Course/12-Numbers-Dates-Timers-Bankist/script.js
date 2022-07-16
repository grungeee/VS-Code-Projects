'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out.toFixed(2))}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc.movements);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

///////////////////////////////////////
// Event handlers
let currentAccount;

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    // Add movement
    currentAccount.movements.push(amount);

    // Update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// //* Converting and Checking Numbers

// console.log(23 === 23.0);

// //> Numbers are represented internaly in 64 to base 2
// //> Stored in binary format
// //> 2 -> 0 1

// console.log(0.1 + 0.2); //: 0.30000000000000004
// console.log(0.1 + 0.2 === 0.3); //: false

// console.log(Number('23'));
// //> turns '23' String in 23 Number
// //> so + is same as Number
// console.log(+'23');

// //- Parsing
// //> similar to type coersion
// console.log(Number.parseInt('30px')); //: 30
// //> doesn't work
// console.log(Number.parseInt('e30')); //: NaN

// //> Interger
// console.log(Number.parseInt('2.5rem')); //: 2
// //> Flating point
// console.log(Number.parseFloat('2.5rem')); //: 2.5
// //! works too but is incuraged NOT to do so
// console.log(parseFloat('2.5rem')); //: 2.5

// //. Checking if value is NaN
// //> Checks if NaN
// console.log(Number.isNaN(20)); //: false
// console.log(Number.isNaN('20')); //: false
// console.log(Number.isNaN(+'20X')); //: true
// //> deviding by 0 -> infinity
// console.log(23 / 0); //: Infinity
// console.log(Number.isNaN(23 / 0)); //: false

// //. Checking if value is number
// console.log(Number.isFinite(20)); //: true
// console.log(Number.isFinite('20')); //: false
// console.log(Number.isFinite(23 / 0)); //: false

// //* Math and Rounding

// //- Square Root

// console.log(Math.sqrt(25)); //: 5
// //. Exponentiation operator (for square root)
// console.log(25 ** (1 / 2)); //: 5
// //> cubic root
// console.log(25 ** (1 / 3));

// //- Max value

// //> does type coersion
// console.log(Math.max(5, 18, 23, 11, 2)); //: 23
// console.log(Math.max(5, 18, '23', 11, 2)); //: 23
// //> doesn't do parsing
// console.log(Math.max(5, 18, '23px', 11, 2)); //: NaN

// //- Min value

// console.log(Math.PI); //: 3.141592653589793
// //> Calculating Area
// console.log(Math.PI * Number.parseFloat('10px') ** 2); //:314.1592653589793

// //- Random

// console.log(Math.trunc(Math.random() * 6) + 1); //: Values between 1 and 6

// //> Making a general functon for generating random num -> max - min
// //> 0...1 -> 0..max - min ->  min...max
// //! from 1 to 10 never 1 -> 10 to 20 never 10
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min) + 1) + min;
// // console.log(randomInt(0, 3));

// //- Rounding Integers

// console.log(Math.trunc(23.3)); //: 23

// //> Rounds to the closest one
// console.log(Math.round(23.3)); //: 23
// console.log(Math.round(23.9)); //: 24

// //> rounds to the highest one
// console.log(Math.ceil(23.3)); //: 23
// console.log(Math.ceil(23.9)); //: 24

// //> rounds to the lowest one
// console.log(Math.floor(23.3)); //: 23
// //> does type coersion
// console.log(Math.floor('23.9')); //: 23

// //! floor works with negative numbers and trunc doesn't
// console.log(randomInt(-1, 3)); //: 0 - 3

// //- Rounding Decimals

// //! Returns a string
// console.log((2.7).toFixed(0)); //: 2 <- string
// console.log((2.7).toFixed(3)); //: 2.700 <- string
// console.log((2.245).toFixed(2)); //: 2.25 <- string
// console.log(+(2.245).toFixed(2)); //: 2.25 <- Number

// //* The Remainder Operator

// //- Remainder
// console.log(5 % 2); //: 1
// console.log(5 / 2); //> 5 = 2 * 2 + 1
// console.log(8 % 2); //: 0
// console.log(8 % 3); //: 2
// console.log(8 / 3); //> 8 = 2 * 3 + 2

// //- Checking if number is odd or even
// //> if remainer of 2 === 0 -> it's even
// console.log(6 % 2); //: 0
// //> if remainer of 2 !== 0 -> it's odd
// console.log(7 % 2); //: 1

// //. funcion to check if number odd/even
// const isEven = num => num % 2 === 0;
// console.log(isEven(8));
// console.log(isEven(23));
// console.log(isEven(514));

// //. Checking if number is devisible by other
// //! i % (nth time) === 0
// //> nth time does something

// labelBalance.addEventListener('click', function () {
//   [...document.querySelectorAll('.movements__row')].forEach((row, i) => {
//     i % 2 === 0
//       ? (row.style.backgroundColor = 'orangered')
//       : console.log('odd');
//     i % 3 === 0 ? (row.style.backgroundColor = 'red') : console.log('odd');
//     i % 4 === 0 ? (row.style.backgroundColor = 'blue') : console.log('odd');
//   });
// });

//* Numeric Separator

//- 287,460,000,000
const diameter = 287_460_000_000;
console.log(diameter); //: 287460000000
console.log(diameter);

const price = 345_99;
console.log(price);

const transferFee1 = 15_00;
const transferFee2 = 1_500;

//! Illegal: at the start, before/after dot, end
// const PI = _3_._14__15_;

//> Does NOT work
console.log(Number('230_000')); //: NaN
console.log(parseInt('230_000')); //: 230

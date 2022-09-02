'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
//* BANKIST APP

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
    '2020-01-25T14:18:46.235Z',
    '2022-07-11T12:01:20.894Z',
    '2022-07-14T12:01:20.894Z',
    '2022-07-15T12:01:20.894Z',
    '2022-07-16T12:01:20.894Z',
    '2022-07-17T12:01:20.894Z',
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
//& Functions

//* Formating Number's Units

function formatCur(value, locale, currency) {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(value);
}

//* Formating Movements Date
const formatMovementDate = function (date, locale) {
  //: how many days have passed since movement has happened
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);
  console.log(daysPassed);
  if (daysPassed === 0) return 'Today';
  if (daysPassed === 1) return 'Yesterday';
  if (daysPassed <= 7) return `${daysPassed} Days ago`;

  //: date formating
  // const day = `${date.getDate()}`.padStart(2, 0);
  // const month = `${date.getMonth()}`.padStart(2, 0);
  // const year = date.getFullYear();
  // return `${day}/${month}/${year}`;
  return new Intl.DateTimeFormat(locale).format(date);
};

//* Movements
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';

    //: Gets the date from movementsDates
    const date = new Date(acc.movementsDates[i]);
    //: display date on the movement el
    // const displayDate = formatMovementDate(date);
    const displayDate = formatMovementDate(date, acc.locale);
    //: change mov number formatting
    const formattedMov = formatCur(mov, acc.locale, acc.currency);

    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
<div class="movements__date">${displayDate}</div>
        <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  // labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

//* Display Summary

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${formatCur(incomes, acc.locale, acc.currency)}`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${formatCur(
    Math.abs(out),
    acc.locale,
    acc.currency
  )}`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${formatCur(
    interest,
    acc.locale,
    acc.currency
  )}`;
};
//* Create Usernames
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

//* Update UI
const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};

//* Logout timer
function startLogoutTimer() {
  function tick() {
    //> dividing time / 60 -> min with decimal
    const min = `${Math.trunc(time / 60)}`.padStart(2, 0); //: pad works only on stings so `` of String()
    //> remainder of time / 60 -> sec
    const sec = `${Math.trunc(time % 60)}`.padStart(2, 0);

    //: in each call print remaining time to UI
    labelTimer.textContent = `${min} : ${sec}`;
    if (time === 0)
      clearTimeout(timer),
        (labelWelcome.textContent = 'Log in to get started'),
        (containerApp.style.opacity = '0');

    //! needs to be after -> if before the code will be executed before timer could get updated
    //: Decrese 1s
    time--;
  }

  //: set time to 5 min
  //! test -> set actuall time to 5 *  60
  let time = 5 * 60;

  //: Call the timer immediately
  tick();
  //: Call the timer every second
  const timer = setInterval(tick, 1000);
  //! to be able to use timer variable we need to return it
  return timer;
}

///////////////////////////////////////
//* Event handlers
let currentAccount, timer;

//& ////////////////////////////////////////
//* FAKE ALWAYS LOGGED IN
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = '100';

//& //////////////////////////////////////

//* Login
btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //- Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;

    //- Udate current date
    //. Experimenting API
    //> ISO Language Code Table
    const now = new Date();
    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'numeric', //: 7
      // month: '2-digit', //: 07
      // month: 'long', //: July
      year: 'numeric',
      // year: '2-digit',
      // weekday: 'long',
    };
    // > get locale from users browser
    const locale = navigator.language;
    console.log(locale);
    // > Creates a formater for this language
    // > passing lacale sting 'en-US'
    labelDate.textContent = new Intl.DateTimeFormat(
      // > to change locale for current account
      currentAccount.locale,
      options
    ).format(now);
    // : day/month/year, hr:min
    // const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // const month = `${now.getMonth()}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.getHours()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year}, ${hour}:${min}`;

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    // Update UI
    updateUI(currentAccount);

    //. Start the logout timer
    //> if a timer is running (already exist) [startLT() returns timer]
    //> flase -> start timer [returns timer]
    //> true -> clear timer [before] start timer
    if (timer) clearInterval(timer);
    timer = startLogoutTimer();
  }
});

//* Transfer
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

    //: Add transfer date
    currentAccount.movementsDates.push(new Date().toISOString());
    receiverAcc.movementsDates.push(new Date().toISOString());

    // Update UI
    updateUI(currentAccount);

    //: Reset timer
    clearInterval(timer);
    timer = startLogoutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    console.log('It will take some time...');
    setTimeout(() => {
      // Add movement
      currentAccount.movements.push(amount);
      //: Add transfer date
      currentAccount.movementsDates.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);
      console.log('Your loan was approved');
    }, 3000);
  }
  inputLoanAmount.value = '';

  //: Reset timer
  clearInterval(timer);
  timer = startLogoutTimer();
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
  displayMovements(currentAccount, !sorted);
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

// //. Checking if number is divisible by other
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

// //* Numeric Separator

// //- 287,460,000,000
// const diameter = 287_460_000_000;
// console.log(diameter); //: 287460000000
// console.log(diameter);

// const price = 345_99;
// console.log(price);

// const transferFee1 = 15_00;
// const transferFee2 = 1_500;

// //! Illegal: at the start, before/after dot, end
// // const PI = _3_._14__15_;

// //> Does NOT work
// console.log(Number('230_000')); //: NaN
// console.log(parseInt('230_000')); //: 230

// //* Working with BigInt

// //. Max Safe number
// console.log(2 ** 53 - 1); //: 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER); //: 9007199254740991

// //. Unsafe number
// //> Wrong log
// console.log(Number.MAX_SAFE_INTEGER + 2); //: 9007199254740992

// console.log(4564564564564565447894123784n); //: 4564564564564565447894123784n
// //> has to have n at the end or use smaller nums
// console.log(BigInt(4564564564564565447894123784n));

// //. Operations
// console.log(10000n + 10000n);
// console.log(4566789112124578152314745123788889917123n * 1000000n);

// //> Can't use enormal nums with bigInt
// const huge = 20289745647812137854123n;
// const num = 23;

// // console.log(huge * num); //! ERROR
// console.log(huge * BigInt(num)); //: 466664149899679170644829n

// console.log(20n > 15); //: true
// console.log(20n === 20); //: false
// console.log(20n == 20); //: true

// //> type coersion supported
// console.log(huge + ' is REALLY big!!!');
// //> Math.sqrt(16n) won't owrk

// //. Divisions
// console.log(11n / 3n);
// console.log(10 / 3);

// //* Creating Dates

// const now = new Date();
// console.log(now);

// console.log(new Date('Aug 02 2020 18:05:41'));
// console.log(new Date('December 24, 2015'));
// console.log(new Date(account1.movementsDates[0]));

// //! Month in JS(This forat) is 0 based 10 !== October -> 10 === November
// console.log(new Date(2037, 10, 19, 15, 23, 5));
// console.log(new Date(2037, 10, 5));

// //. beginning of Unix time
// console.log(new Date(0));
// //> 3 days after beginning of unix time [days, hours, min, sec, ms]
// //> 259200000 is called a timestamp
// console.log(new Date(3 * 24 * 60 * 60 * 1000)); //: 259200000

// //- Working with dates

// const future = new Date(2037, 10, 19, 15, 23);
// console.log(future);
// console.log(future.getFullYear());
// console.log(future.getMonth());
// console.log(future.getDate());
// console.log(future.getDay()); //> 4 -> Thu -> day of the week
// console.log(future.getHours());
// console.log(future.getMinutes());
// console.log(future.getSeconds());
// console.log(future.toISOString()); //: 2037-11-19T14:23:00.000Z -> universal time zone
// console.log(future.getTime()); //: 2142253380000 -> timestamp (from the start of unix time)

// console.log(new Date(2142253380000)); //: gets the date based on time passed form the start of unix time (future) Thu Nov 19 2037 15:23:00 GMT+0100 (Mitteleuropäische Normalzeit)

// console.log(Date.now()); //: 1658013166373 -> timestamp of the moment rn
// console.log(new Date(1658013166373)); //: Sun Jul 17 2022 01:12:46 GMT+0200 (Mitteleuropäische Sommerzeit)

// //. method for changing the year
// future.setFullYear(2040);
// console.log(future);

// //* Operations With Dates

// const future = new Date(2037, 10, 19, 15, 23);
// //> Number() or + in front of date value converts it in a timestamp
// console.log(+future);

// //: Calculating how many days have passed
// const calcDaysPassed = (date1, date2) =>
//   Math.abs(date2 - date1) / (1000 * 60 * 60 * 24);

// const days1 = calcDaysPassed(new Date(2037, 5, 4), new Date(2037, 5, 14));
// console.log(days1);

// //& for more precise date calculations use library like moment.js

// //* Intl Numbers

// const num = '3884764.23';

// const options = {
//   //> settings
//   // style: 'unit',
//   style: 'currency',
//   // style: 'percent',

//   // unit: 'mile-per-hour',
//   // unit: 'celsius',
//   currency: 'EUR',
// };

// console.log(new Intl.NumberFormat('ar-SY', options).format(num));
// console.log(new Intl.NumberFormat('en-US', options).format(num));
// console.log(new Intl.NumberFormat('de-DE', options).format(num));
// console.log(new Intl.NumberFormat(navigator.language, options).format(num));

// //* Timers: setTimeout() and setInterval()

// //- setTimeout()
// //> registers the function and executes it after a count down
// const ingredients = ['olives', 'spinach'];

// const pizzaTimer = setTimeout(
//   (ing1, ing2) => {
//     console.log(`Here is your pizza with ${ing1} and ${ing2} 🍕`);
//   },
//   //> before time has passt, we can cansel the exucution
//   3000,
//   ...ingredients
// );
// console.log('Waiting...');
// if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

// //- setInterval()
// setInterval(function () {
//   const now = new Date();
//   const options = {
//     hour: '2-digit',
//     minute: '2-digit',
//     second: '2-digit',
//   };
//   // console.log(`${now.getHours()} : ${now.getMinutes()} : ${now.getSeconds()}`);
//   console.log(new Intl.DateTimeFormat(navigator.language, options).format(now));
// }, 1000);

'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//& ////////////////// FUNTIONALITY ///////////////////

//* Button scrolling

//> Getting the CURRENT coordiantes of the element top in relation to the top of the VP
//> they will change depending where we are on the page -> distance from the
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  //> getts coordinates of the element relative to the top of the page
  console.log(e.target.getBoundingClientRect());

  //> Getting current coordiantes of the element's VP top relative to the top of the page
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //> Gets the current VP size of the client
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // - Modern Scrolling (smooth)
  section1.scrollIntoView({ behavior: 'smooth' });
});

//* Page navigation

document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href'); //: #section--1
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

//- Event Delegation: Implementing Page Navigation
//. 1. Add event listener to common parent element
//. 2. Determine what element originated the event

//& ///////////////////////////////////////////
//& ///////////////////////////////////////////
//& ///////////////////////////////////////////

// //* Selecting, Creating and Deleting Elements

// //- Selecting

// //. Selecting the entire page
// console.log(document.documentElement); //: <html>
// console.log(document.head); //: <head>
// console.log(document.body); //: <body>

const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('.section--1');
// const allButtons = document.getElementsByTagName('button');
// //> returns HTMLCollection -> if DOM changes this will be updated automatically
// //! unlike NodeList
// console.log(allButtons); //: HTMLCollection(9) [button.btn--text.btn--scroll-toHTMLCollection(9) [button.btn--text.btn--scroll-to

// console.log(document.getElementsByClassName('btn')); //: HTMLCollection(5) [button.btn.operations__tab ...

// //- Creating and inserting elements
// //: .insertAdjacentHTML

// //> creates an element, but does NOT add it to the DOM yet
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML =
  'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// //! Adds an element only on one place because it is alredy on the page and cant exist twice
// //> prepend adds an element as the first child of an element
header.prepend(message);
// //> prepend adds an element as the first child of an element
// header.append(message);

// //. cloneNode()
// //> to make multiple same elements we have to copy them in the first place
// header.append(message.cloneNode(true));

//- Delete elements
//. remove()
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove();
    //: old way -> worked only on deleting child els
    message.parentElement.removeChild(message);
  });

//? Dom treversing (technuque)

// //* Styles, Attributes and Classes
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%';

// //> we can't read a sytle that is hidden iside a class
// console.log(message.style.color);

// //. getcomputedStyle()
// //> reading the styles of an element
// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// //> adding 30 pix to height of the message
// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// //> changing colors of elements
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// //- Attributes

// //. Reading attributes
// const logo = document.querySelector('.nav__logo');
// //> will creatte a property on the object
// console.log(logo.alt);
// //> if a property an element doesn't exist (not a standart on)
// console.log(logo.designer); //: undefined
// console.log(logo.className); //: nav__logo

// //. Changing attributes
// logo.alt = 'Beautiful minimalist logo';

// //. Non-standart attributes
// console.log(logo.designer);
// console.log(logo.getAttribute('designer')); //: Jonas

// //. Setting Non-standart attributes
// logo.setAttribute('company', 'Bankist'); //: <img ...  company="Bankist">

// //. Getting attributes of soureces
// //> absolute version
// console.log(logo.src); //: http://127.0.0.1:5500/JavaScript%20Course/13-Advanced-DOM-Bankist/img/logo.png
// //> relative version
// console.log(logo.getAttribute('src')); //: img/logo.png

// const link = document.querySelector('.nav__link--btn');
// console.log(link.href); //: #
// console.log(link.getAttribute('href')); //: http://127.0.0.1:5500/JavaScript%20Course/13-Advanced-DOM-Bankist/#

// //- Data Attributes
// //> in html -> data-version-number="3.0"
// console.log(logo.dataset.versionNumber); //: 3.0

// //- Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c'); //> not includes (like in arrays)
// //! do not use this -> will override all classes and add ONLY one
// logo.clasName = 'jonas';

// //* Implementing Smooth Scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// const section1 = document.querySelector('#section--1');

// //> Getting the CURRENT coordiantes of the element top in relation to the top of the VP
// //> they will change depending where we are on the page -> distance from the
// btnScrollTo.addEventListener('click', function (e) {
//   const s1coords = section1.getBoundingClientRect();
//   console.log(s1coords);

//   //> getts coordinates of the element relative to the top of the page
//   console.log(e.target.getBoundingClientRect());

//   //> Getting current coordiantes of the element's VP top relative to the top of the page
//   console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

//   //> Gets the current VP size of the client
//   console.log(
//     'height/width viewport',
//     document.documentElement.clientHeight,
//     document.documentElement.clientWidth
//   );

//   //- Scrolling

//   //. Absolute Position
//   //> this will not work properly, becuse it is relative to the VP not top of the page
//   //! Solution: adding the current elment pos relative to vp + the posistion of of the page scroll -> current position + current scroll -> getBoundingClientRect + page[]Offset

//   // window.scrollTo(
//   //   s1coords.left + window.pageXOffset,
//   //   s1coords.top + window.pageYOffset
//   // );

//   //- Smooth Scrolling

//   //> old way
//   // window.scrollTo({
//   //   left: s1coords.left + window.pageXOffset,
//   //   top: s1coords.top + window.pageYOffset,
//   //   behavior: 'smooth',
//   // });

//   // - Modern Scrolling
//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //* Types of Events and Event Handlers

// const h1 = document.querySelector('h1');

// //. Regular Way

// //> With AEL we can add multiple ELs to the same event
// const alertH1 = function (element) {
//   alert('addEventListener: Great! You are reading teh heading 👽');

//   //> we can remove an event too
//   //> insid
//   // h1.removeEventListener('mouseenter', alertH1); //: removes it after it was done once
// };
// h1.addEventListener('mouseenter', alertH1);

// //> and outside
// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1); //: removes it after it was done once
// }, 5000);

// //. old way
// // h1.onmouseenter = function (e) {
// //   alert('addEventListener: Great! You are reading teh heading 👽');
// // };

// //. possible to use inside the html attribute
// //> shuld not be used tho
// //: <h1 onclick="alert('HTML alert')">

// //* Event Propagation in Practice

// //rgb(255,255,255)
// const randomInt = (min, max) =>
//   Math.floor(Math.random() * (max - min + 1) + min);
// const randomColor = () =>
//   `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// document
//   .querySelector('.nav__link')
//   .addEventListener('click', function (element) {
//     console.log('LINK', element.target, element.currentTarget);
//     this.style.backgroundColor = randomColor();

//     //. Stop propagation
//     element.stopPropagation();
//   });
// document
//   .querySelector('.nav__links')
//   .addEventListener('click', function (element) {
//     console.log('CONTAINER', element.target, element.currentTarget);
//     this.style.backgroundColor = randomColor();
//   });
// document.querySelector('.nav').addEventListener(
//   'click',
//   function (element) {
//     console.log('NAV', element.target, element.currentTarget);
//     this.style.backgroundColor = randomColor();

//     //. Listens for Capturing Event instead of Bubbling events
//   },
//   true
// );

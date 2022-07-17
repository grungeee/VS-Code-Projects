'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

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

//* Implementing Smooth Scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

//> Getting the CURRENT cordiantes of the element in relation to the top of a viewport
//> they will change depending where we are on the page
btnScrollTo.addEventListener('click', function (e) {
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());

  //> Getting current cordiantes of the top of the VP in relation to the top of the page
  console.log('Current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  //> Gets the current VP size of the client
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //- Scrolling
});

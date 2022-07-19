'use strict';
//^! Add the cooky message in the end!
///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');
const nav = document.querySelector('.nav');

//* Modal Window

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

  //> gets coordinates of the element relative to the top of the page
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

// document.querySelectorAll('.nav__link').forEach(function (el) {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href'); //: #section--1
//     console.log(id);
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

//- Event Delegation: Implementing Page Navigation
//. 1. Add event listener to common parent element
//. 2. Determine what element originated the event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();

  //. Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href'); //: #section--1
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//* Tabbed component

//. Btn with multiple els
tabsContainer.addEventListener('click', function (e) {
  //> selecting all els (children) of the op_tab (parent) el (becuse there are mutiple)
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //. Guard Clause
  //: this is a lot cleaner then traditional version
  if (!clicked) return; //: returns immediately if true (null)
  //: Traditional way
  // if (clicked) {
  //   clicked.classList.add('operations__tab--active');
  // }

  //: adding a class to an element
  // clicked.classList.add('operations__tab--active');
  //> becuase we have selected the whole container this will try to add this class the parent el's too but there is no el with class 'op__tab'
  //: if the parent el (op__tab-container) is clicked -> returns null
  //> so to we need to ignore any clicks with null -> Guard Clause to ignore

  //. Active tab
  //: Removing classes from all classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  //: adding a class to clicked tab
  clicked.classList.add('operations__tab--active');

  //. Active content area
  //: removing the acitve class
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));
  console.log(clicked.dataset.tab);
  document
    //: adding a class to clicked tab
    //> we take the dataset information of 'tab' from html data -> data-tab="3"
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//* Menu fade animation
//- Passing Arguments to Event Handlers

const handleHover = function (e) {
  //> difference between mouseover and mouseenter is that mouseenter does NOT bubble
  //> opposits of mouseover -> mouseout; mouseenter -> mouseleave
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    //: selecting the children els('.nav__link') of the par el '.nav'
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    //: selecting the chilnderen with 'img' (in this case one) of par '.nav'
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      // if (el !== link) el.style.opacity = opacity; //: fuction had opacity argument
      if (el !== link) el.style.opacity = this; //> this = curretTarget
    });
    // logo.style.opacity = opacity;
    logo.style.opacity = this;
  }
};

//. Refactored code
//! we use the bind handler to past an "argument"(nor really argument) into the event handler
//! this is a workaround, becuase an event handler funcion can only take one argument
nav.addEventListener('mouseover', handleHover.bind(0.5));
//> works becasue bind returns a new function -> this = currentTarget
nav.addEventListener('mouseout', handleHover.bind(1));
//: intially looked like this but bind is better
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

// //* Sticky navigation
// //! scorll event is not very efficient, and usually should be avoided, becasue it respods a lot of times
// const initalCoordinates = section1.getBoundingClientRect().y;
// window.addEventListener('scroll', function (e) {
//   if (initalCoordinates < window.scrollY) {
//     nav.classList.add('sticky');
//   } else {
//     nav.classList.remove('sticky');
//   }
// });

//* A Better Way: The Intersection Observer API

// //- Example
// //> the callback function will get called each time the observed element(target) is intersecting the root element at the threshold
// //> there can be multiple thrasholds -> entries is an array of thrhold entries
// const obsCallback = function (entries, observer) {
//   entries.forEach(entry => {
//     console.log(entry);
//   });
// };

// const obsOptions = {
//   //> root - is the element the targer is intersecting
//   root: null, //? null is for any element?
//   //> thrashold - percentage of intersection at which the observer callback will be called
//   //> 0% callback will be triggered each time that the target element maves completely out of the view and also as soon as it enters
//   //> 100% callback will be triggered each time that the target element fills 100% of the VP
//   // : in this case 1 will not be possible becasue the element itself is bigger then the VP
//   threshold: [0, 1, 0.2], //: 0.1 -> 10%
// };

// const observer = new IntersectionObserver(obsCallback, obsOptions);
// observer.observe(section1);

//- Implementation
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const sitckyNav = function (entries) {
  const [entry] = entries; //: destructure: [entry] -> the same as writing entries[0]
  // console.log(entry);
  //: if heading is not in the viewport add sticky(fixed position) -> else remove
  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const headerObserver = new IntersectionObserver(sitckyNav, {
  root: null,
  threshold: 0,
  //> rootMargin: applies a box of px/percent outside/inside of our target element (makes the event happen sooner/later)
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//* Reveal Sections

const allSections = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);
  console.log(entry.target);

  //> this is like an if else statement
  if (!entry.isIntersecting) return;
  entry.target.classList.remove('section--hidden');

  //. Unobserve
  //> stops observing, becuse we do not need it anymore
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add('section--hidden');
});

//& ///////////////////////////////////////////
//& ///////////////////////////////////////////
//& ///////////////////////////////////////////

// //* Selecting, Creating and Deleting Elements

// //- Selecting

// //. Selecting the entire page
// console.log(document.documentElement); //: <html>
// console.log(document.head); //: <head>
// console.log(document.body); //: <body>

// const header = document.querySelector('.header');
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
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// message.textContent = 'We use cookies for improved functionality and analytics.';
// message.innerHTML =
// 'We use cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// //! Adds an element only on one place because it is alredy on the page and cant exist twice
// //> prepend adds an element as the first child of an element
// header.prepend(message);
// //> prepend adds an element as the first child of an element
// header.append(message);

// //. cloneNode()
// //> to make multiple same elements we have to copy them in the first place
// header.append(message.cloneNode(true));

//- Delete elements
//. remove()
// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     message.remove();
//: old way -> worked only on deleting child els
// message.parentElement.removeChild(message);
// });

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

// //* DOM Traversing

// const h1 = document.querySelector('h1');

// //- Going downwards: child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes); //: NodeList -> all elemets: text, comments ... and normal elements
// console.log(h1.children); //: HTMLCollection -> elements which are inside of h1 element
// console.log(h1.firstElementChild);
// h1.firstElementChild.style.color = 'white';
// h1.lastElementChild.style.color = 'orangered';

// //- Going upwards: parents
// console.log(h1.parentNode); //: header__title
// console.log(h1.parentElement); //: header__title

// //> selects the colosest parent element
// //! closest is the opposite of querySelector -> closest = parent, querySelector = child
// h1.closest('.header').style.background = 'var(--gradient-secondary)'; //: header__title
// h1.closest('h1').style.background = 'var(--gradient-primary)'; //: h1

// //- Going sideways: siblings
// //> only dirct siblings -> left and right
// console.log(h1.previousSibling);
// console.log(h1.nextSibling);

// //. Listing all siblings
// //> selects the parent of h1 and list all its children
// console.log(h1.parentElement.children); //: h1, h4, button... , img

// //: changing all siblings except the selected one
// [...h1.parentElement.children].forEach(function (el) {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });

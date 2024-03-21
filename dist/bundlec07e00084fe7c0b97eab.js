/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/mobile-menu.js":
/*!*******************************!*\
  !*** ./src/js/mobile-menu.js ***!
  \*******************************/
/***/ (() => {

//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
var mobileOpen = document.querySelector(".mobile-button-open");
var mobileClose = document.querySelectorAll(".mobile-btn-close");
var mobileMenu = document.querySelector(".mobile-menu");
//Creating a function to toggle mobile menu class for opening and closing of modal window
var toggleMenu = function toggleMenu() {
  return mobileMenu.classList.toggle("is-open");
};
//Adding the previous function on click event for modal opening and closing buttons
mobileOpen.addEventListener("click", toggleMenu);
mobileClose.forEach(function (el) {
  return el.addEventListener("click", toggleMenu);
});

/***/ }),

/***/ "./src/js/modal.js":
/*!*************************!*\
  !*** ./src/js/modal.js ***!
  \*************************/
/***/ (() => {

//Adding selectors to the call request form window, opening and closing button of this window
var modal = document.querySelector(".backdrop");
var modalBtnOpen = document.querySelector(".modal-btn-open");
var modalBtnClose = document.querySelector(".modal-btn-close");
//Creating a function to toggle form window class for opening and closing of the window
var toggleModal = function toggleModal() {
  return modal.classList.toggle("is-hidden");
};
//Adding the previous function on click event for window opening and closing buttons
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

/***/ }),

/***/ "./src/js/production.js":
/*!******************************!*\
  !*** ./src/js/production.js ***!
  \******************************/
/***/ (() => {

//Adding selectors to production window, opening and closing button of this window
var production = document.querySelector(".production");
var basket = document.querySelector(".production-open");
var close = document.querySelector(".production-btn-close");
//Creating a function to toggle form window class for opening and closing of the window
var toggleProduction = function toggleProduction() {
  production.classList.toggle("is-hidden");
};
//Adding the previous function on click event for window opening and closing buttons
basket.addEventListener("click", toggleProduction);
close.addEventListener("click", toggleProduction);

/***/ }),

/***/ "./src/js/slider.js":
/*!**************************!*\
  !*** ./src/js/slider.js ***!
  \**************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Adding selectors to the slider elements from customers section
var wrapper = document.querySelector(".wrapper");
var carousel = document.querySelector(".carousel");
var firstCardWidth = carousel.querySelector(".card").offsetWidth;
var arrowBtns = document.querySelectorAll(".wrapper i");
var carouselChildrens = _toConsumableArray(carousel.children);
var isDragging = false,
  isAutoPlay = true,
  startX,
  startScrollLeft,
  timeoutId;
// Get the number of cards that can fit in the carousel at once
var cardPerView = Math.round(carousel.offsetWidth / firstCardWidth);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildrens.slice(-cardPerView).reverse().forEach(function (card) {
  carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildrens.slice(0, cardPerView).forEach(function (card) {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel.classList.add("no-transition");
carousel.scrollLeft = carousel.offsetWidth;
carousel.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtns.forEach(function (btn) {
  btn.addEventListener("click", function () {
    carousel.scrollLeft += btn.id == "left" ? -firstCardWidth : firstCardWidth;
  });
});
var dragStart = function dragStart(e) {
  isDragging = true;
  carousel.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
};
var dragging = function dragging(e) {
  if (!isDragging) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
};
var dragStop = function dragStop() {
  isDragging = false;
  carousel.classList.remove("dragging");
};
var infiniteScroll = function infiniteScroll() {
  // If the carousel is at the beginning, scroll to the end
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel.scrollLeft) === carousel.scrollWidth - carousel.offsetWidth) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }
};
carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("mousemove", dragging);
document.addEventListener("mouseup", dragStop);
carousel.addEventListener("scroll", infiniteScroll);
wrapper.addEventListener("mouseenter", function () {
  return clearTimeout(timeoutId);
});

/***/ }),

/***/ "./src/js/slider_services.js":
/*!***********************************!*\
  !*** ./src/js/slider_services.js ***!
  \***********************************/
/***/ (function() {

var _this = this;
function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Adding selectors to the slider elements from services section
var wrapper1 = document.querySelector(".wrapper1");
var carousel1 = document.querySelector(".carousel1");
var firstCardWidth1 = carousel1.querySelector(".card1").offsetWidth;
var arrowBtn = document.querySelector(".wrapper1 i");
var carouselChildren = _toConsumableArray(carousel1.children);
var isDragging1 = false,
  isAutoPlay1 = true,
  startX1,
  startScrollLeft1,
  timeoutId1;
// Get the number of cards that can fit in the carousel at once
var cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren.slice(-cardPerView1).reverse().forEach(function (card) {
  carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
});
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerView1).forEach(function (card) {
  carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add("no-transition");
carousel1.scrollLeft = carousel1.offsetWidth;
carousel1.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtn.addEventListener("click", function () {
  carousel1.scrollLeft += _this.id == "left" ? -firstCardWidth1 : firstCardWidth1;
});
var dragStart1 = function dragStart1(e) {
  isDragging1 = true;
  carousel1.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX1 = e.pageX;
  startScrollLeft1 = carousel1.scrollLeft;
};
var dragging1 = function dragging1(e) {
  if (!isDragging1) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel1.scrollLeft = startScrollLeft - (e.pageX - startX);
};
var dragStop1 = function dragStop1() {
  isDragging1 = false;
  carousel1.classList.remove("dragging");
};
var infiniteScroll1 = function infiniteScroll1() {
  // If the carousel is at the beginning, scroll to the end
  if (carousel1.scrollLeft === 0) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.scrollWidth - 2 * carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (Math.ceil(carousel1.scrollLeft) === carousel1.scrollWidth - carousel1.offsetWidth) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }
};
carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("scroll", infiniteScroll1);
wrapper1.addEventListener("mouseenter", function () {
  return clearTimeout(timeoutId1);
});

/***/ }),

/***/ "./src/js/sorting.js":
/*!***************************!*\
  !*** ./src/js/sorting.js ***!
  \***************************/
/***/ (() => {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }
function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
//Add selectors to products-list class and select class from production section
var field = document.querySelector(".products-list");
var li = Array.from(field.children);
var select = document.getElementById("select");
//Creating an array and putting all products prices to the array
var ar = [];
for (var _i = 0, _li = li; _i < _li.length; _i++) {
  var i = _li[_i];
  var last = i.lastElementChild;
  var x = last.textContent.trim();
  var y = Number(x.substring(1));
  i.setAttribute("data-price", y);
  ar.push(i);
}

//Adding functions to sort elements according to price
select.onchange = sortingValue;
function sortingValue() {
  if (this.value == "Default") {
    while (field.firstChild) {
      field.removeChild(field.firstChild);
    }
    field.append.apply(field, ar);
  }
  if (this.value === "LowToHigh") {
    sortElem(field, li, true);
  }
  if (this.value === "HighToLow") {
    sortElem(field, li, false);
  }
}
function sortElem(field, li, asc) {
  var dm, sortLi;
  dm = asc ? 1 : -1;
  sortLi = li.sort(function (a, b) {
    var ax = a.getAttribute("data-price");
    var bx = b.getAttribute("data-price");
    return ax > bx ? 1 * dm : -1 * dm;
  });
  while (field.firstChild) {
    field.removeChild(field.firstChild);
  }
  field.append.apply(field, _toConsumableArray(sortLi));
}

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss ***!
  \*********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/customer_anna.jpg */ "./src/images/customer_anna.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/customer_chris.jpg */ "./src/images/customer_chris.jpg"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_2___ = new URL(/* asset import */ __webpack_require__(/*! ../../../../../src/images/customer_sindy.jpg */ "./src/images/customer_sindy.jpg"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
var ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_2___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ul {
  list-style-type: none;
}

body {
  color: var(--color_primary_black);
  font-family: "Roboto", sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 1.5;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

p {
  margin: 0;
}

.section {
  padding: 48px 0;
}

.section-titles {
  font-size: 56px;
  font-weight: 400;
  font-family: "Rowdies";
  line-height: 1.3;
  margin-left: auto;
  margin-right: auto;
  color: var(--color_primary_black);
}

.section-titles.centered {
  text-align: center;
}

.visually-hidden {
  position: absolute;
  left: -10000px;
  top: auto;
  width: 1px;
  height: 1px;
  overflow: hidden;
}

.select {
  min-width: 230px;
}

select {
  appearance: none;
  width: 100%;
  font-size: 1.15rem;
  padding: 0.675em 6em 0.675em 1em;
  background-color: #fff;
  border: 1px solid #caced1;
  border-radius: 0.25rem;
  color: #000;
  cursor: pointer;
}

.fa-paw {
  color: var(--color_primary_orange);
  font-size: 2em;
  transform: rotate(-90deg);
}

.fa-xmark {
  font-size: 2em;
}
.fa-xmark:hover {
  color: var(--color_primary_orange);
}

.fa-instagram {
  font-size: 2em;
  color: var(--color_primary_orange);
}
.fa-instagram:hover {
  color: var(--color_secondary_orange);
}

.fa-facebook {
  font-size: 2em;
  color: var(--color_primary_orange);
}
.fa-facebook:hover {
  color: var(--color_secondary_orange);
}

.fa-bars {
  color: var(--color_primary_orange);
  font-size: 2em;
}
.fa-bars:hover {
  color: var(--color_secondary_orange);
}

:root {
  --color_primary_white: #ffffff;
  --color_primary_orange: #ff9f0e;
  --color_primary_black: #181817;
  --color_secondary_orange: #fcb62a;
  --color_secondary_white: #fffaf3;
  --color_secondary_middlepurple: #f1f3ff;
  --color_secondary_grey: #839aa9;
  --color_secondary_lightpurple: #f9f9ff;
  --color_secondary_purple: #d9a6ff;
}

.button {
  padding: 16px 32px;
  background-color: var(--color_primary_orange);
  border-radius: 8px;
  color: var(--color_primary_white);
  border: none;
  cursor: pointer;
  margin: 20px 0;
}
.button:hover {
  background-color: var(--color_secondary_orange);
  color: var(--color_secondary_white);
}

.container {
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
}
@media screen and (min-width: 820px) {
  .container {
    max-width: 1288px;
  }
}

.link {
  color: var(--color_primary_black);
  text-decoration: none;
}
.link:hover {
  color: var(--color_primary_orange);
}

.contacts-section {
  position: relative;
  z-index: 0;
  margin-bottom: 150px;
  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(241, 243, 255) 65%, rgb(241, 243, 255) 100%);
}
@media screen and (max-width: 480px) {
  .contacts-section {
    padding-top: 0px;
  }
}
@media screen and (min-width: 820px) {
  .contacts-section {
    margin-bottom: 0px;
  }
}
.contacts-section__container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.contacts-section__title {
  margin-bottom: 0;
  z-index: 1;
  font-size: 32px;
}
@media screen and (min-width: 1280px) {
  .contacts-section__title {
    font-size: 56px;
  }
}
.contacts-section__form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
}
.contacts-section__form_button {
  margin: 0;
}
.contacts-section__form-field {
  border-radius: 17px;
  border-color: var(--color_primary_orange);
  padding: 8px 40px;
}
.contacts-section__input {
  font-size: 18px;
}
.contacts-section__form-instruction {
  text-align: center;
  color: var(--color_secondary_grey);
  margin: 20px;
  z-index: 1;
}
.contacts-section__before {
  display: none;
}
@media screen and (min-width: 820px) {
  .contacts-section__before {
    display: block;
    position: absolute;
    content: "";
    background-repeat: no-repeat;
    top: 0;
    left: 0;
    z-index: 0;
    width: 353px;
    height: 520px;
  }
}
.contacts-section__after {
  display: none;
}
@media screen and (min-width: 820px) {
  .contacts-section__after {
    display: block;
    position: absolute;
    content: "";
    background-repeat: no-repeat;
    bottom: 0px;
    right: 0;
    width: 322px;
    height: 752px;
  }
}
.contacts-section .wave svg {
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  fill: var(--color_primary_white);
}

@media screen and (max-width: 480px) {
  .customers-section {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
.customers-section__title {
  font-size: 32px;
}
@media screen and (min-width: 1280px) {
  .customers-section__title {
    font-size: 56px;
  }
}
.customers-section__icons {
  display: flex;
  gap: 8px;
  fill: var(--color_primary_orange);
  position: relative;
  left: -40px;
}
.customers-section__mark {
  color: var(--color_primary_orange);
  position: relative;
  left: 20px;
}

.wrapper {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 0;
}
@media screen and (min-width: 1280px) {
  .wrapper {
    margin: 0 0 50px 50px;
  }
}

.wrapper i {
  display: none;
}
@media screen and (min-width: 820px) {
  .wrapper i {
    display: block;
    top: 50%;
    height: 50px;
    width: 50px;
    cursor: pointer;
    font-size: 1.25rem;
    position: absolute;
    text-align: center;
    line-height: 50px;
    background: #fff;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);
    transform: translateY(-50%);
    transition: transform 0.1s linear;
  }
}

.wrapper i:active {
  transform: translateY(-50%) scale(0.85);
}

.wrapper i:first-child {
  left: -22px;
}

.wrapper i:last-child {
  right: -22px;
}

.wrapper .carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.3333333333%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
}

.carousel::-webkit-scrollbar {
  display: none;
}

.carousel.no-transition {
  scroll-behavior: auto;
}

.carousel.dragging {
  scroll-snap-type: none;
  scroll-behavior: auto;
}

.carousel.dragging .card {
  cursor: grab;
  user-select: none;
}

.carousel :where(.card, .img) {
  display: flex;
  justify-content: center;
  align-items: left;
}

.carousel .card {
  scroll-snap-align: start;
  height: 444px;
  max-width: 344px;
  list-style: none;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
  justify-content: flex-end;
}
@media screen and (max-width: 600px) {
  .carousel .card {
    scroll-snap-align: center;
  }
}

.carousel .card .img {
  height: 148px;
  width: 148px;
  border-radius: 50%;
}

.card .img img {
  width: 140px;
  height: 140px;
  border-radius: 50%;
  object-fit: cover;
  border: 4px solid #fff;
}

.carousel .card h2 {
  font-weight: 500;
  font-size: 1.56rem;
  margin: 30px 0 5px;
}

.carousel .card span {
  color: #6a6d78;
  font-size: 1.31rem;
}

@media screen and (max-width: 900px) {
  .wrapper .carousel {
    grid-auto-columns: calc(50% + 6px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper .carousel {
    grid-auto-columns: 105%;
  }
}
.card h2,
.card p {
  color: #fff;
  text-align: end left;
}

.card p {
  font-size: 14px;
  margin-bottom: 5px;
}

.card_anna {
  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

.card_chris {
  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

.card_sindy {
  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(${___CSS_LOADER_URL_REPLACEMENT_2___});
}

.footer {
  bottom: 67px;
  left: 365px;
  padding: 10px 313px 10px 105px;
  background-color: var(--color_secondary_white);
}
@media screen and (min-width: 1280px) {
  .footer {
    bottom: 67px;
    left: 365px;
    padding: 10px 313px 10px 105px;
  }
}
.footer.footer-relative {
  position: relative;
  left: 0;
  bottom: -30px;
  padding: 20px 0px 20px 0px;
}
@media screen and (min-width: 1280px) {
  .footer.footer-relative::after {
    right: 180px;
  }
}
.footer__container {
  display: block;
  text-align: center;
  gap: 100px;
}
@media screen and (min-width: 820px) {
  .footer__container {
    display: flex;
    gap: 100px;
  }
}
.footer__icons {
  display: flex;
  flex-direction: column;
}
.footer__logo-icons {
  display: flex;
  align-items: center;
  justify-content: center;
}
@media screen and (min-width: 820px) {
  .footer__logo-icons {
    justify-content: flex-start;
  }
}
.footer__logo {
  fill: var(--color_primary_orange);
  margin: 0;
  padding: 0;
}
.footer__socials {
  display: flex;
  margin-top: 20px;
  margin-left: 10px;
  gap: 16px;
  justify-content: center;
}
@media screen and (min-width: 820px) {
  .footer__socials {
    justify-content: flex-start;
  }
}
.footer__menu {
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 1;
  padding-left: 0;
}
.footer__form {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.footer__form_button {
  margin: 0;
  padding: 16 32;
}
.footer__form_div {
  z-index: 1;
}
.footer__after {
  position: absolute;
  content: "";
  background-repeat: no-repeat;
  bottom: 496px;
  right: 0px;
  width: 292px;
  height: 305px;
}
@media screen and (min-width: 820px) {
  .footer__after {
    bottom: 215px;
    z-index: 0;
  }
}
@media screen and (min-width: 1280px) {
  .footer__after {
    bottom: -45px;
    right: 280px;
    z-index: 0;
  }
}

.backdrop {
  position: fixed;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  transition: opacity 1s, visibility 1s;
}

.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.modal {
  margin-top: 72px;
  overflow: scroll;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: 850px;
  height: 100%;
  max-height: 850px;
  background-color: var(--color_secondary_white);
  border-radius: 32px;
  padding: 120px 86px 86px;
}
.modal__cross-button {
  border: none;
  background-color: transparent;
  cursor: pointer;
  position: absolute;
  right: 40px;
  top: 40px;
}
.modal__form-title {
  text-align: center;
  font-size: 56px;
  margin: 0;
  max-width: 605px;
  position: relative;
}
.modal__form-instruction {
  text-align: center;
  color: var(--color_secondary_grey);
  margin: 20px;
}
.modal__form {
  text-align: center;
}
.modal__form_button {
  margin-bottom: 10px;
}

.form-field {
  margin-bottom: 20px;
}
.form-field__input {
  padding: 16px 42px;
  max-width: 310px;
  border-radius: 17px;
  border: 1px solid var(--color_primary_orange);
  background-color: transparent;
  font-size: 16px;
  line-height: 1.17;
  position: relative;
  z-index: 1;
}
.form-field__input::placeholder {
  color: var(--color_primary_orange);
}
.form-field__terms, .form-field__terms-link {
  font-size: 12px;
  color: var(--color_secondary_grey);
  text-align: center;
}

.checkbox {
  position: relative;
  top: 4px;
  margin-right: 11px;
}

input[type=checkbox] {
  -webkit-appearance: none;
  appearance: none;
  background-color: transparent;
  width: 16px;
  height: 16px;
  border: 1px solid var(--color_secondary_grey);
}

input[type=checkbox]:checked {
  background-color: var(--color_secondary_grey);
}

.home {
  color: aqua;
}

.header {
  position: relative;
  left: 0px;
  top: 0px;
  padding: 0 0px;
  width: 100%;
  background-color: var(--color_primary_white);
}
.header__logos {
  display: flex;
  margin-left: 108px;
}
.header__button {
  display: none;
}
@media screen and (min-width: 1280px) {
  .header__button {
    display: block;
  }
}
.header__burger {
  background-color: transparent;
  border: none;
  fill: var(--color_primary_orange);
}
@media screen and (min-width: 1280px) {
  .header__burger {
    display: none;
  }
}
.header__logo {
  fill: var(--color_primary_orange);
  display: flex;
  align-items: center;
}
.header__logos {
  gap: 10px;
  display: flex;
  align-items: center;
  margin-left: 20px;
}
.header__container {
  display: flex;
  gap: 20px;
  position: relative;
  justify-content: space-between;
}
@media screen and (min-width: 1280px) {
  .header__container {
    gap: 80px;
    flex-grow: 0;
  }
}
.header__menu {
  padding-left: 0;
  display: none;
  gap: 48px;
  align-items: center;
  z-index: 2;
}
@media screen and (min-width: 1280px) {
  .header__menu {
    display: flex;
  }
}
.header__buttons {
  display: flex;
  gap: 0px;
}
@media screen and (min-width: 480px) {
  .header__buttons {
    gap: 24px;
  }
}
.header__basket {
  fill: var(--color_primary_orange);
  border: none;
  font-size: 2em;
  color: var(--color_primary_orange);
  background-color: transparent;
  z-index: 0;
}
.header__basket:hover {
  color: var(--color_secondary_orange);
  cursor: pointer;
}
.header__icon1, .header__icon2 {
  position: absolute;
  z-index: -1;
}
.header__icon1 {
  transform: rotate(-45deg);
  font-size: 5em;
  top: 0px;
  right: 747px;
  color: var(--color_secondary_white);
}
.header__icon2 {
  transform: rotate(45deg);
  display: none;
}
@media screen and (min-width: 820px) {
  .header__icon2 {
    font-size: 5em;
    right: -241px;
    top: -56px;
    display: block;
    color: var(--color_secondary_white);
  }
}
@media screen and (min-width: 1280px) {
  .header__icon2 {
    right: 375px;
    top: -16px;
  }
}

.hero-section {
  position: relative;
  margin-top: 30px;
  margin-bottom: 10px;
  position: relative;
}
@media screen and (min-width: 820px) {
  .hero-section {
    margin-bottom: 149px;
  }
}
.hero-section__BackgroundVector {
  position: absolute;
  top: -100px;
  left: 0px;
  max-height: 750px;
  z-index: -1;
  max-width: 2920px;
  width: 100%;
  display: flex;
  flex-shrink: 1;
}
@media screen and (min-width: 1280px) {
  .hero-section__BackgroundVector {
    max-height: 750px;
    z-index: -1;
    max-width: 2920px;
    width: 150%;
    left: -450px;
  }
}
.hero-section__icons {
  position: relative;
  width: 0;
}
@media screen and (min-width: 820px) {
  .hero-section__icons {
    position: relative;
    max-height: 405px;
    height: 50%;
    max-width: 495px;
    width: 100%;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__icons {
    max-height: 505px;
    height: 100%;
    max-width: 615px;
    width: 100%;
  }
}
.hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {
  display: none !important;
}
@media screen and (min-width: 500px) {
  .hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {
    display: block !important;
    position: absolute;
    font-size: 4em;
    z-index: 0;
  }
}
@media screen and (min-width: 820px) {
  .hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {
    z-index: 1;
  }
}
.hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {
  fill: var(--color_secondary_white);
}
.hero-section__icon1 {
  color: var(--color_secondary_purple);
  font-size: 1.5em;
  top: 147px;
  right: 217px;
}
@media screen and (min-width: 820px) {
  .hero-section__icon1 {
    top: 15px;
    font-size: 3em;
    right: 233px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__icon1 {
    top: 193px;
    right: 452px;
  }
}
.hero-section__icon2 {
  bottom: -173px;
  right: 323px;
  font-size: 1.5em;
  color: var(--color_secondary_orange);
  transform: rotate(-45deg);
}
@media screen and (min-width: 820px) {
  .hero-section__icon2 {
    bottom: 130px;
    font-size: 3em;
    right: 355px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__icon2 {
    bottom: 3px;
    right: 520px;
  }
}
.hero-section__icon3 {
  color: deeppink;
  font-size: 1.5em;
  top: 150px;
  transform: rotate(0deg);
  right: 102px;
}
@media screen and (min-width: 820px) {
  .hero-section__icon3 {
    top: 256px;
    right: 355px;
    font-size: 3em;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__icon3 {
    top: 333px;
    right: 124px;
  }
}
.hero-section__icon4 {
  color: var(--color_secondary_orange);
  display: none !important;
  right: 180px;
  top: 0px;
}
@media screen and (min-width: 1280px) {
  .hero-section__icon4 {
    right: 60px;
    transform: rotate(45deg);
    display: block;
  }
}
.hero-section__icon5 {
  display: none !important;
}
@media screen and (min-width: 1280px) {
  .hero-section__icon5 {
    display: block !important;
    color: var(--color_secondary_white);
    right: 229px;
    top: 9px;
    transform: rotate(359deg);
  }
}
.hero-section__icon6 {
  color: var(--color_secondary_middlepurple);
  right: 506px;
  top: 47px;
  transform: rotate(-45deg);
  z-index: -1;
}
.hero-section__dog-icon2, .hero-section__dog-icon1 {
  display: none;
}
@media screen and (min-width: 500px) {
  .hero-section__dog-icon2, .hero-section__dog-icon1 {
    display: block;
    position: absolute;
    border-radius: 50%;
  }
}
.hero-section__dog-icon1 {
  top: 51px;
  right: 366px;
}
@media screen and (min-width: 820px) {
  .hero-section__dog-icon1 {
    top: -20px;
    right: 400px;
  }
}
.hero-section__dog-icon2 {
  right: 50px;
  top: 54px;
}
@media screen and (min-width: 820px) {
  .hero-section__dog-icon2 {
    right: 447px;
    top: 265px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__dog-icon2 {
    right: 0px;
    top: 100px;
  }
}
.hero-section__text {
  text-align: center;
}
@media screen and (min-width: 820px) {
  .hero-section__text {
    text-align: left;
  }
}
.hero-section__title {
  font-size: 32px;
  font-family: "Rowdies", sans-serif;
  max-width: 635px;
  border-radius: 50%;
  line-height: 1;
}
@media screen and (min-width: 1280px) {
  .hero-section__title {
    font-size: 72px;
  }
}
.hero-section__definition {
  max-width: 499px;
}
.hero-section__container {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.hero-section__picture {
  border-radius: 50%;
  position: relative;
  display: none;
  width: 50%;
  height: 80%;
  bottom: -50px;
  right: -170px;
}
@media screen and (min-width: 820px) {
  .hero-section__picture {
    display: block;
  }
}
.hero-section__arrow {
  position: absolute;
  fill: var(--color_secondary_orange);
  display: none;
}
@media screen and (min-width: 820px) {
  .hero-section__arrow {
    display: block;
    top: 0;
    right: 80px;
  }
}
@media screen and (min-width: 1280px) {
  .hero-section__arrow {
    right: 600px;
  }
}
.hero-section__dog-background {
  position: absolute;
  z-index: 0;
  display: none;
  width: 70%;
  height: 120%;
  right: 85px;
  top: 0;
}
@media screen and (min-width: 820px) {
  .hero-section__dog-background {
    display: block;
  }
}

.lesstalk-section {
  position: relative;
}
@media screen and (max-width: 480px) {
  .lesstalk-section {
    padding-top: 0px;
    padding-bottom: 0px;
  }
}
.lesstalk-section__image {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__image {
    display: block;
    z-index: 0;
  }
}
.lesstalk-section__container {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0px;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__container {
    gap: 60px;
  }
}
.lesstalk-section__logo-icons {
  display: flex;
  flex-direction: column;
  position: relative;
  left: -40px;
}
.lesstalk-section__text {
  text-align: center;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__text {
    text-align: start;
  }
}
.lesstalk-section__title {
  font-size: 32px;
  font-weight: 400;
  font-family: "Rowdies";
  text-align: center;
}
@media screen and (min-width: 1280px) {
  .lesstalk-section__title {
    font-size: 56px;
    text-align: start;
  }
}
.lesstalk-section__info {
  max-width: 540px;
}
.lesstalk-section__vector_purple {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__vector_purple {
    display: block;
    position: absolute;
    left: 4px;
    z-index: -1;
  }
}
@media screen and (min-width: 1280px) {
  .lesstalk-section__vector_purple {
    left: 50px;
  }
}
.lesstalk-section__paw-icon1, .lesstalk-section__paw-icon2, .lesstalk-section__paw-icon3 {
  color: var(--color_secondary_grey);
  position: absolute;
}
.lesstalk-section__paw-icon1 {
  transform: rotate(-45deg);
  left: 103px;
  bottom: 120px;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__paw-icon1 {
    left: 46px;
  }
}
.lesstalk-section__paw-icon2 {
  left: 88px;
  top: 130px;
  transform: rotate(0deg);
}
@media screen and (min-width: 820px) {
  .lesstalk-section__paw-icon2 {
    left: 250px;
    top: -20px;
  }
}
.lesstalk-section__paw-icon3 {
  display: none !important;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__paw-icon3 {
    display: block !important;
    transform: rotate(45deg);
    left: 450px;
    top: 140px;
  }
}
.lesstalk-section__video-vector {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__video-vector {
    display: block;
    position: absolute;
    top: 0;
    left: 400px;
    z-index: 0;
  }
}
.lesstalk-section__video {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__video {
    display: block;
    position: absolute;
    top: 30px;
    left: 435px;
    z-index: 1;
    cursor: pointer;
  }
}
.lesstalk-section__icon1, .lesstalk-section__icon2, .lesstalk-section__icon3 {
  position: absolute;
  fill: var(--color_secondary_white);
}
.lesstalk-section__icon1 {
  left: -150px;
  transform: rotate(45deg);
}
.lesstalk-section__icon2 {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__icon2 {
    left: 29px;
    top: -122px;
  }
}
.lesstalk-section__icon3 {
  display: none;
}
@media screen and (min-width: 820px) {
  .lesstalk-section__icon3 {
    display: block;
    top: -302px;
    right: -233px;
    transform: rotate(-45deg);
    z-index: -1;
  }
}

.mobile-menu {
  position: fixed;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--color_primary_white);
  transform: translateX(100%);
  transition: transform 0.5s;
}
.mobile-menu.is-open {
  transform: translateX(0);
}
.mobile-menu__logo {
  margin: 20px 0;
  fill: var(--color_primary_orange);
}
.mobile-menu__button {
  background-color: transparent;
  border: none;
  position: absolute;
  top: 46px;
  right: 55px;
  fill: var(--color_primary_orange);
}
.mobile-menu__nav {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 20px;
  margin-top: 80px;
}
.mobile-menu__link {
  text-decoration: none;
  color: var(--color_primarydark);
}
.mobile-menu__link:hover {
  color: var(--colorb);
}
.mobile-menu__nav-icons {
  margin-left: 20px;
  display: flex;
  gap: 20px;
}
.mobile-menu__icon {
  fill: var(--color_primary_orange);
}
.mobile-menu__icon:hover {
  fill: var(--color_secondary_orange);
  cursor: pointer;
}

.production {
  position: fixed;
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 20px 0;
  transition: opacity 1s, visibility 1s;
}
.production.is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
}

.production-modal {
  z-index: 2;
  position: relative;
  width: 100%;
  max-width: 1300px;
  height: 100%;
  max-height: 700px;
  background-color: var(--color_primary_white);
  padding: 60px 20px 20px;
  overflow: scroll;
}
@media screen and (min-width: 820px) {
  .production-modal {
    padding: 60px 86px 86px;
  }
}
.production-modal__nav {
  display: flex;
  margin-bottom: 100px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  position: relative;
  z-index: 0 !important;
}
@media screen and (min-width: 820px) {
  .production-modal__nav {
    flex-direction: row;
    margin-bottom: 0px;
  }
}
.production-modal__title {
  color: var(--color_primary_orange);
  font-family: "Rowdies", sans-serif;
  font-size: 36px;
  margin-right: 30px;
  margin-bottom: 10px;
}
@media screen and (min-width: 820px) {
  .production-modal__title {
    margin-right: 200px;
    font-size: 56px;
    margin-bottom: 30px;
  }
}
@media screen and (min-width: 1280px) {
  .production-modal__title {
    margin-right: 400px;
  }
}
.production-modal__sorting {
  color: var(--color_primary_orange);
  margin-right: 20px;
}
.production-modal__sort-button {
  background-color: var(--color_primary_white);
  border: none;
  border: 1px solid var(--color_secondary_grey);
}
.production-modal__sort-button:hover {
  background-color: var(--color_secondary_orange);
  color: var(--color_primary_white);
}
.production-modal .products-list {
  padding-left: 0;
  padding-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  overflow: hidden;
  gap: 32px;
}
.production-modal .products-list__card {
  box-shadow: 0px 0px 0px white;
}
.production-modal .products-list__card:hover {
  box-shadow: 0px 8px 16px 0px rgba(24, 24, 23, 0.0784313725);
}
.production-modal .products-list__item {
  max-width: 288px;
  width: 100%;
  max-height: 512px;
  height: 100%;
  display: block;
  text-align: center;
}
.production-modal .products-list__item__rating {
  display: flex;
  justify-content: center;
  gap: 8px;
  color: var(--color_secondary_grey);
  margin-bottom: 10px;
}
.production-modal .products-list__item__gold-star {
  font-size: smaller;
  color: var(--color_primary_orange);
}
.production-modal .products-list__item__grey-star {
  font-size: smaller;
  color: var(--color_primary_grey);
}
.production-modal .products-list__item__price {
  font-weight: bold;
  margin: 10px 0;
}

.h4-is-hidden {
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  position: absolute;
}

.production-btn-close {
  position: absolute;
  border: none;
  background-color: transparent;
}

.services-section {
  position: relative;
}
@media screen and (max-width: 480px) {
  .services-section {
    padding-top: 0px;
  }
}
.services-section__icon {
  position: absolute;
  fill: var(--color_primary_orange);
}
.services-section__categories {
  gap: 24px;
}
.services-section__title {
  font-size: 32px;
}
@media screen and (min-width: 1280px) {
  .services-section__title {
    font-size: 56px;
  }
}
.services-section__service {
  border: 1px solid lightgray;
  border-radius: 32px;
  height: 245px !important;
  display: flex !important;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(0deg, rgb(255, 250, 243) 0%, rgb(255, 250, 243) 35%, rgb(255, 255, 255) 100%);
}
.services-section__more {
  color: var(--color_primary_orange);
  position: relative;
  bottom: -80px;
  font-size: 18px;
}
.services-section__BackgroundVector {
  position: absolute;
  top: 0px;
  left: 0;
  z-index: -2;
  max-width: 2920px;
  width: 100%;
  max-height: 500px;
  overflow: hidden;
}
.services-section__arrow {
  position: relative;
  bottom: -83px;
  left: -24px;
}
.services-section__icon {
  z-index: -1;
}

.swiper-button-next2 {
  position: absolute;
  right: 0;
}

.wrapper1 .carousel1 {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 33.3333333333%;
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  gap: 16px;
  border-radius: 8px;
  scroll-behavior: smooth;
  scrollbar-width: none;
  position: relative;
}

.wrapper1 i {
  position: absolute;
  right: 0;
  cursor: pointer;
  font-size: 2em;
  color: var(--color_primary_orange);
  transform: translateY(-50%);
}

.wrapper1 p {
  position: absolute;
  right: 0;
  bottom: -60px;
}

.wrapper1 p.services-section__service-name {
  color: var(--color_primary_orange);
  position: relative;
  bottom: -40px;
}

.wrapper1 i:active {
  transform: translateY(-50%) scale(0.85);
}

.carousel1 .card1 {
  scroll-snap-align: start;
  height: 444px;
  max-width: 345px;
  list-style: none;
  cursor: pointer;
  padding-bottom: 15px;
  flex-direction: column;
  border-radius: 8px;
  padding: 24px;
}
@media screen and (max-width: 600px) {
  .carousel1 .card1 {
    scroll-snap-align: center;
  }
}

.wrapper1 {
  max-width: 1100px;
  width: 100%;
  position: relative;
  margin: 0;
}
@media screen and (min-width: 1280px) {
  .wrapper1 {
    margin: 0 0 50px 50px;
  }
}

@media screen and (max-width: 900px) {
  .wrapper1 .carousel1 {
    grid-auto-columns: calc(50% + 6px);
  }
}
@media screen and (max-width: 600px) {
  .wrapper1 .carousel1 {
    grid-auto-columns: 105%;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/_base.scss","webpack://./src/scss/main.scss","webpack://./src/scss/utils/_variables.scss","webpack://./src/scss/components/_buttons.scss","webpack://./src/scss/components/_containers.scss","webpack://./src/scss/components/_links.scss","webpack://./src/scss/layouts/_contacts-section.scss","webpack://./src/scss/layouts/_customers-section.scss","webpack://./src/scss/layouts/_footer-section.scss","webpack://./src/scss/layouts/_form-section.scss","webpack://./src/scss/layouts/_header-section.scss","webpack://./src/scss/layouts/_hero-section.scss","webpack://./src/scss/layouts/_lesstalk-section.scss","webpack://./src/scss/layouts/_mobile-menu-section.scss","webpack://./src/scss/layouts/_production.scss","webpack://./src/scss/layouts/_services-section.scss"],"names":[],"mappings":"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","sourcesContent":["ul {\n  list-style-type: none;\n}\n\nbody {\n  color: var(--color_primary_black);\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n}\n// address {\n//   font-style: normal;\n// }\n\n.section {\n  padding: 48px 0;\n}\n\n.section-titles {\n  font-size: 56px;\n  font-weight: 400;\n  font-family: \"Rowdies\";\n  line-height: 1.3;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--color_primary_black);\n}\n.section-titles.centered {\n  text-align: center;\n}\n\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n.select {\n  min-width: 230px;\n}\n\nselect {\n  appearance: none;\n  width: 100%;\n  font-size: 1.15rem;\n  padding: 0.675em 6em 0.675em 1em;\n  background-color: #fff;\n  border: 1px solid #caced1;\n  border-radius: 0.25rem;\n  color: #000;\n  cursor: pointer;\n}\n\n///Icons\n.fa-paw {\n  color: var(--color_primary_orange);\n  font-size: 2em;\n  transform: rotate(-90deg);\n}\n\n.fa-xmark {\n  font-size: 2em;\n  &:hover {\n    color: var(--color_primary_orange);\n  }\n}\n\n.fa-instagram {\n  font-size: 2em;\n  color: var(--color_primary_orange);\n  &:hover {\n    color: var(--color_secondary_orange);\n  }\n}\n.fa-facebook {\n  font-size: 2em;\n  color: var(--color_primary_orange);\n  &:hover {\n    color: var(--color_secondary_orange);\n  }\n}\n\n.fa-bars {\n  color: var(--color_primary_orange);\n  font-size: 2em;\n  &:hover {\n    color: var(--color_secondary_orange);\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\nul {\n  list-style-type: none;\n}\n\nbody {\n  color: var(--color_primary_black);\n  font-family: \"Roboto\", sans-serif;\n  font-weight: 400;\n  font-size: 18px;\n  line-height: 1.5;\n}\n\n*,\n*::after,\n*::before {\n  box-sizing: border-box;\n}\n\np {\n  margin: 0;\n}\n\n.section {\n  padding: 48px 0;\n}\n\n.section-titles {\n  font-size: 56px;\n  font-weight: 400;\n  font-family: \"Rowdies\";\n  line-height: 1.3;\n  margin-left: auto;\n  margin-right: auto;\n  color: var(--color_primary_black);\n}\n\n.section-titles.centered {\n  text-align: center;\n}\n\n.visually-hidden {\n  position: absolute;\n  left: -10000px;\n  top: auto;\n  width: 1px;\n  height: 1px;\n  overflow: hidden;\n}\n\n.select {\n  min-width: 230px;\n}\n\nselect {\n  appearance: none;\n  width: 100%;\n  font-size: 1.15rem;\n  padding: 0.675em 6em 0.675em 1em;\n  background-color: #fff;\n  border: 1px solid #caced1;\n  border-radius: 0.25rem;\n  color: #000;\n  cursor: pointer;\n}\n\n.fa-paw {\n  color: var(--color_primary_orange);\n  font-size: 2em;\n  transform: rotate(-90deg);\n}\n\n.fa-xmark {\n  font-size: 2em;\n}\n.fa-xmark:hover {\n  color: var(--color_primary_orange);\n}\n\n.fa-instagram {\n  font-size: 2em;\n  color: var(--color_primary_orange);\n}\n.fa-instagram:hover {\n  color: var(--color_secondary_orange);\n}\n\n.fa-facebook {\n  font-size: 2em;\n  color: var(--color_primary_orange);\n}\n.fa-facebook:hover {\n  color: var(--color_secondary_orange);\n}\n\n.fa-bars {\n  color: var(--color_primary_orange);\n  font-size: 2em;\n}\n.fa-bars:hover {\n  color: var(--color_secondary_orange);\n}\n\n:root {\n  --color_primary_white: #ffffff;\n  --color_primary_orange: #ff9f0e;\n  --color_primary_black: #181817;\n  --color_secondary_orange: #fcb62a;\n  --color_secondary_white: #fffaf3;\n  --color_secondary_middlepurple: #f1f3ff;\n  --color_secondary_grey: #839aa9;\n  --color_secondary_lightpurple: #f9f9ff;\n  --color_secondary_purple: #d9a6ff;\n}\n\n.button {\n  padding: 16px 32px;\n  background-color: var(--color_primary_orange);\n  border-radius: 8px;\n  color: var(--color_primary_white);\n  border: none;\n  cursor: pointer;\n  margin: 20px 0;\n}\n.button:hover {\n  background-color: var(--color_secondary_orange);\n  color: var(--color_secondary_white);\n}\n\n.container {\n  width: 100%;\n  max-width: 768px;\n  margin: 0 auto;\n}\n@media screen and (min-width: 820px) {\n  .container {\n    max-width: 1288px;\n  }\n}\n\n.link {\n  color: var(--color_primary_black);\n  text-decoration: none;\n}\n.link:hover {\n  color: var(--color_primary_orange);\n}\n\n.contacts-section {\n  position: relative;\n  z-index: 0;\n  margin-bottom: 150px;\n  background: linear-gradient(0deg, rgb(255, 255, 255) 0%, rgb(241, 243, 255) 65%, rgb(241, 243, 255) 100%);\n}\n@media screen and (max-width: 480px) {\n  .contacts-section {\n    padding-top: 0px;\n  }\n}\n@media screen and (min-width: 820px) {\n  .contacts-section {\n    margin-bottom: 0px;\n  }\n}\n.contacts-section__container {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n.contacts-section__title {\n  margin-bottom: 0;\n  z-index: 1;\n  font-size: 32px;\n}\n@media screen and (min-width: 1280px) {\n  .contacts-section__title {\n    font-size: 56px;\n  }\n}\n.contacts-section__form {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 24px;\n}\n.contacts-section__form_button {\n  margin: 0;\n}\n.contacts-section__form-field {\n  border-radius: 17px;\n  border-color: var(--color_primary_orange);\n  padding: 8px 40px;\n}\n.contacts-section__input {\n  font-size: 18px;\n}\n.contacts-section__form-instruction {\n  text-align: center;\n  color: var(--color_secondary_grey);\n  margin: 20px;\n  z-index: 1;\n}\n.contacts-section__before {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .contacts-section__before {\n    display: block;\n    position: absolute;\n    content: \"\";\n    background-repeat: no-repeat;\n    top: 0;\n    left: 0;\n    z-index: 0;\n    width: 353px;\n    height: 520px;\n  }\n}\n.contacts-section__after {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .contacts-section__after {\n    display: block;\n    position: absolute;\n    content: \"\";\n    background-repeat: no-repeat;\n    bottom: 0px;\n    right: 0;\n    width: 322px;\n    height: 752px;\n  }\n}\n.contacts-section .wave svg {\n  position: absolute;\n  z-index: -1;\n  top: 0;\n  left: 0;\n  width: 100%;\n  overflow: hidden;\n  line-height: 0;\n  fill: var(--color_primary_white);\n}\n\n@media screen and (max-width: 480px) {\n  .customers-section {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n}\n.customers-section__title {\n  font-size: 32px;\n}\n@media screen and (min-width: 1280px) {\n  .customers-section__title {\n    font-size: 56px;\n  }\n}\n.customers-section__icons {\n  display: flex;\n  gap: 8px;\n  fill: var(--color_primary_orange);\n  position: relative;\n  left: -40px;\n}\n.customers-section__mark {\n  color: var(--color_primary_orange);\n  position: relative;\n  left: 20px;\n}\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n}\n@media screen and (min-width: 1280px) {\n  .wrapper {\n    margin: 0 0 50px 50px;\n  }\n}\n\n.wrapper i {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .wrapper i {\n    display: block;\n    top: 50%;\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n    font-size: 1.25rem;\n    position: absolute;\n    text-align: center;\n    line-height: 50px;\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n    transform: translateY(-50%);\n    transition: transform 0.1s linear;\n  }\n}\n\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n\n.wrapper i:first-child {\n  left: -22px;\n}\n\n.wrapper i:last-child {\n  right: -22px;\n}\n\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 33.3333333333%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n\n.carousel .card {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 344px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n  justify-content: flex-end;\n}\n@media screen and (max-width: 600px) {\n  .carousel .card {\n    scroll-snap-align: center;\n  }\n}\n\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n\n.carousel .card h2 {\n  font-weight: 500;\n  font-size: 1.56rem;\n  margin: 30px 0 5px;\n}\n\n.carousel .card span {\n  color: #6a6d78;\n  font-size: 1.31rem;\n}\n\n@media screen and (max-width: 900px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc(50% + 6px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 105%;\n  }\n}\n.card h2,\n.card p {\n  color: #fff;\n  text-align: end left;\n}\n\n.card p {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.card_anna {\n  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(\"/src/images/customer_anna.jpg\");\n}\n\n.card_chris {\n  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(\"/src//images/customer_chris.jpg\");\n}\n\n.card_sindy {\n  background-image: linear-gradient(180deg, rgba(49, 38, 26, 0) 68.21%, #839aa9 68.92%, #839aa9 100%), url(\"/src/images/customer_sindy.jpg\");\n}\n\n.footer {\n  bottom: 67px;\n  left: 365px;\n  padding: 10px 313px 10px 105px;\n  background-color: var(--color_secondary_white);\n}\n@media screen and (min-width: 1280px) {\n  .footer {\n    bottom: 67px;\n    left: 365px;\n    padding: 10px 313px 10px 105px;\n  }\n}\n.footer.footer-relative {\n  position: relative;\n  left: 0;\n  bottom: -30px;\n  padding: 20px 0px 20px 0px;\n}\n@media screen and (min-width: 1280px) {\n  .footer.footer-relative::after {\n    right: 180px;\n  }\n}\n.footer__container {\n  display: block;\n  text-align: center;\n  gap: 100px;\n}\n@media screen and (min-width: 820px) {\n  .footer__container {\n    display: flex;\n    gap: 100px;\n  }\n}\n.footer__icons {\n  display: flex;\n  flex-direction: column;\n}\n.footer__logo-icons {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n@media screen and (min-width: 820px) {\n  .footer__logo-icons {\n    justify-content: flex-start;\n  }\n}\n.footer__logo {\n  fill: var(--color_primary_orange);\n  margin: 0;\n  padding: 0;\n}\n.footer__socials {\n  display: flex;\n  margin-top: 20px;\n  margin-left: 10px;\n  gap: 16px;\n  justify-content: center;\n}\n@media screen and (min-width: 820px) {\n  .footer__socials {\n    justify-content: flex-start;\n  }\n}\n.footer__menu {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n  z-index: 1;\n  padding-left: 0;\n}\n.footer__form {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-direction: column;\n}\n.footer__form_button {\n  margin: 0;\n  padding: 16 32;\n}\n.footer__form_div {\n  z-index: 1;\n}\n.footer__after {\n  position: absolute;\n  content: \"\";\n  background-repeat: no-repeat;\n  bottom: 496px;\n  right: 0px;\n  width: 292px;\n  height: 305px;\n}\n@media screen and (min-width: 820px) {\n  .footer__after {\n    bottom: 215px;\n    z-index: 0;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .footer__after {\n    bottom: -45px;\n    right: 280px;\n    z-index: 0;\n  }\n}\n\n.backdrop {\n  position: fixed;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n}\n\n.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.modal {\n  margin-top: 72px;\n  overflow: scroll;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  position: relative;\n  width: 100%;\n  max-width: 850px;\n  height: 100%;\n  max-height: 850px;\n  background-color: var(--color_secondary_white);\n  border-radius: 32px;\n  padding: 120px 86px 86px;\n}\n.modal__cross-button {\n  border: none;\n  background-color: transparent;\n  cursor: pointer;\n  position: absolute;\n  right: 40px;\n  top: 40px;\n}\n.modal__form-title {\n  text-align: center;\n  font-size: 56px;\n  margin: 0;\n  max-width: 605px;\n  position: relative;\n}\n.modal__form-instruction {\n  text-align: center;\n  color: var(--color_secondary_grey);\n  margin: 20px;\n}\n.modal__form {\n  text-align: center;\n}\n.modal__form_button {\n  margin-bottom: 10px;\n}\n\n.form-field {\n  margin-bottom: 20px;\n}\n.form-field__input {\n  padding: 16px 42px;\n  max-width: 310px;\n  border-radius: 17px;\n  border: 1px solid var(--color_primary_orange);\n  background-color: transparent;\n  font-size: 16px;\n  line-height: 1.17;\n  position: relative;\n  z-index: 1;\n}\n.form-field__input::placeholder {\n  color: var(--color_primary_orange);\n}\n.form-field__terms, .form-field__terms-link {\n  font-size: 12px;\n  color: var(--color_secondary_grey);\n  text-align: center;\n}\n\n.checkbox {\n  position: relative;\n  top: 4px;\n  margin-right: 11px;\n}\n\ninput[type=checkbox] {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  width: 16px;\n  height: 16px;\n  border: 1px solid var(--color_secondary_grey);\n}\n\ninput[type=checkbox]:checked {\n  background-color: var(--color_secondary_grey);\n}\n\n.home {\n  color: aqua;\n}\n\n.header {\n  position: relative;\n  left: 0px;\n  top: 0px;\n  padding: 0 0px;\n  width: 100%;\n  background-color: var(--color_primary_white);\n}\n.header__logos {\n  display: flex;\n  margin-left: 108px;\n}\n.header__button {\n  display: none;\n}\n@media screen and (min-width: 1280px) {\n  .header__button {\n    display: block;\n  }\n}\n.header__burger {\n  background-color: transparent;\n  border: none;\n  fill: var(--color_primary_orange);\n}\n@media screen and (min-width: 1280px) {\n  .header__burger {\n    display: none;\n  }\n}\n.header__logo {\n  fill: var(--color_primary_orange);\n  display: flex;\n  align-items: center;\n}\n.header__logos {\n  gap: 10px;\n  display: flex;\n  align-items: center;\n  margin-left: 20px;\n}\n.header__container {\n  display: flex;\n  gap: 20px;\n  position: relative;\n  justify-content: space-between;\n}\n@media screen and (min-width: 1280px) {\n  .header__container {\n    gap: 80px;\n    flex-grow: 0;\n  }\n}\n.header__menu {\n  padding-left: 0;\n  display: none;\n  gap: 48px;\n  align-items: center;\n  z-index: 2;\n}\n@media screen and (min-width: 1280px) {\n  .header__menu {\n    display: flex;\n  }\n}\n.header__buttons {\n  display: flex;\n  gap: 0px;\n}\n@media screen and (min-width: 480px) {\n  .header__buttons {\n    gap: 24px;\n  }\n}\n.header__basket {\n  fill: var(--color_primary_orange);\n  border: none;\n  font-size: 2em;\n  color: var(--color_primary_orange);\n  background-color: transparent;\n  z-index: 0;\n}\n.header__basket:hover {\n  color: var(--color_secondary_orange);\n  cursor: pointer;\n}\n.header__icon1, .header__icon2 {\n  position: absolute;\n  z-index: -1;\n}\n.header__icon1 {\n  transform: rotate(-45deg);\n  font-size: 5em;\n  top: 0px;\n  right: 747px;\n  color: var(--color_secondary_white);\n}\n.header__icon2 {\n  transform: rotate(45deg);\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .header__icon2 {\n    font-size: 5em;\n    right: -241px;\n    top: -56px;\n    display: block;\n    color: var(--color_secondary_white);\n  }\n}\n@media screen and (min-width: 1280px) {\n  .header__icon2 {\n    right: 375px;\n    top: -16px;\n  }\n}\n\n.hero-section {\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  position: relative;\n}\n@media screen and (min-width: 820px) {\n  .hero-section {\n    margin-bottom: 149px;\n  }\n}\n.hero-section__BackgroundVector {\n  position: absolute;\n  top: -100px;\n  left: 0px;\n  max-height: 750px;\n  z-index: -1;\n  max-width: 2920px;\n  width: 100%;\n  display: flex;\n  flex-shrink: 1;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__BackgroundVector {\n    max-height: 750px;\n    z-index: -1;\n    max-width: 2920px;\n    width: 150%;\n    left: -450px;\n  }\n}\n.hero-section__icons {\n  position: relative;\n  width: 0;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__icons {\n    position: relative;\n    max-height: 405px;\n    height: 50%;\n    max-width: 495px;\n    width: 100%;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icons {\n    max-height: 505px;\n    height: 100%;\n    max-width: 615px;\n    width: 100%;\n  }\n}\n.hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {\n  display: none !important;\n}\n@media screen and (min-width: 500px) {\n  .hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {\n    display: block !important;\n    position: absolute;\n    font-size: 4em;\n    z-index: 0;\n  }\n}\n@media screen and (min-width: 820px) {\n  .hero-section__icon1, .hero-section__icon2, .hero-section__icon3, .hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {\n    z-index: 1;\n  }\n}\n.hero-section__icon4, .hero-section__icon5, .hero-section__icon6 {\n  fill: var(--color_secondary_white);\n}\n.hero-section__icon1 {\n  color: var(--color_secondary_purple);\n  font-size: 1.5em;\n  top: 147px;\n  right: 217px;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__icon1 {\n    top: 15px;\n    font-size: 3em;\n    right: 233px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icon1 {\n    top: 193px;\n    right: 452px;\n  }\n}\n.hero-section__icon2 {\n  bottom: -173px;\n  right: 323px;\n  font-size: 1.5em;\n  color: var(--color_secondary_orange);\n  transform: rotate(-45deg);\n}\n@media screen and (min-width: 820px) {\n  .hero-section__icon2 {\n    bottom: 130px;\n    font-size: 3em;\n    right: 355px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icon2 {\n    bottom: 3px;\n    right: 520px;\n  }\n}\n.hero-section__icon3 {\n  color: deeppink;\n  font-size: 1.5em;\n  top: 150px;\n  transform: rotate(0deg);\n  right: 102px;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__icon3 {\n    top: 256px;\n    right: 355px;\n    font-size: 3em;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icon3 {\n    top: 333px;\n    right: 124px;\n  }\n}\n.hero-section__icon4 {\n  color: var(--color_secondary_orange);\n  display: none !important;\n  right: 180px;\n  top: 0px;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icon4 {\n    right: 60px;\n    transform: rotate(45deg);\n    display: block;\n  }\n}\n.hero-section__icon5 {\n  display: none !important;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__icon5 {\n    display: block !important;\n    color: var(--color_secondary_white);\n    right: 229px;\n    top: 9px;\n    transform: rotate(359deg);\n  }\n}\n.hero-section__icon6 {\n  color: var(--color_secondary_middlepurple);\n  right: 506px;\n  top: 47px;\n  transform: rotate(-45deg);\n  z-index: -1;\n}\n.hero-section__dog-icon2, .hero-section__dog-icon1 {\n  display: none;\n}\n@media screen and (min-width: 500px) {\n  .hero-section__dog-icon2, .hero-section__dog-icon1 {\n    display: block;\n    position: absolute;\n    border-radius: 50%;\n  }\n}\n.hero-section__dog-icon1 {\n  top: 51px;\n  right: 366px;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__dog-icon1 {\n    top: -20px;\n    right: 400px;\n  }\n}\n.hero-section__dog-icon2 {\n  right: 50px;\n  top: 54px;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__dog-icon2 {\n    right: 447px;\n    top: 265px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__dog-icon2 {\n    right: 0px;\n    top: 100px;\n  }\n}\n.hero-section__text {\n  text-align: center;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__text {\n    text-align: left;\n  }\n}\n.hero-section__title {\n  font-size: 32px;\n  font-family: \"Rowdies\", sans-serif;\n  max-width: 635px;\n  border-radius: 50%;\n  line-height: 1;\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__title {\n    font-size: 72px;\n  }\n}\n.hero-section__definition {\n  max-width: 499px;\n}\n.hero-section__container {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n}\n.hero-section__picture {\n  border-radius: 50%;\n  position: relative;\n  display: none;\n  width: 50%;\n  height: 80%;\n  bottom: -50px;\n  right: -170px;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__picture {\n    display: block;\n  }\n}\n.hero-section__arrow {\n  position: absolute;\n  fill: var(--color_secondary_orange);\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__arrow {\n    display: block;\n    top: 0;\n    right: 80px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .hero-section__arrow {\n    right: 600px;\n  }\n}\n.hero-section__dog-background {\n  position: absolute;\n  z-index: 0;\n  display: none;\n  width: 70%;\n  height: 120%;\n  right: 85px;\n  top: 0;\n}\n@media screen and (min-width: 820px) {\n  .hero-section__dog-background {\n    display: block;\n  }\n}\n\n.lesstalk-section {\n  position: relative;\n}\n@media screen and (max-width: 480px) {\n  .lesstalk-section {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n}\n.lesstalk-section__image {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__image {\n    display: block;\n    z-index: 0;\n  }\n}\n.lesstalk-section__container {\n  position: relative;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 0px;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__container {\n    gap: 60px;\n  }\n}\n.lesstalk-section__logo-icons {\n  display: flex;\n  flex-direction: column;\n  position: relative;\n  left: -40px;\n}\n.lesstalk-section__text {\n  text-align: center;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__text {\n    text-align: start;\n  }\n}\n.lesstalk-section__title {\n  font-size: 32px;\n  font-weight: 400;\n  font-family: \"Rowdies\";\n  text-align: center;\n}\n@media screen and (min-width: 1280px) {\n  .lesstalk-section__title {\n    font-size: 56px;\n    text-align: start;\n  }\n}\n.lesstalk-section__info {\n  max-width: 540px;\n}\n.lesstalk-section__vector_purple {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__vector_purple {\n    display: block;\n    position: absolute;\n    left: 4px;\n    z-index: -1;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .lesstalk-section__vector_purple {\n    left: 50px;\n  }\n}\n.lesstalk-section__paw-icon1, .lesstalk-section__paw-icon2, .lesstalk-section__paw-icon3 {\n  color: var(--color_secondary_grey);\n  position: absolute;\n}\n.lesstalk-section__paw-icon1 {\n  transform: rotate(-45deg);\n  left: 103px;\n  bottom: 120px;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__paw-icon1 {\n    left: 46px;\n  }\n}\n.lesstalk-section__paw-icon2 {\n  left: 88px;\n  top: 130px;\n  transform: rotate(0deg);\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__paw-icon2 {\n    left: 250px;\n    top: -20px;\n  }\n}\n.lesstalk-section__paw-icon3 {\n  display: none !important;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__paw-icon3 {\n    display: block !important;\n    transform: rotate(45deg);\n    left: 450px;\n    top: 140px;\n  }\n}\n.lesstalk-section__video-vector {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__video-vector {\n    display: block;\n    position: absolute;\n    top: 0;\n    left: 400px;\n    z-index: 0;\n  }\n}\n.lesstalk-section__video {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__video {\n    display: block;\n    position: absolute;\n    top: 30px;\n    left: 435px;\n    z-index: 1;\n    cursor: pointer;\n  }\n}\n.lesstalk-section__icon1, .lesstalk-section__icon2, .lesstalk-section__icon3 {\n  position: absolute;\n  fill: var(--color_secondary_white);\n}\n.lesstalk-section__icon1 {\n  left: -150px;\n  transform: rotate(45deg);\n}\n.lesstalk-section__icon2 {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__icon2 {\n    left: 29px;\n    top: -122px;\n  }\n}\n.lesstalk-section__icon3 {\n  display: none;\n}\n@media screen and (min-width: 820px) {\n  .lesstalk-section__icon3 {\n    display: block;\n    top: -302px;\n    right: -233px;\n    transform: rotate(-45deg);\n    z-index: -1;\n  }\n}\n\n.mobile-menu {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color_primary_white);\n  transform: translateX(100%);\n  transition: transform 0.5s;\n}\n.mobile-menu.is-open {\n  transform: translateX(0);\n}\n.mobile-menu__logo {\n  margin: 20px 0;\n  fill: var(--color_primary_orange);\n}\n.mobile-menu__button {\n  background-color: transparent;\n  border: none;\n  position: absolute;\n  top: 46px;\n  right: 55px;\n  fill: var(--color_primary_orange);\n}\n.mobile-menu__nav {\n  display: flex;\n  flex-direction: column;\n  gap: 20px;\n  margin: 20px;\n  margin-top: 80px;\n}\n.mobile-menu__link {\n  text-decoration: none;\n  color: var(--color_primarydark);\n}\n.mobile-menu__link:hover {\n  color: var(--colorb);\n}\n.mobile-menu__nav-icons {\n  margin-left: 20px;\n  display: flex;\n  gap: 20px;\n}\n.mobile-menu__icon {\n  fill: var(--color_primary_orange);\n}\n.mobile-menu__icon:hover {\n  fill: var(--color_secondary_orange);\n  cursor: pointer;\n}\n\n.production {\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n}\n.production.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n\n.production-modal {\n  z-index: 2;\n  position: relative;\n  width: 100%;\n  max-width: 1300px;\n  height: 100%;\n  max-height: 700px;\n  background-color: var(--color_primary_white);\n  padding: 60px 20px 20px;\n  overflow: scroll;\n}\n@media screen and (min-width: 820px) {\n  .production-modal {\n    padding: 60px 86px 86px;\n  }\n}\n.production-modal__nav {\n  display: flex;\n  margin-bottom: 100px;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  max-height: 50px;\n  position: relative;\n  z-index: 0 !important;\n}\n@media screen and (min-width: 820px) {\n  .production-modal__nav {\n    flex-direction: row;\n    margin-bottom: 0px;\n  }\n}\n.production-modal__title {\n  color: var(--color_primary_orange);\n  font-family: \"Rowdies\", sans-serif;\n  font-size: 36px;\n  margin-right: 30px;\n  margin-bottom: 10px;\n}\n@media screen and (min-width: 820px) {\n  .production-modal__title {\n    margin-right: 200px;\n    font-size: 56px;\n    margin-bottom: 30px;\n  }\n}\n@media screen and (min-width: 1280px) {\n  .production-modal__title {\n    margin-right: 400px;\n  }\n}\n.production-modal__sorting {\n  color: var(--color_primary_orange);\n  margin-right: 20px;\n}\n.production-modal__sort-button {\n  background-color: var(--color_primary_white);\n  border: none;\n  border: 1px solid var(--color_secondary_grey);\n}\n.production-modal__sort-button:hover {\n  background-color: var(--color_secondary_orange);\n  color: var(--color_primary_white);\n}\n.production-modal .products-list {\n  padding-left: 0;\n  padding-top: 0;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  flex-wrap: wrap;\n  overflow: hidden;\n  gap: 32px;\n}\n.production-modal .products-list__card {\n  box-shadow: 0px 0px 0px white;\n}\n.production-modal .products-list__card:hover {\n  box-shadow: 0px 8px 16px 0px rgba(24, 24, 23, 0.0784313725);\n}\n.production-modal .products-list__item {\n  max-width: 288px;\n  width: 100%;\n  max-height: 512px;\n  height: 100%;\n  display: block;\n  text-align: center;\n}\n.production-modal .products-list__item__rating {\n  display: flex;\n  justify-content: center;\n  gap: 8px;\n  color: var(--color_secondary_grey);\n  margin-bottom: 10px;\n}\n.production-modal .products-list__item__gold-star {\n  font-size: smaller;\n  color: var(--color_primary_orange);\n}\n.production-modal .products-list__item__grey-star {\n  font-size: smaller;\n  color: var(--color_primary_grey);\n}\n.production-modal .products-list__item__price {\n  font-weight: bold;\n  margin: 10px 0;\n}\n\n.h4-is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n}\n\n.production-btn-close {\n  position: absolute;\n  border: none;\n  background-color: transparent;\n}\n\n.services-section {\n  position: relative;\n}\n@media screen and (max-width: 480px) {\n  .services-section {\n    padding-top: 0px;\n  }\n}\n.services-section__icon {\n  position: absolute;\n  fill: var(--color_primary_orange);\n}\n.services-section__categories {\n  gap: 24px;\n}\n.services-section__title {\n  font-size: 32px;\n}\n@media screen and (min-width: 1280px) {\n  .services-section__title {\n    font-size: 56px;\n  }\n}\n.services-section__service {\n  border: 1px solid lightgray;\n  border-radius: 32px;\n  height: 245px !important;\n  display: flex !important;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background: linear-gradient(0deg, rgb(255, 250, 243) 0%, rgb(255, 250, 243) 35%, rgb(255, 255, 255) 100%);\n}\n.services-section__more {\n  color: var(--color_primary_orange);\n  position: relative;\n  bottom: -80px;\n  font-size: 18px;\n}\n.services-section__BackgroundVector {\n  position: absolute;\n  top: 0px;\n  left: 0;\n  z-index: -2;\n  max-width: 2920px;\n  width: 100%;\n  max-height: 500px;\n  overflow: hidden;\n}\n.services-section__arrow {\n  position: relative;\n  bottom: -83px;\n  left: -24px;\n}\n.services-section__icon {\n  z-index: -1;\n}\n\n.swiper-button-next2 {\n  position: absolute;\n  right: 0;\n}\n\n.wrapper1 .carousel1 {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: 33.3333333333%;\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  position: relative;\n}\n\n.wrapper1 i {\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n  font-size: 2em;\n  color: var(--color_primary_orange);\n  transform: translateY(-50%);\n}\n\n.wrapper1 p {\n  position: absolute;\n  right: 0;\n  bottom: -60px;\n}\n\n.wrapper1 p.services-section__service-name {\n  color: var(--color_primary_orange);\n  position: relative;\n  bottom: -40px;\n}\n\n.wrapper1 i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n\n.carousel1 .card1 {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n}\n@media screen and (max-width: 600px) {\n  .carousel1 .card1 {\n    scroll-snap-align: center;\n  }\n}\n\n.wrapper1 {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n}\n@media screen and (min-width: 1280px) {\n  .wrapper1 {\n    margin: 0 0 50px 50px;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .wrapper1 .carousel1 {\n    grid-auto-columns: calc(50% + 6px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper1 .carousel1 {\n    grid-auto-columns: 105%;\n  }\n}","$bp-mobile: 480px;\n$bp-tablet: 820px;\n$bp-desktop: 1280px;\n\n:root {\n  --color_primary_white: #ffffff;\n  --color_primary_orange: #ff9f0e;\n  --color_primary_black: #181817;\n\n  --color_secondary_orange: #fcb62a;\n  --color_secondary_white: #fffaf3;\n  --color_secondary_middlepurple: #f1f3ff;\n  --color_secondary_grey: #839aa9;\n  --color_secondary_lightpurple: #f9f9ff;\n  --color_secondary_purple: #d9a6ff;\n}\n",".button {\n  padding: 16px 32px;\n  background-color: var(--color_primary_orange);\n  border-radius: 8px;\n  color: var(--color_primary_white);\n  border: none;\n  cursor: pointer;\n  margin: 20px 0;\n  &:hover {\n    background-color: var(--color_secondary_orange);\n    color: var(--color_secondary_white);\n  }\n}\n",".container {\n  width: 100%;\n  max-width: 768px;\n  margin: 0 auto;\n\n  @media screen and (min-width: $bp-tablet) {\n    max-width: 1288px;\n  }\n}\n",".link {\n  color: var(--color_primary_black);\n  text-decoration: none;\n  &:hover {\n    color: var(--color_primary_orange);\n  }\n}\n",".contacts-section {\n  position: relative;\n  z-index: 0;\n  margin-bottom: 150px;\n  background: linear-gradient(\n    0deg,\n    rgba(255, 255, 255, 1) 0%,\n    rgba(241, 243, 255, 1) 65%,\n    rgba(241, 243, 255, 1) 100%\n  );\n  @media screen and (max-width: $bp-mobile) {\n    padding-top: 0px;\n  }\n  @media screen and (min-width: $bp-tablet) {\n    margin-bottom: 0px;\n  }\n  &__container {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n  }\n  &__title {\n    margin-bottom: 0;\n    z-index: 1;\n    font-size: 32px;\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 56px;\n    }\n  }\n  &__form {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    gap: 24px;\n  }\n  &__form_button {\n    margin: 0;\n  }\n  &__form-field {\n    border-radius: 17px;\n    border-color: var(--color_primary_orange);\n    padding: 8px 40px;\n  }\n  &__input {\n    font-size: 18px;\n  }\n  &__form-instruction {\n    text-align: center;\n    color: var(--color_secondary_grey);\n    margin: 20px;\n    z-index: 1;\n  }\n\n  &__before {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n\n      position: absolute;\n      content: \"\";\n      background-repeat: no-repeat;\n      top: 0;\n      left: 0;\n      z-index: 0;\n      width: 353px;\n      height: 520px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n    }\n  }\n  &__after {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n\n      position: absolute;\n      content: \"\";\n      background-repeat: no-repeat;\n      bottom: 0px;\n      right: 0;\n      width: 322px;\n      height: 752px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n    }\n  }\n  .wave svg {\n    position: absolute;\n    z-index: -1;\n    top: 0;\n    left: 0;\n    width: 100%;\n    overflow: hidden;\n    line-height: 0;\n    fill: var(--color_primary_white);\n  }\n}\n","@import url(\"https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap\");\n.customers-section {\n  @media screen and (max-width: $bp-mobile) {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n\n  &__title {\n    font-size: 32px;\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 56px;\n    }\n  }\n\n  &__icons {\n    display: flex;\n    gap: 8px;\n    fill: var(--color_primary_orange);\n    position: relative;\n    left: -40px;\n  }\n\n  &__mark {\n    color: var(--color_primary_orange);\n    position: relative;\n    left: 20px;\n  }\n}\n\n.wrapper {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  @media screen and (min-width: $bp-desktop) {\n    margin: 0 0 50px 50px;\n  }\n}\n.wrapper i {\n  display: none;\n  @media screen and (min-width: $bp-tablet) {\n    display: block;\n    top: 50%;\n    height: 50px;\n    width: 50px;\n    cursor: pointer;\n    font-size: 1.25rem;\n    position: absolute;\n    text-align: center;\n    line-height: 50px;\n    background: #fff;\n    border-radius: 50%;\n    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.23);\n    transform: translateY(-50%);\n    transition: transform 0.1s linear;\n  }\n}\n.wrapper i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n.wrapper i:first-child {\n  left: -22px;\n}\n.wrapper i:last-child {\n  right: -22px;\n}\n.wrapper .carousel {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: calc((100% / 3));\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n}\n.carousel::-webkit-scrollbar {\n  display: none;\n}\n.carousel.no-transition {\n  scroll-behavior: auto;\n}\n.carousel.dragging {\n  scroll-snap-type: none;\n  scroll-behavior: auto;\n}\n.carousel.dragging .card {\n  cursor: grab;\n  user-select: none;\n}\n.carousel :where(.card, .img) {\n  display: flex;\n  justify-content: center;\n  align-items: left;\n}\n.carousel .card {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 344px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n  justify-content: flex-end;\n  @media screen and (max-width: 600px) {\n    scroll-snap-align: center;\n  }\n}\n.carousel .card .img {\n  height: 148px;\n  width: 148px;\n  border-radius: 50%;\n}\n.card .img img {\n  width: 140px;\n  height: 140px;\n  border-radius: 50%;\n  object-fit: cover;\n  border: 4px solid #fff;\n}\n.carousel .card h2 {\n  font-weight: 500;\n  font-size: 1.56rem;\n  margin: 30px 0 5px;\n}\n.carousel .card span {\n  color: #6a6d78;\n  font-size: 1.31rem;\n}\n@media screen and (max-width: 900px) {\n  .wrapper .carousel {\n    grid-auto-columns: calc((100% / 2) + 6px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper .carousel {\n    grid-auto-columns: 105%;\n  }\n}\n\n.card h2,\n.card p {\n  color: #fff;\n  text-align: end left;\n}\n.card p {\n  font-size: 14px;\n  margin-bottom: 5px;\n}\n\n.card_anna {\n  background-image: linear-gradient(\n      180deg,\n      rgba(49, 38, 26, 0) 68.21%,\n      #839aa9 68.92%,\n      #839aa9 100%\n    ),\n    url(\"/src/images/customer_anna.jpg\");\n}\n\n.card_chris {\n  background-image: linear-gradient(\n      180deg,\n      rgba(49, 38, 26, 0) 68.21%,\n      #839aa9 68.92%,\n      #839aa9 100%\n    ),\n    url(\"/src//images/customer_chris.jpg\");\n}\n.card_sindy {\n  background-image: linear-gradient(\n      180deg,\n      rgba(49, 38, 26, 0) 68.21%,\n      #839aa9 68.92%,\n      #839aa9 100%\n    ),\n    url(\"/src/images/customer_sindy.jpg\");\n}\n",".footer {\n  bottom: 67px;\n  left: 365px;\n  padding: 10px 313px 10px 105px;\n  background-color: var(--color_secondary_white);\n  @media screen and (min-width: $bp-desktop) {\n    bottom: 67px;\n    left: 365px;\n    padding: 10px 313px 10px 105px;\n  }\n\n  &.footer-relative {\n    position: relative;\n    left: 0;\n    bottom: -30px;\n    padding: 20px 0px 20px 0px;\n    @media screen and (min-width: $bp-desktop) {\n      &::after {\n        right: 180px;\n      }\n    }\n  }\n\n  &__container {\n    display: block;\n    text-align: center;\n    gap: 100px;\n\n    @media screen and (min-width: $bp-tablet) {\n      display: flex;\n      gap: 100px;\n    }\n    @media screen and (min-width: $bp-tablet) {\n    }\n  }\n  &__icons {\n    display: flex;\n    flex-direction: column;\n  }\n  &__logo-icons {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    @media screen and (min-width: $bp-tablet) {\n      justify-content: flex-start;\n    }\n  }\n  &__logo {\n    fill: var(--color_primary_orange);\n    margin: 0;\n    padding: 0;\n  }\n  &__socials {\n    display: flex;\n    margin-top: 20px;\n    margin-left: 10px;\n    gap: 16px;\n    justify-content: center;\n    @media screen and (min-width: $bp-tablet) {\n      justify-content: flex-start;\n    }\n  }\n\n  &__menu {\n    display: flex;\n    flex-direction: column;\n    gap: 16px;\n    z-index: 1;\n    padding-left: 0;\n  }\n\n  &__form {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-direction: column;\n  }\n  &__form_button {\n    margin: 0;\n    padding: 16 32;\n  }\n  &__form_div {\n    z-index: 1;\n  }\n  &__after {\n    position: absolute;\n    content: \"\";\n    background-repeat: no-repeat;\n\n    bottom: 496px;\n    right: 0px;\n    width: 292px;\n    height: 305px;\n\n    @media screen and (min-width: $bp-tablet) {\n      bottom: 215px;\n      z-index: 0;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      bottom: -45px;\n      right: 280px;\n      z-index: 0;\n    }\n  }\n}\n",".backdrop {\n  position: fixed;\n  z-index: 2;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n}\n.is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n}\n.modal {\n  margin-top: 72px;\n  overflow: scroll;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  z-index: 2;\n  position: relative;\n\n  width: 100%;\n  max-width: 850px;\n  height: 100%;\n  max-height: 850px;\n  background-color: var(--color_secondary_white);\n  border-radius: 32px;\n  padding: 120px 86px 86px;\n\n  &__cross-button {\n    border: none;\n    background-color: transparent;\n    cursor: pointer;\n    position: absolute;\n    right: 40px;\n    top: 40px;\n  }\n  &__form-title {\n    text-align: center;\n    font-size: 56px;\n    margin: 0;\n    max-width: 605px;\n    position: relative;\n  }\n  &__form-instruction {\n    text-align: center;\n    color: var(--color_secondary_grey);\n    margin: 20px;\n  }\n  &__form {\n    text-align: center;\n  }\n  &__form_button {\n    margin-bottom: 10px;\n  }\n}\n\n.form-field {\n  margin-bottom: 20px;\n  &__input {\n    padding: 16px 42px;\n    max-width: 310px;\n    border-radius: 17px;\n    border: 1px solid var(--color_primary_orange);\n    background-color: transparent;\n    font-size: 16px;\n    line-height: 1.17;\n    position: relative;\n    z-index: 1;\n\n    &::placeholder {\n      color: var(--color_primary_orange);\n      // &::before {\n      //   background-image: url(\"/src/images/basket.svg\");\n      // }\n    }\n  }\n\n  &__terms,\n  &__terms-link {\n    font-size: 12px;\n    color: var(--color_secondary_grey);\n    text-align: center;\n  }\n}\n.checkbox {\n  position: relative;\n  top: 4px;\n  margin-right: 11px;\n}\ninput[type=\"checkbox\"] {\n  -webkit-appearance: none;\n  appearance: none;\n  background-color: transparent;\n  width: 16px;\n  height: 16px;\n  border: 1px solid var(--color_secondary_grey);\n}\n\ninput[type=\"checkbox\"]:checked {\n  background-color: var(--color_secondary_grey);\n}\n\n.home {\n  color: aqua;\n}\n",".header {\n  position: relative;\n  left: 0px;\n  top: 0px;\n  padding: 0 0px;\n  width: 100%;\n\n  background-color: var(--color_primary_white);\n  &__logos {\n    display: flex;\n    margin-left: 108px;\n  }\n\n  &__button {\n    display: none;\n    @media screen and (min-width: $bp-desktop) {\n      display: block;\n    }\n  }\n  &__burger {\n    background-color: transparent;\n    border: none;\n    fill: var(--color_primary_orange);\n    @media screen and (min-width: $bp-desktop) {\n      display: none;\n    }\n  }\n  &__logo {\n    fill: var(--color_primary_orange);\n    display: flex;\n    align-items: center;\n  }\n  &__logos {\n    gap: 10px;\n    display: flex;\n    align-items: center;\n    margin-left: 20px;\n  }\n  &__container {\n    display: flex;\n    gap: 20px;\n    position: relative;\n    justify-content: space-between;\n    @media screen and (min-width: $bp-desktop) {\n      gap: 80px;\n      flex-grow: 0;\n    }\n  }\n\n  &__menu {\n    padding-left: 0;\n    display: none;\n    gap: 48px;\n    align-items: center;\n    z-index: 2;\n    @media screen and (min-width: $bp-desktop) {\n      display: flex;\n    }\n  }\n  &__buttons {\n    display: flex;\n    gap: 0px;\n    @media screen and (min-width: $bp-mobile) {\n      gap: 24px;\n    }\n  }\n  &__basket {\n    fill: var(--color_primary_orange);\n    border: none;\n    font-size: 2em;\n    color: var(--color_primary_orange);\n    background-color: transparent;\n    z-index: 0;\n    &:hover {\n      color: var(--color_secondary_orange);\n      cursor: pointer;\n    }\n  }\n\n  &__icon1,\n  &__icon2 {\n    position: absolute;\n    z-index: -1;\n  }\n  &__icon1 {\n    transform: rotate(-45deg);\n    font-size: 5em;\n    top: 0px;\n    right: 747px;\n    color: var(--color_secondary_white);\n  }\n  &__icon2 {\n    transform: rotate(45deg);\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      font-size: 5em;\n      right: -241px;\n      top: -56px;\n      display: block;\n      color: var(--color_secondary_white);\n    }\n\n    @media screen and (min-width: $bp-desktop) {\n      right: 375px;\n      top: -16px;\n    }\n  }\n}\n",".hero-section {\n  position: relative;\n  margin-top: 30px;\n  margin-bottom: 10px;\n  position: relative;\n  @media screen and (min-width: $bp-tablet) {\n    margin-bottom: 149px;\n  }\n\n  &__BackgroundVector {\n    position: absolute;\n    top: -100px;\n    left: 0px;\n    max-height: 750px;\n    z-index: -1;\n    max-width: 2920px;\n    width: 100%;\n    display: flex;\n    flex-shrink: 1;\n    @media screen and (min-width: $bp-desktop) {\n      max-height: 750px;\n      z-index: -1;\n      max-width: 2920px;\n      width: 150%;\n      left: -450px;\n    }\n  }\n\n  &__icons {\n    position: relative;\n    width: 0;\n\n    @media screen and (min-width: $bp-tablet) {\n      position: relative;\n      max-height: 405px;\n      height: 50%;\n      max-width: 495px;\n      width: 100%;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      max-height: 505px;\n      height: 100%;\n      max-width: 615px;\n      width: 100%;\n    }\n  }\n\n  &__icon1,\n  &__icon2,\n  &__icon3,\n  &__icon4,\n  &__icon5,\n  &__icon6 {\n    display: none !important;\n    @media screen and (min-width: 500px) {\n      display: block !important;\n      position: absolute;\n      font-size: 4em;\n      z-index: 0;\n    }\n\n    @media screen and (min-width: $bp-tablet) {\n      z-index: 1;\n    }\n  }\n  &__icon4,\n  &__icon5,\n  &__icon6 {\n    fill: var(--color_secondary_white);\n  }\n  &__icon1 {\n    color: var(--color_secondary_purple);\n    font-size: 1.5em;\n    top: 147px;\n    right: 217px;\n    @media screen and (min-width: $bp-tablet) {\n      top: 15px;\n      font-size: 3em;\n      right: 233px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      top: 193px;\n      right: 452px;\n    }\n  }\n  &__icon2 {\n    bottom: -173px;\n    right: 323px;\n    font-size: 1.5em;\n    color: var(--color_secondary_orange);\n    transform: rotate(-45deg);\n    @media screen and (min-width: $bp-tablet) {\n      bottom: 130px;\n      font-size: 3em;\n      right: 355px;\n    }\n\n    @media screen and (min-width: $bp-desktop) {\n      bottom: 3px;\n      right: 520px;\n    }\n  }\n  &__icon3 {\n    color: deeppink;\n    font-size: 1.5em;\n    top: 150px;\n    transform: rotate(-0deg);\n    right: 102px;\n    @media screen and (min-width: $bp-tablet) {\n      top: 256px;\n      right: 355px;\n      font-size: 3em;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      top: 333px;\n\n      right: 124px;\n    }\n  }\n  &__icon4 {\n    color: var(--color_secondary_orange);\n    display: none !important;\n    right: 180px;\n    top: 0px;\n    @media screen and (min-width: $bp-desktop) {\n      right: 60px;\n      transform: rotate(45deg);\n      display: block;\n    }\n  }\n  &__icon5 {\n    display: none !important;\n    @media screen and (min-width: $bp-desktop) {\n      display: block !important;\n      color: var(--color_secondary_white);\n      right: 229px;\n      top: 9px;\n      transform: rotate(359deg);\n    }\n  }\n  &__icon6 {\n    color: var(--color_secondary_middlepurple);\n    right: 506px;\n    top: 47px;\n    transform: rotate(-45deg);\n    z-index: -1;\n  }\n  &__dog-icon2,\n  &__dog-icon1 {\n    display: none;\n\n    @media screen and (min-width: 500px) {\n      display: block;\n      position: absolute;\n      border-radius: 50%;\n    }\n  }\n  &__dog-icon1 {\n    top: 51px;\n    right: 366px;\n    @media screen and (min-width: $bp-tablet) {\n      top: -20px;\n      right: 400px;\n    }\n  }\n  &__dog-icon2 {\n    right: 50px;\n    top: 54px;\n    @media screen and (min-width: $bp-tablet) {\n      right: 447px;\n      top: 265px;\n    }\n\n    @media screen and (min-width: $bp-desktop) {\n      right: 0px;\n      top: 100px;\n    }\n  }\n  &__text {\n    text-align: center;\n    @media screen and (min-width: $bp-tablet) {\n      text-align: left;\n    }\n  }\n  &__title {\n    font-size: 32px;\n    font-family: \"Rowdies\", sans-serif;\n    max-width: 635px;\n    border-radius: 50%;\n    line-height: 1;\n\n    @media screen and (min-width: $bp-tablet) {\n    }\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 72px;\n    }\n  }\n  &__definition {\n    max-width: 499px;\n  }\n  &__container {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    position: relative;\n  }\n  &__picture {\n    border-radius: 50%;\n    position: relative;\n    display: none;\n    width: 50%;\n    height: 80%;\n    bottom: -50px;\n    right: -170px;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n    }\n  }\n  &__arrow {\n    position: absolute;\n    fill: var(--color_secondary_orange);\n\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      top: 0;\n      right: 80px;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      right: 600px;\n    }\n  }\n  &__dog-background {\n    position: absolute;\n\n    z-index: 0;\n\n    display: none;\n    width: 70%;\n    height: 120%;\n    right: 85px;\n    top: 0;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n    }\n  }\n}\n",".lesstalk-section {\n  position: relative;\n  @media screen and (max-width: $bp-mobile) {\n    padding-top: 0px;\n    padding-bottom: 0px;\n  }\n  &__image {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      z-index: 0;\n    }\n  }\n  &__container {\n    position: relative;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    gap: 0px;\n    @media screen and (min-width: $bp-tablet) {\n      gap: 60px;\n    }\n  }\n\n  &__logo-icons {\n    display: flex;\n    flex-direction: column;\n    position: relative;\n    left: -40px;\n  }\n  &__text {\n    text-align: center;\n    @media screen and (min-width: $bp-tablet) {\n      text-align: start;\n    }\n  }\n  &__title {\n    font-size: 32px;\n    font-weight: 400;\n    font-family: \"Rowdies\";\n    text-align: center;\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 56px;\n      text-align: start;\n    }\n  }\n  &__info {\n    max-width: 540px;\n  }\n  &__vector_purple {\n    display: none;\n\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      position: absolute;\n      left: 4px;\n\n      z-index: -1;\n    }\n    @media screen and (min-width: $bp-desktop) {\n      left: 50px;\n    }\n  }\n  &__paw-icon1,\n  &__paw-icon2,\n  &__paw-icon3 {\n    color: var(--color_secondary_grey);\n    position: absolute;\n  }\n  &__paw-icon1 {\n    transform: rotate(-45deg);\n    left: 103px;\n    bottom: 120px;\n    @media screen and (min-width: $bp-tablet) {\n      left: 46px;\n    }\n  }\n  &__paw-icon2 {\n    left: 88px;\n    top: 130px;\n    transform: rotate(0deg);\n    @media screen and (min-width: $bp-tablet) {\n      left: 250px;\n      top: -20px;\n    }\n  }\n  &__paw-icon3 {\n    display: none !important;\n    @media screen and (min-width: $bp-tablet) {\n      display: block !important;\n      transform: rotate(45deg);\n      left: 450px;\n      top: 140px;\n    }\n  }\n  &__video-vector {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      position: absolute;\n      top: 0;\n      left: 400px;\n      z-index: 0;\n    }\n  }\n\n  &__video {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      position: absolute;\n      top: 30px;\n      left: 435px;\n      z-index: 1;\n      cursor: pointer;\n    }\n  }\n  &__icon1,\n  &__icon2,\n  &__icon3 {\n    position: absolute;\n    fill: var(--color_secondary_white);\n  }\n  &__icon1 {\n    left: -150px;\n    transform: rotate(45deg);\n  }\n  &__icon2 {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      left: 29px;\n      top: -122px;\n    }\n  }\n  &__icon3 {\n    display: none;\n    @media screen and (min-width: $bp-tablet) {\n      display: block;\n      top: -302px;\n      right: -233px;\n      transform: rotate(-45deg);\n      z-index: -1;\n    }\n  }\n}\n",".mobile-menu {\n  position: fixed;\n  z-index: 2;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--color_primary_white);\n\n  transform: translateX(100%);\n  transition: transform 0.5s;\n\n  &.is-open {\n    transform: translateX(0);\n  }\n  &__logo {\n    margin: 20px 0;\n    fill: var(--color_primary_orange);\n  }\n  &__button {\n    background-color: transparent;\n    border: none;\n    position: absolute;\n    top: 46px;\n    right: 55px;\n    fill: var(--color_primary_orange);\n  }\n  &__nav {\n    display: flex;\n    flex-direction: column;\n    gap: 20px;\n    margin: 20px;\n    margin-top: 80px;\n  }\n  &__link {\n    text-decoration: none;\n    color: var(--color_primarydark);\n    &:hover {\n      color: var(--colorb);\n    }\n  }\n  &__nav-icons {\n    margin-left: 20px;\n    display: flex;\n    gap: 20px;\n  }\n  &__icon {\n    fill: var(--color_primary_orange);\n    &:hover {\n      fill: var(--color_secondary_orange);\n      cursor: pointer;\n    }\n  }\n}\n",".production {\n  position: fixed;\n  z-index: 3;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 20px 0;\n  transition: opacity 1s, visibility 1s;\n\n  &.is-hidden {\n    opacity: 0;\n    visibility: hidden;\n    pointer-events: none;\n  }\n}\n\n.production-modal {\n  z-index: 2;\n  position: relative;\n  width: 100%;\n\n  max-width: 1300px;\n  height: 100%;\n  max-height: 700px;\n  background-color: var(--color_primary_white);\n\n  padding: 60px 20px 20px;\n  overflow: scroll;\n  @media screen and (min-width: $bp-tablet) {\n    padding: 60px 86px 86px;\n  }\n\n  &__nav {\n    display: flex;\n    margin-bottom: 100px;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    max-height: 50px;\n    position: relative;\n    z-index: 0 !important;\n    @media screen and (min-width: $bp-tablet) {\n      flex-direction: row;\n      margin-bottom: 0px;\n    }\n  }\n  &__title {\n    color: var(--color_primary_orange);\n    font-family: \"Rowdies\", sans-serif;\n    font-size: 36px;\n    margin-right: 30px;\n    margin-bottom: 10px;\n\n    @media screen and (min-width: $bp-tablet) {\n      margin-right: 200px;\n      font-size: 56px;\n      margin-bottom: 30px;\n    }\n\n    @media screen and (min-width: $bp-desktop) {\n      margin-right: 400px;\n    }\n  }\n  &__sorting {\n    color: var(--color_primary_orange);\n    margin-right: 20px;\n  }\n\n  &__sort-button {\n    background-color: var(--color_primary_white);\n    border: none;\n    border: 1px solid var(--color_secondary_grey);\n    &:hover {\n      background-color: var(--color_secondary_orange);\n      color: var(--color_primary_white);\n    }\n  }\n\n  .products-list {\n    padding-left: 0;\n    padding-top: 0;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    flex-wrap: wrap;\n    overflow: hidden;\n    gap: 32px;\n\n    &__card {\n      box-shadow: 0px 0px 0px #ffff;\n\n      &:hover {\n        box-shadow: 0px 8px 16px 0px #18181714;\n      }\n    }\n    &__item {\n      max-width: 288px;\n      width: 100%;\n      max-height: 512px;\n      height: 100%;\n\n      display: block;\n      text-align: center;\n\n      &__rating {\n        display: flex;\n        justify-content: center;\n        gap: 8px;\n        color: var(--color_secondary_grey);\n        margin-bottom: 10px;\n      }\n      &__gold-star {\n        font-size: smaller;\n        color: var(--color_primary_orange);\n      }\n      &__grey-star {\n        font-size: smaller;\n        color: var(--color_primary_grey);\n      }\n      &__price {\n        font-weight: bold;\n        margin: 10px 0;\n      }\n    }\n  }\n}\n.h4-is-hidden {\n  opacity: 0;\n  visibility: hidden;\n  pointer-events: none;\n  position: absolute;\n}\n.production-btn-close {\n  position: absolute;\n  border: none;\n  background-color: transparent;\n}\n",".services-section {\n  position: relative;\n  @media screen and (max-width: $bp-mobile) {\n    padding-top: 0px;\n  }\n  &__icon {\n    position: absolute;\n\n    fill: var(--color_primary_orange);\n  }\n  &__categories {\n    gap: 24px;\n  }\n  &__title {\n    font-size: 32px;\n    @media screen and (min-width: $bp-desktop) {\n      font-size: 56px;\n    }\n  }\n\n  &__service {\n    border: 1px solid lightgray;\n    border-radius: 32px;\n    height: 245px !important;\n    display: flex !important;\n    flex-direction: column;\n    justify-content: center;\n    align-items: center;\n    background: linear-gradient(\n      0deg,\n      rgba(255, 250, 243, 1) 0%,\n      rgba(255, 250, 243, 1) 35%,\n      rgba(255, 255, 255, 1) 100%\n    );\n  }\n\n  &__more {\n    color: var(--color_primary_orange);\n    position: relative;\n    bottom: -80px;\n    font-size: 18px;\n  }\n  &__BackgroundVector {\n    position: absolute;\n    top: 0px;\n    left: 0;\n    z-index: -2;\n    max-width: 2920px;\n    width: 100%;\n    max-height: 500px;\n    overflow: hidden;\n  }\n  &__arrow {\n    position: relative;\n    bottom: -83px;\n    left: -24px;\n  }\n  &__icon {\n    z-index: -1;\n  }\n}\n.swiper-button-next2 {\n  position: absolute;\n  right: 0;\n}\n\n.wrapper1 .carousel1 {\n  display: grid;\n  grid-auto-flow: column;\n  grid-auto-columns: calc((100% / 3));\n  overflow-x: auto;\n  scroll-snap-type: x mandatory;\n  gap: 16px;\n  border-radius: 8px;\n  scroll-behavior: smooth;\n  scrollbar-width: none;\n  position: relative;\n}\n\n.wrapper1 i {\n  position: absolute;\n  right: 0;\n  cursor: pointer;\n  font-size: 2em;\n  color: var(--color_primary_orange);\n  transform: translateY(-50%);\n}\n.wrapper1 p {\n  position: absolute;\n  right: 0;\n  bottom: -60px;\n}\n\n.wrapper1 p.services-section__service-name {\n  color: var(--color_primary_orange);\n  position: relative;\n  bottom: -40px;\n}\n\n.wrapper1 i:active {\n  transform: translateY(-50%) scale(0.85);\n}\n\n.carousel1 .card1 {\n  scroll-snap-align: start;\n  height: 444px;\n  max-width: 345px;\n  list-style: none;\n  cursor: pointer;\n  padding-bottom: 15px;\n  flex-direction: column;\n  border-radius: 8px;\n  padding: 24px;\n\n  @media screen and (max-width: 600px) {\n    scroll-snap-align: center;\n  }\n}\n.wrapper1 {\n  max-width: 1100px;\n  width: 100%;\n  position: relative;\n  margin: 0;\n  @media screen and (min-width: $bp-desktop) {\n    margin: 0 0 50px 50px;\n  }\n}\n\n@media screen and (max-width: 900px) {\n  .wrapper1 .carousel1 {\n    grid-auto-columns: calc((100% / 2) + 6px);\n  }\n}\n@media screen and (max-width: 600px) {\n  .wrapper1 .carousel1 {\n    grid-auto-columns: 105%;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/scss/main.scss":
/*!****************************!*\
  !*** ./src/scss/main.scss ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./main.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/scss/main.scss");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_main_scss__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/images/customer_anna.jpg":
/*!**************************************!*\
  !*** ./src/images/customer_anna.jpg ***!
  \**************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/customer_annaf8ce94f3716ae5b74a5a.jpg";

/***/ }),

/***/ "./src/images/customer_chris.jpg":
/*!***************************************!*\
  !*** ./src/images/customer_chris.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/customer_chris4d0f44a5a202fd709346.jpg";

/***/ }),

/***/ "./src/images/customer_sindy.jpg":
/*!***************************************!*\
  !*** ./src/images/customer_sindy.jpg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/customer_sindyaf46e78192abf3c0bbaf.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/slider */ "./src/js/slider.js");
/* harmony import */ var _js_slider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_slider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/modal */ "./src/js/modal.js");
/* harmony import */ var _js_modal__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_js_modal__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/js/mobile-menu.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_production__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/production */ "./src/js/production.js");
/* harmony import */ var _js_production__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_js_production__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _js_slider_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/slider_services */ "./src/js/slider_services.js");
/* harmony import */ var _js_slider_services__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_js_slider_services__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _js_sorting__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./js/sorting */ "./src/js/sorting.js");
/* harmony import */ var _js_sorting__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_js_sorting__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./scss/main.scss */ "./src/scss/main.scss");







})();

/******/ })()
;
//# sourceMappingURL=bundlec07e00084fe7c0b97eab.js.map
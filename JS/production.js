//Adding selectors to production window, opening and closing button of this window
const production = document.querySelector(".production");
const basket = document.querySelector(".production-open");
const close = document.querySelector(".production-btn-close");
//Creating a function to toggle form window class for opening and closing of the window
const toggleProduction = function () {
  production.classList.toggle("is-hidden");
};
//Adding the previous function on click event for window opening and closing buttons
basket.addEventListener("click", toggleProduction);
close.addEventListener("click", toggleProduction);

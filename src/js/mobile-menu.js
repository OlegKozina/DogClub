//Adding selectors to mobile menu modal window, mobile menu opening button and mobile menu closing button
const mobileOpen = document.querySelector(".mobile-button-open");
const mobileClose = document.querySelectorAll(".mobile-btn-close");
const mobileMenu = document.querySelector(".mobile-menu");
//Creating a function to toggle mobile menu class for opening and closing of modal window
const toggleMenu = () => mobileMenu.classList.toggle("is-open");
//Adding the previous function on click event for modal opening and closing buttons
mobileOpen.addEventListener("click", toggleMenu);
mobileClose.forEach((el) => el.addEventListener("click", toggleMenu));

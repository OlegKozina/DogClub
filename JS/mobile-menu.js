const mobileOpen = document.querySelector(".mobile-button-open");
const mobileClose = document.querySelectorAll(".mobile-btn-close");
const mobileMenu = document.querySelector(".mobile-menu");

const toggleMenu = () => mobileMenu.classList.toggle("is-open");

mobileOpen.addEventListener("click", toggleMenu);
mobileClose.forEach((el) => el.addEventListener("click", toggleMenu));

const mobileOpen = document.querySelector('.mobile-button-open');
const mobileClose = document.querySelector('.mobile-btn-close');
const mobileMenu = document.querySelector('.mobile-menu');


const toggleMenu = () => mobileMenu.classList.toggle('is-open');

const disableScroll = () =>
  document.body.classList.toggle('is-scroll-disabled');

mobileOpen.addEventListener('click', toggleMenu);
mobileClose.addEventListener('click', toggleMenu);
mobileOpen.addEventListener('click', disableScroll);
mobileClose.addEventListener('click', disableScroll);
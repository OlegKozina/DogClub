//Adding selectors to the call request form window, opening and closing button of this window
const modal = document.querySelector(".backdrop");
const modalBtnOpen = document.querySelector(".modal-btn-open");
const modalBtnClose = document.querySelector(".modal-btn-close");
//Creating a function to toggle form window class for opening and closing of the window
const toggleModal = () => modal.classList.toggle("is-hidden");
//Adding the previous function on click event for window opening and closing buttons
modalBtnOpen.addEventListener("click", toggleModal);
modalBtnClose.addEventListener("click", toggleModal);

//Adding selectors to the slider elements from services section
const wrapper1 = document.querySelector(".wrapper1");
const carousel1 = document.querySelector(".carousel1");
const firstCardWidth1 = carousel1.querySelector(".card1").offsetWidth;
const arrowBtn = document.querySelector(".wrapper1 i");
const carouselChildren = [...carousel1.children];
let isDragging1 = false,
  isAutoPlay1 = true,
  startX1,
  startScrollLeft1,
  timeoutId1;
// Get the number of cards that can fit in the carousel at once
let cardPerView1 = Math.round(carousel1.offsetWidth / firstCardWidth1);
// Insert copies of the last few cards to beginning of carousel for infinite scrolling
carouselChildren
  .slice(-cardPerView1)
  .reverse()
  .forEach((card) => {
    carousel1.insertAdjacentHTML("afterbegin", card.outerHTML);
  });
// Insert copies of the first few cards to end of carousel for infinite scrolling
carouselChildren.slice(0, cardPerView1).forEach((card) => {
  carousel1.insertAdjacentHTML("beforeend", card.outerHTML);
});
// Scroll the carousel at appropriate postition to hide first few duplicate cards on Firefox
carousel1.classList.add("no-transition");
carousel1.scrollLeft = carousel1.offsetWidth;
carousel1.classList.remove("no-transition");
// Add event listeners for the arrow buttons to scroll the carousel left and right
arrowBtn.addEventListener("click", () => {
  carousel1.scrollLeft +=
    this.id == "left" ? -firstCardWidth1 : firstCardWidth1;
});
const dragStart1 = (e) => {
  isDragging1 = true;
  carousel1.classList.add("dragging");
  // Records the initial cursor and scroll position of the carousel
  startX1 = e.pageX;
  startScrollLeft1 = carousel1.scrollLeft;
};
const dragging1 = (e) => {
  if (!isDragging1) return; // if isDragging is false return from here
  // Updates the scroll position of the carousel based on the cursor movement
  carousel1.scrollLeft = startScrollLeft - (e.pageX - startX);
};
const dragStop1 = () => {
  isDragging1 = false;
  carousel1.classList.remove("dragging");
};
const infiniteScroll1 = () => {
  // If the carousel is at the beginning, scroll to the end
  if (carousel1.scrollLeft === 0) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.scrollWidth - 2 * carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }
  // If the carousel is at the end, scroll to the beginning
  else if (
    Math.ceil(carousel1.scrollLeft) ===
    carousel1.scrollWidth - carousel1.offsetWidth
  ) {
    carousel1.classList.add("no-transition");
    carousel1.scrollLeft = carousel1.offsetWidth;
    carousel1.classList.remove("no-transition");
  }
};

carousel1.addEventListener("mousedown", dragStart1);
carousel1.addEventListener("mousemove", dragging1);
document.addEventListener("mouseup", dragStop1);
carousel1.addEventListener("scroll", infiniteScroll1);
wrapper1.addEventListener("mouseenter", () => clearTimeout(timeoutId1));

const production = document.querySelector('.production');
const basket = document.querySelector('.production-open');
const header = document.querySelector('.header');
const footer = document.querySelector('.footer');



const toggleProduction = function ()
{production.classList.toggle('is-hidden');
header.classList.toggle('relative');
footer.classList.toggle('footer-relative');

};



basket.addEventListener('click', toggleProduction);


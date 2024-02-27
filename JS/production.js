const production = document.querySelector('.production');
const basket = document.querySelector('.production-open');
const close = document.querySelector('.production-btn-close');


const toggleProduction = function ()
{production.classList.toggle('is-hidden');};



basket.addEventListener('click', toggleProduction);
close.addEventListener('click', toggleProduction)


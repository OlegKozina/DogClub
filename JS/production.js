const production = document.querySelector('.production');
const basket = document.querySelector('.production-open');



const toggleProduction = () => production.classList.toggle('is-hidden');
basket.addEventListener('click', toggleProduction);
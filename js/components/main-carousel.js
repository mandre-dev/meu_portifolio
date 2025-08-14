const btnright = window.document.querySelector('.button-arrow._right');
const btnleft = window.document.querySelector('.button-arrow._left');
const elements = window.document.querySelector('.elements');
let pixels = 10;

btnright.addEventListener('click', function() {
    pixels = pixels + 10;
    elements.style = `transform: translateX(${pixels}px)`;
    
})

btnleft.addEventListener('click', function() {
    pixels = pixels - 10;
    elements.style = `transform: translateX(${pixels}px)`;
    
})
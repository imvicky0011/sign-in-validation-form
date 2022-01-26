const form = document.querySelector('.right-col form');
const inputs = document.querySelectorAll('.right-col form input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    inputs.forEach(input => {
        if(!input.value){
            input.parentElement.classList.add('error');
        } else {
            input.parentElement.classList.remove('error');
        }
    });
});
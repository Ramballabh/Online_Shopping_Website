//Selector
const form = document.getElementById('form');
const username = document.getElementById('username');
const password1 = document.getElementById('password1');
const small =  document.querySelector('small');


//Event Handler
form.addEventListener('submit',function(e){
    e.preventDefault();
    checkInput();
});
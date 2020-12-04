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

//Functions

function checkInput(){
    const usernameValue = username.value.trim();
    const password1Value = password1.value.trim();
    if(usernameValue === ''){
        showError(username,"Username can not be blank");
    }
    else{
        showSuccess(username);
    }

    if(password1Value === ''){
        showError(password1,"Password can not be blank");
    }
    else{
        showSuccess(password1);
    }
}
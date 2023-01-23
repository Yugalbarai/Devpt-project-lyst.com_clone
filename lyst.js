// catch the buttons
let signUp = document.querySelector('#nav>button:nth-child(3)');
let logIn = document.querySelector('#nav>button:nth-child(4)');

// catch the forms
let logInForm = document.querySelector('#login')
let signUpForm = document.querySelector('#signup')

// add event to the signup button
signUp.addEventListener('click',function(){
    // syntax to change style property is elementname.style.propertyname = value;
    logInForm.style.display = 'none';
    signUpForm.style.display = 'block';
})

logIn.addEventListener('click',function(){
    logInForm.style.display = 'block';
    signUpForm.style.display = 'none';
})
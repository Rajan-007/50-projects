let form = document.querySelector('#form');
let username = document.querySelector('#username');
let email = document.querySelector('#email');
let password = document.querySelector('#password');
let cpassword = document.querySelector('#cpassword');
let submit = document.querySelector('button');

form.addEventListener('submit',(e)=> {
    if(!Validate()){
        e.preventDefault();
    }
})

function Validate(){
    let usernameVal = username.value.trim()
    let emailVal = email.value.trim()
    let passwordVal = password.value.trim()
    let cpasswordVal = cpassword.value.trim()

    if(usernameVal == ''){
        success = false
        setError(username,"username is required")
    }
    else{
        setsuccess(username)
    }
    if(emailVal == ''){
        setError(email,"email is required")
    }
    if(passwordVal == ''){
        setError(password,"password is required")
    }
    if(cpasswordVal == ''){
        setError(cpassword,"confirm password is required")
    }

}

function setError(element,message){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');

    errorElement.innerText = message;
    inputgroup.classList.add('error')
    inputgroup.classList.remove('success')
    
}

function setsuccess(element){
    const inputgroup = element.parentElement;
    const errorElement = inputgroup.querySelector('.error');

    errorElement.innerText = " ";
    inputgroup.classList.add('success')
    inputgroup.classList.remove('error')
    
}


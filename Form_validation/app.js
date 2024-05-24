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
    let success = true;

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
    else if(!validateEmail(emailVal)){
        success = false
        setError(email,"email is required in correct format")
    }
    else{
        setsuccess(email)
    }
    if(passwordVal == ''){
        setError(password,"password is required")
    }
    else if (passwordVal.length > 8){
        success = false
        setError(password,"password should be minimum of 8 characters ")

    }
    else{
        setsuccess(password)
    }
    if(cpasswordVal == ''){
        setError(cpassword,"confirm password is required")
    }
    else if (!cpassword == password){
        success = false;
        setError(cpassword, "password doesn't match")
    }
    else{
        setsuccess(cpassword)
    }

    return success

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

const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

const username= document.getElementById("username")
const password= document.getElementById("password")
const email= document.getElementById("email")
const confirmPassword= document.getElementById("confirm-password-error")
const errorMessage= document.getElementById("p")
const form=document.getElementById("validations-form")


form.addEventListener("submit", function(e){
    e.preventDefault()
    checkInputs()
})

function checkInputs(){
    let validity = true;
    if(username.value.trim() === ""){
        setErrorFor(username, "Username cannot be blank")
        validity = false;
    }
    else{
        setSuccessFor(username)
    }
    if(email.value.trim() === ""){
        setErrorFor(email, "Email cannot be blank")
        validity = false;
    }
    else if(!isEmail(email.value)){
        setErrorFor(email, "Email is not valid")
        validity = false;
    }
    else{
        setSuccessFor(email)
    }

    if(password.value.trim() === ""){
        setErrorFor(password, "Password cannot be blank")
        validity = false;
    }else if(password.value.trim().length<6){
        setErrorFor(password, "Password must be at least 6 characters")
        validity = false;
    }else{
        setSuccessFor(password)
    }

    if(confirmPassword.value.trim() === ""){
        setErrorFor(confirmPassword, "Password cannot be blank")
        validity =false;
    }else if(confirmPassword.value.trim() !== password.value.trim()){
        setErrorFor(confirmPassword, "Passwords do not match")
        validity = false;
    }else{
        setSuccessFor(confirmPassword)
    }

    if(validity){
        form.submit()
    }
};

function setErrorFor(input, message){
const inputSection = input.parentElement;
const errorMessage = inputSection.querySelector('.error-message');
errorMessage.innerText = message;
}

function setSuccessFor(input){
    const inputSection = input.parentElement;
    const errorMessage = inputSection.querySelector('.error-message');
    errorMessage.innerText = "";
}

function isEmail(email){
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
}
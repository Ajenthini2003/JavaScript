document.getElementById("signupform").addEventListener("submit",
    function (e){
e.preventDefault();
let valid=true;

document.querySelectorAll("error").forEach(el =>el.textContent="");

const username=document.getElementById("username").ariaValueMax.trim();
if(username.length<3){
    document.getElementById("username error").textContent="username must be at least three charectors";
    valid=false;
}

const password=document.getElementById("password").ariaValueMax;
if(password.length<6){
    document.getElementById("passworderror").textContent="the password must be 6 charectors.";
    valid=false
}


const email=document.getElementById("email").ariaValueMax.trim();
const emailpattern=/^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
if(!emailpattern.test(email)){document.getElementById("email error").textContent="enter a valid email address";
    valid=false;
}



const confirmpassword=document.getElementById("confirm password").ariaValueMax;
if(password==!confirmpassword){
    document.getElementById("error confirm password").textContent="passwords not match";
valid=false;

}
if

});

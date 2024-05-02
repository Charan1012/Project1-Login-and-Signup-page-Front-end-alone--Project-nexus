const formOpenBtn = document.querySelector("#form-open"),
home = document.querySelector(".home"),
formContainer = document.querySelector(".form_container"),
formCloseBtn = document.querySelector(".form_close"),
signUpBtn = document.querySelector("#signup"),
loginBtn = document.querySelector("#login"),
pwShow = document.querySelector(".pw_hide");


formOpenBtn.addEventListener("click",()=> home.classList.add("show"));
formCloseBtn.addEventListener("click",()=> home.classList.remove("show"));

// pwShow.forEach((icon)=> {
//     icon.addEventListener("click" , () => {
//         let getPwInput = icon.parentElement.querySelector("input");
//     })

// })


 signUpBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.add("active");
 });

loginBtn.addEventListener("click",(e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
 });


 document.getElementById("loginButton").addEventListener("click", function(event) {
   event.preventDefault(); 

  
   var email = document.querySelector(".login_form input[type='email']").value;
   var password = document.querySelector(".login_form input[type='password']").value;

   if (email.trim() === "" || password.trim() === "") {
       alert("Please fill in all fields.");
       return;
   }

   window.location.href = "home.html";
});
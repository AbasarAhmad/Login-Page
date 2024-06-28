let heading = document.querySelector('.heading'); // load heading
let underline = document.querySelector('.underline'); // load underline
let namefield = document.querySelector('.container3'); // load name input field
let email = document.querySelector('.email'); // load email input field
let password = document.querySelector('.password'); // load password input field
let signUpBtn = document.querySelector('.btn'); // Load Singup btn
let signInBtn = document.querySelector(".btn2");// load signIn button
let textt = document.querySelector(".textt");
console.log(textt);

// I am clicking on Sign in button while now my page open in Sign up button
signInBtn.addEventListener('click', () =>
{
     // namefield.style.display = "none"; // signIn pe click karne ke baad namefield ko remove kr diya

      //        OR Same Work
      namefield.style.maxHeight = "0";
      heading.innerHTML = "Sign In"; // sign in pe click karne ke baad title Sign In likh jaye
      signUpBtn.classList.add("disable"); // disable sign up button
            signInBtn.classList.add("addC"); // disable sign up button
            
            // For move the underline
      underline.style.transform = 'translateX(35px)';
      textt.innerHTML = "Forget Password";
});


// I am clicking on Sign up button while now my page open in Sign in button
signUpBtn.addEventListener('click', () => {
      
      namefield.style.maxHeight = "60px";
      heading.innerHTML = "Sign Up";
      signUpBtn.classList.remove("disable");
      signInBtn.classList.remove("addC");
      underline.style.transform = "translateX(0px)";
      textt.innerHTML = "Password Suggestions";

});
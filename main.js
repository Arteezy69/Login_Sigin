document.addEventListener("DOMContentLoaded",()=>{
    
    const loginForm=document.querySelector("#loginform");
    const signupForm=document.querySelector("#signupform");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
       signupForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        signupForm.classList.add("form--hidden");
    });


    

    


});





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





function validate(){

    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    

    if(username=="admin" && password=="pass")
    {
        alert("Login Successfully");
        
        
       
    }

    else{
        alert("Login Failed");
    }
}
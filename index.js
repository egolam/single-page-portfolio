const warningIcon = document.querySelector(".warning-icon");
const warningText = document.querySelector(".warning");

const form = document.querySelector(".form-flex");


const submitButton = document.querySelector(".form-submit");

const nameInput = document.getElementById("givenname");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");

const validRegex = /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,}$/;




submitButton.addEventListener("click" , (e) => {

    let nameInputValue = nameInput.value;
    let emailInputValue = emailInput.value;

    if(!emailInputValue.match(validRegex)){
        warningIcon.style.display = "block"
        warningText.style.display = "block"
        emailInput.style.borderBottom = "1px solid #FF6F5B";
        e.preventDefault();
    } else {
        emailInput.style.borderBottom = "1px solid green";
    };
    
    if(nameInputValue === ""){
        nameInput.style.borderBottom = "1px solid #FF6F5B";
        e.preventDefault();
        
    } else{
        nameInput.style.borderBottom = "1px solid green";
    };

    if(messageInput.value === ""){
        messageInput.style.borderBottom = "1px solid #FF6F5B";
        e.preventDefault();
    } else{
        messageInput.style.borderBottom = "1px solid green";
    }



    

});
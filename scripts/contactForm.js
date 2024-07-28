let name1 = document.getElementById("Name");
let email = document.getElementById("email");
let msg = document.getElementById("message");

let submit = document.querySelector(".submit-form");

submit.addEventListener("click", ()=>{
    if(name1.value == "" || email.value == "" || msg.value == ""){
        alert("Please fill all the fields of contact form...");
    }

    else{
        name1.value = email.value = msg.value = "";
        alert("Form submitted successfully...");
    }
})
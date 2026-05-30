const fullName = document.getElementById("fullName");
const email =  document.getElementById("email");
const password = document.getElementById("password");
const viewPassword = document.getElementById("viewPassword")
const terms = document.getElementById("terms");
const continueBtn = document.getElementById("continueBtn");
const form = document.getElementById("signupForm");

continueBtn.disabled = true;

 function validateForm() {

    if (
      fullName.value.trim() !== "" &&
      email.value.trim() !== "" &&
      password.value.trim() !== "" &&
      confirmPassword.value.trim() !== "" &&
      terms.checked
    ) {

      continueBtn.disabled = false;

      continueBtn.style.opacity = "1";
      continueBtn.style.cursor = "pointer";

    } else {

      continueBtn.disabled = true;

      continueBtn.style.opacity = "0.5";
      continueBtn.style.cursor = "not-allowed";
    }

  }


  // INPUTS

  fullName.addEventListener("input", validateForm);
  email.addEventListener("input", validateForm);
  password.addEventListener("input", validateForm);
  confirmPassword.addEventListener("input", validateForm);
  terms.addEventListener("change", validateForm);


  // SUBMIT FORM

  form.addEventListener("submit", function(e) {

    e.preventDefault();

    // CHECK PASSWORD MATCH

    if (password.value !== confirmPassword.value) {

      alert("Passwords do not match!");

      return;
    }

    viewPassword.addEventListener("click", function(){
        if(passwordinput.type === "password"){
            passwordinput.type = "text";
        } else{
            passwordinput.type = "password";
        }
    });

    // SUCCESS

    alert("Account Created Successfully!");

    
    // RESET FORM

    form.reset();

    continueBtn.disabled = true;
    continueBtn.style.opacity = "0.5";


    // OR REDIRECT TO ANOTHER PAGE

    // window.location.href = "login.html";

  });
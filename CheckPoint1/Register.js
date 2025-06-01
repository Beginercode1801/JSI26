const inputUserName = document.querySelector(".inp-name");
const inputUserEmail = document.querySelector(".inp-email");
const inputUserPassword = document.querySelector(".inp-password");
const inputUserPasswordConfirm = document.querySelector(".inp-cf-password");
const registerForm = document.querySelector("#register-form");

function handleRegister(e) {
    e.preventDefault();

    let Name = inputUserName.value;
    let email = inputUserEmail.value;
    let password = inputUserPassword.value;
    let PasswordConfirm = inputUserPasswordConfirm.value;

    // if (password != PasswordConfirm){
    //     alert("Passwords do not match");
    // }

    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            var user = userCredential.user;
            alert("Password");
            window.location.href = "./Register.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`Error: ${error.message}`);
        });
}

registerForm.addEventListener("submit", handleRegister);
const inpEmail = document.querySelector("inp-Email");
const inpPassword = document.querySelector("inp-Password");
const LoginForm = document.querySelector("#login-Form");

function handleLogin(e) {
    e.preventDefault();

    let eMail = inp-eMail.value;
    let password = inp-password.value;

    firebase.auth().signInWithEmailAndPassword(eMail, password)
        .then((userCredential) => {
            var user = userCredential.user;
            alert("Login succesfully")
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(`Error: ${error.message}`)
        });
}

LoginForm.addEventListener("submit", handleLogin);

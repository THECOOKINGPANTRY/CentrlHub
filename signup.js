/* =========================================================
   CENTRLHUB — SIGN UP
   ========================================================= */

const signupForm = document.getElementById("signupForm");

const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

const passwordToggle = document.getElementById("passwordToggle");
const confirmPasswordToggle = document.getElementById("confirmPasswordToggle");

const passwordError = document.getElementById("passwordError");


/* =========================================================
   PASSWORD VISIBILITY
   ========================================================= */

function setupPasswordToggle(button, input) {

    button.addEventListener("click", () => {

        const isPassword = input.type === "password";

        input.type = isPassword ? "text" : "password";

        button.textContent = isPassword ? "Hide" : "Show";

        button.setAttribute(
            "aria-label",
            isPassword ? "Hide password" : "Show password"
        );

    });

}

setupPasswordToggle(passwordToggle, password);
setupPasswordToggle(confirmPasswordToggle, confirmPassword);


/* =========================================================
   PASSWORD VALIDATION
   ========================================================= */

function checkPasswords() {

    if (
        confirmPassword.value.length > 0 &&
        password.value !== confirmPassword.value
    ) {

        passwordError.classList.add("show");

        confirmPassword.setCustomValidity(
            "Passwords do not match."
        );

        return false;

    }

    passwordError.classList.remove("show");

    confirmPassword.setCustomValidity("");

    return true;
}


password.addEventListener("input", checkPasswords);
confirmPassword.addEventListener("input", checkPasswords);


/* =========================================================
   FORM SUBMISSION
   ========================================================= */

signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!checkPasswords()) {
        confirmPassword.focus();
        return;
    }

    const name = document
        .getElementById("name")
        .value
        .trim();

    const email = document
        .getElementById("email")
        .value
        .trim();

    const account = {
        name: name,
        email: email
    };


    /* Save temporary signup information */

    localStorage.setItem(
        "centrlhubSignup",
        JSON.stringify(account)
    );


    /* Move to business setup */

    window.location.href = "setup.html";

});

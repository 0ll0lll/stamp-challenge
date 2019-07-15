let passwordInput = document.getElementById("password")
let passwordIcon = document.getElementById("pass-icon")

let togglePassword = () => {
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    passwordIcon.src = "./assets/images/password-icon-show.png"
  } else {
    passwordInput.type = "password";
    passwordIcon.src = "./assets/images/password-icon.png"
  }
}

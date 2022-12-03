// xác thực phần email
let email = document.querySelector("#email")
let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let alertEmail = document.querySelector("#alertEmail");
email.addEventListener('input', checkEmail)
function checkEmail() {
    if (email.value.match(mailformat)) {
        alertEmail.innerHTML = "Valid Email";
        alertEmail.style.color = "green"
        return true;
    }
    else {
        alertEmail.innerHTML = "Invalid email address"
        alertEmail.style.color = "red"
        return false;
    }
}
// con mắt ở phần nhập mật khẩu 
const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function () {
    // toggle the type attribute
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    // toggle the icon
    this.classList.toggle("bi-eye");
});

const togglePassword1 = document.querySelector("#togglePassword1");
const password1 = document.querySelector("#password1");
togglePassword1.addEventListener("click", function () {
    const type = password1.getAttribute("type") === "password" ? "text" : "password";
    password1.setAttribute("type", type);
    this.classList.toggle("bi-eye");
});

function checkPassword() {
    if (password.value == password1.value) {
        console.log("Mật khẩu chính xác !");
        return true;
    }
    else {
        alert("Password must be same!");
        return false;
    }
}

password.addEventListener('input', checkPass)
function checkPass() {
    let decimal = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?!.*\s).{8,15}$/;
    let alert0 = document.getElementById("alert0");
    if (password.value.match(decimal)) {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'green';
        return true;
    }
    else {
        document.getElementById("alert0").innerHTML = "*Require a-z, A-Z, 0-9, and length 8-15";
        alert0.style.color = 'red';
        return false;
    }
}

password1.addEventListener('input', checkpass2)
function checkpass2() {
    let alert1 = document.getElementById("alert1");
    if (password.value == password1.value) {
        alert1.innerHTML = "Password  match"
        alert1.style.color = "green";
        return true;
    }
    else {
        alert1.innerHTML = "Password do NOT match"
        alert1.style.color = "red";
        return false;
    }
}

function totalcheck() {
    if (checkPass() == true && checkpass2() == true && checkEmail() == true) {
        console.log("check oki");
        return true
    }
    else {
        return false
    }
}

let singup = document.querySelector("#submit")

let arr = []
singup.addEventListener('click', function () {
    let Account = function (id, pass) {
        this.id = id
        this.pass = pass
    }
    let account = new Account(email.value, password.value)
    arr.push(account)
    console.log(arr);

    if (email.value != "" && password.value != "" && totalcheck() == true) {
        localStorage.setItem('key', JSON.stringify(arr))
    }
})








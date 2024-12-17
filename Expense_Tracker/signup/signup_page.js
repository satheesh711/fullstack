let usererror = document.getElementById("Username_error")
let password_error = document.getElementById("password_error");
let mobile_error = document.getElementById("mobile_error")
let btn = document.getElementById('show');
let field_error_check = false 
let username_error_check=false


function mobile_email_check_func() {
    let mobile_check = /^[0-9]{10}$/
    let email_check = /^[a-zA-Z0-9.]+@[a-z]+\.[a-z]{2,}$/
    let mobile_email = document.getElementById("mobile").value.trim()
    if (!mobile_check.test(mobile_email) && !email_check.test(mobile_email)) {
        let mobile_length = mobile_email.length;
        document.getElementById('mobile').style.border = '1px solid red'
        if (!mobile_length) {
            mobile_error.textContent = "This field is required."
        }
        else if (mobile_length <= 9 && new RegExp(`^[0-9]{${mobile_length}}$`).test(mobile_email)) {
            mobile_error.textContent = "Enter valid mobile number"
        }
        else {
            mobile_error.textContent = "Enter valid email addres"
        }
        return false
    }
    else {
        document.getElementById('mobile').style.border = '1px solid rgb(171, 169, 169)'
        mobile_error.textContent = ""
        return true
    }
}

function Username_func() {
    let username = document.getElementById('Username').value.trim()
    let userdata = JSON.parse(localStorage.getItem("persons")) || []
    let username_check = /[a-zA-Z0-9._]{3,}$/
    if (!username.length) {
        usererror.textContent = "This field is required."
        document.getElementById('Username').style.border = '1px solid red'
    } else if (!username_check.test(username)) {
        document.getElementById('Username').style.border = '1px solid red'
        usererror.textContent = "Create a username at least 3 characters long and only alphabets and numbers and special characters(. and _ )"
        return false
    } else if (userdata.find(x => x.username == username)) {
        usererror.textContent = "This Username already Taken"
        document.getElementById('Username').style.border = '1px solid red'
        return false
    }
    else {
        document.getElementById('Username').style.border = '1px solid rgb(171, 169, 169)'
        usererror.textContent = ""
        return true
    }

}

function password_check_func() {
    let password_check = /^(?=(.*[a-z]){1,})(?=(.*[A-Z]){1,})(?=(.*[0-9]){1,})(?=(.*[@!#$%^&*()_+=><,.?/-]){1,})[a-zA-z0-9@!#$%^&*()_+=><,.?/-]{8,}$/
    let password = document.getElementById('password').value.trim()
    if (!password.length) {
        password_error.textContent = "This field is required."
        document.getElementById('password_con').style.border = '1px solid red'
    }
    else if (!password_check.test(password)) {
        document.getElementById('password_con').style.border = '1px solid red'
        password_error.textContent = "Create a password at least 8 characters long and minimum 1 Capital latter,1 small latter,1 special character, 1 Number "
        return false
    }
    else {
        document.getElementById('password_con').style.border = '1px solid rgb(171, 169, 169)'
        password_error.textContent = ""
        return true
    }

}

document.getElementById('Username').addEventListener('keyup', () => {
    if (field_error_check || username_error_check) {
        Username_func()
    }
    else {
        let username = document.getElementById('Username').value.trim()
        let userdata = JSON.parse(localStorage.getItem("persons")) || []
        if (userdata.find(x => x.username == username)) {
            usererror.textContent = "This Username already Taken"
            document.getElementById('Username').style.border = '1px solid red'
            username_error_check=true
        }
        
    }
})

document.getElementById('mobile').addEventListener("keyup", () => {
    if (field_error_check) {
        mobile_email_check_func()
    }
})

document.getElementById("password").addEventListener("keyup", () => {
    password_check_func()
    if (document.getElementById("password").value.length == 0) {
        document.getElementById('show').style.display = 'none'
    }
    else {
        btn.style.display = 'block'
    }

})

btn.addEventListener('click', () => {
    let inp = document.getElementById('password')
    if (inp.type === 'password') {
        inp.type = "text";
        btn.textContent = 'Hide'
    }
    else {
        inp.type = 'password'
        btn.textContent = "Show"
    }
})


document.getElementById('signup_form').addEventListener('submit', (event) => {
    event.preventDefault()
    let signup = true
    field_error_check = true
    if (!mobile_email_check_func()) {
        signup = false
    }
    if (!password_check_func()) {
        signup = false
    }
    if (!Username_func()) {
        signup = false
    }
    if (signup) {
        let userdata = JSON.parse(localStorage.getItem("persons")) || []
        if (userdata.find(x => x.email == document.getElementById("mobile").value)) {
            let existed = document.getElementById("existed")
            let mobile_email = document.getElementById("mobile").value.trim()
            let mobile_length = mobile_email.length
            if (mobile_length == 10 && new RegExp(`^[0-9]{${mobile_length}}$`).test(mobile_email)) {
                existed.textContent = "This mobile number have already a account"
            }
            else {
                existed.textContent = "This Email have already a account"
            }
            existed.style.color = 'red'
            document.getElementById('password').value = ""
            document.getElementById("Username").value = ""
        }
        else {
            userdata.push({ email: document.getElementById("mobile").value, username: document.getElementById('Username').value, password: document.getElementById('password').value })
            localStorage.setItem("persons", JSON.stringify(userdata))
            document.getElementById("Username").value = ""
            document.getElementById("mobile").value = ""
            document.getElementById('password').value = ""
            window.location.href = "../login/login_page.html"
        }
    }
})
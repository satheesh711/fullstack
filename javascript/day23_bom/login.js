let signemail = localStorage.getItem('email')
let signpswd = localStorage.getItem('password')
let logemail = document.getElementById('logemail')
let logpswd = document.getElementById('logpswd')
let logbtn = document.getElementById('login')
logbtn.addEventListener('click',()=>{
    if(signemail == logemail.value && signpswd == logpswd.value)
    {
        alert("log in successful")
        window.open('home.html')
    }
    else
    {
        alert("enter correct credentials")
    }
})
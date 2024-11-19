let signin = document.getElementById('signup')
let useremail=document.getElementById('email')
let userpassword  = document.getElementById('pswd')

signin.addEventListener('click',(event)=>
{
  
    event.preventDefault()
    if(useremail.checkValidity() && userpassword.checkValidity()){
    localStorage.setItem('email',useremail.value)
    localStorage.setItem('password',userpassword.value)
    alert('successful')
    window.location.href="login.html"
    useremail.value=" "
    }
    else
    {
        event.preventDefault()
        alert('enter required fileds')
    }
})

// let logbtn = document.getElementById('login')
// logbtn.addEventListener('click',()=>{
//     let signemail = localStorage.getItem('email')
//     let signpswd = localStorage.getItem('password')
//     let logemail = document.getElementById('logemail')
//     let logpswd = document.getElementById('logpswd')
//     if(signemail == logemail.value && signpswd == logpswd)
//     {
//         alert("log in successful")
//         window.open('home.html')
//     }
//     else
//     {
//         alert("enter correct credentials")
//     }
// })
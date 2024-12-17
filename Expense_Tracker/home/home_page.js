const username = sessionStorage.getItem("username") || [];
if(!username.length)
{
   gotoLogin()
}
let message = document.getElementById("message")
message.textContent = `wellcome, ${username}`

let logInusername = LogedIngetItem()
let logout = document.getElementById("Logout")

if (username.length) {
   if (!(logInusername.includes(username))) {
      logInusername.push(username)
      LogedInsetItem(logInusername)
   }
}

window.addEventListener('beforeunload', () => {
   LogedInsetItem(LogedInuserexclude(LogedIngetItem()))
}
)

logout.addEventListener('click', () => {
   LogedInsetItem(LogedInuserexclude(LogedIngetItem()))
   gotoLogin()
})

function LogedInsetItem(modfieddata)
{
   localStorage.setItem("LogedIn", JSON.stringify(modfieddata));
}

function LogedIngetItem()
{
   return (JSON.parse(localStorage.getItem("LogedIn")) || [])
}

function LogedInuserexclude(usersdata)
{
   return usersdata.filter(x => x != username)
}

function LogedInUser(logedinusersdata)
{
   return logedinusersdata.filter(x => x == username)
}

function gotoLogin()
{
   location.href = '../login/login_page.html'
}


let a=document.getElementById('eye')
let inp = document.getElementById('pswd')
a.onclick=function ()
{
  if(a.className === 'fa-solid fa-eye-slash')
  {
    a.className = 'fa-solid fa-eye'
    inp.type='text'
  }
  else
  {
    a.className = "fa-solid fa-eye-slash"
    inp.type = 'password'
  }
}
let cou=document.getElementById("cou")
let inc=document.getElementById("inc")
let dec=document.getElementById("dec")
let res=document.getElementById("res")
let st=document.getElementById("st")
let coun=0
inc.onclick=function ()
{
    cou.textContent=++coun
}
dec.onclick=function ()
{
    if(coun>0)
    cou.textContent=--coun
}
res.onclick = function ()
{
    coun=0
    cou.textContent=coun
}
st.onclick=function ()
{
  let timer=setInterval(() => {
    if(coun>0)
    cou.textContent=--coun
    if(coun<=0)
        {
            clearInterval(timer)
        }
  }, 1000);

}

 

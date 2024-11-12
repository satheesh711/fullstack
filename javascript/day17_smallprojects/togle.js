let i = document.getElementById('icon')
i.onclick=function ()
{
    if(i.className === "fa-solid fa-sun")
    {
        i.className ="fa-solid fa-moon"
        document.body.style.backgroundColor='black'
        document.body.style.color='white'
    }
    else
    {
        i.className ="fa-solid fa-sun"
        document.body.style.backgroundColor='white'
        document.body.style.color='black'
    }
}
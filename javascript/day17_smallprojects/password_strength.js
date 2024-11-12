let i= document.getElementById('pswd')
let m=document.querySelector('p')
function check(x)
{
    if(i.value.length <=3)
    {
        m.textContent='week password'
        m.style.color='red'
    }
    else if(i.value.length <=6)
    {
        m.textContent = 'good password'
        m.style.color='yellow'
    }
    else{
        m.textContent = 'Strong password'
        m.style.color = 'green'
    }
}
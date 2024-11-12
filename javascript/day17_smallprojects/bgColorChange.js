
let inp = document.getElementById('bgclr')
let r = document.getElementById('br')
let i=document.querySelector('img')

function colorChange(x)
{
    if ( x.key == 'Enter')
    {
        document.body.style.backgroundColor=inp.value
    }
}
function brchange(x)
{
    if(x.key == 'Enter')
    {
        i.style.borderRadius=r.value+'px'
    }
}
let inp=document.getElementById('inp')
function entering(x)
{
    if(inp.textContent != '0')
    inp.textContent+=x
    else
    inp.textContent=x
}
function cl()
{
    inp.textContent=0
}
function bs()
{
    if(inp.textContent.length!=1)
    inp.textContent=inp.textContent.slice(0,inp.textContent.length-1)
    else
    inp.textContent=0
}
function res()
{
    inp.textContent=eval(inp.textContent)
}
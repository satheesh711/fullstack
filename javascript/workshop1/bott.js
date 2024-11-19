let s=document.getElementById('con')
s.style.display='flex'
s.style.gap='18px'
document.body.style.display='flex'
document.body.style.justifyContent='center'
document.body.style.alignItems='center'
document.body.style.height='100vh'
obj={
    0:'red',
    1:'blue',
    2:'yellow',
    3:'green',
    4:'pink',
    5:'violet',
    6:'gray',
    7:'aqua',
    8:'brown',
    9:'coral'
    }
for(let i=0;i<10;i++)
{
    let btn=document.createElement('button')
    s.appendChild(btn)
    btn.textContent="Button "+(i+1)
    // btn.style.backgroundColor='white'
    btn.style.border='none'
    btn.style.padding = "5px 15px"
    btn.style.borderRadius ="8px"
    btn.onclick=function ()
    {
        document.body.style.backgroundColor=obj[i]

    }
    btn.onmouseover=function ()
    {
        btn.style.backgroundColor=obj[i]
        btn.style.transform ="scale(1.2)"

    }
    btn.onmouseleave=function()
    {
        btn.style.backgroundColor='white'
    }
    // btn.addEventListener('click',function ()
    // {
    //     document.body.style.backgroundColor=obj[i]
    // })
    // btn.addEventListener('mouseover',function ()
    // {
    //     btn.style.backgroundColor=obj[i]

    // })
    // btn.addEventListener('mouseleave',function()
    // {
    //     btn.style.backgroundColor='white'
    // })
}
// let bt=document.getElementsByTagName('button')
// for(let j=0;j<10;j++)
// {
    // bt[j].addEventListener('click',function ()
    // {
    //     document.body.style.backgroundColor=obj[j]
    // })
    // bt[j].addEventListener('mouseover',function ()
    // {
    //     bt[j].style.backgroundColor=obj[j]

    // })
    // bt[j].addEventListener('mouseleave',function()
    // {
    //     bt[j].style.backgroundColor='white'
    // })
//     bt[j].onclick=function ()
//     {
//         document.body.style.backgroundColor=obj[j]
//     }
//     bt[j].onmouseover=function ()
//     {
//         bt[j].style.backgroundColor=obj[j]

//     }
//     bt[j].onmouseleave=function()
//     {
//         bt[j].style.backgroundColor='white'
//     }
// }
let inp=document.getElementById('inp')
let btn=document.getElementById('btn')
let con=document.getElementById("con")
let coun=0
btn.onclick=function ()
{
    if(inp.value!=""){
        if(coun==1)
        {
            coun=0
            let cls= document.getElementsByClassName('dis')
            cls[0].remove()
        }
    let li=document.createElement('div')
    li.className='cop'
    li.innerHTML=inp.value.trim()+`    <button class="edit">edit</button> <button class="del">delete</button>`
    con.appendChild(li)
    inp.value=""
    let edit=li.querySelector('.edit')
    let del=li.querySelector('.del')
    edit.onclick=function ()
    {
        inp.value=li.firstChild.textContent.trim()
        coun=1
        var c=li
        li.style.display='none'
        li.className='dis'
    }
    del.onclick=function()
    {
        li.remove()
    }
}
else if(coun==1)
{
   let cls= document.getElementsByClassName('dis')
    cls[cls.length-1].style.display='block'
    cls.className=''
    coun=0
}
}


let frst = document.getElementById('frst')
let c1=document.createElement('p')
let c2=document.createElement('h1')

frst.style.backgroundColor='aqua'
c1.textContent='this is p1'
c2.textContent='this is h1'

frst.append(c1,c2)
// frst.removeChild(c1)
// frst.removeChild() //it remove frst element 

let c3=document.createElement('p')
c3.textContent='this is p2'
frst.replaceChild(c3,c1)

// let cn=frst.cloneNode(true)
// document.body.appendChild(cn)

frst.classList.add('one')
frst.classList.add('two')
frst.classList.remove('one')
console.log(frst)


c2.addEventListener('click',function (){
    alert('h1 is clicked')
})

let p=document.querySelector('p')
console.log(p)
console.log(p.parentElement)
console.log(p.parentNode)
console.log(frst.children)
console.log(frst.firstChild)
console.log(frst.firstElementChild)
console.log(frst.lastChild)
console.log(frst.lastElementChild)



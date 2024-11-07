// 1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50% 
let a=document.getElementById("btn")
let b=document.getElementsByTagName("p")
console.log(b)
a.onclick=function (){
    b[0].style.fontSize="60px"
    b[0].style.backgroundColor = "red"
    b[0].style.borderRadius="50%"
}
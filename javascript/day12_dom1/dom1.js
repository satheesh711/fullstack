// 1. click a button and show the content with 60px fontSize and bgColor red and bordeRadius 50% 
let a=document.getElementById("btn")
let d=document.getElementsByTagName('div')
a.onclick=function (){
    d[0].innerHTML=`
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos, architecto.</p>
    <img src="https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" alt="" width="250px" height="250px"></img>
    `
    d[0].style.fontSize='60px'
    d[0].style.backgroundColor='red'
    d[0].getElementsByTagName("img")[0].style.borderRadius="50%"
}

// 2. click the button and display three images on clicking the button ft img should be of border radius 30px , second img should be border radius 100px , third img should be of borderradius 50%

let x=document.getElementsByClassName("imges")
let y=document.getElementsByTagName('div')
x[0].onclick=function (){
    y[1].innerHTML=`
    <img src="https://images.unsplash.com/photo-1503803548695-c2a7b4a5b875?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3"></img>
    <img src="https://png.pngtree.com/thumb_back/fh260/background/20230408/pngtree-rainbow-curves-abstract-colorful-background-image_2164067.jpg"></img>
    <img src="https://i0.wp.com/picjumbo.com/wp-content/uploads/beautiful-autumn-nature-with-a-river-in-the-middle-of-the-forest-free-image.jpeg?w=600&quality=80"></img>
    `
    z=y[1].getElementsByTagName('img')
    z[0].style.width="300px"
    z[0].style.height='300px'
    z[0].style.borderRadius='30px'
    z[1].style.borderRadius='100px'
    z[1].style.width="300px"
    z[1].style.height='300px'
    z[2].style.borderRadius='50%'
    z[2].style.width="300px"
    z[2].style.height='300px'
    
}
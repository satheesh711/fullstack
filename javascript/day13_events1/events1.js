// create 4 cards, 2 crads using innerHtmk and 2 cards using createElement()
let carditem1 = document.getElementById("card1")
let carditem2 = document.getElementById("card2")
let carditem3 = document.createElement('div')
let carditem4 = document.createElement('div')
carditem1.innerHTML = `
<img src="https://lh6.googleusercontent.com/P72QA9sgfx-gr4Hr6p6ITvKQc9VKNZRAN7R0Hv4z5lQhLVrp0KGDZ1M0HWfkMmRlX9oORXUZP24euOeMggMDzDXQF2-HXBm2ax7PP5qvU3BOWJz97I9f-xjtzgLxih91NtydMHVxy18-h_gSt0dC4Q0" >
<h3>Biryani</h3>
<p>Price:450</p><br><br>
`
carditem1.style.width="300px"
carditem1.style.backgroundColor='lightblue'
carditem1.style.border = "1px black solid"


carditem2.innerHTML = `
<img src="https://img.freepik.com/premium-photo/barger-food-vintage-view-chicken-barger-plate-closeup-fresh-tasty-burger-dark-background_1012793-89.jpg" >
<h3>Barger</h3>
<p>Price:220</p><br><br>
`
carditem2.style.width="300px"
carditem2.style.backgroundColor='lightblue'
carditem2.style.border = "1px black solid"


carditem3.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMB-0Wp31tYn42jRSN4M3T6O0NuXsqUEARJw&s" >
<h3>French vanilla ice Cream</h3>
<p>Price:50</p><br><br>
`
carditem3.style.width="300px"
carditem3.style.backgroundColor='lightblue'
carditem3.style.border = "1px black solid"
document.body.append(carditem3)

carditem4.innerHTML = `
<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXiLIoNiSw4bdvbJWxWbJW8yjZY_bSw-cfQA&s" >
<h3>Strawberry ice Cream</h3>
<p>Price:80</p><br><br>
`
carditem4.style.width="300px"
carditem4.style.backgroundColor='lightblue'
carditem4.style.border = "1px black solid"
document.body.append(carditem4)


let imgs = document.getElementsByTagName("img")
for(let i=0;i<imgs.length;i++)
{
    imgs[i].style.width='100%'
    imgs[i].style.height='80%'
}

document.body.style.display='flex'
document.body.style.flexWrap="wrap"
document.body.style.justifyContent='center'
document.body.style.gap='10px'
document.body.style.textAlign='center'
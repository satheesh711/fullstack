// let a=document.getElementById('eye')
// let inp = document.getElementById('pswd')
// let varia=document.getElementById('matter')
// a.onclick=function ()
// {
//   if(a.className === 'fa-solid fa-eye-slash')
//   {
//     a.className = 'fa-solid fa-eye'
//     inp.type='text'
//   }
//   else
//   {
//     a.className = "fa-solid fa-eye-slash"
//     inp.type = 'password'
//   }
// }
// let cap=0
// let low=0
// let numb=0
// let spc=0
// varia.style.color='red'
// let last = ''
// function check(x)
// {
//   console.log(x)
//   if(x.key != 'Enter'){
//     last=x.key
//   if((x.key >='A' && x.key <= 'Z') && x.key != ' ')
//   {
//     cap=cap+1;
//     document.getElementById('cap').style.color='green'
//   }
//   else if((x.key >= 'a' && x.key <= 'z') && x.key != ' ')
//   {
//     low=low+1
//     document.getElementById('low').style.color='green'
//   }
//   else if((x.key >= '0' && x.key <= '9' ) && x.key != ' ')
//   {
//     numb=numb+1
//     document.getElementById('numb').style.color='green'
//   }
//   else
//   {
//     spc=spc+1
//     document.getElementById('spc').style.color='green'
//   }
//   if(pswd.value.length >= 7)
//   {
//     document.getElementById('len').style.color='green'
//   }
// }
// }
// function backsp(x)
// {
//   if(x.key === 'Backspace')
//   {
//     if((last >='A' && last <= 'Z') && last != ' ')
//       {
//         cap=cap-1;
//         console.log(cap)
//         if(cap <= 0)
//         {
//           cap=0
//           document.getElementById('cap').style.color='red'
//         }
//       }
//       else if((last >= 'a' && last <= 'z') && last != ' ')
//       {
//         low=low-1
//         if(low <= 0)
//           {
//             low=0
//             document.getElementById('low').style.color='red'
//           }
//       }
//       else if((last >= '0' && last <= '9' ) && last != ' ')
//       {
//         numb=numb-1
//         if(numb <= 0)
//           {
//             numb=0
//             document.getElementById('numb').style.color='red'
//           }
//       }
//       else
//       {
//         spc=spc-1
//         if(spc <= 0)
//           {
//             spc=0
//             document.getElementById('spc').style.color='red'
//           }
//       }
//       last=pswd.value[pswd.value.length-1]
//       if(pswd.value.length <=8)
//         {
//           document.getElementById('len').style.color='red'
//         }
//   }
// }



// let btn = document.getElementById('btn')
// btn.addEventListener('mouseover',()=>{
//   document.body.style.width='50vw'
//   document.body.style.height='50vh'
//   document.body.style.backgroundColor='red'
// })


let btn = document.getElementById('bt')
btn.addEventListener('mouseover',()=>{
  let img1=document.createElement('img')
  img1.src='https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg'
  btn.appendChild(img1)
  img1.style.width='200px'
  img1.style.height='200px'
  let ho=document.createElement('h1')
  btn.appendChild(ho)
  ho.textContent='this is h1'
  let ac=document.createElement('a')
  ac.textContent='achortag'
  document.body.append(ac)
  ac.addEventListener('click',()=>{
    document.body.style.backgroundColor='red'
  })
})
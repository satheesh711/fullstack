let t=document.getElementById('top')
let mid=document.getElementById('mid')
let low=document.getElementById('btm')

// low.addEventListener('click', function ()
// {
//     low.style.backgroundColor='red'
//     console.log('red')

// })
// mid.addEventListener('click', function ()
// {
//     mid.style.backgroundColor='green'
//     console.log('green')
// })
// t.addEventListener('click' , function ()
// {
//     t.style.backgroundColor='yellow'
//     console.log('yellow')
// })


// low.addEventListener('click', function (event)
// {
//     event.stopPropagation()
//     low.style.backgroundColor='red'
//     console.log('red')
// })
// mid.addEventListener('click',function (event)
// {
//     event.stopPropagation()
//     mid.style.backgroundColor='green'
//     console.log('green')
// })
// t.addEventListener('click', function (event)
// {
//     event.stopPropagation()
//     t.style.backgroundColor='yellow'
//     console.log('yellow')
// })

// low.addEventListener('click', function ()
// {
//     low.style.backgroundColor='red'
//     console.log('red')
// },true)
// mid.addEventListener('click', function ()
// {
//     mid.style.backgroundColor='green'
//     console.log('green')
// },true)
// t.addEventListener('click' , function ()
// {
//     t.style.backgroundColor='yellow'
//     console.log('yellow')
// },true)


// low.addEventListener('click', function (event)
// {
//     event.stopPropagation()
//     low.style.backgroundColor='red'
//     console.log('red')
// },true)
// mid.addEventListener('click', function (event)
// {
//     event.stopPropagation()
//     mid.style.backgroundColor='green'
//     console.log('green')
// },true)
// t.addEventListener('click' , function (event)
// {
//     event.stopPropagation()
//     t.style.backgroundColor='yellow'
//     console.log('yellow')
// },true)

low.addEventListener('click', function ()
{
    low.style.backgroundColor='red'
    console.log('red')
},true)
mid.addEventListener('click', function ()
{
    mid.style.backgroundColor='green'
    console.log('green')
},false)
t.addEventListener('click' , function ()
{
    t.style.backgroundColor='yellow'
    console.log('yellow')
},false)

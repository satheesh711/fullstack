
// Task : write block scope examples, function scope example, global scope examples

// block scope examples

var a=10
{
    var blockvar = 100
    let blocklet =300
    const blockconst = 200
    console.log(blockconst+blocklet+blockvar)//Output:600
}
//console.log(blockconst+blocklet+blockvar)  //here get an error because block variable vanishes after exicution of block except var related variable.
                                                //so we get reference error.



// funtion scope example

var b =20
function example()
{
    var fvar =20
    let flet =30
    const fconst = 50
    console.log(fconst+flet+fvar)//Ouput:100
}
example()
//console.log(fconst+flet+fvar)//error variables vanishes after exicution of function so we ger reference error.



// global scope example

var gvar = 30
let glet =70
const gconst =80
{
    console.log(gvar+glet+gconst)//Output:180 we can access global variable any where in the code
}
function global()
{
    console.log(gvar+glet+gconst)//Output:180 we can access global variable any where in the code
}
global()
console.log(gvar+glet+gconst)//Output:180 we can access global variable any where in the code

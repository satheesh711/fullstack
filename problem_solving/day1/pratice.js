// wap to print -1 to -num without using >=operator

let num1 = +prompt("enter a number")

console.log("printing -1 to -"+num1)
for(i=-1;i!=-(num1+1);i--)
{
    console.log(i)
}


//wap to print -num to -1 without using <= operator


let num2 = +prompt("enter a number")

console.log("printing -"+num2 +" to -1")
for(i=-num2;i!=0;i++)
{
    console.log(i)
}


//wap find sum of even digit in a number

let num3 = prompt("enter a number")

let evensum=0

for(i of num3)
{
    if(i%2==0)
    evensum+=Number(i)
}
console.log("sum of even digit of "+num3+" is "+evensum)


// wap find sum of odd digit in a number

let num4 = prompt("enter a number")

let oddsum=0

for(i of num4)
{
    if(i%2!=0)
    oddsum+=Number(i)
}
console.log("sum of even digit of "+num4+" is "+oddsum)

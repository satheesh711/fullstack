//wap to print even sum is more odd sum is more
let num=prompt("enter a number")
let es=0
let os=0
for (i of num)
{
    if(i%2==0)
    {
        es=es+Number(i)
    }
    else
    {
        os=os+Number(i)
    }
}
if(es>os)
{
    console.log(num+" in even sum is more")
}
else if(os>es)
{
    console.log(num+" in odd sum is more")
}
else
{
    console.log(num+" in even and odd sums are equal")
}


//wap to print even numbers are more or odd numbers are more
let num1=prompt("enter a number")
let en=0
let on=0
for (i of num1)
{
    if(i%2==0)
    {
        en++
    }
    else
    {
        on++
    }
}
if(en>on)
{
    console.log(num1+" in even numbers are more")
}
else if(on>en)
{
    console.log(num1+" in odd numbers are more")
}
else
{
    console.log(num1+" in even numbers and odd numbers are equal")
}

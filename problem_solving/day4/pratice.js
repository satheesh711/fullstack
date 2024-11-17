// 1) Leet code problem
// https://leetcode.com/problems/roman-to-integer/

//solution link
//https://leetcode.com/problems/roman-to-integer/submissions/1453653776


//2) input: Enter no. of series: 5
// output: 0+1+1+2+3 = 7

n=+prompt("enter number")
a=0
b=1
res=""
s=0
for(i=1;i<=n;i++)
{
    if(i!=n)
    {
        res=res+a+"+"
    }
    else
    {
        res+=a+" ="
    }
    s+=Number(a)
    c=a+b
    a=b
    b=c
}
console.log("fib series of "+n+ " is "+res+s)

// WAP to print the sum of fib in the given number
// input: Enter a number: 4311
// output: 5


z=prompt("enter number")
s=0
for(x of z)
{
    a=0
    b=1
    while(x >= a)
    {
        if(a == x)
        {
            s=s+Number(x)
            break
        }
        c=a+b
        a=b
        b=c
    }
}
console.log("sum of fib number of "+z+" is "+s )
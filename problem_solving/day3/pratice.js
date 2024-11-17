// Task : 1) WAP to print the min no prime in the given number
// input: Enter a number: 67439
// output: 4

num=prompt()
function cp(n)
{
    for(i=2;i<n;i++)
    {
        if(n%i==0)
            return false;
    }
    return true;
}
np=""
for(n of num)
{
    if(num>1 && !cp(n))
    {
        np+=n
    }
}
min=np[0]
for(i=1;i<np.length;i++)
{
    if(np[i]<min)
    {
        min=np[i]
    }
}
console.log(min)

// 2) WAP to print the prime sum is more or non prime sum is more
// input: Enter number: 6655
// output: Non prime sum is more

num2=prompt()
function cp2(n)
{
    for(i=2;i<n;i++)
    {
        if(n%i==0)
            return false;
    }
    return true;
}
p2=0
np2=0
for(n of num2)
    {
        if(num2>1 && cp(n))
        {
            p2+=Number(n)
        }
        else if(num2>1)
        {
            np2+=Number(n)
        }
    }
if(p2>np2)
{
    console.log('prime sum is more')
}
else if(np2>p2)
{
    console.log('non prime sum is more')
}
else
{
    console.log('both sum is same ')
}
// 3)
// Problem Statement: Check if the number is a Harshad(or Niven) number or not.

// Examples:

// Example 1:
// Input: 378
// Output: Yes it is a Harshad number.
// Explanation: 3+7+8=18. 378 is divisible by 18. Therefore 378 is a harshad number.

// Example 2:
// Input: 379
// Output: No
//  it is not a Harshad number.
// Explanation: 3+7+9=19. 379 is not divisible by 19. Therefore 379 is a harshad number.


h=prompt()
s=0
for(n of h)
{
    s=s+Number(n)
}
if(h%s==0)
{
    console.log('harshad number')
}
else
{
    console.log('not a harshad number')
}
// Armstrong number or not without using methods
function len(n)
{
    c=0
    while(n>=1)
    {
        c++
        n=n/10
    }
    return c
}
function power(n,m)
{
    s=1
    for(i=0;i<m;i++)
        s=s*n
    return s
}
n=+prompt()
m=n
l=len(n)
s=0
for(i=0;n>0;i++)
{
    rem=n%10
    s=s+power(rem,l)
    n=Math.floor(n/10)
}
if(s==m)
    console.log('YES')
else
console.log('NO')
# 12.Calculate the Power of a Number(using loop only).
# Input: n=5, p=3
# Output: 5 ^ 3 = 125

def power(n,p):
    if p == 1:
        return n
    return n*power(n,p-1)
n=int(input("enter number:"))
p=int(input("enter power:"))
res=power(n,p)
print(res)
# 11.Program to nd factorial of number.
# Input: n=5
# Output: 120

def fact(n):
    if n==1:
        return 1
    return n*fact(n-1)

n=int(input("enter number"))
res=fact(n)
print(res)
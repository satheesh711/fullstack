# 13.Program to Check Whether a Number is Prime or Not
# Input: 9
# Output: 9 is not a prime no

def prime(n):
    if n<2:
        return False
    for i in range(2,n):
        if n%i == 0:
            return False
    return True

n=int(input("enter number:"))
res=prime(n)
if res:
    print(n," is prime number")
else:
    print(n," is not a prime number")
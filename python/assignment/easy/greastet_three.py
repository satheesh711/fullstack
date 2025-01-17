# 10.Program to nd greatest of three numbers
# Input: 4 8 2
# Output: 8 is greatest

def greatest(a,b,c):
    if a>b and a>c :
        return a
    elif b>c:
        return b
    else:
        return c
n1=int(input("enter number 1:"))
n2=int(input("enter number 2:"))
n3=int(input("enter number 3:"))
res=greatest(n1,n2,n3)
print(res + " is greatest")

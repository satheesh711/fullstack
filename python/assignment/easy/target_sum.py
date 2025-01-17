# 3. Create a function that takes two arguments. Both arguments are integers, a and b. Return true if one of them is 10 or if their sum is 10.

def targetsum(a,b):
    if a==10 or b==10 or a+b == 10 :
        return True
    else:
        return False

n1=int(input("enter number"))
n2=int(input("enter number"))

result=targetsum(n1,n2)
print(result)
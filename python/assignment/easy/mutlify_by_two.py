# 9. Write a program that denes a function to multiply an integer by 2. Then, loop from 0 to a given
# integer n, passing each value to the function and printing the result.
# Input: n=5
# Output: 2 4 6 8 10

def multify(num):
    return num*2

n=int(input("enter number:"))
res=[]
for i in range(1,n+1):
    res.append(multify(i))
print(res)
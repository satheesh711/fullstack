# 6. Reverse a number using while Loop
# a. Input: 123
# b. Output: 321


n=int(input("enter number: "))
rev=0
while n>0:
    r=n%10
    rev=rev*10+r
    n=n//10
print(rev)
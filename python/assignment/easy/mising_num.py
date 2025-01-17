# 14.Program to nd a missing number in rst n natural numbers
# a. Input: n=5(length of array), arr= [5,3,1,4] Output: 2 is missing

def missing(n,a):
    a=sorted(a)
    for i in range(0,n):
        if i+1 != a[i]:
            return i+1
n=int(input("enter number"))
a=[int(i) for i in input("enter array numbers space separated").split(" ")]
res=missing(n,a)
print(res,"is missing")
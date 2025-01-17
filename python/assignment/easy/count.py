# 16.Count occurrence of number:
# a. Input: [1,6,3,1,5,9,7,2,1,9,3,7,8,9,10] , no_to_nd=7
# b. Output: 7 present 2 times.

def count(arr,n):
    count=0
    for i in arr:
        if i == n:
            count+=1
    return count

a=[int(i) for i in input("enter array numbers space separated").split(" ")]
n=int(input("enter number to find count"))
res=count(a,n)
print(n,"present ",res,"times")
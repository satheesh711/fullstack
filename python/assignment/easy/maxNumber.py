# 5. Create a function that takes an array of numbers and returns the largest number.
# Example:
# secondLargest([10, 40, 30, 20, 50]) ➞ 50

def maxNumber(arr):
    max=arr[0]
    for i in range(1,len(arr)):
        if(arr[i]>max):
            max=arr[i]
    return max

n=input("enter array of number separate by space").split(" ")
res=maxNumber(n)
print(res)
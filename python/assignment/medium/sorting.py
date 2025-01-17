# 4. Program to arrange numbers in ascending order
# a. Input: [2,3,1,5,4]
# b. Output: [1,2,3,4,5]
# c. Sort the Array using loop only(you can not use predened function).


arr=[int(i) for i in input("enter array of numbers space saperated:").split(" ")]

for i in range(len(arr)):
    for j in range(len(arr)-i-1):
        if arr[j] > arr[j+1]:
            temp=arr[j]
            arr[j]=arr[j+1]
            arr[j+1]=temp
print(arr)


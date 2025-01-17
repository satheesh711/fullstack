# 3. Create a function that takes an array of items, removes all duplicate items and returns a new
# array in the same sequential order as the old array (minus duplicates).
# Example:
# removeDups([1, 0, 1, 0]) ➞ [1, 0]
# removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

def removeDups(arr):
    uni=[]
    for i in arr:
        if i not in uni:
            uni.append(i)
    return uni

arr=input("enter array of elements space saperated:").split(" ")
res=removeDups(arr)
print(res)

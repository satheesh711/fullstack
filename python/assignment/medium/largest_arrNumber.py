# 2. Create a function that takes an array of arrays with numbers. Return a new (single) array with
# the largest numbers of each.
# Example:
# ndLargestNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]]) ➞ [7, 90, 2]

def findLargestNums(arr):
    res=[]
    for i in arr:
        max=i[0]
        for j in range (1,len(i)):
            if i[j] > max:
                max=i[j]
        res.append(max)
    return res

multiarr=[]
n=int(input("enter number of arrays"))
for i in range(n):
    arr=[int(i) for i in input("enter array of numbers space saperated:").split(" ")]
    multiarr.append(arr)
res=findLargestNums(multiarr)
print(res)
    


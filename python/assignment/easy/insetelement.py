# 15.Program to insert an element in an array at a given index.
# Input: [1,2,3,4,5,7,8,9,10] , index=5, number = 6
# Output: [1,2,3,4,5,6,78,9,10]

def insert(arr,ind,n):
    res=[]
    for i in range(len(arr)):
        if ind == i:
            res.append(n)
        res.append(arr[i])
    return res

a=[int(i) for i in input("enter array numbers space separated").split(" ")]
ind=int(input("enter index"))
ele=int(input("enter inserted element"))
res=insert(a,ind,ele)
print(res)
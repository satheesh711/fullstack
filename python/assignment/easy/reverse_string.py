# 8. Given a string, create a function to reverse the string.
# Example:
# reverseCase("Happy Birthday") ➞ "yadhtriB yppaH"

def reverse(str):
    rev=""
    for i in range(len(str)-1,-1,-1):
        rev+=str[i]
    return rev
s=input("enter string: ")
res=reverse(s)
print(res)

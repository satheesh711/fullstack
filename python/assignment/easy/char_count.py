# 6. Create a function that takes two strings as arguments and returns the number of times the rst
# character (the single character) is found in the second string.
# Example:
# charCount("c", "Chamber of secrets") ➞ 1

def occur(ch,str):
    count=0
    for i in str:
        if ch[0] == i:
            count+=1
    return count

ch=input("enter a character :")
st=input("enter string: ")

res=occur(ch,st)
print(res)
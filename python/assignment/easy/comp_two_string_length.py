# 4. Create a function that takes two strings as arguments and returns either true or false depending on whether the total number of characters in the first string is equal to the total number of characters in the second string.

def lenstring(str1,str2):
    if len(str1) == len(str2):
        return True
    return False

s1=input("enter string one:")
s2=input("enter string two:")

res = lenstring(s1,s2)
print(res)
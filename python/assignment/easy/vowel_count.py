# 7. Create a function that takes a string and returns the number (count) of vowels contained
# within it.
# Example:
# countVowels("Celebration") ➞ 5

def vowelsCount(str):
    count=0
    str=str.lower()
    print(str)
    for i in str:
        if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
            count+=1
    return count
s=input("enter string: ")
res=vowelsCount(s)
print(res)
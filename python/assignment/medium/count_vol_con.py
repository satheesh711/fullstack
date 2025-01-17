# 5. Program to count vowels and consonants in a given String.
# a. Input: i am ram
# b. Output: 3 vowels 3 consonants

str=input("enter string: ")

vol=0
con=0
str=str.lower()

for i in str:
    if i == 'a' or i == 'e' or i == 'i' or i == 'o' or i == 'u':
        vol+=1
    elif i >='b' and i <='z':
        con+=1
print(vol,"vowels",con,"consonants")
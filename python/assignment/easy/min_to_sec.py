# 2. Write a function that takes an integer minutes and converts it to seconds.

def Min_to_Sec(min):
    return min*60

n=int(input("enter minutes"))
result=Min_to_Sec(n)
print(result)
# num=int(input("enter a number"))
# if num==0:
#     print("it is Zero")
# elif num%2 == 0:
#     print("Even Number")
# else:
#     print("Odd Number")

# print("even\n"*25)

# for i in range(35,51):
#     if i%2 ==0 :
#         print (i,"is Even Number")
#     else:
#         print(i, "is Odd Number")

# n=0
# while n<=20:
#     print(n)
#     n+=1

# n=0
# while n<=20:
#     if n%2 ==0 :
#         print (n,"is Even Number")
#     else:
#         print(n, "is Odd Number")
#     n+=1

# for i in range(0,10):
#     print(i)
#     continue
#     print(i)
# print(i)

# for i in range(0,10):
#     break
# print(i)

# for i in range(0,10):  #pass is used to with out code  creat loop 
#     print(i)
#     pass
#     print(i)
# print(i)

# for i in range(0,4):  get error because we dont have any code in for block
# print(i)


# l=[0,2,3,4,-2,-3]
# p=0
# n=0
# for i in l:
#     if i>0:
#         p+=i
#     else:
#         n+=i
# print(p,n)

# l=[[1,2,3],[-1,-2],[9]]
# s=0
# for i in range(len(l)):
#     for j in range(len(l[i])):
#         s+=l[i][j]
#     print(s)

# n=input("enter a number")
# n=int(n)
# if n<2:
#     print("not prime")
# k=1
# for i in range(2,15000):
#     if i!=n:
#         if n%i==0:
#             k=22
#             print("not prime")
#             break
# if k==1:
#     print("prime")


# day=["mon","Tues","wed","thu","fri","sat","sun"]
# i=1
# d=2
# while i<32 :
#     print(i,day[d])
#     d+=1
#     d=d%7
#     i+=1


# start=2
# end=10

# flag = True
# for i in range(start,end+1):
#     flag = True
#     if i<2:
#         flag=False
#     else:
#         for j in range(2,i):
#             if i%j==0:
#                 flag=False
#             break
#     if flag:
#         print(i,"prime")
#     else:
#         print(i,"not prime")


# input="101111"

# # binary to decimal
# res=0
# k=0
# for i in range(len(input)-1,-1,-1):
#     print(i)
#     if input[i] == "1":
#         res=res+pow(2,k)
#     k+=1
# print(input,res)


# binary to oct(binary to dec  and dec to oct)
# input="101111"
# res=0
# k=0
# for i in range(len(input)-1,-1,-1):
#     if input[i] == "1":
#         res=res+pow(2,k)
#     k+=1

#dec to Oct

# oct=""
# while(res>0):
#     rem=res%8
#     res=res//8
#     oct=oct+str(rem)
# print(oct[::-1])


# Oct to dec

# input="13456"
# res=0
# k=0
# for i in range(len(input)-1,-1,-1):
#     res=res+pow(8,k)*int(input[i])
#     k+=1
# print(input,res)

#hex to dec

# input="1AFE"
# res=0
# k=0
# t=0
# for i in range(len(input)-1,-1,-1):
#     if input[i] == 'A':
#         t=10
#     elif input[i] == 'B':
#         t=11
#     elif input[i] == 'C':
#         t=12
#     elif input[i] == 'D':
#         t=13
#     elif input[i] == 'E':
#         t=14
#     elif input[i] == 'F':
#         t=15
#     else:
#         t=int(input[i])
#     res=res+pow(16,k)*t
#     k+=1
# print(input,res)


#dec to binary

# input=int("47")
# bianry=""
# while(input > 0):
#     rem=input%2
#     input=input//2
#     bianry=bianry+str(rem)
# print(bianry[::-1])

#dec to hex

# input = int("5934")
# hex=""
# while(input > 0):
#     rem=input%16
#     input=input//16
#     if rem == 10:
#         rem="A"
#     elif rem == 11:
#         rem="B"
#     elif rem == 12:
#         rem="C"
#     elif rem == 13:
#         rem="D"
#     elif rem == 14:
#         rem="E"
#     elif rem == 15:
#         rem="F"
#     else:
#         rem=str(rem)
#     hex=hex+rem
# print(hex[::-1])




# r1=[int(i) for i in input("enter number").split(" ")]
# for r in r1:
#     print((4/3)*3.14*(r**3))

# def nums(n,i):
#     print(i,end=" ")
#     if(n==i):
#         return 
#     nums(n,i+1)
# nums(998,1)

# def sumof(a,b):
#     return a+b

# def sumof(a,b,c):
#     return a+b+c

# def sumof(a,b,c,d):
#     return a+b+c + d

# def sum1(*c,**d):
#     print(len(c))
#     print(c)
#     print(d)
#     globals()["z"]=20
#     z=30
#     print(z)

# z=10
# sum1(4)
# print(z)

s="san  th  th        "
print(s.split())
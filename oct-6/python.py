# list = []
# num = [[9,8,7],[9,9,9]]
# num[0]=9
# num[0]=2
# nums=[5,6,7,8,9]
# print(nums[1:4])
# #append=> 1 item
# nums.extend([10,20,30,40])
# print(nums)
# nums.insert(6,11)
# print(nums)
# nums.pop()
# num.sort()
# print(num)
# num.reverse()
# print(num)

# tuples
# num=()

# num=(20,30,10)
# print(10 in num)
# stud=("akash",7,"3rd class")
# name,age,std=stud
# print(name)

# list(num)
# tuple(num)
# num+stud


# num={4,4,5,6,6,7,7}
# print(num)
# num.add(10)
# num2={3,2,1,5}

# print(num)
# num2.remove(3)
# print(num2)
# # if num2[0]<3:
# #  print("lol")
 
# print(4 in num)

# print(num | num2)
# print(num & num2)
# print(num - num2)
# print(num ^ num2)


# student={
#     "name":"akash",
#     "age":19,
#     "marks":4
# }

# print(student["name"])
# print(student.get("name"))
# student["city"]="bandlaguda"
# print(student)
# student["city"]="mahboobnagar"
# print(student)
# student.update({
#      "name":"akhil",
#         "age":9,
#         "marks":20
# })
# print(student)

# del student["age"]
# print(student)
# print( "name" in student)

# {[],[]} dict  of list
# [{},{}] list of dict
# {{},{}} nested dict

# def greet():
#     print("hello")

# greet()

# def sum(a,b):
#     print(a+b)
    
# sum(20,10)


# def cal(a,b):
#     return a+b,a-b,a*b,a/b

# w,x,y,z=cal(20,10)
# print(w,x,y,z)

# def greet(name="customer"):
#     print("hello",name)

# greet()
# greet("akash")


# def sum(*nums):
#     total = 0
#     for i in nums:
#         total+=i

#     print(total)

# sum(10,20,40,50)
    
# def show(**data):
#     for key,value in data.items():
#         print(key,value)


# show(name= 'akhil', age= 9, marks= 20, city= 'mahboobnagar')


# import calculator
# from  calculator import sqrt,add,sub 
# calculator.sqrt()

# from calculator import *
import math

print(math.pi)
print(math.e)

from datetime import datetime

now = datetime.now()
print(now)



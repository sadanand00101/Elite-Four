# array = [8,7,9,3,4,1,2,6,5,10]

# array.sort()
# print(array)
# array.reverse()
# print(array)

# arr = [9,7,4,2]
# smallest = arr[0]
# for i in range(len(arr)):
#     if smallest < arr[i]: 
#         smallest=arr[i]
        
#         9<9
        
        
# print(smallest)


arr = [100,89,9,7,4,2,67,78]
[78,....100]


for i in range(len(arr)):
    min_index=i
    for j in range(i+1,len(arr)):
        if arr[j]<arr[min_index]:
                min_index=j
    
    arr[i],arr[min_index]=arr[min_index],arr[i]


print(arr)
            
        

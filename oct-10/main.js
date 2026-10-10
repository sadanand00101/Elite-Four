// 2 pointer array => reversing 
// let arr=[1,2,3,4,5,6,7,8,9]

// let left = 0;
// let right = arr.length-1;

// // for(;left<right;left++,right--){

// // }
// while(left<right){
     
//     let temp = arr[left];
//     arr[left]=arr[right];
//     arr[right]=temp;
//     left ++;
//     right --;
// }
// console.log(arr)

// 2 sum question
// let arr = [1,2,4,6,7,8,9];
// let target = 10;

// middle array Element
        // 0 1 2 3  4  
// let arr = [1,2,3,4,5] 
// // fast = 0,2,4,. slow = 0,1,2,3

// let slow = 0;
// let fast = 0;

// while(fast < arr.length && fast+1<arr.length ){
//     slow+=1
//     fast+=2
// }

// console.log(arr[slow])
// 0 1 2 3  4 
// [2,4,6,8,10]
// 3
// 2+4+6 = 12  
// 1 2 3   sum 0   3   newsum  
// 4+6+8 => 12 -2 + 8 = 18  i = 3    sum + arr[i] - arr[i-a] 0
// 6 +8 + 10 = 18-4 + 10 = 24 i = 4 

// 3 consecutive sum
let arr = [2,4,6,8,10]  
let a = 3;
let sum = 0;
for (i = 0;i<a;i++){
    sum+=arr[i];
}
// let sol = sum;
    console.log(sum)

for (i = a;i<arr.length;i++){
    sum = sum + arr[i] - arr[i-a];
    
    console.log(sum)

}
// console.log(temp)

// let arr = [100,89,9,7,4,2,67,78]
// // let s = arr[0]
// for(i=0;i<arr.length;i++)
// { 
//     let min_index=i; /*=>index of min number*/
//     for(j=i+1;j<arr.length;j++)
//     {
//             if (arr[j]<arr[min_index]){
//                 min_index=j;
//             }
//     }
//    let temp = arr[i];
//    arr[i]=arr[min_index];
//    arr[min_index]=temp;
// }
// console.log(arr)

// let left=0,right=arr.length-1;

// for(;left<right;left++,right--){
//     let temp = arr[left];
//    arr[left]=arr[right];
//    arr[right]=temp;
// }
// console.log("reversed array",arr)


let arr = [1, 2, 3, 4, 6, 8];
let target = 10;
let left = 0;
let right = arr.length - 1;
while (left < right) {
let sum = arr[left] + arr[right];
if (sum === target) {
    console.log(arr[left], arr[right]);
    break;
}
if (sum < target) {
    left++;
} else {
    right--;
}
}





// let arr=[2,3,1,2,4,3]
// let target=7; 
// let left = 0,sum=0;
// let minLength=Infinity;
// for(right=0;right<arr.length;right++){
//     sum+=arr[right];

//     while(sum>=target){
//     length=right-left+1;

//     if(length<minLength){
//         minLength=length;
          


//     }
//     sum-=arr[left];
//     left++


// }
// }


// result=minLength===Infinity?0:minLength;
// console.log(result)



// let arr=[2,4,6,8,10]
// let suffixArray=[]
// let sum=0;
// for(i = 0;i<arr.length;i++){
//     sum+=arr[i]
//     prefixArray.push(sum)

// }


// console.log(prefixArray)

// for(i=arr.length-1;i>=0;i--){
//     sum+=arr[i];
//     suffixArray.push(sum)
// }
// console.log(suffixArray)




// let arr=[10,20,30,10,20,10] 
// let freq=new Map()
// for(let num of arr){
//     if(freq.has(num)){
//         freq.set(num,freq.get(num)+1);
//     }else{
//         freq.set(num,1);
//     }
//     console.log(freq)
// }
// console.log(freq)

// let arr=[10,20,30,10,20,10]
// let seen=new Set()
// let duplicates=new Set()
// for (let num of arr){
//     if(seen.has(num)){
//         duplicates.add(num)
//     }
//     else{
//         seen.add(num)
//     }
// }
// console.log(duplicates)


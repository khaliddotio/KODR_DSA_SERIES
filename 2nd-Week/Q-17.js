// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)
let arr = [1, 2, 3, 4];
let sum = 0;
let n = arr.length;

for(let i = 0; i < n; i++){
 let count = arr[i] * (2*i - n + 1)
 sum += count;
}

console.log(sum)
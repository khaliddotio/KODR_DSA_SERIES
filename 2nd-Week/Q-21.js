// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2).

let arr = [1, 2, 1, 2, 1, 3]
let n = arr.length
let leftSum = 0
let rigthSum = 0
for(let i = 0; i < n / 2; i++){
   leftSum += arr[i]
}
for(let i = n / 2; i < n; i++ ){
   rigthSum += arr[i]
}
diff = Math.abs(leftSum -  rigthSum)
console.log(diff)
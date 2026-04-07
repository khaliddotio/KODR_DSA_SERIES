// We are given an array of Integers. We have to perform the following operation on the array until it is fully exhausted: Select the max number in the array and delete that number including all the numbers to its right side in the array. Repeat this step for the left elements of the array i.e select the maximum element in the left elements and delete it including all numbers to its right. Our task is to simulate the above procedure and return the number of steps that will be taken until the first element (index 0) of the array is also deleted and the array is exhausted. (Ex: Array = [2, 3, 5, 4, 1], Output : Steps Taken: 3)

// 1st Approch

// let arr = [2, 3, 5, 4, 1]
// let step = 0
// while (arr.length > 0) {
//     let max = Math.max(...arr)
//     let maxind = arr.indexOf(max)
//     arr =arr.slice(0, maxind)
//     step++
// } 
// console.log(step)


// 2nd Approch

let arr = [2, 3, 5, 4, 1]
let n = arr.length 
let step = 0
let maxSoFar = -Infinity
for(let i = n-1; i >= 0; i--){
   if(arr[i] > maxSoFar){
    step++
       maxSoFar = arr[i]
   }
}
console.log(step)
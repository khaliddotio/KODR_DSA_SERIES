// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] > arr[max]) {
      max = i
   }
}
console.log(`Max element = ${arr[max]} found at ${max} index`);


// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let prompt = require("prompt-sync")()

let n = +prompt("Enter the Size of Array: ")
let arr = [];
let sum = 0;
for (let i = 0; i < n; i++) {
   arr[i] = +prompt(`Element ${i + 1}: `)
   sum += arr[i]
}

let avg = sum / n

console.log(sum)
console.log(avg)

// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0;
let secMax = 0;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] > max) {
      secMax = max
      max = arr[i];
   } else if (arr[i] > secMax && arr[i] != max) {
      secMax = arr[i]
   }
}
console.log(secMax)




// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \\YES\\"
let arr = [1, 5, 8, 9, 10, 15];
for (let i = 1; i < arr.length; i++) {
   if (arr[i] < arr[i - 1]) {
      console.log("No")
      return
   }
}
console.log("Yes")


// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let prompt = require("prompt-sync")()
let n = +prompt("Enter the length of Array: ")
let arr = [];
for (let i = 0; i < n; i++) {
   arr[i] = +prompt(`Element ${i + 1}: `)
}
let temp = new arr
for (let i = 0; i < n; i++) {
   temp[i] = arr(n - 1 - i)
}
console.log(arr)
console.log(temp)



// Array left Rotation by 1
let arr = [1, 2, 3, 4, 5];
let first = arr[0]
for (let i = 0; i < arr.length; i++) {
   arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first
console.log(arr)



// Array Reverse Without Using Extra space
let arr = [10, 20, 30, 40, 50, 60];
let i = 0;
let j = arr.length - 1
while (i < j) {
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   i++
   j--
}
console.log(arr)



// Linear Search an array - If element found print the index, else -1
let arr = [10, 20, 30, 40, 50, 60];
let num = 50;
let foundIndex = -1;
for (let i = 0; i < arr.length; i++) {
   if (arr[i] === num) {
      foundIndex === i
      break;
   }
}
if (foundIndex !== num) {
   console.log(foundIndex)
} else {
   console.log(-1)
}



// Binary Search. If element found print the index, else -1
let arr = [10, 20, 30, 40, 50, 60];
let target = 40;

let low = 0, high = arr.length - 1;

while (low <= high) {
   let mid = Math.floor((low + high) / 2);

   if (arr[mid] === target) {
      console.log(mid);
      break;
   }

   if (target < arr[mid]) high = mid - 1;
   else low = mid + 1;
}

if (low > high) console.log(-1);



// Move all the negative elements on the left side and positive elements on the right side O(n).
let arr = [23, -45, 67, -12, 89, -34, 56, -78, 11, -90];
let i = 0;
let j = 0;
while (i < arr.length) {
   if (arr[i] < 0) {
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
      j++
   }
   i++
}
console.log(arr)




// Print the count of subarrays whose sum is equal to the target. (Ex - {1,2,3,7,5}, T = 12 O/P - 2 - [ {2,3,7}, {7,5} ] - Both subarrays have sum 12)
let arr = [1, 2, 3, 7, 5];
let t = 12;

let count = 0;
for (let i = 0; i < arr.length; i++) {
   let sum = 0
   for (let j = i; j < arr.length; j++) {
      sum += arr[j]

      if (sum == t) {
         count++
      }
   }
}
console.log(count)


// Strong number using methods.

function factorial(n) {
   let fact = 1;
   for (let i = 1; i <= n; i++) {
      fact *= i;
   }
   return fact
}

function isStrongNum(num) {
   let temp = num;
   let sum = 0;

   while (nom > 0) {
      let digit = temp % 10;
      sum += factorial(digit);
      temp = Math.floor(temp / 10)
   }
}

let number = 145

if (isStrongNum(number)) {
   console.log("Strong Number")
} else {
   console.log("Not a strongr number")
}



// Special number using methods.

function isSpecialNum(num) {
   let temp = num;
   let sum = 0;
   let product = 1;

   while (temp > 0) {
      let digit = temp % 10;

      sum += digit;;
      product *= digit;

      temp = Math.floor(temp / 10)
   }
   return (sum + product) === num;
}

let number = 59;

if (isSpecialNum(number)) {
   console.log("Special Number")
} else {
   console.log("Not a special Number")
}


// Concatenation of array

let arr = [1, 2, 3];
let n = 2;
let result = [];
for (let i = 0; i < n * arr.length; i++) {
   result.push(arr[i % arr.length]);
}
console.log(result)



// Build Array from Permutation

let arr = [1, 4, 0, 3, 2, 5];
let num = []

for (let i = 0; i < arr.length; i++) {
   num[i] = arr[arr[i]]
}
console.log(num)

// function Barray(num){
//     let n = num.length;
//     for(let i = 0; i < n ; i++){
//        num[i] = num[i] + n *(num[num[i]] % n)
//     }
// for(let i = 0; i < n; i++){
// num[i] =  Math.floor(num[i] / n)
// }
// return num
// }
// let arr = [1, 4, 0, 3, 2, 5];
// console.log(Barray(arr))



// Given a sorted array of distinct elements, find the summation of absolute differences of all pairs in the given array. (Ex: arr[] = {1, 2, 3, 4}, Output: 10)
let arr = [1, 2, 3, 4];
let sum = 0;
let n = arr.length;

for (let i = 0; i < n; i++) {
   let count = arr[i] * (2 * i - n + 1)
   sum += count;
}

console.log(sum)



// You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').

let arr = [1, 2, 3, 4, 5];
let charArr = ['a', 'b', 'c', 'a', 'b'];

function minSum(arr, charArr) {
   let sumA = 0, sumB = 0, sumC = 0;
   for (let i = 0; i < arr.length; i++) {
      if (charArr[i] === 'a') {
         sumA += arr[i];
      } else if (charArr[i] === 'b') {
         sumB += arr[i];
      } else {
         sumC += arr[i]
      }
   }
   return Math.min(sumA + sumB, sumC)
}
console.log(minSum(arr, charArr))




// Given an array of integers, update every element with the multiplication of previous and next elements with the following exceptions: a) The First element is replaced by the multiplication of the first and second. b) The last element is replaced by multiplication of the last and second last. (Ex: Input : arr[] = {2, 3, 4, 5, 6}, Output : arr[] = {6, 8, 15, 24, 30})
let arr = [2, 4, 6, 7, 3, 4]
let n = arr.length
let prev = arr[0]
arr[0] = arr[0] * arr[1]

for (let i = 1; i < n - 1; i++) {
   let curr = arr[i]
   arr[i] = prev * arr[i + 1]
   prev = curr
}
arr[n - 1] = prev * arr[n - 1]
console.log(arr)




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
for (let i = n - 1; i >= 0; i--) {
   if (arr[i] > maxSoFar) {
      step++
      maxSoFar = arr[i]
   }
}
console.log(step)




// Given an array of even size, task is to find minimum value that can be added to an element so that the array becomes balanced. An array is balanced if the sum of the left half of the array elements is equal to the sum of the right half. (Ex: Input : 1 2 1 2 1 3, Output : 2).
let arr = [1, 2, 1, 2, 1, 3]
let n = arr.length
let leftSum = 0
let rightSum = 0
for (let i = 0; i < n / 2; i++) {
   leftSum += arr[i]
}
for (let i = n / 2; i < n; i++) {
   rightSum += arr[i]
}
diff = Math.abs(leftSum - rightSum)
console.log(diff)



// Sort First half in Ascending and Second half in descending order in an array
let arr = [4, 2, 3, 1, 6, 8, 5, 7]
let n = arr.length
let mid = Math.floor(n / 2)
let first = arr.slice(0, mid)
let last = arr.slice(mid, n)
first.sort((a, b), a + b)
last.sort((a, b), b - a)
let result = [...first, ...last]
console.log(result)



// Divide Array Into Equal Pairs
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let set = new Set()

for (let num of arr) {
   if (set.hast(num)) {
      set.delete(num);
   } else {
      set.add(num);
   }
}
console.log(set.size === 0);



// Maximum Number of Pairs in Array
let arr = [1, 2, 4, 3, 2, 1, 3, 4, 3, 1,];
let set = new Set();
let pairs = 0;
for (let num of arr) {
   if (set.has(num)) {
      set.delete(num);
      pairs++
   } else {
      set.add(num);
   }
}
let freq = set.size
console.log(pairs, freq)



// Count Equal and Divisible Pairs in an Array
let arr = [1, 2, 4, 3, 2, 1, 3, 4, 3, 1,];
let k = 2;
let count = 0;
for (let i = 0; i < arr.length; i++) {
   for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] == arr[j] && (i * j) % k === 0) {
         count++
      }
   }
}
console.log(count)



// Keep Multiplying Found Values by Two
let arr = [1, 2, 3, 5, 6, 8, 9];
let result = [];

for (let num of arr) {
   result.push(num * 2)
}
console.log(result)



// Smallest Index With Equal Value
let arr = [0, 2, 3, 5, 6, 8, 9];
let result = -1;
for (let i = 0; i < arr.length; i++) {
   if (i % 10 === arr[i]) {
      result = i;
      break;
   }
}
console.log(result)



// Count Operations to Obtain Zero
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let max = Math.max(...arr);
console.log(max)



// Make Array Zero by Subtracting Equal Amounts
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let set = new Set(arr)
set.delete(0);
console.log(set.size);



// Count Hills and Valleys in an Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
let prev = arr[0];
for (let i = 1; i < arr.length - 1; i++) {
   if (ar[i] === arr[i + 1]) continue;

   if (
      (arr[i] > prev && arr[i] > arr[i + 1]) ||
      (arr[i] < prev && arr[i] > arr[i + 1])
   ) {
      count++
   }
   prev = arr[i];
}
console.log(count)



// Find Greatest Common Divisor of Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function num(a, b) {
   while (b !== 0) {
      let temp = b;
      b = a % b;
      a = temp;
   }
   return a
}
let min = Math.min(...arr);
let max = Math.max(...arr);
let result = num(min, max);
console.log(result);



// Find the Highest Altitude
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentAltitude = 0;
let maxAltitude = 0;
for (let i = 0; i < arr.length; i++) {
   currentAltitude += arr[i];
   maxAltitude = Math.max(maxAltitude, currentAltitude);
}
console.log(maxAltitude); \



// Minimum Sum of Four Digit Number After Splitting Digits
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort((a, b) => a - b);
let num1 = 0;
let num2 = 0;
for (let i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      num1 = num1 * 10 + arr[i];
   } else {
      num2 = num2 * 10 + arr[i];
   }
}
console.log(num1 + num2);



// Sort Even and Odd Indices Independently
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = 0;
let odd = 0;
for (let i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      even.push(arr[i]);
   } else {
      odd.push(arr[i]);
   }
}

even.sort((a, b) => a - b);
odd.sort((a, b) => b - a);

let o = 0, e = 0

for (let i = 0; i < arr.length; i++) {
   if (i % 2 === 0) {
      arr[i] = even[e++];
   } else {
      arr[i] = odd[o++]
   }
}
console.log(arr)



// Min Max Game - Array
let arr = [1, 3, 5, 2, 4, 8, 2, 2];
while (arr.length > 1) {
   let temp = [];
   for (let i = 0; i < arr.length; i += 2) {
      let pairIndex = i / 2;
      if (pairIndex % 2 === 0) {
         temp.push(Math.min(arr[i], arr[i + 1]))
      } else {
         temp.push(Math.max(arr[i], arr[i + 1]))
      }
   }
   arr = temp;
}
console.log(arr[0])



// Minimum Number of Seat Everyone
let arr = [1, 1, -1, 1, -1, 1];
let current = 0;
let max = 0;
for(let i = 0; i < arr.length; i++){
  current += arr[i];
  max = Math.max(max, current)
}
console.log(max)



// Matrix Diagonal Sum
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let n = matrix.length;
let sum = 0;
for(let i = 0; i < n; i++){
sum += matrix[i][i];
sum += matrix[i][n - 1 - i]
}
if(n % 2 === 1){
sum -= matrix[Math.floor(n / 2)][Math.floor(n / 2)]
}
console.log(sum)



// Transpose Matrix
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let n = matrix.length

for (let i = 0; i < array.length; i++) {
   for(let j = i + 1; j < n; j++){
   let temp = matrix[i][j];
   matrix[i][j] = matrix[j][i]
   matrix[j][i] = temp;
   }  
}
console.log(matrix)



// Flipping an image
let image = [[1, 0, 0],[0, 1, 0],[1, 1, 1]];
for(let i = 0; i < image.length; i++){
   let row = image[i]
   row.reverse();
   for(let j = 0; j < row.length; j++){
    row[j] = 1 - row[j]
   }
}
console.log(image)
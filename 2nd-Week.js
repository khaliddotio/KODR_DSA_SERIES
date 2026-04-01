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




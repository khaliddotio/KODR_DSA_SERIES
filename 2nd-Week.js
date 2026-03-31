// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0;
for(let i = 0; i < arr.length; i++ ){
     if(arr[i] > arr[max]){
        max = i
     }
}
console.log(`Max element = ${arr[max]} found at ${max} index`);


// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let prompt = require("prompt-sync")()

let n = +prompt("Enter the Size of Array: ")
let arr = [];
let sum = 0;
for(let i = 0; i < n; i++){
   arr[i] = +prompt(`Element ${i+1}: `)
   sum += arr[i]
}

let avg = sum / n

console.log(sum)
console.log(avg)

// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0;
let secMax = 0;
for(let i =0; i < arr.length; i++){
   if( arr[i] > max){
    secMax = max
      max = arr[i];
   }else if(arr[i] > secMax && arr[i] != max){
      secMax = arr[i]
   }
}
console.log(secMax)




// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \\YES\\"
let arr = [1, 5, 8, 9, 10, 15];
for(let i = 1; i < arr.length; i++){
  if(arr[i] < arr[i - 1]){
   console.log("No")
   return
  }
}
console.log("Yes")


// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let prompt = require("prompt-sync")()
let n = +prompt("Enter the length of Array: ")
let arr = [];
for(let i = 0; i < n; i++){
 arr[i] = +prompt(`Element ${i + 1}: `)
}
let temp = new arr
for(let i = 0; i < n; i++){
  temp[i] = arr( n - 1 - i )
}
console.log(arr)
console.log(temp)



// Array left Rotation by 1
let arr = [1, 2, 3, 4, 5];
let first = arr[0]
for(let i = 0; i < arr.length ; i++){
   arr[i] = arr[i + 1];
}
arr[arr.length - 1] = first
console.log(arr) 



// Array Reverse Without Using Extra space
let arr = [10, 20, 30, 40, 50, 60];
let i = 0;
let j = arr.length-1
while(i < j){
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   i++
   j--
}
console.log(arr)
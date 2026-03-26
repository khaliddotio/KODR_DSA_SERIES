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

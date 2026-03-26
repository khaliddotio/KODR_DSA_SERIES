// Accept size n from user and create an n size array then take n inputs into it and finally print the sum & average of all elements.

let prompt = require("prompt-sync")()
let n = +prompt("Enter the size of Array: ")
let arr = [];
let sum = 0;
for(let i = 0 ; i < n; i++){
    arr[i] = +prompt(`Element ${i+1}: `)

    sum += arr[i]
}

 let avg = sum / n

console.log(sum)
console.log(avg)
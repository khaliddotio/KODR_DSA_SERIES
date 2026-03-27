// Take n integer inputs from user and store them in an array. Now, copy all the elements into another array in reverse order and print it.

let prompt = require("prompt-sync")()
let n = +prompt("Enter the size of Array: ");
let arr = [];
for(let i = 0; i < n; i++){
    arr[i] = +prompt(`Element ${i + 1}: `)
}
let temp = new Array(n)
for(let i = 0; i < n; i++){
 temp[i] = arr[n - 1 - i];
}

console.log("Original Array:", arr);
console.log("Reversed Copy:", temp);
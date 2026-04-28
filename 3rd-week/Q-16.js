// Accept a string and print the frequency of each character present in the string
let str = prompt("Enter a String : ");
let freq = {};
for(let s of str) freq[s] = (freq[s] || 0) + 1;
console.log(freq)
// Check if the string is Palindromic or not

let str = prompt("Enter the String : ");
let reverse = "";

for(let i = str.length -1; i >= 0; i--){
    reverse += str[i];
}

console.log(str === reverse ? "palindromic" : "Not palindromic")
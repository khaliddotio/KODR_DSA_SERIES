// Accept a string and print it in reverse order

let str = prompt("Enter a String : ");

let reverse = "";

for (let i = str.length - 1; i >= 0; i--) {
  reverse += str[i];
}
console.log(reverse);
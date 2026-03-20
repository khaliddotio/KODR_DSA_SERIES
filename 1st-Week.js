// Sum of two integers

let a = 10;
let b = 20;

console.log(a + b)

// Print the message along with values and sum (Ex - The sum of 45 & 12 = 57)

function add(a, b){
    sum = a + b
   console.log(`The Sum of ${a} & ${b} = ${a + b}`)
}
add(34,45);

// Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)

let a = prompt("Enter the First Number 👇");
let b = prompt("Enter the Secound Number 👇");

function add(a , b){
  const sum = a + b
  alert(`The Sum of ${a} & ${b} = ${a + b}`)
}

add(a,b)

// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)


let name = prompt("Enter Your Name Here 👇");
let age = prompt("Enter Your Age Here 👇");

alert(`Hello ${name}, you are ${age} years old.`)

// Solve Increment & decrement operator questions

let a = 10;
let b = ++a + a++ + --a;
console.log(b)

// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)

let a = 10 ^ 32;
let b = 32 ^ 10;

console.log(a,b)

// Accept the length and width of a rectangle. Calculate & print the area and perimeter.

function calculateRectangle(length, width){
 const area = length * width
 const perimeter = 2 * (length + width)
 console.log(`Area ${area}`)
 console.log(`Perimeter ${perimeter}`)
}

calculateRectangle(15, 20)


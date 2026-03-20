// Sum of two integers
function int (a , b){
    let sum = a + b
   console.log(`The Sum of two integers is = ${sum}`)
}
int(10,20)



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



// Accept the parameters and calculate the Compound Interest & print it on STDOUT (UseMath class methods)
function compoundInteres(p, r, t){
 let amount = p*(Math.pow(1+(r/100),t))
 let ci = amount - p
 console.log(`CI = ${ci}`)
}
compoundInteres(10000, 5, 2)



// Accept the three sides of triangle and calculate the area using Heron's formula
function calculateTriangle (a,b,c){
let s = (a + b + c) / 2 
let multi = s * (s-a) * (s-b) * (s-c)
let area = (Math.sqrt(multi))

console.log(`Area of triangle ${area} `)
}
calculateTriangle(9,9,9)



// Find surface area of sphere
function surfaceArea(find){
let area = 4 * Math.PI * Math.pow(find, 2)
console.log(`Surface Area = ${area}`)
}
surfaceArea(5)



// Find circumference and area of circle
function circle(radius){

    let circumference = 2* Math.PI * radius
    let area = Math.PI * radius * radius 
    
    console.log(`The circumference is = ${circumference}`)
    console.log(`The area is = ${area}`)
}
circle(20)



// Accept two numbers and print the greatest between them
function num(a, b){
 if(a > b){
    console.log(`${a} is Greater  then ${b}`)
 }else if(b > a){
  console.log(`${b} is Greater  then ${a}`)
 }else{
     console.log(`${a} is equal to ${b}`)
 }
}
num(0, 1)



// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))
function greetUser(gender) {
    if (gender == "Male" || gender == "male") {
        alert(" Good Morning Sir")
    } else if (gender == "Female" || gender == "female") {
        alert(" Good Morning Ma'am")
    }
}
greetUser(prompt("Enter Your Gender Here(Male/Female) "))



// Extend the previous program and handle the wrong inputs. Print Good Morning Sir for input m or M & Good morning Ma'am for input F or f, else print Wrong Input.
function greetUser(gender) {
    if (gender == "M" || gender == "m") {
          alert("Good Morning Sir")
    } else if (gender == "F" || gender == "f") {
       alert("Good morning Ma'am")
    } else {
        alert("Wrong Input")
    }
}
greetUser(prompt("Enter Your Gender Here(M/F) "))
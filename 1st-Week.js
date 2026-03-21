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
let a = 10;
let b = 32;

a = a ^ b
b = a ^ b
a = a ^ b
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



// Accept an integer and check whether it is an even number or odd.
function int(a) {
    if (a % 2 === 0) {
        alert("Number Is EVEN")
    } else {
        alert("Number Is ODD")
    }
}
int(prompt("Enter A number "))



// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)
function voter(name, age) {
    age = Number(age)
    if (age >= 18) {
      alert(`Valid - Hello ${name}, You are a valid voter`)
    }else if(age < 18 ){
        let yearsLeft = 18 - age
        alert(`Invalid - Sorry ${name}, you can't cast the vote`,`After ${yearsLeft} years you will be eligible`)
    }else{
        alert("Wrong Input")
    }
}
voter(prompt("Enter Your Name = "), prompt("Enter Your Age = "))



// Accept a day number between 1-7 and print the corresponding day name.

function getDay(num) {
    num = Number(num)
    switch (num) {
        case 1:
            alert("sunday")
            break;
        case 2:
            alert("Monday")
            break;
        case 3:
            alert("Tuesday")
            break;
        case 4:
            alert("Wednesday")
            break;
        case 5:
            alert("Thursday")
            break;
        case 6:
            alert("Friday")
            break;
        case 7:
            alert("Saturday")
            break;

            default:alert("Invalid Input")
    }
}
getDay(prompt("Enter a number (1-7):"))
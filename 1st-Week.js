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
function add(a , b){
  a = Number(a)
  b = Number(b)
  const sum = a + b
  alert(`The Sum of ${a} & ${b} = ${a + b}`)
}

add(prompt("Enter the First Number "),prompt("Enter the Secound Number "))


// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
function user(name, age){
    age = Number(age)
    if (isNaN(age)){
        alert("Invalid Input")
    }else
     alert(`Hello ${name}, you are ${age} years old.`)
}
user(prompt("Enter Your Name Here "), prompt("Enter Your Age Here "))



// Solve Increment & decrement operator questions
function num(int){
    int = Number(int)
 const solve = ++int + int++ + --int;
 alert(`${solve}`)
}
num(prompt("Enter a Number"))



// Accept two numbers from user and swap their values (Part 2 - Swap without using third variable)
function swap(a, b) {
    a = Number(a)
    b = Number(b)
    if (isNaN(a) || isNaN(b)) {
        return alert("Invalid Input")
    }
    a = a ^ b
    b = a ^ b
    a = a ^ b
    return alert(`${a} ${b}`)
}
swap(prompt("Enter A Number Here "), prompt("Enter B Number Here "))



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



// Accept three numbers and print the greatest among them
function num(a, b, c) {
    a = Number(a)
    b = Number(b)
    c = Number(c)
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        alert("Invalid Input")
    } else if (a >= b && a >= c) {
        alert("A is Greater then B or C")
    } else if (b >= a && b >= c) {
        alert("B is Greater then A or C")
    } else if (c >= a && c >= b) {
        alert("C is Greater then A or B")
    } else {
        alert("All number Are same")
    }
}
num(prompt("Enter a Number A => "), prompt("Enter a Number B => "), prompt("Enter a Number C => "))



// Accept a year and check if it a leap year or not (google to find out what's a leap year)
function CheckYear(year) {
    year = Number(year)
    if (year % 4 === 0 && year % 100 !== 0) {
        alert("leap year")
    } else if (year % 400 == 0) {
        alert("leap year")
    } else {
        alert("Not A leap year")
    }
}
CheckYear(prompt("Enter the year an check, Year is leap year or not "))



// Shop discount
function user(amount) {
    amount = Number(amount)
    let discount = 0
    if (isNaN(amount)) {
        console.log("Invalid Input")
    } else if (amount < 500) {
        discount = 0
    } else if (amount >= 500) {
        discount = 10
    } else if (amount >= 1000) {
        discount = 20
    } else if (amount >= 2000) {
        discount = 30
    }
    discountAmount = (amount * discount) / 100
    finalAmount = amount - discountAmount
    console.log(`Orignal Amount = ${amount}`)
    console.log(`Discount Persent = ${discount}%`)
    console.log(`Discount Amount = ${discountAmount}`)
    console.log(`Final Amount = ${finalAmount}`)
}
user(prompt("inter Your Amount "))



// Bijli Bill
function user(units) {
    let Bill = 0
    units = Number(units)
    if (isNaN(units)) {
        return console.log("Invalid Input")
    } else if (units <= 100) {
        Bill = units * 5

    } else if (units <= 200) {
        Bill = 100 * 5 + (units - 100) * 7

    } else if (units <= 300) {
        Bill = 1000 * 5 + (units - 100) * 7 + (units - 200) * 10
        
    } else if (units > 300) {
        Bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12

    }
    console.log(`Total Bill Amount ${Bill}`)
}
user(prompt("inter Your Bill units "))



// Accept an English alphabet from user and check if it is a consonant or a vowel.
function User(alphabet){
 if((alphabet >= "A" && alphabet <= "Z") || (alphabet >= "a" && alphabet <= "z")){
    alphabet = alphabet.toLowerCase()
switch(alphabet){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("It is a vowel")
        break
    default:
        console.log("It is a consonant")
}
 }else{
    console.log("Invalid Input")
 }
}
User(prompt("Enter one Alphabet "))



// Accept an integer and Print \Hello World\" n times"
let n = 5;
for(let i = 1; i <= n ; i++){
console.log("Hello world")
}


//  Print natural number up to n.
let n = 10;

for(let i = 0; i <= n; i++){
  console.log(i)
}



// Reverse for loop. Print n to 1.
let n = 0

for (let i = 10; i >= n; i--) {
    console.log(i)
}


// Take a number as input and print its table (Ex: 5 * 1 = 5 ... up to 10 terms)
let n = 3;
let i = 1
while (i <= 10) {
    console.log(n * i)
    i++
}



// Sum up to n terms.
let n = 10;
let sum = 0;
let i = 1;
while(i <= n){
  sum = sum + i
  console.log(sum)
  i++
}



// Factorial of a number
let n = 10;
let fact = 1;
let i = 1;
while(i <= n){
    fact = fact * i;
    console.log(fact)
    i++
}



// Print the sum of all even & odd numbers in a range separately.
let n = 20;
let evenSum = 0;
let oddSum = 0;
let i = 1;

while(i <= n){
    if (i % 2 === 0) {
        evenSum = evenSum + i
    } else {
        oddSum = oddSum + i
    }
   i++
    console.log(evenSum)
    console.log(oddSum)
}  



// Print the sum of all factors of a number (Ex: 50 -> 1 + 2 + 5 + 10 + 25 = 43)
let n = 50;
let sum = 0;
let i = 1;
while (i < n) {
    if (n % i == 0) {
     sum = sum + i
    }
    i++
}
console.log(sum)



// Check if the number is Prime or not.
function isPrime(n){
    if (n <= 1){
        return"Not Prime"
    }
    for(let i = 2; i * i <= n; i++){
    if(n % i == 0){
      return"Not Prime"
    }
    }
  return"Prime";
}
console.log(isPrime(17))



// Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)
function input(a, b) {
    let result = 1;
    for(let i = 1; i <= b; i++){
     result = result * a
    }
    console.log(result)
}
input(2,5)



// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)
let n = 543;
while(n > 0){
 let digit = n % 10
 console.log(digit)
 n = Math.floor( n / 10)
}



// Sum of digits of a number (Ex: 936 = 18)
let n = 209;
let sum = 0;
while(n > 0){
    digit = n % 10
    sum = sum + digit
    n = Math.floor(n / 10)
}
console.log(sum)



// Accept a number and print its reverse
let n = 376;
let rev = 0;
while(n > 0){
   digit = n % 10
   rev = rev * 10 + digit
   n = Math.floor(n / 10) 
}
console.log(rev)



// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)
let n = 775653;
let orig = n;
rev = 0
while(n > 0){
 digit = n % 10
 rev = rev * 10 + digit
 n = Math.floor(n / 10)
}if(orig == rev){
 console.log("Palindrome ")
}else{
    console.log("Not Palindrome")
}



// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)
function isStrongNumber(n) {
    let orig = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    if (sum === orig) {
        console.log("Strong Number");
    } else {
        console.log("Not Strong Number");
    }
}
isStrongNumber(145);



// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)
function isAutomorphic(num){
let sque = num * num;
let temp = num;
while(temp > 0){
    if(temp % 10 != sque % 10){
         console.log("Not Automorphic")
         return
    }
    temp = Math.floor(temp / 10);
    sque = Math.floor(sque / 10);
}
console.log("Automorphic")
}
isAutomorphic(76)



// Print \hello\" until user gives wrong input using do while
let choice;
    do {
        console.log("Hello")
        choice = prompt("Enter y to continue, any other key to stop")
    } while (choice == "y");



// Make a choice based calculator using do while
let choice;
do {
    choice = parseInt(prompt(
        "Calculator Menu:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Exit\n" +
        "Enter your choice:"
    ));
    if (choice >= 1 && choice <= 4) {
        let num1 = parseFloat(prompt("Enter first number:"));
        let num2 = parseFloat(prompt("Enter second number:"));
        let result;

        switch (choice) {
            case 1:
                result = num1 + num2;
                alert("Result = " + result);
                break;
            case 2:
                result = num1 - num2;
                alert("Result = " + result);
                break;
            case 3:
                result = num1 * num2;
                alert("Result = " + result);
                break;
            case 4:
                result = num1 / num2;
                alert("Result = " + result);
                break;
        }
    } else if (choice === 5) {
        alert("Calculator closed.");
    } else {
        alert("Invalid choice");
    }
} while (choice !== 5);



// Print Weekday using Switch
function Weekday(day) {
    switch (day) {
        case 1:
            console.log("Sunday")
            break;
        case 2:
            console.log("Monday")
            break;
        case 3:
            console.log("Tuesday")
            break;
        case 4:
            console.log("Wednesday")
            break;
        case 5:
            console.log("Thursday")
            break;
        case 6:
            console.log("Friday")
            break;
        case 7:
            console.log("Saturday")
            break;
        default:
            console.log("Invalid Input")
            break;
    }
}
Weekday(parseInt(prompt("Enter The Number Between 1 To 7 ")))



// Question 22 using Switch (Check Consonant or Vowel using Switch)
function CheckLetter(letter){

    switch (letter.toLowerCase()) {
        case "a":
            console.log("Vowel");
            break;
         case "e":
            console.log("Vowel");
            break;
         case "i":
            console.log("Vowel");
            break;
         case "o":
            console.log("Vowel");
            break;
         case "u":
            console.log("Vowel");
            break;
        default:
            console.log("Consonant");
            break;
    }
}
CheckLetter(prompt("Inter One Alphabet An check Is Vowel or Consonent "))



// Project - Guess Game
let rendomNum = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 10;
do {
    alert("You have " + attempts + " attempts left ")
    guess = Number(prompt("Enter a Number "))
    if (guess > rendomNum) alert("Number Is Too High")
    else if (guess < rendomNum) alert("Number is too Low")
    else {
        alert("Congratulations you gussed the number in " + (10 - attempts) + " attempts");
        break;
    }
    attempts--;

} while (guess !== rendomNum && attempts > 0);
if (attempts == 0) alert("Sorry you lose the game.The number was" + rendomNum)



// Project - Restaurant v1.
let menu;
let grandTotale = 0;
do {
   menu = parseInt(prompt(
    "Menu Book:\n"+
    "1. Pizza- 200\n"+
    "2. Burger- 100\n"+
    "3. Pasta- 150\n"+
    "4. Sandwich- 60\n"+
    "5. Exit\n"+
    "Enter your choice: "
   ));
   if(menu >= 1 && menu <= 4){
    let quantity =  parseFloat(prompt("Enter Quantity: "));
    let totalAmount = 0;
    let price = 0;
     switch (menu) {
        case 1:
            price = 200;
            alert("Thank you for Ordering Pizza")
            break;
           case 2:
            price = 100;
            alert("Thank you for Ordering Burger")
            break;
           case 3:
            price = 150;
            alert("Thank you for Ordering Pasta")
            break;
           case 4:
            price = 60;
            alert("Thank you for Ordering Sandwich")
            break;        
     }

     totalAmount = price * quantity;
     grandTotale += amount;
     alert("Amount " + amount);

   }else if(menu === 5){
    alert("Total Bill = " + grandTotale + "\nThank You Visit Again!" )
   }else{
    alert("Invalid Choice")
   }
} while (menu !== 5);



// Right Triangle - Star Pattern
let n = 5;
for (let i = 1; i <= n; i++) {
    let row ="";
    for (let j = 1; j <= i; j++) {
     row += "*";
    }
    console.log(row)
}



// Right Triangle - Number Pattern
let n = 5
for(let i = 1; i <= n; i++){
 let num = "";
 for(let j = 1; j <= i; j++){
 num += j;
 }
 console.log(num)
}



// Right Triangle - Alphabet Pattern
let n = 5;

for(let i = 1; i <= n; i++ ){
    let int = "";
    for(let j = 1; j <= i; j++){
     int += String.fromCharCode(64 + j);
    }
    console.log(int)
}



// Inverted Right Triangle Pattern
let n = 5;

for(let i = 1; i <= n; i++){
    let row = "";
     for(let j = 1; j <= n - i + 1; j++ ){
      row += "*";
     }
     console.log(row)
}



// Mirrored Right Triangle Pattern
let n = 5;

for(let i = 1; i <= n ; i++){
    let row = "";

    for(let j = 1; j <= n - i; j++){
      row += " ";
    }
    
    for(let k = 1; k <= i; k++){
      row += "*";
    }
    console.log(row)
}



// Triangle Pattern
let n = 5;

for(let i = 1; i <= n; i++){
    let row = "";
    for(let j = 1; j <= n - i; j++){
     row += " ";
    }
    for(let k = 1; k <= 2 * i - 1; k++){
      row += "*";
    }
  console.log(row)

}



// V Pattern
let n = 5;

for(let i = 1; i <= n; i++){
    let row = "";

    for(let j = 1; j < i; j++){
     row += " ";
    }
    row += "*";
    for(let k = 1; k <= 2 * (n - i) - 1; k++){
      row += " ";
    }
    if(i != n){
      row += "*";
    }
  console.log(row)

}



// X Pattern
let n = 5;
for(let i = 1; i <= n; i++){
  let row = "";
  for(let j = 1; j <= n; j++){
   if (i == j || i + j == n + 1) {
    row += "*";
   } else {
    row += " ";
   }
  }
 console.log(row)
}
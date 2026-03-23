// Accept the User's name, age and print in following manner (Ex - Hello Shery, you are 12 years old.)
function user(name, age){
    age = Number(age)
    if (isNaN(age)){
        alert("Invalid Input")
    }else
     alert(`Hello ${name}, you are ${age} years old.`)
}
user(prompt("Enter Your Name Here "), prompt("Enter Your Age Here "))
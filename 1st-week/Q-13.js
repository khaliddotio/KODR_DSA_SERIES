// Accept the gender from the user as char and print the respective greeting message (Ex - Good Morning Sir (on the basis of gender))


function greetUser(gender) {
    if (gender == "Male" || gender == "male") {
        alert(" Good Morning Sir")
    } else if (gender == "Female" || gender == "female") {
        alert(" Good Morning Ma'am")
    }
}
greetUser(prompt("Enter Your Gender Here(Male/Female) "))
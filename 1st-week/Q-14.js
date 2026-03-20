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
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
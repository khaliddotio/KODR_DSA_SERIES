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

// Write a program to take two inputs a, b & find the value of a raised to the power of b. (Ex - a = 2, b = 5, OP - 2^5 = 32)

function input(a, b) {
    let result = 1;
    for(let i = 1; i <= b; i++){
     result = result * a
    }
    console.log(result)
}
input(2,5)
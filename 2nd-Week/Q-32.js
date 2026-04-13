// Find Greatest Common Divisor of Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function num(a, b){
 while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
 }
 return a
}

let min = Math.min(...arr);
let max = Math.max(...arr);
let result = num(min, max)

console.log(result)
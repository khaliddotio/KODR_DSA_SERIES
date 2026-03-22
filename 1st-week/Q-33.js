// Separate each digit of a number and print it on a new line (Ex - 123 -> OP: 3, 2, 1)
let n = 543;
while(n > 0){
 let digit = n % 10
 console.log(digit)
 n = Math.floor( n / 10)
}
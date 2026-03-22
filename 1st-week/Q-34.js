// Sum of digits of a number (Ex: 936 = 18)
let n = 209;
let sum = 0;
while(n > 0){
    digit = n % 10
    sum = sum + digit
    n = Math.floor(n / 10)
}
console.log(sum)
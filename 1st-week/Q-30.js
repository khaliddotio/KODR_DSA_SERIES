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
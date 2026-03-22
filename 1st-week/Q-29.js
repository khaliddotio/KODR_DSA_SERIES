// Print the sum of all even & odd numbers in a range separately.
let n = 20;
let evenSum = 0;
let oddSum = 0;
let i = 1;

while(i <= n){
    if (i % 2 === 0) {
        evenSum = evenSum + i
    } else {
        oddSum = oddSum + i
    }
   i++
    console.log(evenSum)
    console.log(oddSum)
}
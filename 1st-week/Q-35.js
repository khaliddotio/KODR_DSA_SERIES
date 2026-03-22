// Accept a number and print its reverse
let n = 376;
let rev = 0;
while(n > 0){
   digit = n % 10
   rev = rev * 10 + digit
   n = Math.floor(n / 10) 
}
console.log(rev)
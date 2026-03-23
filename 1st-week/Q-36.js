// Accept a number and check if it is a palindromic number (If number and its reverse are equal, Ex: 12321 - Reverse - 12321)
let n = 775653;
let orig = n;
rev = 0
while(n > 0){
 digit = n % 10
 rev = rev * 10 + digit
 n = Math.floor(n / 10)
}if(orig == rev){
 console.log("Palindrome ")
}else{
    console.log("Not Palindrome")
}
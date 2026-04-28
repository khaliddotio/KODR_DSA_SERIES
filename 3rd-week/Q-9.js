// Palindromic String using method and Two pointer algorithm (hint: Array reverse algo)

let str = prompt("Enter the String : ");
let left = 0;
let right = str.length - 1;
let isPalindrome = true;
while (left < right) {
    if (str[left] !== str[right]) {
        isPalindrome = false;
        break;
    }
    left++;
    right--;
}
if (isPalindrome) {
    console.log("Palindromic");
} else {
    console.log("Not palindromic");
}
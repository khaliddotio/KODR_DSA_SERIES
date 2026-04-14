// Minimum Sum of Four Digit Number After Splitting Digits

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr.sort((a, b) => a - b)
let num1 = 0;
let num2 = 0;

for(let i = 0; i < arr.length; i++){
  if( i % 2 === 0){
    num1 = num1 * 10 + arr[i];
  }else{
    num2 = num2 * 10 + arr[i];
  }
}
console.log(num1 + num2);

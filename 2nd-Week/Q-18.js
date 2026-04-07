// You are given two arrays of **equal length**: An **integer array** A[] and a **character array** B[], where each character is one of 'a', 'b', or 'c'. Find the **minimum** value of the expression: min(sum of values linked with 'a' + sum of values linked with 'b', sum of values linked with 'c').
  
let arr = [1, 2, 3, 4, 5];
let charArr = ['a', 'b', 'c', 'a', 'b'];

function minSum(arr, charArr) {
    let sumA = 0, sumB = 0, sumC = 0;
    
    for (let i = 0; i < arr.length; i++) {
        if (charArr[i] === 'a') {
            sumA += arr[i];
        } else if (charArr[i] === 'b') {
            sumB += arr[i];
        } else {
            sumC += arr[i];
        }
    }
    return Math.min(sumA + sumB, sumC);
}
console.log(minSum(arr, charArr)); 
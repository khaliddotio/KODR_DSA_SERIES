// Minimum Number of Seat Everyone
let arr = [1, 1, -1, 1, -1, 1]
let current = 0;
let max = 0;
for(let i = 0; i < arr.length; i++){
  current += arr[i];
  max = Math.max(max, current);
}
console.log(max)
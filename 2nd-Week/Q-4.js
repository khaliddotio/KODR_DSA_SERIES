
// Check if array is sorted in increasing order or not. (Ex 1 - { 1, 5, 8, 9, 10, 15 } - OP = \\YES\\"

let arr = [1, 5, 8, 9, 10, 15];

for(let i = 1; i < arr.length; i++){
  if(arr[i] < arr[i - 1]){
   console.log("No")
   return
  }
}
console.log("Yes")
// Move all the negative elements on the left side and positive elements on the right side O(n).
let arr = [23, -45, 67, -12, 89, -34, 56, -78, 11, -90];
let i = 0;
let j = 0;
while(i < arr.length){
  if(arr[i] < 0){
   let temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
   j++
  }
  i++
}
console.log(arr)
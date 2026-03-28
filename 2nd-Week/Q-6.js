// Array left Rotation by 1

let arr = [1, 2, 3, 4, 5];
let n = arr.length
for(let i = 0; i < n ; i++){
   arr[i] = arr(i - 1  + n )%n
}
console.log(arr)
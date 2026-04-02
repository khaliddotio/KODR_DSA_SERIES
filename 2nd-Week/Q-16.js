// Build Array from Permutation

let arr = [1, 4, 0, 3, 2, 5];
let num = []

for(let i = 0; i < arr.length; i++){
  num[i] = arr[arr[i]]
}
console.log(num)

// function Barray(num){
//     let n = num.length;
//     for(let i = 0; i < n ; i++){
//        num[i] = num[i] + n *(num[num[i]] % n)
//     }
// for(let i = 0; i < n; i++){
// num[i] =  Math.floor(num[i] / n)
// }
// return num
// }
// let arr = [1, 4, 0, 3, 2, 5];
// console.log(Barray(arr))
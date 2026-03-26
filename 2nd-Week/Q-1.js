// Find the greatest element (Ex: {2, 96, 69, 77, 145, 20} = Max element = 145 found at 4 index)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0

for(let i = 0; i < arr.length; i++){
   if(arr[i] > arr[max]){
     max = i
   }
}
console.log(`Max element => ${arr[max]} found at ${max} index`)
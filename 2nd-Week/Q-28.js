// Smallest Index With Equal Value

let arr = [0, 2, 3, 5, 6, 8, 9, 10];
let result = -1

for(let i = 0; i < arr.length; i++){
  if(i % 10 === arr[i]){
    result = i;
    break
  }
}
console.log(result)
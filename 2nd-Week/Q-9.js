// Linear Search an array - If element found print the index, else -1
let arr = [10, 20, 30, 40, 50, 60];
let num = 40;
let foundIndex = -1
for(let i = 0; i < arr.length; i++){
    if(arr[i] === num){
      foundIndex = i
      break;
    }
}
if(foundIndex !== -1){
  console.log(foundIndex)
}else{
    console.log(-1)
}

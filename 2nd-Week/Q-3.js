// Find the second greatest element (Ex: {2, 96, 69, 77, 145, 20} = Second greatest element = 96)

let arr = [2, 96, 69, 77, 145, 20];
let max = 0;
let secMax = 0;

for(let i = 0; i < arr.length; i++){
    if(arr[i] > max){
        secMax = max
        max = arr[i]
    }else if(arr[i] > secMax && arr[i] != secMax){
        secMax = arr[i]
    }
}
console.log(secMax)
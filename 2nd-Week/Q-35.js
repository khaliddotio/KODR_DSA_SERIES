// Sort Even and Odd Indices Independently

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let even = [];
let odd = [];

for(let i = 0; i < arr.length; i++){
    if(i % 2 === 0){
     even.push(arr[i]);
    }else{
        odd.push(arr[i]);
    }
}
even.sort((a, b) => a - b);
odd.sort((a, b) => b - a);

let e = 0, o = 0;
for(let i = 0; i < arr.length; i++){
 if(i % 2 === 0){
    arr[i] = even[e++]
 }else{
    arr[i] = odd[o++]
 }
}

console.log(arr)
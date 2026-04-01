// Array left rotation by K elements
let arr = [1, 2, 3, 4, 5];
let k = 3;
let  n = arr.length;
result = new Array(n)
for(let i = 0; i < n ; i++){
    result[i] = arr[(i + k) % n]
}
console.log(result)
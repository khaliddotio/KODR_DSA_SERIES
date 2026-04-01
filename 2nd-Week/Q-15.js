// Concatenation of array
let arr = [1, 2, 3];
let n = 2;
let result = []
for (let i = 0; i < n * arr.length; i++) {
    result.push(arr[i %  arr.length]);
}
console.log(result)

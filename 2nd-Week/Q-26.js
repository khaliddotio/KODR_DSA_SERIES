// Count Equal and Divisible Pairs in an Array

let arr = [1, 2, 4, 3, 2, 1, 3, 4, 3, 1,];
let k = 2;
let count = 0;

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] == arr[j] && (i * j) % k === 0) {
            count++
        }
    }
}
console.log(count)

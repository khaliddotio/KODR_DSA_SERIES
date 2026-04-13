// Count Hills and Valleys in an Array
let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let count = 0;
let prev = arr[0];

for (let i = 1; i < arr.length -1; i++) {
    if (arr[i] === arr[i + 1]) continue;

    if (
        (arr[i] > prev && arr[i] > arr[i + 1]) ||
        (arr[i] < prev && arr[i] < arr[i + 1])
    ) {
        count++;
        prev = arr[i]
    } else {
        prev = arr[i]
    }
}
console.log(count);
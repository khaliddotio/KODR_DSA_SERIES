// Find sum of minimum absolute difference of the given array
let arr = [2, 3, 4, 6, 7, 8];
function minAbsoluteDiffSum(arr) {
    let n = arr.length
    arr.sort((a, b) => a - b)
    let sum = 0;
    for (let i = 0; i < n; i += 2) {
        sum += Math.abs(arr[i] - arr[i + 1])
    }
    return sum;
}
console.log(minAbsoluteDiffSum(arr))
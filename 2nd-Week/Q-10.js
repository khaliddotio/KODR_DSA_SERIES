// Binary Search. If element found print the index, else -1
let arr = [10, 20, 30, 40, 50, 60];
let target = 40;

let low = 0, high = arr.length - 1;

while (low <= high) {
    let mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
        console.log(mid);
        break;
    }

    if (target < arr[mid]) high = mid - 1;
    else low = mid + 1;
}

if (low > high) console.log(-1);
// Min Max Game - Array

let arr = [1, 3, 5, 2, 4, 8, 2, 2];
while (arr.length > 1) {
    let temp = [];
    for (let i = 0; i < arr.length; i += 2) {
        let pairIndex = i / 2;
        if (pairIndex % 2 === 0) {
            temp.push(Math.min(arr[i], arr[i + 1]))
        } else {
            temp.push(Math.max(arr[i], arr[i + 1]))
        }
    }
    arr = temp;
}
console.log(arr[0])
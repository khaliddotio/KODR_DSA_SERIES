// Sort First half in Ascending and Second half in descending order in an array
let arr = [2, 1, 4, 3, 6, 8, 5, 7]
let n = arr.length
let mid = Math.floor(n / 2)
let first = arr.slice(0, mid)
let last = arr.slice(mid, n)

first.sort((a , b) => a - b)
last.sort((a, b) => b - a)

let result = [...first , ...last]

console.log(result)
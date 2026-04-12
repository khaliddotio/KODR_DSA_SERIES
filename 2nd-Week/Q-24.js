// Divide Array Into Equal Pairs

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let set = new Set();

for (let num of arr) {
    if (set.has(num)) {
        set.delete(num);
    } else {
        set.add(num);
    }
}
console.log(set.size === 0);
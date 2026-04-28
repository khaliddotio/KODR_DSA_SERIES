// Set Matrix Zeroes
let arr = [
  [1, 1, 1],
  [1, 0, 1],
  [1, 1, 1],
];

let row = new Set();
let col = new Set();

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (arr[i][j] === 0) {
      row.add(i);
      col.add(j);
    }
  }
}

for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr[0].length; j++) {
    if (row.has(i) || col.has(j)) {
      arr[i][j] = 0;
    }
  }
}

console.log(arr);
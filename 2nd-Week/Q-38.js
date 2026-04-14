// Matrix Diagonal Sum

let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
let n = matrix.length
let sum = 0;

for(let i = 0; i < n; i++){
sum += matrix[i][i];
sum += matrix[i][n - 1 - i];
}

if(n % 2 === 1){
sum -= matrix[Math.floor(n / 2)][Math.floor(n / 2)];
}

console.log(sum)
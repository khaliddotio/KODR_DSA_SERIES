// Search a 2D Matrix


let searchMatrix = function(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;

    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] === target) return true;
        else if (matrix[row][col] > target) col--;
        else row++;
    }

    return false;
};

const Matrix = [[1,2,3],[4,5,6],[7,8,9]];
const target = 9;

console.log(searchMatrix(Matrix,target));   
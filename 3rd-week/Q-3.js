// Rotate Image

let rotate = function(Matrix){
    const n = Matrix.length;

    for(let i = 0; i < n; i++ ){
        for(let j = i ; j < n; j++){
        [Matrix[i][j], Matrix[j][i]] = [Matrix[j][i], Matrix[i][j]];
        }
    }       
    for(let i = 0; i < n; i++){
        Matrix[i].reverse();
    }
    return Matrix;
}

const Matrix = [[1,2,3],[4,5,6],[7,8,9]];

console.log(rotate(Matrix));
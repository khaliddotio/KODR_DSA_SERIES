// Determine Whether Matrix Can Be Obtained By Rotation

function Rotation(mat, target){
 const n = mat.length;

 let  rot0 = true, rot90 = true, rot180 = true, rot270 = true;

 for(let i = 0; i < n; i++ ){
    for(let j = 0; j < n; j++){
       
        if(mat[i][j] !== target[i][j]) rot0 = false;
        if(mat[i][j] !== target[j][n - 1 - i]) rot90 = false;
        if(mat[i][j] !== target[n - 1 - i][n - 1 - j]) rot180 = false;
        if(mat[i][j] !== target[n - 1 - j][i]) rot270 = false;

    }
 }
 return rot0 || rot90 || rot180 || rot270;
}



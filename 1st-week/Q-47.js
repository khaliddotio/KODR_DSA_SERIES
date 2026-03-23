// Right Triangle - Alphabet Pattern
let n = 5;

for(let i = 1; i <= n; i++ ){
    let int = "";
    for(let j = 1; j <= i; j++){
     int += String.fromCharCode(64 + j);
    }
    console.log(int)
}
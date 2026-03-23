// Automorphic number (Ex: 5 = 25 = 625 = 390625, 6=36, 76 = 5776)
function isAutomorphic(num){
let sque = num * num;
let temp = num;
while(temp > 0){
    if(temp % 10 != sque % 10){
         console.log("Not Automorphic")
         return
    }
    temp = Math.floor(temp / 10);
    sque = Math.floor(sque / 10);

}
console.log("Automorphic")

}
isAutomorphic(76)
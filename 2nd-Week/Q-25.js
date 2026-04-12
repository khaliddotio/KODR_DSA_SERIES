// Maximum Number of Pairs in Array

let arr = [1, 2, 4, 3, 2, 1, 3, 4 , 3, 1,];
let set = new Set();
let pairs = 0;

for(let num of arr){
 if(set.has(num)){
    set.delete(num);
    pairs++  
 }else{
    set.add(num)
 }
}
let freq = set.size

console.log(pairs, freq)
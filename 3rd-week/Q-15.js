// Maximum Number of Words Found in Sentences
let str = ["Hello World", "i love java script", "coding"]
let max = 0;
for(let s of str){
    let count = s.split(" ").length;
    max = Math.max(max, count)
}
console.log(max)
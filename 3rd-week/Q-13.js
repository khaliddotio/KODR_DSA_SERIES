// Accept a space separated sentence and split it into words. Print each word on a new line with the first letter capitalized. (IN- Hello bhai kaise ho, OP- Hello, Bhai, Kaise, Ho)
let str = prompt("Enter a String : ")
let words = str.split(" ");
for( let w of words){
    if(w.length > 0){
        let result = w[0].toUpperCase() + w.slice(1).toLowerCase();
        console.log(result)
    }
}
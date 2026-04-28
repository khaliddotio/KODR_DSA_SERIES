// Take an array of strings words and a String Prefix. Print the number of strings in words that contain pref as a prefix. (Example - Input: words = [\pay\"

let words = ["pay", "attention", "practice", "attend"];
let pref = "pa";
let count = 0;
for(let w of words){
    if(w.startsWith(pref))
     count++;
}
console.log(count)
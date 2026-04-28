// Extend the previous question and capitalize the first & last character of each word in the sentence and print the new sentence (Ex - Hello bhai Kaise ho a, Output - HellO BhaI KaisE HO A)
let str = "het i am khalid";
console.log(
    str.trim().split(/\s+/).map(w => 
        w.length === 1 ? w.toUpperCase() : w[0].toUpperCase() + w.slice(1, -1) + w.slice(-1).toUpperCase()
    ).join(" ")
)
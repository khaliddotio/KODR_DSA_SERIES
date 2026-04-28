// Count vowels and consonants in a string
let str = prompt('Enter the String : ');
let v = (str.match(/['aeiou']/gi) || '').length;
let c = (str.match(/[a-z&&[^aeiou]]/gi) || "").length -v;
console.log("vowels : " + v)
console.log("consonants : " + c)
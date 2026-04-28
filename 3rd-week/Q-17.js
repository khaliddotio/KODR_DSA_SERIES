// Check Two Strings are Anagram or Not (Anagrams words have the same word length & same character count. Examples of anagram words are arc and car, state and taste, night and thing etc.)
let str1 = prompt("Enter the String 1 : ");
let str2 = prompt("Enter the String 2 : ");
let result =
str1.split("").sort().join("") === str2.split("").sort().join("");
console.log(result ? "Anagram" : "Not Anagram");
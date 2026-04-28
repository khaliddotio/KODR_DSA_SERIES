// Toggle each alphabet of String (In - AcgDfD Output - aCGdFd)

let str = prompt("Enter the number : ");
let result = [...str]
.map(ch => ch === ch.toUpperCase() ? ch.toLowercase() : ch.toUpperCase())
.join('');
console.log(result)

// Accept the three sides of triangle and calculate the area using Heron's formula

function calculateTriangle (a,b,c){
let s = (a + b + c) / 2 
let multi = s * (s-a) * (s-b) * (s-c)
let area = (Math.sqrt(multi))

console.log(`Area of triangle ${area} `)
}
calculateTriangle(9,9,9)
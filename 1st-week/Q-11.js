// Find circumference and area of circle

function circle(radius){

    let circumference = 2* Math.PI * radius
    let area = Math.PI * radius * radius 
    
    console.log(`The circumference is = ${circumference}`)
    console.log(`The area is = ${area}`)
}
circle(20)
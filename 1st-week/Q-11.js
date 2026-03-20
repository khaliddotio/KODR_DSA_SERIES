// Find circumference and area of circle

function circle(radius){

    let circumference = 2* Math.PI * radius
    let area = Math.PI * radius * radius 
    
    alert(`The circumference is = ${circumference}`)
    alert(`The area is = ${area}`)
}
circle(prompt("Enter the radius of circle "))
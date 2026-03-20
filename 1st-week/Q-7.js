// Accept the length and width of a rectangle. Calculate & print the area and perimeter.

function calculateRectangle(length, width){
 const area = length * width
 const perimeter = 2 * (length + width)
 console.log(`Area ${area}`)
 console.log(`Perimeter ${perimeter}`)
}

calculateRectangle(15, 20)

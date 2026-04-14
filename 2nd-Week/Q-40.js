// Flipping an image
let image = [[1, 0, 0],[0, 1, 0],[1, 1, 1]];

for(let i = 0; i < image.length; i++){
      let row = image[i]
    row.reverse();
    for(let j = 0; j < row.length; j++){
        row[j] = 1 - row[j]
    }
}
console.log(image)
// Find the Highest Altitude

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let currentAltitude = 0;
let maxAltitude = 0;
for(let i = 0; i < arr.length; i++){
      currentAltitude += arr[i];
      maxAltitude = Math.max(maxAltitude, currentAltitude);
}
console.log(maxAltitude);
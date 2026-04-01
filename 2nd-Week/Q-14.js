// Special number using methods.

function isSpecialNum(num) {
    let temp = num;
    let sum = 0;
    let product = 1;

    while (temp > 0) {
        let digit = temp % 10;
        sum += digit;
        product *= digit;
       temp = Math.floor(temp / 10)
    }
   return (sum + product) === num;
}

let number = 59;

if(isSpecialNum(number)){
console.log("Special Number")
}else{
    console.log("Not a Special number")
}
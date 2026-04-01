// Strong number using methods.

function factorial(n) {
    let fact = 1;
    for (let i = 1; i <= n; i++) {
        fact *= i;
    }
    return fact;
}

function isStrongNum(num) {
    let temp = num;
    let sum = 0;

    while (temp > 0) {
        let digit = temp % 10;
        sum += factorial(digit);
        temp = Math.floor(temp / 10)
    }
    return sum === num
}

let number = 145;

if (isStrongNum(number)) {
    console.log("Strong Number")
} else {
    console.log("Not a strong Number")
}

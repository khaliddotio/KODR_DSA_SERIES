// Accept a number and check if it is a strong number or not (Sum of factorial of each digit, Ex: 145 = 1! + 4! + 5! = 145)
function isStrongNumber(n) {
    let orig = n;
    let sum = 0;

    while (n > 0) {
        let digit = n % 10;
        let fact = 1;

        for (let i = 1; i <= digit; i++) {
            fact = fact * i;
        }
        sum = sum + fact;
        n = Math.floor(n / 10);
    }
    if (sum === orig) {
        console.log("Strong Number");
    } else {
        console.log("Not Strong Number");
    }
}
isStrongNumber(145);
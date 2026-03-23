// Make a choice based calculator using do while
let choice;
do {
    choice = parseInt(prompt(
        "Calculator Menu:\n" +
        "1. Addition\n" +
        "2. Subtraction\n" +
        "3. Multiplication\n" +
        "4. Division\n" +
        "5. Exit\n" +
        "Enter your choice:"
    ));
    if (choice >= 1 && choice <= 4) {
        let num1 = parseFloat(prompt("Enter first number:"));
        let num2 = parseFloat(prompt("Enter second number:"));
        let result;

        switch (choice) {
            case 1:
                result = num1 + num2;
                alert("Result = " + result);
                break;
            case 2:
                result = num1 - num2;
                alert("Result = " + result);
                break;
            case 3:
                result = num1 * num2;
                alert("Result = " + result);
                break;
            case 4:
                result = num1 / num2;
                alert("Result = " + result);
                break;
        }
    } else if (choice === 5) {
        alert("Calculator closed.");
    } else {
        alert("Invalid choice");
    }
} while (choice !== 5);
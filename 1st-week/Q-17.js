// Accept a day number between 1-7 and print the corresponding day name.

function getDay(num) {
    num = Number(num)
    switch (num) {
        case 1:
            alert("sunday")
            break;
        case 2:
            alert("Monday")
            break;
        case 3:
            alert("Tuesday")
            break;
        case 4:
            alert("Wednesday")
            break;
        case 5:
            alert("Thursday")
            break;
        case 6:
            alert("Friday")
            break;
        case 7:
            alert("Saturday")
            break;

            default:alert("Invalid Input")
    }
}
getDay(prompt("Enter a number (1-7):"))
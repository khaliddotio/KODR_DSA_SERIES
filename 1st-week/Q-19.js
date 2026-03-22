// Accept a year and check if it a leap year or not (google to find out what's a leap year)

function CheckYear(year) {
    year = Number(year)
    if (year % 4 === 0 && year % 100 !== 0) {
        alert("leap year")
    } else if (year % 400 == 0) {
        alert("leap year")
    } else {
        alert("Not A leap year")
    }
}
CheckYear(prompt("Enter the year an check, Year is leap year or not "))
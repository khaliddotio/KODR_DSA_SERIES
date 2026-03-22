// Bijli Bill

function user(units) {
    let Bill = 0
    units = Number(units)
    if (isNaN(units)) {
        return console.log("Invalid Input")
    } else if (units <= 100) {
        Bill = units * 5

    } else if (units <= 200) {
        Bill = 100 * 5 + (units - 100) * 7

    } else if (units <= 300) {
        Bill = 1000 * 5 + (units - 100) * 7 + (units - 200) * 10
        
    } else if (units > 300) {
        Bill = 100 * 5 + 100 * 7 + 100 * 10 + (units - 300) * 12
    }
    console.log(`Total Amount ${Bill}`)

}
user(prompt("inter Your Bill units "))
// Shop discount

function user(amount) {
    amount = Number(amount)
    let discount = 0
    if (isNaN(amount)) {
        console.log("Invalid Input")
    } else if (amount < 500) {
        discount = 0
    } else if (amount >= 500) {
        discount = 10
    } else if (amount >= 1000) {
        discount = 20
    } else if (amount >= 2000) {
        discount = 30
    }
    discountAmount = (amount * discount) / 100
    finalAmount = amount - discountAmount
    console.log(`Orignal Amount = ${amount}`)
    console.log(`Discount Persent = ${discount}%`)
    console.log(`Discount Amount = ${discountAmount}`)
    console.log(`Final Amount = ${finalAmount}`)
}
user(prompt("inter Your Amount "))
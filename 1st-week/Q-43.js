// Project - Guess Game
let rendomNum = Math.floor(Math.random() * 100) + 1;
let guess;
let attempts = 10;
do {
    alert("You have " + attempts + " attempts left ")
    guess = Number(prompt("Enter a Number "))
    if (guess > rendomNum) alert("Number Is Too High")
    else if (guess < rendomNum) alert("Number is too Low")
    else {
        alert("Congratulations you gussed the number in " + (10 - attempts) + " attempts");
        break;
    }
    attempts--;

} while (guess !== rendomNum && attempts > 0);
if (attempts == 0) alert("Sorry you lose the game.The number was" + rendomNum)
// Solve Increment & decrement operator questions
function num(int){
    int = Number(int)
 const solve = ++int + int++ + --int;
 alert(`${solve}`)
}
num(prompt("Enter a Number"))
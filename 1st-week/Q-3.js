// Accept two integers from user and print the sum (Ex - The sum of 45 & 12 = 57)
function add(a , b){
  a = Number(a)
  b = Number(b)
  const sum = a + b
  alert(`The Sum of ${a} & ${b} = ${a + b}`)
}

add(prompt("Enter the First Number "),prompt("Enter the Secound Number "))

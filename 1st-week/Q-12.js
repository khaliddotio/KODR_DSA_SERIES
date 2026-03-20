// Accept two numbers and print the greatest between them

function num(a, b){
 if(a > b){
    alert(`${a} is Greater  then ${b}`)
 }else if(b > a){
  alert(`${b} is Greater  then ${a}`)
 }else{
     alert(`${a} is equal to ${b}`)
 }
}
num(prompt("Enter the First Numbers "), prompt("Enter the Secound Numbers "))
// Accept name and age from the user. Check if the user is a valid voter or not. (Valid - Hello Shery, You are a valid voter. Invalid - Sorry Shery, you can't cast the vote. Part 2 - Print after how many years the user will be eligible)

function voter(name, age) {
    age = Number(age)
    if (age >= 18) {
      alert(`Valid - Hello ${name}, You are a valid voter`)
    }else if(age < 18 ){
        let yearsLeft = 18 - age
        alert(`Invalid - Sorry ${name}, you can't cast the vote`,`After ${yearsLeft} years you will be eligible`)
    }else{
        alert("Wrong Input")
    }
}
voter(prompt("Enter Your Name = "), prompt("Enter Your Age = "))
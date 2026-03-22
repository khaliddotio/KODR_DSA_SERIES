// Accept an English alphabet from user and check if it is a consonant or a vowel.
function User(alphabet){
 if((alphabet >= "A" && alphabet <= "Z") || (alphabet >= "a" && alphabet <= "z")){
    alphabet = alphabet.toLowerCase()
switch(alphabet){
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("It is a vowel")
        break
    default:
        console.log("It is a consonant")
}
 }else{
    console.log("Invalid Input")
 }
}
User(prompt("Enter one Alphabet "))
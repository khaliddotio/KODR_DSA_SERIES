// Question 22 using Switch (Check Consonant or Vowel using Switch)
function CheckLetter(letter){

    switch (letter.toLowerCase()) {
        case "a":
            console.log("Vowel");
            break;
         case "e":
            console.log("Vowel");
            break;
         case "i":
            console.log("Vowel");
            break;
         case "o":
            console.log("Vowel");
            break;
         case "u":
            console.log("Vowel");
            break;
        default:
            console.log("Consonant");
            break;
    }
}
CheckLetter(prompt("Inter One Alphabet An check Is Vowel or Consonent "))
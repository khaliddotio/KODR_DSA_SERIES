// Project - Restaurant v1.

let menu;
let grandTotale = 0;
do {
   menu = parseInt(prompt(
    "Menu Book:\n"+
    "1. Pizza- 200\n"+
    "2. Burger- 100\n"+
    "3. Pasta- 150\n"+
    "4. Sandwich- 60\n"+
    "5. Exit\n"+
    "Enter your choice: "
   ));
   if(menu >= 1 && menu <= 4){
    let quantity =  parseFloat(prompt("Enter Quantity: "));
    let totalAmount = 0;
    let price = 0;
     switch (menu) {
        case 1:
            price = 200;
            alert("Thank you for Ordering Pizza")
            break;
           case 2:
            price = 100;
            alert("Thank you for Ordering Burger")
            break;
           case 3:
            price = 150;
            alert("Thank you for Ordering Pasta")
            break;
           case 4:
            price = 60;
            alert("Thank you for Ordering Sandwich")
            break;        
     }

     totalAmount = price * quantity;
     grandTotale += amount;
     alert("Amount " + amount);

   }else if(menu === 5){
    alert("Total Bill = " + grandTotale + "\nThank You Visit Again!" )
   }else{
    alert("Invalid Choice")
   }
} while (menu !== 5);

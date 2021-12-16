const readlineSync = require("readline-sync");


let run = true

function entierAleatoire(min, max)
{
 
}

while (run){
    console.log("")
    console.log("")
    console.log("Welcome")
    let input_min = readlineSync.question("Choose the minimum : ");
    let input_max = readlineSync.question("Choose the maximum : ");
    

    
    
    let min = Number(input_min)
    let max = Number(input_max)

    let x =  Math.floor(Math.random() * (max - min + 1)) + min;

    

    let ask_restart = true

    let continuer = 1

    while(continuer == 1){

        my_input = readlineSync.question("Enter a number :  ");
    
        const chosenNumber = parseInt(my_input, 10)

        if(my_input != chosenNumber){
            console.log("Invalid entry ! ")
        }

        else if(my_input==x){
            continuer = 0
        }

        else if (my_input <x){
            console.log("..Bigger..")
        }

        else if (my_input>x){
            console.log("..Smaller..")
        }
        

    };
    console.log("Number found !!")

    while (ask_restart == true){
        console.log("")
        console.log("")
        input_Restart = readlineSync.question("Do you want to play again ? (Y/n) ");
        if (input_Restart == "Y"){
            run = true
            ask_restart = false
        }
        else if (input_Restart == "y"){
            run = true
            ask_restart = false
        }
        else if (input_Restart == "n"){
            run = false
            ask_restart = false
        }
        else if (input_Restart == "N"){
            run = false
            ask_restart = false
        }
        else{
            console.log("Invalid entry")
        }
    }
}

  
    




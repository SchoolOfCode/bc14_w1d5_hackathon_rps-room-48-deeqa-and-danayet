let userChoice; 
let compChoice; 
let compChoiceR = "rock";
let compChoiceS = "scissors";
let compChoiceP = "paper"



function choices (choice1, choice2,){ 

    compChoice = choice1;
    userChoice = choie2; 
   
};


if (userChoice && compChoice === "rock" || userChoice && compChoice === "scissors" ||  userChoice && compChoice === "paper" )
{
console.log("Try Again!")
}


 
else if (userChoice === "rock" && compChoice === "paper" || userChoice ==="paper" && compChoice ==="scissors" || compChoice=== "rock" && userChoice === "scissors"){
    
    console.log("Computer Won!")


};
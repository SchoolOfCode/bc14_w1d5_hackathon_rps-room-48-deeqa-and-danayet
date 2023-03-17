let userChoiceR = "rock";
let userChoiceP = "paper";
let userChoiceS = "scissor";


let compChoiceR = "rock";
let compChoiceS = "scissor";
let compChoiceP = "paper";





let userChoice = userChoiceS;
let compChoice = compChoiceP;



if (userChoice === "rock" && compChoice === "scissor")
{
console.log("User won")
}


 
else if (userChoice === "rock" && compChoice === "paper"){
    
    console.log("comp won")


}

else if (userChoice === "rock" && compChoice === "rock") 
{
 console.log("Try again")
}






else if (userChoice === "scissor" && compChoice === "scissor")
{
console.log("Try again")
}


 
else if (userChoice === "scissor" && compChoice === "paper"){
    
    console.log("User won")


}

else if (userChoice === "scissor" && compChoice === "rock") 
{
 console.log("computer won")
}


else if (userChoice === "paper" && compChoice === "scissor")
{
console.log("computer won")
}


 
else if (userChoice === "paper" && compChoice === "paper"){
    
    console.log("try again")

}

else if (userChoice === "paper" && compChoice === "rock") 
{
 console.log("User won")
};






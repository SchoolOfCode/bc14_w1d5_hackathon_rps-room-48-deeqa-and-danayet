
let userChoiceR = "rock";
let userChoiceP = "paper";
let userChoiceS = "scissor";


let compChoiceR = "rock";
let compChoiceS = "scissor";
let compChoiceP = "paper";

let result1 =  1;
let resultMinus = 1 ;
let resultDraw = 0 ;




let userChoice = prompt("please enter your choice user");
let compChoice = prompt("please enter your choice computer");



function getResults (userChoice, compChoice) {
    



if (userChoice === "rock" && compChoice === "scissor")
{
let winner= "human won";
alert(winner);
return result1;

}


 
else if (userChoice === "rock" && compChoice === "paper"){
    
    return resultMinus;
    
 

}


    

else if (userChoice === "rock" && compChoice === "rock") 
{
 resultDraw;
}






else if (userChoice === "scissor" && compChoice === "scissor")
{
resultDraw;
}


 
else if (userChoice === "scissor" && compChoice === "paper"){
    
  return  result1;


}

else if (userChoice === "scissor" && compChoice === "rock") 
{
 return resultMinus;
}


else if (userChoice === "paper" && compChoice === "scissor")
{
return resultMinus;
}


 
else if (userChoice === "paper" && compChoice === "paper"){
    
    return resultDraw;

}

else if (userChoice === "paper" && compChoice === "rock") 
{
 return result1;
};


};
 getResults(userChoice, compChoice)

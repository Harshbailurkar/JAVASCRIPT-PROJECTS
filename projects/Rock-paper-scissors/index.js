const computerChoiceDisplay= document.getElementById("computer-choice");
const yourChoiceDisplay= document.getElementById("your-choice");
const resultDisplay= document.getElementById("result");
const possibleChoices=document.querySelectorAll("button");
let userchoice;
let computerchoice;
let result;
possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click',(e) =>{
    userchoice=e.target.id;
    yourChoiceDisplay.innerHTML=userchoice
    generateComputerChoice();
    getresult();
}))

function generateComputerChoice(){

    const randomNumber=Math.floor(Math.random()*possibleChoices.length) +1
    //console.log(randomNumber)
    if(randomNumber===1){
        computerchoice="rock"
    }
    if(randomNumber===2){
        computerchoice="paper"
    }
    if(randomNumber===3){
        computerchoice="scissor"
    }
    computerChoiceDisplay.innerHTML=computerchoice;
}

function getresult(){

    if( computerchoice=== userchoice){

        result="its a draw!!!"
    }
    else if(( computerchoice=== "rock" && userchoice==="paper")||( computerchoice==="paper" && userchoice==="scissor") || ( computerchoice==="scissor" && userchoice==="rock")){

        result="You Win!"
    }
    else{

        result="you loose!"
    }

    resultDisplay.innerHTML=result;
}
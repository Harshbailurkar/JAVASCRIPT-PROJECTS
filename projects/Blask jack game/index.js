// create a 2 variables firstCard and secondCard . set random values betn 2-11 
// create a variable sum and set it to the sum of the 2 cards

//king=10 ace=11

let firstCard=getRandomCard();
let secondCard=getRandomCard();
let cards=[firstCard,secondCard]

let sum = firstCard + secondCard
let hasBlaskJask=false
let isAlive=false
let message=""


let player={      // we create a object becoz we have 2 separate variables for one task
     Name:"harsh",
     Chips:100
}

let messageEl= document.getElementById("message-el")
let sumEl= document.querySelector("#sum-el")
let cardEl= document.querySelector(".card-el")



function startgame(){
    rendergame()
}

function rendergame(){
    cardEl.textContent ="cards:";

    for(let i=0;i<cards.length;i++)
  {
  cardEl.textContent +=cards[i] +" "
}

if(sum < 21){
    message="do you want to draw a new card?  "
    isAlive=true  
}
else if(sum===21){
    message="congrats ! you have won !! you got back jack"
    hasBlaskJask=true
    player.Chips+=50
}
else{
    message="you are out of the game "
    isAlive=false
    player.Chips-=50
}
  
  sumEl.textContent="sum: " + sum
  messageEl.textContent=message
  

  

//console.log(messageEl,hasBlaskJask,isAlive )
}


function newcard(){
    if(isAlive===true && hasBlaskJask===false){
    let nextcard=getRandomCard();
    sum+=nextcard;
    cards.push(nextcard)
    rendergame()
    }

}
function getRandomCard(){
  
    let dice= Math.floor( Math.random()*10)+1
    
    // if(dice>10){ 
    //     return 10;   // if we consider all cards queen =12, king=13  all consider as 10
    // }
     if(dice===1){
        return 11
    }
    else{
    return  dice
    }
}

let playerEl=document.getElementById("player-el")
playerEl.textContent=player.Name + ": $"+ player.Chips


const squares=document.querySelectorAll(".square")
const mole= document.querySelector(".mole")
const timeLeft=document.getElementById('time-left')
const score= document.querySelector('#score')

let result=0;

function randomSquare(){

    squares.forEach(square =>{

        square.classList.remove('mole')
    })
}
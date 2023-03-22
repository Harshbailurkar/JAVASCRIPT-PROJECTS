
let num1=8;
let num2=2;
document.getElementById("num1-el").textContent=num1;
document.getElementById("num2-el").textContent=num2;

function add(){
    
     let ans= num1+num2;
    document.getElementById("ans-el").textContent=ans;
}
function sub(){
    
     let ans= num1-num2;
    document.getElementById("ans-el").textContent=ans;
}
function mul(){
    
    let ans= num1*num2;
    document.getElementById("ans-el").textContent=ans;
}
function div(){
    
    let ans= num1/num2;
    document.getElementById("ans-el").textContent=ans;
}

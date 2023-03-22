
let welcomeEL=document.getElementById("welcome-el");
let name="harsh";
let greeting="Welcome "+ name +" nice to see you here";
greeting=greeting+"✋";
welcomeEL.innerText=greeting;

let countEl= document.getElementById("count-el")
console.log(countEl)
let count=0;
let total=0;
function increment(){
    count+=1;
    //countEl.innerText=count
    countEl.textContent=count
}


function Save(){
    
    total=count+total
    let saveEl= document.getElementById("save-el");

    let vari= count + " - "
    //saveEl.innerText+=vari   // [ it will not give spaces after - ]
    saveEl.textContent+=vari  //[it will give space after -]
    let totalEl = document.getElementById("total-el");
    totalEl.innerText="Total count: "+total
    
    
    countEl.textContent=0
    count=0
    //console.log(count)
}

function reset(){
    let totalEl = document.getElementById("total-el");
    let saveEl= document.getElementById("save-el");

    saveEl.textContent="Previous Entries: " +0;
    totalEl.innerText="Total count: " + 0;
    count=0;
    total=0;
}

let errorpara= document.getElementById("error");
console.log(errorpara);

function error(){
    
    errorpara.textContent="somthing went worng plz try again"

}


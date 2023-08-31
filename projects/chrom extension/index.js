// function save(){
//     console.log("btn clicked")
// }
// or 
let mylead=[] 


const inputBtn=document.getElementById("input-btn")
const deleteBtn=document.getElementById("delete-btn")
const inputEl=document.getElementById("input-el") 
const ulEl=document.getElementById("ul-el")
const tabBtn=document.getElementById("tab-btn")




// localStorage.setItem("abcd","abcd.com")      // to add at local storage only work with string
// console.log(localStorage.getItem("abcd"))    // to show
// localstorage.clear()                         // to clear local storage

// to add data in localstorage
inputBtn.addEventListener("click", function(){
    mylead.push(inputEl.value)
    // to crear privious add valuee in input box
    inputEl.value=""  // to clear the add bar

    localStorage.setItem("mylead",JSON.stringify(mylead))  // stringify the array becoz local storage only accept string
    render(mylead)
    
})

//to diaplay the data present in the local storage
let leadFromLocalStorage=JSON.parse(localStorage.getItem("mylead"))  // convert the string into array

if(leadFromLocalStorage){   // this if block only execute if it has storage in it / it return false if localstorage is null and if block will not be executed
   mylead= leadFromLocalStorage
   render(mylead)
}

// to delete all works when double click
deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear()
    mylead=[]
    render(mylead)

})

tabBtn.addEventListener("click" ,function(){
        
        chrome.tabs.query({ active:true, currentWindow:true}, function(tabs){
           
            mylead.push(tabs[0].url)
            localStorage.setItem("mylead",JSON.stringify(tabs) )
            render(mylead)
        })
       
})

function render(leads){
    let listItems=""      //for 3rd or method
    for(let i=0; i< leads.length; i++){
    
        // ulEl.innerHTML += " <li>" + mylead[i] + "</li>  "
                    //or
        // const li=document.createElement("li")
        // li.textContent=mylead[i]
        // ulEl.append(li)
    
        // or
    
        listItems+=  `<li> 
                        <a target='_blank' href='${ leads[i] }'>  ${ leads[i] } </a>
                                                                                   </li>` 
    }
    
    ulEl.innerHTML=listItems   //for 3rd or method
    
    }
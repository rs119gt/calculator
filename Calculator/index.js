let num1= document.getElementById("field1")
let num2= document.getElementById("field2")
let resEl=document.getElementById("out")
let sumEl = 0
function sum(){
    sumEl=Number(num1.value)+Number(num2.value)
    console.log(sum)
}

function diff(){
    sumEl=Number(num1.value)-Number(num2.value)
    
}

function mul(){
    sumEl=Number(num1.value)*Number(num2.value)
    
}

function div(){
    sumEl=Number(num1.value)/Number(num2.value)
   
}

function res(){

    resEl.innerText=sumEl
}

function rst(){
    num1.value = ""
    num2.value = ""
    resEl.innerText = ""
}
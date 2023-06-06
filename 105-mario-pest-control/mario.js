//Global Variables 

const form = document.getElementById("myForm")

let gInput = document.getElementById("goomba")
let gTotal = document.getElementById("gTotal")
let bInput = document.getElementById("bob")
let cInput = document.getElementById("cheep")
let gValue = document.getElementById("gValue")
let bValue = document.getElementById("bValue")
let cValue = document.getElementById("cValue")


//get total from each caught and multiply by the value /baddie 

function total(event) {
    event.preventDefault()
    
    let goombaTotal = parseInt(gInput.value)* 5
    gTotal.value = goombaTotal

    let bobTotal = parseInt(bInput.value) * 7
    bTotal.value = bobTotal
    
    let cheepTotal = parseInt(cInput.value) * 11
    cTotal.value = cheepTotal    

    document.getElementById("solution").value = gTotal.value + bTotal.value + cTotal.value + " Coinage" //yes
    console.log("this works?")
}


document.getElementById("submit").addEventListener("click", total)
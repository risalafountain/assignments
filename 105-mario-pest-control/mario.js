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
    console.log(gTotal.value)

    let bobTotal = parseInt(bInput.value) * 7
    bTotal.value = bobTotal
    console.log(bTotal.value)

    let cheepTotal = parseInt(cInput.value) * 11
    cTotal.value = cheepTotal    
    console.log(cTotal.value)

    document.getElementById("solution").innerHTML = parseInt (gTotal.value) + parseInt (bTotal.value) + parseInt (cTotal.value) + " Coinage Total"

    console.log("this works?")
}


document.getElementById("submit").addEventListener("click", total)
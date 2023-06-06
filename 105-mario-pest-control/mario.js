//Global Variables 

const form = document.getElementById("myForm")

let num1 = document.getElementById("goomba")
let num2 = document.getElementById("bob")
let num3 = document.getElementById("cheep")

//get total from each caught and multiply by the value /baddie 

form.addEventListener("submit", (event) => {
    event.preventDefault()
})

// function sum() {
//     document.getElementById("solution").innerHTML = ("The Total is " + (parseInt(num1) * 5 + parseInt(num2) + parseInt(num3))) 
//     console.log("test" + num1 * 5)
// }

// let goombaCost = 5
// let bobCost = 7
// let cheepCost = 11

function goombaTotal () {
   let goombaTotal = parseInt(num1) * 5

    document.getElementById("gTotal").innerHTML = "The Total of Goomba Cost is:" ((parseInt(num1) * parseInt(goombaCost)))
}

function bobTotal () {
    
}

function cheepTotal () {
    
}

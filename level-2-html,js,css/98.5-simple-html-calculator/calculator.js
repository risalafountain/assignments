const form = document["my-form"]
console.log("this is my form")

form.addEventListener("submit", (event) => {
    event.preventDefault()
})


function add() {
    let num1 = document.getElementById("num1").value 
    let num2 = document.getElementById("num2").value
    document.getElementById("solution").innerHTML = "  The result is: " + (parseInt(num1) + parseInt(num2))
    // console.log("The Result is " + (parseInt(num1) + parseInt(num2)))
}

function sub(){
    //let sub = document.getElementById("subtract")
    let num3 = document.getElementById("num3").value 
    let num4 = document.getElementById("num4").value
    document.getElementById("subSolution").innerHTML = "  The result is: " + (parseInt(num3) - parseInt(num4))
    console.log("subtraction section")
}

function multi(){
    let num5 = document.getElementById("num5").value 
    let num6 = document.getElementById("num6").value
    document.getElementById("multiSolution").innerHTML = "  The result is: " + (parseInt(num5) * parseInt(num6))
}
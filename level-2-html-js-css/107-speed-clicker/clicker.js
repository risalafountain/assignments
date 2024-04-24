//set my global variables for IDs
let myCounter = document.getElementById("clickCount2")
let myBtn = document.getElementById("button")
let restartBtn = document.getElementById("restartBtn")
let clickCount = 0 //set counter to zero when reset btn is clicked

//listen for the click
myBtn.addEventListener("click", clickCounter)

//display count on the screen w/ innerhtml 
function clickCounter() {
   
    clickCount += 1
    myCounter.innerHTML = "Count: " + clickCount
    localStorage.setItem("storeClicks", JSON.stringify(clickCount))
}

//***This is grabbing the value of storeClicks from local storage and displaying the number on the page.
myCounter.innerHTML = "Count: " + localStorage.getItem("storeClicks")

//***If the storeClicks key isn't available in local storage the value with be null(meaning nothing is there).

//***This is setting the value of storeClicks to 0, if the value doesn't already exist in local storage.
if(localStorage.getItem("storeClicks") === null) {
    localStorage.setItem("storeClicks", 0)
}

clickCount = JSON.parse(localStorage.getItem("storeClicks"))
console.log(clickCount, "clickCounter")

restartBtn.addEventListener("click", restartCount)

function restartCount() {
    //Remove item from local storage.
    localStorage.removeItem("storeClicks")

    //After storeClicks is removed from localStorage, this changes the count displayed on the page back to 0
    myCounter.innerHTML = "Count: " + 0
    clickCount = 0
}
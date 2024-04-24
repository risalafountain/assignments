const startBtn = document.getElementById("start")
const stopBtn = document.getElementById("stop")
const timer = document.getElementById("timer")

let count = 0
let intervalID //declare global var here &  assigned in startBtn function
timer.textContent = count

//increments the time by one 
function incrementTimer(){
    count++
    timer.textContent = count
}

//incrementTimer() shows the number 1
startBtn.addEventListener("click", function (){
    // using just incrementTimer() here would allow register how many times the start btn was pressed 
   intervalID = setInterval(incrementTimer, 1000 ) //needs two arguments. (1st argument wht function to call (DO NOT ADD PARENTHESIS), how many times in milliseconds to increment ) 
   //if you don't stop the interval it will keep going indefinitely  
})

stopBtn.addEventListener("click", function (){
    clearInterval(intervalID) //pass in id
})

//setTimeout is the same way except it doesn't repeat 
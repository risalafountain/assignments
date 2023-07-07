//conditionals: how we have our program ask a question about our data and run a code  depending on the results 
//boolean: true / false; strict results no maybes //only one condition will run-either the true or else 
//how to ask a question in JS is if
//syntax is if(){}

if (2 === 4) {
  console.log("two is equal to four")
} else if (2 ===5) {
   console.log ("Two is equal to five")
} else if(2 === 3) {
   console.log ("two is equal to three")
} else {
   console.log("I don't know what's going on")
}

//Comparison Operator
    // > greater than, < less than, <= less than or equal to, >= greater than or equal to,  == loosely equal, === strictly equal, != loosely NOT equal,  !== strictly NOT equal. Only focus on using ===, !==. Note: == vs ===, (==) loosely equal means js will try and convert to make a match which results in minor bugs. we want everything to be STRICTLY equal (===)
// Truthy and Falsely: 
    //falsey 
        //0
        //""
        //null
        //undefined
        //false
        //NaN
if("") {
    console.log("it is truthy")
} else {
    console.log("it is falsey")
}

//Logic Operators: allow us to ask multiple questions for something to run 
 //&& - and (checks both sides of the condition; both need to be true to evaluate to true)
 //|| - or  (checks both sides of the condition; either side can be true to evaluate to true )
 // ! - not (negates) 

 if (2 ===2 && 2 ===3) {
    console.log("It's working!")
 }else {
    console.log("It's not working")
 }
 //its not working because 2 is not equal to 3. it turned the entire thing to false) 

 if (2 === 2 && 2 !==3) {
    console.log("It's working!")
 }else {
    console.log("It's not working")
 }
 //evaluates to true because 2 is equal to 2 AND (&&) is NOT equal to 3 

//order of operations: + - * / :use parenthesis to specify what should run first 

//switch statement: switch will run the case it needs to run and it will keep running cases until it is told to stop. Using 'break' after every log  will stop after it's executed its case. If the color is not in the cases then you assign a default   

var color= "purple" 

switch(color) {
    case "red": 
        console.log("The color is red")
        break
    case "blue":
        console.log ("The color is blue")
        break
    case "yellow": 
        console.log("The color is yellow")
        break
    default: 
        console.log("The color is not red, blue, or yellow")
}
//practice makes permanent! 

var person= "Risa"
var mood= "exhausted"

if (person === mood) {
  console.log("Risa is exhausted")
} else {
  console.log("Lies! Risa is always exhausted")
}



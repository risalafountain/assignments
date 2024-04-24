// How to compose/create Functions and define what they are 
//F
// DRY: Do Not Repeat yourself 
// Function: Executes statements 
// Statement is any line of code 
//     var name= "nate"
//      for (var i=0) this is setting up a for loop 

//Function Declaration: starts with 'function' and function name + (){}. With this, instead of rewriting this code repeatedly, i could just use the function name of 'sum' to execute the code (i.e the console.log)  

function sum(){
    console.log(2 +2)
}

//Function Expression: when you declare a function but store it in a variable vs giving it a function name as above; 

var mySumFunction = function (){}
    console.log(2+2)

//Parameters: placeholders for data (just like var), instead of hardcoding (2+2) use (parameters); this function will add any two numbers together. 
function sum (num1, num2) { //i'm giving you these numbers: (num 1, num 2)
   return num1 + num2  // return to me the sum of these numbers 
    console.log(num1 + num2)
}
//console.log is great for devs however, for data to give you a result you use 'return'. RETURN means operation is over and stop the function, it will then give you a result 

//JS FUNCTIONS PART 2 Video 
//calling a function or (execute a function) is by using the opening and closing parenthesis 
function sum (num1, num2){
    return num1 + num2
}

var result = sum (70, 15) //inside the parenthesis (are called arguments, the data we are feeding in) The difference between parameters and arguments is that **parameters are the placeholders and the arguments are what we are using to fill in the parameters** 
console.log(result)

function myFunc(data){
    console.log(data)
}

myFunc(1)
myFunc("hello")
myFunc(true)
myFunc ([1,2,3,4])
myFunc({name: "joe"})

//functions 
function loopThroughArr(array){ //this is reads 'give me an array when this name is used
    for(var i=0; i < array.length; i++) { //'loop through this array (i < array.length)
        console.log(array[i]) //console.log everything in that array 
    }
}
//then you call it through its name and give it an array to loop through. you can then change the console.log to an 'if' statement (e.g. if it's even do this, if it's odd do this) and since the for loop is inside of a function it is reusable and we don't have to rewrite this for loop everthing we want this array looped through. all we have to do is call our function 'loopThroughArr' and give it an array!

 loopThroughArr([1, 2, 3, 4, 5, 6])

 //EXERCISE/PRACTICE 
 // 1. Write a function that returns the sum of any two numbers you give it.
function sum(num1, num2) {
    console.log (num1 + num2)
}
sum (4, 4)
sum (133, 765)
sum (69, 420)
sum (1208, 85)
sum (12, 82)

// 2. Write a function that takes a string such has "Joe" as an argument, and returns the string "Hello Joe"
function shortNam(name) {
    console.log ("Hello Joe")
}
shortNam ("Joe")

// 3. Write a function that takes in a number as an argument, and returns the string "Even" if the number is even, and "Odd" if the number is odd.

function myNum(num1) {
    if (num1 % 2 === 0 ) {
      console.log ("even") 
 } else {
    console.log("odd")
 }
}
myNum (8)
myNum (3)
myNum (20)
myNum (13)





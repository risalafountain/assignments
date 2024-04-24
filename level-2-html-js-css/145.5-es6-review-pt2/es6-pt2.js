// const button = document.getElementById('button')
// const output = document.getElementById('output')
// const input = document.getElementById('input')
// // change this function to be an arrow function
//     // button.addEventListener('click', function(){
//     //     output.innerText = "You've submitted: " + input.value
//     // })
// //delete the function keyword and throw in an arrow

// button.addEventListener("click", () => {
//     output.innerText = "you've submitted: " + input.value
// })
//--this works in the website but not in the terminal...terminal states, "document is not defined"

//-------------------------------------------------------------------------------------------
// Use the Rest Operator to help this function return an array of animals, no matter how many animals are passed to it:
    //the rest operator goes into the parameters, then define what to call the new array
function collectAnimals(...animals) {  
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]
//this is also not showing up in the terminal
//-------------------------------------------------------------------------------------------
// Use destructuring to use the property names as variables:

const vacation = {  
  location: "Burly Idaho",
  duration: "2 weeks"
};

function parseSentence({location, duration}){
  return `We're going to have a good time in ${location} for ${duration}`
}

console.log(parseSentence(vacation)) // this line will break stuff unless you fix the parameter

//-------------------------------------------------------------------------------------------
// Make the following function more ES6xy. Use at least both the rest and spread operators:
// this function should add as many items to the front of the returned array as the caller of the function wants    
    // function unshift(array, a, b, c, d, e) {  
    //   return [a, b, c, d, e].concat(...array);
    // }

 function unshift(array, ...second) {
    return [...second,...array]; }   

//-------------------------------------------------------------------------------------------
// make "greeting" default to "hello"
function greet(name, greeting = "hello"){
    return greeting + ", " + name
}

console.log(greet('Emily', "heyyyyy"))
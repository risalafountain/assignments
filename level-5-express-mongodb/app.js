const { sum, subtract } = require("./math")


//can also do this 

// const sum = require("./math.js").sum

// console.log(sum(20,10))

//if we only needed to use it once, we can say it this way 
// console.log(require("./math.js").subtract(20,10))

// require evaluates to whatever was exported 


//#revealing module pattern 
// const mult = require("./math2.js")

const { multiply, setFactor } = require("./math2.js")

// console.log(multiply(10))//20 (multiplying by the original factor)

// setFactor(10)

// console.log(multiply(10)) //100 (reassigning the variable)

// #constructor functions 
const User = require("./user.js")

console.log(User) //[Function: User]

console.log(new User("steve", 10)) //User {name: 'steve', age: 10}



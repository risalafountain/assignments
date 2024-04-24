/*Replace all the `var`s with `let` and `const`. Alter the code however necessary to make sure this continues to work (so the pet's name **isn't** `"John"`, but instead `"spot"` is returned). You only need to delete `var` and insert `let` and `const`

John is the pet owner, and his name should be stored differently than the other names. */

const name = "John"
let age = 101

function runForLoop(pets) {
    let petObjects = []
    for (var i = 0; i < pets.length; i++) {
        let pet = { type: pets[i] }
        let name;
        if (pets[i] === "cat") {
            name = "fluffy"
        } else {
            name = "spot"
        }
        console.log("pet name: ", name)
        pet.name = name
        petObjects.push(pet)
    }
    console.log("man name: ", name)
    return petObjects
}

runForLoop(["cat", "dog"])


//Re-write this `.map()` using an arrow function: Be aware that if JavaScript sees a `{` directly after the `=>` it will think it's starting a function, and not starting an object, so the `:` will be an unexpected symbol.

const carrots = ["bright orange", "ripe", "rotten"]

function mapVegetables(arr) {
    return arr.map(carrot => ({ type: "carrot", name: carrot }))
}
console.log(mapVegetables(carrots))

//Re-write this .filter() ’s callback function using an arrow function:
const people = [
    {
        name: "Princess Peach",
        friendly: false
    },
    {
        name: "Luigi",
        friendly: true
    },
    {
        name: "Mario",
        friendly: true
    },
    {
        name: "Bowser",
        friendly: false
    }
]

function filterForFriendly(arr) {
//remove the function keyword and add an arrow
//since there is only one expression (person), remove curly brackets and  return keyword
    return arr.filter(person => person.friendly)
}

console.log(filterForFriendly(people))

//re-write to be arrow functions 
function doMathSum(a, b) {
    return a + b
}

var produceProduct = (a, b) => a * b

/*Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:
Hi Kat Stark, how does it feel to be 40?
firstName should default to "Jane"lastName should default to "Doe"age should default to 100*/

const firstName = "Jane"
const lastName = "Doe"
let num = 100


function printString(firstName, lastName, num) {
    return `Hi, ${firstName} ${lastName}, how does it feel to be ${num}? `
}

//es6 syntax
const printS = (firstName, lastName, num) =>  `Hi, ${firstName} ${lastName}, how does it feel to be ${num}? `


console.log(printString ("kat", "stark", 40))
console.log(printS(firstName, lastName, num))


/*CODE CHALLENGE W/ JORDAN
Write a function called getAverage that takes in an array of numbers and returns the average of those numbers. Round the average to the nearest whole number. Use the provided code to test your solution.

*/
// let sum = 0

//two ways to do this 
    //with .map
// function getAverage(arr) {
//     let numTotal = 0
//     arr.map(num  => numTotal = numTotal + num)
//     return numTotal / arr.length
// }

//with for loop 
function getAverage(arr) {
    let arrTotal = 0
  
    for(let i = 0; i < arr.length; i++){
      arrTotal = arrTotal + arr[i]
    }
    
    return arrTotal / arr.length
  
  }

console.log(getAverage([1, 2, 3, 4, 5])); // Expected Output: 3
console.log(getAverage([10, 20, 30, 40, 50])); // Expected Output: 30


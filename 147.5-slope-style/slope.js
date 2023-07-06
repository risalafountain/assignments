//Use the rest operator to help this function return an array of animals

function collectAnimals(...animals) {
    console.log(animals)
    return animals
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// ["dog", "cat", "mouse", "jackolope", "platypus"]

/*Write a function that returns a food object with the array names as properties. You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice in both the name and value of properties in your object:*/
function combineFruit(fruit, sweets, vegetables){
    return {
        fruit,
        sweets,
        vegetables
    }
}

console.log(combineFruit(["apple", "pear"],
             ["cake", "pie"],
             ["carrot"]))
/*=> 
{
        fruit: ["apple", "pear"],
        sweets: ["cake", "pie"],
        vegetables: ["carrot"]
     }
*/

//Use destructuring to use the property names as variables. Destructure the object in the parameter:
const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

function parseSentence({location, duration}){
    return `We're going to have a good time in ${location} for ${duration}`
  }
  
  console.log(parseSentence(vacation));

// Use array destructuring to make this code ES6:

  function returnFirst(items){
    const [firstItem] = items /*change this line to be es6*/
    return firstItem
}
console.log(returnFirst([123, 2, 3, 4, 55, 78]))

/*  STEP 1: Write destructuring code to assign variables that will help us return the expected string. 
    STEP 2: change the string to be using Template literals:*/

    //while I was able to easily do step 2, I am unable to figure out what I am needing to do for step 1.
const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

function returnFavorites(arr){
    let firstFav, secondFav, thirdFav //i'm not sure what to do after this! I want to be able to randomly pull  items from the array favoriteActivities and push them into the assigned variables. Or is it better to hardcode which are my options from the list? I don't think hardcoding it what is being asked here
    return `My top three favorite activities are, ${firstFav}, ${secondFav}, and ${thirdFav}`
}

console.log(returnFavorites(favoriteActivities))

/*Use the Rest and Spread Operator to help take any number of arrays, and return one array. You will need to change how the arrays are passed in. You may write it assuming you will always recieve three arrays if you would like to. */

function combineAnimals(...allAnimals) {
    return [...realAnimals, ...magicalAnimals, ...mysteriousAnimals]
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

console.log(combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals))

// ["dog", "cat", "mouse", "jackolope", "platypus"]

/**********Black Diamond */
//Try to make the following function more es6y

/** 
 * since product and numbers are redundant, use (...) rest? operator to get them all together 
 * Remove the function keyword
 * since there are 2 parameters then use ()
 * get rid of return keyword and replace w/ fat arrow 
 */
function product(...numbers) {
    // var numbers = [a,b,c,d,e]
    return numbers.reduce((acc, number) => acc * number, 1)
}
console.log(product(1,2,3,4), `, this is black diamond #1`)


//Make the following function more ES6y. Use at least both the rest and spread operators:

function unshift(array, ...second) {
    return [...second, ...array]}

//console.log(unshift([1,2,3,4], a, b, c), `this is black diamond #2`) 
////this states that 'a' is not defined why is that? 
    

/****Double Black Diamond  */

//Write some destructuring code to help this function out. Use the ES6 shorthand that helps make the syntax look less redundant to simplify it: NEED SOME CLARIFICATION HERE

function populatePeople(names){
    return names.map(name => {
        name = name.split(" ");
        // your code
        return {
            firstName: firstName,
            lastName: lastName
        }
    })
}

console.log(populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"]), "TEST")
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]
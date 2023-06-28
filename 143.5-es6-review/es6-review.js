// Why is ageRange not defined?
    /*function getAgeRange(person){
    if(person.age < 18){
        let ageRange = "Child"
    } else if(person.age >= 18 && person.age < 80){
        let ageRange = "Adult"
    } else {
        let ageRange = "Elderly Person"
    }
    return ageRange
    }*/
    //because let and const scope to the nearest curly braces so if wanting to use let then it needs to be right above the conditional statement. 
// How can we fix this function with var? 
    //switching to var means that the scope is in the function's curly brackets.

    /*function getAgeRange(person){
        if(person.age < 18){
        var ageRange = "Child"
    } else if(person.age >= 18 && person.age < 80){
        var ageRange = "Adult"
    } else {
        var ageRange = "Elderly Person"
    }
    return ageRange
    }*/

// How can we fix this function avoiding the use of var? --by using let
// Why would you use const vs let?
    //you can't use const because once you declare it, you can't re-declare it 
function getAgeRange(person){
    let ageRange
    if(person.age < 18){
         ageRange = "Child"
    } else if(person.age >= 18 && person.age < 80){
         ageRange = "Adult"
    } else {
         ageRange = "Elderly Person"
    }
    return ageRange
}
// What would the above function potentially look like if we destructured the person parameter? --this wasn't answered in the video....

const person = { name: "Andrea", age: 27 }

// Why can we add .ageRange to person when we used const to define person? 
    //because objects are mutable. 
    //rec. using const on every mutable
person.ageRange = getAgeRange(person) // feel free to comment out lines that cause errors or lines that clutter the console

console.log("The " + person.ageRange + ", " + person.name + ", is " + person.age + " years old.") //The Adult, Andrea, is 27 years old.

// change the above concatented string into a template literal
console.log(`The ${person.ageRange}, ${person.name}, is ${person.age} years old.`) //The Adult, Andrea, is 27 years old.


const springMonths = ["March", "April", "May"]
const fallMonths = ["September", "October", "November"]
// replace this line with one that uses a spread oporator to do the same thing as concat
//const fringeMonths = springMonths.concat(fallMonths)

const fringeMonths = [...springMonths, ...fallMonths]

console.log(springMonths, fallMonths, fringeMonths)
//[ 'March', 'April', 'May' ] [ 'September', 'October', 'November' ] [ 'March', 'April', 'May', 'September', 'October', 'November' ]
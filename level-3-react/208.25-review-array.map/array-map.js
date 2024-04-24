/* 
.map() method:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
declarative method
higher order method which means it takes a function as one of its parameters
.map will handle the for loop for us 
whatever we return from the function is what will get placed in the same index in a brand new array
function will receive each of the items in teh array one at a time as .map loops over the array and runs the function 
*/

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// 
const squared = nums.map(function(num) {
    return num * num
})

console.log(squared)
// -->       [1, 4, 9, 16, 25]

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/
const names = ["alice", "bob", "charlie", "danielle"]
// Your code here
const upperCase = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
    //can simplify even further using this 
    //return `${name[0].toUpperCase()}${name.slice(1)}`
})
console.log(upperCase)
// -->        ["Alice", "Bob", "Charlie", "Danielle"]

/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]
// Your code here

const elements = pokemon.map(monster => {
    return `<p>${monster}</p>`
})

console.log(elements)
// -->      ["<p>Bulbasaur</p>, <p>Charmander</p>, <p>Squirtle</p>"]


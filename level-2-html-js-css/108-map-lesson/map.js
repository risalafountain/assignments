// Higher order array methods
// .map() sets up a for loop to map through array

const arr = [1, 2, 3, 4, 5, 6, 7, 8]

//below reads that we are looping through each number and call the function on each number. therefore we can receive it as a paramater

//

// const result = arr.map(function(num){ //same as arr[i]
//     return num + 10
// })
// console.log(result) // [11, 12, 13, etc.]

//ES6 way to write it (fat arrow is the same as writing the word function; since only one parameter we can remove the (); since we are only 

const result = arr.map(num =>num + 10) //same as above w/return already embedded in the function
console.log(result) // [11, 12, 13, etc.]

const users = [
    { name: "joe" },
    { name: "steve" },
    { name: "lisa" }
]

const nameResult = users.map(function(user){
    return user.name 
})

console.log(nameResult) // saves as a new array of data ( array of strings) ["joe", "steve", "lisa"]


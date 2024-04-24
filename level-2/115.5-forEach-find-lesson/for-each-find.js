const arr = [1, 2, 3, 4, 5, 6, 7, 8]

const users = [
    { name: "joe" },
    { name: "julie" },
    { name: "rick" }
]

// .forEach 
    //don't assign a variable to a forEach because it is only designed to loop not build something 
    // arr.forEach(function(num){
        //     return num
        // })
        //console.log(result)
        
//if you want to create a new array then use .map instead of forEach but if you must use forEach do this 
const newArr = [] //create a new variable 

arr.forEach(num => num % 2 === 0 && newArr.push(num)) //this is ES6 syntax

console.log(newArr) //test


// .find() 
    //find the users that start with the letter j 
const results = user.find(function (user){
    if (user.name[0] === "j") { //using 0 here shows that we are looking at the first letter (it's zero-indexed)
        return user // will return only "joe" it stops after the first object/string/number that matches
    }
})

// .findIndex()

const userIndex = users.findIndex(function (user) {
    if (user.name === "rick") {
        return true
    }
})

console.log(userIndex)

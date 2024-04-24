//Web Storage

//Local Storage: persists when the page refreshes/closes
//Session Storage: does not persist or refresh 

// JSON - Javascript Object Notation
        //JSON.stringify => turning JS into JSON
        //JSON.parse => turns JSON into JS

        //Setter Methods: ways to save or set data

//Primitive Data Types
//method that takes 2 arguments. (key, value)
//strings
localStorage.setItem("name", "steve")
//numbers
localStorage.setItem("age", 10)
//boolean
localStorage.setItem("isAlive", true)

//Complex Data Types 
//arrays 
    //need to turn javascript into JSON 
localStorage.setItem("friends", ["mark", "bob", "phillip"]) //doesn't look like an array it will look like mark,bob,phillip
//turn into JSON using following method
localStorage.setItem("friends", JSON.stringify(["mark" , "bob" , "phillip" ])) //["mark" , "bob" , "phillip" ]

//objects
localStorage.setItem("address", JSON.stringify({street: "123 street", city: "SLC" }))


//Getter Methods : ways to retrieve data
    //only needs one argument
const name = localStorage.getItem("name")
console.log(name) //steve

const age = localStorage.getItem("age")
console.log(age) //10

const isAlive = localStorage.getItem("isAlive")
console.log(isAlive)//true

//to get items from complex data types, we need to do the opposite of stringify

//ARRAY

//if we only do stringify
const friends = localStorage.getItem("friends")
console.log(friends)
console.log(typeof friends) //string
//we can't do loop through this or anything we need to make this an array, therefore we use PARSE 
const friend2 = JSON.parse(localStorage.getItem("friends"))
console.log(friend2) //we get an array 

//OBJECT
const address = localStorage.getItem("address")
console.log(address)
console.log(typeof address) //string

const address2 = JSON.parse(localStorage.getItem("address"))
console.log(address2) // object

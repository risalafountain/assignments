//when I use node catchme.js, it doesn't return anything within the functions...what is going on with this?

//call the sum function inside a try block using 1 and 2 as arguments. use clg withim a catch block to inform the user of the error

function sum(x, y){
    //check data types first and throw error (what does checking data types look like? is it console.log(type of sum)?)
    //throw ("hey I'm an error") 
    return x + y;
}

try {
    sum(1, 2) 
    throw new Error ("Uh-oh! New error!")
    console.log("this is the console log")
}

catch (err) {
    console.log("This is an error")
}

console.log("this is a test")

//given a user object write a function called login that takes a username and a password as parameters 
//throw an error if either of them do not match otherwise console log a message saying log in successful 

var user = {username: "sam", password: "123abc"};
function login(username, password){
 return (`Welcome ${username}! Your password is ${password}`)
 try { 
    if (username !== password) {throw ("Username and Password DO NOT Match")}
 }
 catch(err) {
    console.log("login successful")
 }
}


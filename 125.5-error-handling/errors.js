//try  keyword

//try out some code 
try {
   if (2 === 2) {
    //throw ("hey I'm an error") //throw our own errors
    throw new Error("hey I'm an error") //native js constructor that helps us create an error object w/ all the properties needed. doesn't look at all like a string!  
   } 
   console.log("Is this console log showing up?") //won't show if something is thrown up above
}
//once an error is thrown, it ends all execution so we can immediately go to the catch and handle it 

//handle the err
catch (err) {
    console.log(err)
}

//will run after try and catch is completed 
//will ALWAYS run 
finally {
    console.log("I am running no matter what!")
}

//

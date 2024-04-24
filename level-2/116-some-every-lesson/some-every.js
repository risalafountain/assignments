const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"]

// both return booleans 

// .some() 
// const result = names.some(function(name){
//     if (name[0] === "s") {
//         return true
//     }
// })

// .every()

const result = names.every(function(name){
    if (name[0] === "j") {
        return true
    }
})

//or es6 syntax 
//const result = names.every(name => name[0] === "J")
//console.log(result)

//Promises are a constructor for handling asynchronous code ()

//Promises are a js constructor which means we can use the syntax new Promise()

//Promises are eager. They are in the job queue of the callstack in js. They are sitting in wait and as soon as they're done they are pushed to the front of the line. 

//3 States of a Promise 
    //1: <Pending> 
    //2: Resolved-- will have access to .then()
    //3: Rejected-- will have access to .catch()

//return new Promise will immediately return a pending promise    
//return new Promise with a callback function using this syntax new Promise(()=>{}) 
//the callback function gives you two methods. (resolve, reject)

//whenever a function returns a promise it is known as a THENABLE
function flipCoin() {
    return new Promise((resolve, reject)=> {
        const randomNum = Math.floor(Math.random() * 2) //will get a random number either 0 or 1 

        if (randomNum === 0 ){
            resolve ("HEADS")
        } else if (randomNum === 1) {
            reject ("TAILS") //whatever is in () is the error
        }
    }) 

}

//      THIS IS SYNCHRONOUS SINCE IT IS ALL HAPPENING IMMEDIATELY 
// flipCoin()
//     .then(response => console.log("RESOLVED: " + response)) 
//     .catch(error => console.log("REJECTED: " + error))

//Promise.resolve("something").then(response => console.log(response))

//      THIS IS ASYNCHRONOUS
// function getData(){
//     return new Promise ((resolve) => {
//         setTimeout(resolve, 2000) //call the resolve function after 2 seconds
//     })
// }

// getData()
//     .then(res => console.log("RESOLVED"))
//     .catch(err => console.log(err))

function getData2(){
    return new Promise ((resolve) => {
        setTimeout(()=>resolve("HELLO WORLD"),3000) //
    })
}

getData2()
    .then(res => console.log(res))
    .catch(err => console.log(err))
    
//with a promise we can wait for something 

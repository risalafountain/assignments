// .reduce()
    //return a new set of data 
    //instead of (a,b) use (final, current)
        //final is what is going to be returned once reduce is done looping, this is what is saved in the var 
        //current is the current item it is looping through
// 1 - reduce the array of numbers into a sum of all the numbers
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const result1 = nums.reduce(function (final, num){
    final = final + num // or final +=num ...same thing
    return final
}, 0) //where does 'final' start? if no starting point it will automatically start at the first number in the array still gets the same result so we don't need to put in the starting point important in other examples

console.log(result1) //55

// 2 - reduce the users (array of objects) to an array of strings of the user's first and last names
const users = [
    { fName: "joe", lName: "smithy" },
    { fName: "tina", lName: "johnson" },
    { fName: "rick", lName: "sanchez" }
]

//have final start off w/ empty array then it we can push data into it

const result = users.reduce (function (final, user){
    final.push(user.fName + " " + user.lName)
    return final //in order for reduce to keep track of what we're building we need to return final. if you take out this line, it will have an error 'cannot read property 'push' of undefined'
}, [])

console.log(result)//[ 'joe smithy', 'tina johnson', 'rick sanchez' ]


// 3 - reduce the array into a count of how many people voted
const voters = [
    { name: "steve", voted: true },
    { name: "janet", voted: true },
    { name: "rebecca", voted: false },
    { name: "harvey", voted: true },
]


const voteCount = voters.reduce(function (final, voter){
    if (voter.voted){
        final ++
    }
    return final
}, 0 ) //needs to start out with a number not an object

console.log(voteCount)

//explanation/read
//if 'voted' evaluates to true, then increase the final count by one 
//to change the 'voted' to false by adding ! like this if(!voter.voted)
//starting point is 0 

//return an object that has a count of both who voted and who didn't 
//{ didVote: 3, didntVote: 1}

const voterObj = voters.reduce (function (final, voter){
    if (voter.voted) {
        final.didVote++
    }else {
        final.didntVote++
    }
    return final
}, {didVote: 0, didntVote: 0})

console.log(voterObj)
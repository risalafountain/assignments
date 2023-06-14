//--1turn an array of numbers into a total of all the numbers
function total(arr) {
   const result1 = arr.reduce(function (final, nums){
    final = final + nums
    return final
   }) //doesn't need a starting point 
return result1
} 
 
// console.log(total([1,2,3])); // 6

//--2 turn an array of numbers into a long string of those numbers

function stringConcat(arr) {
    const allTogether = arr.reduce(function (final, oneNum){
       return final.concat(oneNum) 
    }, " ")
    return allTogether
}
 
console.log(stringConcat([1,2,3])); // "123"

//--3 turn an array of voter objects into a count of how many people voted 
function totalVotes(arr) {
    const voterCount = arr.reduce(function (final, voter){
        if (voter.voted){
            final++
        }
        return final
    }, 0)
    return voterCount
}
 
 var voters = [
     {name:'Bob' , age: 30, voted: true},
     {name:'Jake' , age: 32, voted: true},
     {name:'Kate' , age: 25, voted: false},
     {name:'Sam' , age: 20, voted: false},
     {name:'Phil' , age: 21, voted: true},
     {name:'Ed' , age:55, voted:true},
     {name:'Tami' , age: 54, voted:true},
     {name: 'Mary', age: 31, voted: false},
     {name: 'Becky', age: 43, voted: false},
     {name: 'Joey', age: 41, voted: true},
     {name: 'Jeff', age: 30, voted: true},
     {name: 'Zack', age: 19, voted: false}
 ];
 //console.log(totalVotes(voters)); // 7
 
//--4 figure out how much it would cost to just buy everything at once 

function shoppingSpree(arr) {
    const buyAll = arr.reduce(function (final, number){
        final = final + number.price
        return final
    }, 0)
    return buyAll
}
 
 var wishlist = [
     { title: "Tesla Model S", price: 90000 },
     { title: "4 carat diamond ring", price: 45000 },
     { title: "Fancy hacky Sack", price: 5 },
     { title: "Gold fidgit spinner", price: 2000 },
     { title: "A second Tesla Model S", price: 90000 }
 ];
 
console.log(shoppingSpree(wishlist)); // 227005

//--5 given an array of arrays, flatten them into a single array 

function flatten(arr) {
    let flattened = arr.reduce(function (final, arrays) {
        return final.concat(arrays)
    })
    return flattened
}
 
 var arrays = [
     ["1", "2", "3"],
     [true],
     [4, 5, 6]
 ];
 
 console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];
 
//--6 given array of potential voters, return an object representing the results of the vote (include how many of the potential voters are 18-25, 26-35, 36-55) and how many of those age ranges actually voted 
var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(voters) {
    const voterObj = voters.reduce( function (final, voter) {
      
    //number of ppl who voted 
        if (voter.age >= 26 && voter.age <= 35 && voter.voted) {
            final.numMidVotes++     
        } else if (voter.age >= 36  && voter.voted) {
            final.numOldVotes++
        }else if (voter.age <= 25 && voter.voted) {
            final.numYoungVotes++
        }
      
    //total number of ppl 
        if(voter.age >= 26 && voter.age <= 35) {
            final.numMidPpl++
        } else if (voter.age >= 36 && voter.age <= 55) {
            final.numOldPpl++
        } else if (voter.age >=18 && voter.age <= 25) {
            final.numYoungPpl++
        }

    return final
   }, {numYoungVotes: 0, numYoungPpl: 0, numMidVotes: 0, numMidPpl:0, numOldVotes: 0, numOldPpl: 0})
   
   return voterObj
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/

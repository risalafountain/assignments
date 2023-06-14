//1--return a new array that has only the numbers that are 5 or greater 
function fiveAndGreaterOnly(arr) {
    const result = arr.filter(function(num) {
        return num > 5; 
    }) 
    return result
  }
  // test
  console.log(fiveAndGreaterOnly([3, 6, 8, 2])); /// [6, 8]

  
//2--return a new array that only includes even numbers 
function evensOnly(arr) {
    const numResult = arr.filter(function (num) {
        if (num % 2 === 0) {
            return num
        }
    })
    return numResult //cannot access before initializaiton
  }
  // test
  console.log(evensOnly([3, 6, 8, 2])); /// [6, 8, 2]

  //es6 syntax
//   function even(arr){
//     arr.filter(num => num % 2 === 0)
//   }
  

//3--return a new array that only includes those that are 5 characters or fewer in length
function fiveCharactersOrFewerOnly(arr) {
    const specWords = arr.filter (function (oneWord){
        if (oneWord.length <= 5) {
            return oneWord   
            // console.log(oneWord)         
        } 
    })
    return specWords
}
// test
  console.log(fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"])); // ["by", "dog", "wolf", "eaten"]
  console.log(fiveCharactersOrFewerOnly(["Hello", "wonderful", "human", "You", "are", "spectacular"])); // ["by", "dog", "wolf", "eaten"]

//4--return a new array that has filtered out those who do not belong to the club 
function peopleWhoBelongToTheIlluminati(arr){
    const clubMembers = arr.filter (function (verify){
        if (verify.member === true) {
            return (`${verify.name.member}`)
        }
    })
    return clubMembers
  }
  // test
  console.log(peopleWhoBelongToTheIlluminati([
      { name: "Angelina Jolie", member: true },
      { name: "Eric Jones", member: false },
      { name: "Paris Hilton", member: true },
      { name: "Kayne West", member: false },
      { name: "Bob Ziroll", member: true }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', member: true },
  //  { name: 'Paris Hilton', member: true },
  //  { name: 'Bob Ziroll', member: true } ]
  

//5--make a filtered list of all the people who are old enoughto see the matrix (older than 18)

function ofAge(arr){
    const oldEnough = arr.filter (function (check) {
        if (check.age >= 18) {
            return (`${check.name.age}`)
        }
    })
    return oldEnough    
  }

  // test
  console.log(ofAge([
      { name: "Angelina Jolie", age: 80 },
      { name: "Eric Jones", age: 2 },
      { name: "Paris Hilton", age: 5 },
      { name: "Kayne West", age: 16 },
      { name: "Bob Ziroll", age: 100 }
  ]));
  // =>
  //[ { name: 'Angelina Jolie', age: 80 },
  //  { name: 'Bob Ziroll', age: 100 } ]
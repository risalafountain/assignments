
//Make an array of numbers that are doubles of the first array (done w/ TA)

function doubleNumbers(arr){
    // return num * 2 // your code here
   return arr.map(nums => nums * 2)
}
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
// console.log(doubleNumbers ([2, 3, 4])); //[4, 6, 8]
// console.log(doubleNumbers([4,55,4])); // [8,110,8]

//2- take an array of numbers and make them strings (done w/ Instructor)
function stringItUp(arr){
  return arr.map((currentNum, index /*used here as an example only*/) => {
     return currentNum.toString()
  } )
  // console.log(arr)
   // your code here
}
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3 - capitalize the first letter of each name and make the rest of the chracters lowercase (got help from student)
//isolate the first letter
//capitalize it 
//lowercase the rest

//RLF
function capitalizeNames(arr){
  return arr.map(oneName => {
    return oneName.charAt(0).toUpperCase() + oneName.slice(1).toLowerCase();
  })
  }

//got this from a friend, which works like a charm, but mine doesn't what is the difference? 
// function capitalizeNames(names) {
//   return names.map(name => {
//     const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     return capitalized;
//   });
// }

console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
console.log(capitalizeNames(["mfdios", "dfawe"]))

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
 
//4 Make an array of strings of the names 

//RLF
function namesOnly (arr){
  const nameOnly = arr.map(nameOnly =>
    nameOnly.name);
    return nameOnly;
}  

// //-- I got help from a friend but how come mine doesn't work?
// function namesOnly(arr){   //declares namesOnly as a function and passes the parameter or objext arr to it.
//   let name = arr.map(names => names.name.toString());  //declares name as a variable and assigns it the data from the array called names. converts each name to a string. does not affect the age as it is a number.
//   return name;    //returns the variable of name with its assigned string data.
// }

console.log(namesOnly([
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]

//5--make an array of strings of the names saying whether or not they can go to the matrix 

function makeStrings(arr) {
   const user = arr.map (function (verify) {
      if (verify.age >= 18) {
         return (`${verify.name} can go to the Matrix!`)
      } else {
         return (`${verify.name} is underage!`)
      }
   })
   return user
}

console.log(makeStrings([
     {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
         age: 16
     },
     {
         name: "Bob Ziroll",
         age: 100
     }
 ]));
 // ["Angelina Jolie can go to The Matrix",
 // "Eric Jones is under age!!",
 // "Paris Hilton is under age!!",
 // "Kayne West is under age!!",
 // "Bob Ziroll can go to The Matrix"]
 

//--6 make an array of  names in <h1> and the ages in <h2>
function readyToPutInTheDOM(arr){
   const newArr  = arr.map (function (userInfo) {
      return (`<h1>${userInfo.name}</h1>${userInfo.age}<h2>`)
   })
   return newArr
 }
 console.log(readyToPutInTheDOM([
     {
         name: "Angelina Jolie",
         age: 80
     },
     {
         name: "Eric Jones",
         age: 2
     },
     {
         name: "Paris Hilton",
         age: 5
     },
     {
         name: "Kayne West",
         age: 16
     },
     {
         name: "Bob Ziroll",
         age: 100
     }
 ]));
 // ["<h1>Angelina Jolie</h1><h2>80</h2>",
 // "<h1>Eric Jones</h1><h2>2</h2>",
 // "<h1>Paris Hilton</h1><h2>5</h2>",
 // "<h1>Kayne West</h1><h2>16</h2>",
 // "<h1>Bob Ziroll</h1><h2>100</h2>"]
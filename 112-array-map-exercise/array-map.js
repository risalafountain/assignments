
//Make an array of numbers that are doubles of the first array 

function doubleNumbers(arr){
    // return num * 2 // your code here
   return arr.map(nums => nums * 2)
}
// console.log(doubleNumbers([2, 5, 100])); // [4, 10, 200]
// console.log(doubleNumbers ([2, 3, 4])); //[4, 6, 8]
// console.log(doubleNumbers([4,55,4])); // [8,110,8]

//2- take an array of numbers and make them strings 
function stringItUp(arr){
  return arr.map((currentNum, index /*used here as an example only*/) => {
     return currentNum.toString()
  } )
  // console.log(arr)
   // your code here
}
// console.log(stringItUp([2, 5, 100])); // ["2", "5", "100"]

//3 - capitalize the first letter of each name and make the rest of the chracters lowercase 
//isolate the first letter
//capitalize it 
//lowercase the rest

//RLF
// function capitalizeNames(arr){
//   return arr.map(oneName => {
//     const newArr = oneName.charAt(0).toUppercase() + oneName.slice(1).toLowerCase();
//     return newArr;
//   })
//   }

//got this from a friend, which works like a charm, but mine doesn't what is the difference? 
// function capitalizeNames(names) {
//   return names.map(name => {
//     const capitalized = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
//     return capitalized;
//   });
// }

// console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
// console.log(capitalizeNames(["mfdios", "dfawe"]))

// Output:
// ["John", "Jacob", "Jingleheimer", "Schmidt"]
 
//4 Make an array of strings of the names 
// function namesOnly(arr){
//   return arr.map (function (onlyNames) {
//   })
// }

//RLF
// function namesOnly (arr){
//   const nameOnly = arr.map(nameOnly =>
//     namesOnly.name.toString());
//     return nameOnly;
// }  

// //-- I got help from a friend but how come mine doesn't work?
// function namesOnly(arr){   //declares namesOnly as a function and passes the parameter or objext arr to it.
//   let name = arr.map(names => names.name.toString());  //declares name as a variable and assigns it the data from the array called names. converts each name to a string. does not affect the age as it is a number.
//   return name;    //returns the variable of name with its assigned string data.
// }

// console.log(namesOnly([
//     {
//         name: "Angelina Jolie",
//         age: 80
//     },
//     {
//         name: "Eric Jones",
//         age: 2
//     },
//     {
//         name: "Paris Hilton",
//         age: 5
//     },
//     {
//         name: "Kayne West",
//         age: 16
//     },
//     {
//         name: "Bob Ziroll",
//         age: 100
//     }
// ]));
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


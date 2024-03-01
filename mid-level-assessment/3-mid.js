// Challenge 1: **Sort Array with Preserved Index for -1 Values**

//isolate non -1 values from -1 values 
//sort non -1 values from lowest to highest 
    //using .sort
//keep -1 values in the same index as original arr
//return new arr


//#1--filter method to pull out all non -1 values and put them in a new arr
// function solution(arr) {
//     const filteredArr = arr.filter(function (num) {
//         if (num !== -1) {
//             return num
//         }
//        // console.log(num) //-1, -1, -1
//     })
//     //console.log(filteredArr) //[ 150, 190, 170, 160, 180 ]
// //#2--sort the new arr 
//     filteredArr.sort(function (a,b) {
//         return a-b
//     }) 
//     //console.log(filteredArr) //[ 150, 160, 170, 180, 190 ]
// //#3--map through original arr 
// //#4--remove numbers from filtered arr to original arr
//     return arr.map (num => {
//         if (num !== -1) {
//             num = filteredArr[0]
//             filteredArr.splice(0, 1) 
//         }
//         return num
//     })
// }

// console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

// Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

//-step : isolate the vowels
    //make all letters one case 
//-step : 
//-step : count the vowels

//convert string to an arr to use arr methods map
   // const onlyVowels = string.map (function (word) {

// function countVowels(string) {
//     let count = 0
//     const vowels = ["a", "e", "i", "o", "u" ]
// //make entire string one case and turn into array of characters
//     const lowerCaseResult=string.toLowerCase()
// //make string an array ( so i can use map method) 
//     const arrResult = [...lowerCaseResult]//spread operator made my string an array of characters!!! yay!
//     console.log(lowerCaseResult) //hello, world!
//     console.log(arrResult)//  ['h', 'e', 'l', 'l','o', ',', ' ', 'w','o', 'r', 'l', 'd','!']
// // go through letters in the string to see if any of the characters are vowels if so add to count
//     arrResult.map(function (letter) {
//         if (vowels.includes(letter)) {
//             count ++
//         }
//         return count
//     })
// }

// //THIS IS STILL RETURNING UNDEFINED!!!! HELP

// const input = 'Hello, World!';
// console.log(countVowels(input)); // Output: 3

// const input = 'Counting Vowels';
// console.log(countVowels(input)); // Output: 5

//  })
  
// if (charAt[i] === vowels ) {
//      count ++
//     }
// return count
// // console.log (`result ${onlyVowels}`) 
// return word
//     //("result:" + onlyVowels)
// }

// Write a JavaScript function called **`findSumOfTwo`** that takes in an array of numbers and a target number. The function should find two numbers in the array that add up to the target number and return them as an array. If there are multiple pairs that satisfy the condition, return any one of them. If no such pair exists, return an empty array.

//map through array 
//
 

// Implement the **`findSumOfTwo`** function using either the provided example solutions or your own solution.

 

// function findSumOfTwo(numbers, target) {

 

// }

 

// console.log(findSumOfTwo([2, 4, 7, 11, 15], 9)); // Output: [2, 7]

 

// console.log(findSumOfTwo([5, 12, 3, 9, 1], 8)); // Output: [3, 5]

//write a function that takes a string as argument and returns the number of vowels contained in that string.

//step 1: turn string into array
//step 2: map through arr 
//step 3: if vowels present increase count by one


//looop through arr of vowels 
//conditional statementg add count of 1 
//return count

// function findVowels(word){
//     const count = 0
    
//     for (let index = 0; index < word.length; index++) {
//         const vowels = ["a", "e", "i", "o", "u"];
//         if (word=== vowels) {
//             count ++
//         }
//     return count
//     }
// }

// console.log (findVowels("hello")); //2

function findVowels(word) {

    let count = 0; // Initialize the count outside the loop
  
    const vowels = ["a", "e", "i", "o", "u"];
  
   
  
    for (let index = 0; index < word.length; index++) {
  
      if (vowels.includes(word[index])) { // Check if the character is in the vowels array
  
        count++;
  
      }
  
    }
  
   
  
    return count; // Return the count after the loop
  
  }
  
   
  
  console.log(findVowels("hello")); // Output: 2
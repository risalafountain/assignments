// Challenge 1: **Sort Array with Preserved Index for -1 Values**

//isolate non -1 values from -1 values 
//sort non -1 values from lowest to highest 
    //using .sort
//keep -1 values in the same index as original arr
//return new arr


// filter method to pull out all non -1 values
function solution(arr) {
    const filteredArr = arr.filter(function (num) {
        if (num !== -1) {
            return num
        }
    })
    filteredArr.sort(function (a,b) {
        return a-b
    }) 
    filteredArr.splice[0] //starting at the index of 0 
}

// fitler creates a new arr

// map thru your original array and if the value !== -1 you can set that value to filteredARR[0]

//splice out filteredArr[0]

// [-1, 150, 160, 170, -1, -1, 180, 190]

// [ ] // sort


// filter

//sort your filtered

// map and replace values





// function solution(arr){
//     arr.map((num) => {
//         if (num === -1) {
//             console.log('num:', num)
//     }
//         else {
//             arr.sort(function(a, b){
//                 return a - b
//             }
//     )}
//     })
//     // const result = arr.sort (function (a,b) {
//     //     return a-b
//     // })
//     //return result
// }



console.log(solution([-1, 150, 190, 170, -1, -1, 160, 180]))
// console.log(solution([5, 3, 1]))
// console.log(solution([-1, -1, -1, -1]))
// console.log(solution([100, -1, 50, -1, 75]))

// Challenge 2: **Count Vowels**

// Write a JavaScript function called **`countVowels`** that takes a string as input and counts the number of vowels (a, e, i, o, u) in the string. The function should return the count.

// Implement the **`countVowels`** function using either the provided example solutions or your own solution.

//-step 1: isolate the vowels
//-step 2: count the vowels


// function countVowels(arr) {
//     let count = 0
//     //const vowels = ["a", "e", "i", "o", "u" ]
//     const onlyVowels = arr.map (function (word) {
//         if (word.charAt(i) === "a" ) {
//            count ++
//         }
//     })
//     return ("result:" + onlyVowels)
// }

// const input = 'Hello, World!';
// console.log(countVowels(["hello World", "cat", "dog", "tree"])); // Output: 3

// const input = 'Counting Vowels';

// console.log(countVowels(input)); // Output: 5

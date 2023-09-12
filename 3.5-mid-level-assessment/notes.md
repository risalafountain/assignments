// Challenge 1: **Sort Array with Preserved Index for -1 Values**
// You are given an array a containing integers. Your task is to implement the solution function to sort the array in ascending order, while preserving the original index positions of -1 values.

// Write a function solution(a) that takes in an array a and returns a new array with the following conditions:

// All non -1 values in the array should be sorted in ascending order.
    //differentiate between -1 and non -1 values 
    //sorting values after 
    //reform arr
// The -1 values should retain their original index positions in the sorted array.

//--.map, .filter, .fill, .foreach

// function solution(a) {
//     // Separate the array into two parts: non-1 values and their indices, and -1 values
//     const nonMinusOneValues = [];
//     const minusOneIndices = [];
    
//     for (let i = 0; i < a.length; i++) {
//       if (a[i] !== -1) {
//         nonMinusOneValues.push(a[i]);
//         minusOneIndices.push(i);
//       }
//     }
  
//     // Sort the non-1 values in ascending order
//     nonMinusOneValues.sort((a, b) => a - b);
  
//     // Populate the result array with the sorted non-1 values at their original indices
//     for (let i = 0; i < nonMinusOneValues.length; i++) {
//       a[minusOneIndices[i]] = nonMinusOneValues[i];
//     }
  
//     return a;
//   }
  
//   // Example usage:
//   const input = [-1, 150, 190, 170, -1, -1, 160, 180];
//   const result = solution(input);
//   console.log(result); // Output: [-1, 150, 160, 170, -1, -1, 180, 190]


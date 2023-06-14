//--1 sort an array from smallest number to largest

function leastToGreatest(arr) {
  const result = arr.sort(function(a,b) {
    return a - b
  })
  return result
  }
  // return leastToGreatest

  console.log(leastToGreatest([1, 3, 5, 2, 90, 20])); // [1, 2, 3, 5, 20, 90]

//--2 sort array from largest number to smallest 
function greatestToLeast(arr) {
  const outcome = arr.sort (function (a,b) {
    return b - a
  })
  return outcome
}

console.log(greatestToLeast([1, 3, 5, 2, 90, 20])); // [90, 20, 5, 3, 2, 1]

//--3 sort array from shortest string to longest
function lengthSort(arr) {
  const words = arr.sort (function (a,b){
    return a.length - b.length
  })
  return words
}

console.log(lengthSort(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "wolf", "eaten", "family"]

//--4 sort array alphabetically 
function alphabetical(arr) {
 const abcOrder =arr.sort()
 return abcOrder
}

console.log(alphabetical(["dog", "wolf", "by", "family", "eaten"])); // ["by", "dog", "eaten", "family", "wolf"]

//--5 sort the objects in the array by age 
function byAge(arr){
const ageOrder = arr.sort (function (a,b) {
  return a.age - b.age
})
return ageOrder
}

console.log(byAge([
    { name: "Quiet Samurai", age: 22 },
    { name: "Arrogant Ambassador", age: 100 },
    { name: "Misunderstood Observer", age: 2 },
    { name: "Unlucky Swami", age: 77 }
]));
// => [ { name: 'Misunderstood Observer', age: 2 },
//  { name: 'Quiet Samurai', age: 22 },
//  { name: 'Unlucky Swami', age: 77 },
//  { name: 'Arrogant Ambassador', age: 100 } ]
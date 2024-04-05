// #1 Write a function called extractUniqueCharacters that takes an array of strings and returns a new array containing only the unique characters from all the strings.

function extractUniqueCharacters(strings) {
  console.log("hello")
  //split up the words into characters
  const splitArr = words.map(word => word.split(''))
//   console.log(splitArr)
  //flatten the arr to turn it into one arr
  const oneArr = splitArr.flat()
//   console.log(oneArr)
  //filter through the flattened arr and pull out unique chars

  const uniqueChars = oneArr.filter((char,index) => oneArr.indexOf(char)===index)
  return(
    uniqueChars
  )
}

const words = ['apple', 'banana', 'cherry'];
const uniqueChars = extractUniqueCharacters(words);
console.log(uniqueChars); // Output: ['a', 'p', 'l', 'e', 'b', 'n', 'c', 'h', 'r', 'y']

function sortByProperty(objects, propertyName) {
  
}

//#2 Write a function called sortByProperty that takes an array of objects and a property name as input. The function should return a new array containing the objects sorted in ascending order based on the specified property.

const people = [
  { name: 'Alice', age: 30 },
  { name: 'Bob', age: 25 },
  { name: 'Charlie', age: 35 },
  { name: 'David', age: 28 },
];

function sortByProperty(arr, age){
    //sort arr pass in parameters descending order a-b
    arr.sort((a,b) => a[age] - b[age])
    return(
        arr
    )
}

const sortedByAge = sortByProperty(people, 'age');
console.log(sortedByAge);
// Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.
//1. check to see if any of the words in the array are anagrams of the target.
//2. check if the same length 
//3. check if the letters are the same 
//4. separate string into individual letters /split/ 
//5. sort method -- will put the letters in the same order if they're the same
//6. join method -- to join arr into string 
//7. conditional statements if === anagrams

// ```jsx

//since the logic is the same, if i build this function outside of the filterAnagrams function, I can then apply it to both the arr and the target since they are needing the same things done 
// function sortWord(word){
//     //this splits the word into individual letters, sorts them in ascending order and rejoins them
//     return word.split("").sort().join("")
// }
// const list = ['bananas', 'apples', 'oranges'] 
// const sortedWords = list.map(word => sortWord(word))  
// console.log(sortedWords)

function filterAnagrams(arr, target) {
//1. separate string into individual letters /split/ 
//2. sort method -- will put the letters in the same order if they're the same
//3. join method -- to join arr into string 
//4. for the arr map over each word in the arr and apply the above logic
    const param1 = arr.map(word => word.split("").sort().join(""))
    const param2 = target.split("").sort().join("")
// compare sorted changed arr of words with target sorted and changed word 
//if they match they are anagrams
    const compareResult = arr.filter((word, index) => param1 [index] === param2)
    return compareResult
}

//these are the words to use and the target word 
const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
const target = 'enlist';

//call the function and pass in the above parameters
const anagrams = filterAnagrams(words, target);
console.log("anagrams here: " + anagrams); // Output: ['listen', 'silent']


// Sort by Multiple Criteria
// Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.
//1. sort the people arr by age people.sort (ab if a>b)
//2. within sort by name 

// function sortByMultipleCriteria(people) {
//  //access people.age and sort 
// people.age.sort(a,b) {
//     return a-b
// }
//  //access people.name and sort
// people.name.sort(a,b) {
//     return a-b
// }
//  //sort both at the same time??
// }

// const people = [
// { name: 'Alice', age: 30 },
// { name: 'Bob', age: 25 },
// { name: 'Charlie', age: 35 },
// { name: 'David', age: 25 },
// ];

// const sortedPeople = sortByMultipleCriteria(people);
// console.log(sortedPeople);

// Expected outcome: [
//  { name: 'Bob', age: 25 },
//  { name: 'David', age: 25 },
//  { name: 'Alice', age: 30 },
//  { name: 'Charlie', age: 35 }
// ]


function sortByMultipleCriteria(people) {
    return people.sort((personA, personB) => {
      if (personA.age === personB.age) {
        if (personA.name < personB.name) return -1;
        if (personA.name > personB.name) return 1;
        return 0;
      }
      return personA.age - personB.age;
    });
  }
  
  const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 },
    { name: 'David', age: 25 },
  ];
  
  const sortedPeople = sortByMultipleCriteria(people);
  console.log(sortedPeople);


// Write a function called calculateTotalPrice that calculates the total price for each product in an array of objects representing products, where each object has a name (string), price (number), and quantity (number) property. The function should return a new array containing objects with the name and totalPrice properties, where totalPrice is the result of multiplying the price with the quantity for each product.

//write a function called totalprice 
//calculate total price for each product 
//return a new arr with quantity x price 

//console log products --> products.name [figure out the data type etc]


function calculateTotalPrice(products) {
const friend = products.map(product => `This is the result: ${product.name} ${product.quantity * product.price}`)
      return friend
}

const products = [
  { name: 'Apple', price: 1.5, quantity: 3 },
  { name: 'Banana', price: 0.75, quantity: 5 },
  { name: 'Orange', price: 1.25, quantity: 2 },
];

const totalPriceArray = calculateTotalPrice(products);
console.log(totalPriceArray);

// Output: [
//  { name: 'Apple', totalPrice: 4.5 },
//  { name: 'Banana', totalPrice: 3.75 },
//  { name: 'Orange', totalPrice: 2.5 }
// ]

/* QUIZ (GOT 7/8 CORRECT)
1. How do you provide data to components using createContext and useContext? 

by using the useContext hook and a context provider 
- Explanation: To provide data to components using `createContext` and `useContext`, you wrap the relevant part of your component tree with a context provider using `MyContext.Provider`, and then use the `useContext` hook within components to consume the context value. This allows you to share data across components without the need for explicit prop passing.

2. How can you access the value provided by a context using useContext inside a component?
-The correct way to wrap components with a context provider is shown in option A. You use the context object (`MyContext`) along with the `Provider` component to wrap the portion of the component tree that should have access to the context value.

3. Which of the following is a correct way to wrap components with a context provider? 

<MyContext.Provider value="data">...</MyContext.Provider>
The correct way to access the value provided by a context using `useContext` is to use the syntax shown in option A. The `useContext` hook takes the context object returned by `createContext` and returns the context value associated with it.

4. T/F: Context in React can only be used to manage state; it cannot be used to share functions between components. 

This statement is False. Context in React can be used not only to manage state but also to share functions, themes, and other data between components. It provides a way to pass data down the component tree without the need for prop drilling.

5. T/F: Context provides a way to avoid prop drilling, which is the process of passing props through intermediate components that do not need the data. 

This statement is True. Context is a feature in React that helps prevent prop drilling by allowing data to be passed directly to deeply nested components without the need to pass the data through intermediary components. This leads to cleaner and more maintainable code.
 
6. What is the purpose of a React fragment? 

Fragments are used to group multiple elements without adding an extra DOM node.

-Explanation: React fragments allow you to group multiple JSX elements without introducing an additional wrapping <div> or any other DOM element. This helps keep the DOM structure clean and more efficient.

7. Using a React fragment can improve performance by reducing the number of DOM nodes. 

This statement is true. Fragments help improve performance by avoiding the creation of unnecessary DOM nodes. Without fragments, grouping elements would require additional wrapping elements, which could negatively impact performance and lead to more complex CSS styling.

8. React props.children allows you to access and render the content placed between the opening and closing tags of a component.

This statement is true. React's props.children provides a way to access and render any content that is placed between the opening and closing tags of a component when it is used.
*/
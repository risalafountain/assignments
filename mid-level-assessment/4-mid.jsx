// Write a function called **`filterAnagrams`** that filters an array of words to find and return an array containing only the words that are anagrams of a given target word.

// **Understand the Problem:**
// Before you start coding, make sure you understand what the challenge is asking. You need to filter a given array of words to find the anagrams of a target word. Anagrams are words that have the same letters but in a different order.

// ```jsx
// function filterAnagrams(arr, target) {
  
// }

// const words = ['listen', 'silent', 'dog', 'god', 'hello', 'world'];
// const target = 'enlist';

// const anagrams = filterAnagrams(words, target);
// console.log(anagrams); // Output: ['listen', 'silent']
// ```


// Sort by Multiple Criteria
// Write a function called sortByMultipleCriteria that takes an array of objects representing people, each with a name (string) and age (number) property. The function should return a new array with the people sorted first by age in ascending order, and then by name in alphabetical order.
// function sortByMultipleCriteria(people) {

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
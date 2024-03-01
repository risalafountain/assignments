






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
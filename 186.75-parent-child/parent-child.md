/**
Mini Challenge:
Move the `header` element from Page into 
its own component called "Header"
*/

Create an instance of the header component wherever you need once you have already created it into its own function

Create an instance of the MainContent component wherever you need once you have already created it into its own function



## Parent/Child Components

### Introduction

In React, components can be organized in a hierarchical structure, where some components act as parents and others as children. This parent-child relationship allows for modular and reusable code, efficient data flow, and flexible UI composition. Let's explore the key aspects of the parent-child relationship in React components through a simple example.

### Defining Parent and Child Components

1. Parent Component: A parent component is a higher-level component that encapsulates one or more child components. It controls and manages the state and behavior of its child components. Parent components pass data and functions to their children via props, enabling communication and coordination between components.
2. Child Component: A child component is a lower-level component that receives data and behavior from its parent component via props. It focuses on rendering specific UI elements and functionality, utilizing the data and functions provided by the parent component.

### Data Flow in Parent-Child Relationship

1. One-Way Data Flow: In React, data flows in a unidirectional manner, from parent to child components. Parents pass data down to their children through props, which are immutable properties that the child component can access and utilize. This one-way data flow ensures a predictable and manageable data flow pattern.
2. Updating Parent State: Child components can also communicate with their parent components by invoking functions passed as props. When a child component triggers an event or performs an action, it can call the parent's function to update the parent's state, enabling synchronization and coordination between components.

### Benefits of Parent-Child Relationship

1. Code Reusability: By breaking down complex UIs into smaller parent and child components, you can reuse child components across different parent components. This reusability enhances code modularity, reduces duplication, and promotes a more efficient development process.
2. Component Composition: Parent and child components can be combined and composed to create more intricate UI structures. Parents can nest multiple child components, allowing for flexible and dynamic UI compositions. This composability enables building complex interfaces by assembling and reusing smaller, self-contained components.

Example:
Consider a simple example of a parent component **`App`** rendering a child component **`Button`**.

```jsx
import React from 'react';

const Button = ({ text, onClick }) => {
return (
<button onClick={onClick}>
{text}
</button>
);
};

const App = () => {
const handleClick = () => {
console.log('Button clicked!');
};

return (
<div>
<h1>Parent Component</h1>
<Button text="Click Me" onClick={handleClick} />
</div>
);
};

export default App;
```

In this example, the **`App`** component acts as the parent component, while the **`Button`** component serves as the child component. The parent component passes two props, **`text`** and **`onClick`**, to the child component, which it can use to render a button with the provided text and handle the click event using the given **`onClick`** function.

**Conclusion:** The parent-child relationship is a fundamental aspect of building React components. Parent components control the state and behavior of their child components by passing data and functions through props. This relationship facilitates modular code organization, efficient data flow, and flexible UI composition. By understanding and utilizing the parent-child relationship, you can create reusable, scalable, and maintainable components in your React applications.
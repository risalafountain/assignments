https://scrimba.com/scrim/co70846728c7d60f51fa1997c

## **useState array destructuring**

In React, when using the **`useState`** hook to manage state, you can utilize array destructuring to extract the state value and its corresponding update function in a concise and readable manner.

Array destructuring is a feature in JavaScript that allows you to unpack values from arrays or objects into distinct variables. In the case of **`useState`**, the hook returns an array with two elements: the current state value and the state update function. By using array destructuring, you can assign these elements to separate variables for easier access and manipulation.

Here's an example of using array destructuring with **`useState`**:

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [count, setCount] = useState(0);

// You can now directly use 'count' and 'setCount' variables

const increment = () => {
setCount(count + 1);
};

return (
<div>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
</div>
);
}
```

In this example, the **`useState`** hook is used to manage the **`count`** state. By destructuring the returned array into **`[count, setCount]`**, the **`count`** variable represents the current value of the state, and **`setCount`** is the function used to update the state.

Using array destructuring allows you to directly use **`count`** and **`setCount`** variables within the component, making the code cleaner and more readable. You can use the **`count`** variable to display the current count value and call **`setCount`** to update the state when the button is clicked.

It's worth noting that you can name the variables according to your preference. For example, you could write it as **`[myState, setMyState] = useState(initialValue)`** if that provides better clarity in your code.

Array destructuring with **`useState`** is a helpful technique to easily access and update state values in React functional components. It simplifies the process of working with state, allowing you to write more concise and expressive code.
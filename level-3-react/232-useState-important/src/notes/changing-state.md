https://scrimba.com/scrim/co85d4a75911c0b43ce5ad623

## **Changing State**

In React, you can change the state by calling the state update function provided by the **`useState`** hook. This function is typically named with a prefix "set" followed by the state variable name. It allows you to modify the current state value and trigger a re-render of the component with the updated state.

Here's an example of how to change the state using the state update function:

```jsx
import React, { useState } from 'react';

function Counter() {
const [count, setCount] = useState(0);

const increment = () => {
setCount(count + 1);
};

const decrement = () => {
setCount(count - 1);
};

return (
<div>
<h1>Counter</h1>
<p>Count: {count}</p>
<button onClick={increment}>Increment</button>
<button onClick={decrement}>Decrement</button>
</div>
);
}
```

In this example, the **`Counter`** component manages the state using the **`useState`** hook. It initializes the **`count`** state with an initial value of 0.

The **`increment`** and **`decrement`** functions are event handlers that update the **`count`** state. When the **`increment`** button is clicked, the **`setCount`** function is called with the new value of **`count + 1`**, and the component re-renders with the updated state. Similarly, when the **`decrement`** button is clicked, the **`setCount`** function is called with **`count - 1`**.

Calling the state update function with a new value will update the state and trigger a re-render of the component, reflecting the updated state in the rendered output.
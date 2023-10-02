https://scrimba.com/scrim/cof9245f4a914e8aaf080c783

## Changing state with a callback function

In React, state is an essential concept for managing and updating data within a component. When updating state, it's important to be mindful of React's asynchronous nature, as state updates may not always happen immediately. To ensure you're working with the latest state value, React provides a way to update state using a callback function.

Using a callback function to update state guarantees that you are working with the most up-to-date state value. It is especially useful when the new state depends on the previous state or when you have multiple state updates that need to be applied together.

Let's walk through an example to understand how to change state with a callback function in React:

```jsx
import React, { useState } from 'react';

const CounterComponent = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
};

export default CounterComponent;

```

In this example, we have a `CounterComponent` that manages a count state using the `useState` hook. The initial value of the state is set to 0.

To increment or decrement the count, we define two separate functions, `increment` and `decrement`. These functions use the `setCount` function, provided by the `useState` hook, to update the state.

Instead of directly passing a new value to `setCount`, we pass a callback function that receives the previous state value as an argument. In this case, the `prevCount` argument represents the previous count value.

Inside the callback function, we can perform any operations necessary to compute the new state based on the previous state. In the `increment` function, we add 1 to the previous count, and in the `decrement` function, we subtract 1.

By using a callback function, React guarantees that we're working with the latest state value, even if multiple state updates are queued or if the state value has changed by the time the update is processed.

Changing state with a callback function is a recommended practice in React when you need to update state based on the previous state or when you have multiple state updates that need to be applied together. By ensuring you have the most up-to-date state value, you can avoid potential issues caused by stale or incorrect state updates.
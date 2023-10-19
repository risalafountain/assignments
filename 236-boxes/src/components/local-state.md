# Standup

<aside>
💡 Don’t forget to complete your [**standup form here**](https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu)

</aside>

https://scrimba.com/scrim/co0264ad6929a556e38a6a10f

### **Local State**

In React, local state refers to the state that is managed and used within a specific component. It is distinct from global state managed by state management libraries like React Context. Local state is typically used when the state data is relevant only to a specific component and does not need to be shared with other components.

To manage local state in a functional component, you can use the **`useState`** hook provided by React. The **`useState`** hook allows you to declare state variables and their corresponding update functions. Here's an example:

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [count, setCount] = useState(0);

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

In this example, the **`useState`** hook is used to declare a local state variable called **`count`** with an initial value of **`0`**. The hook returns an array with two elements: the current value of the state variable (**`count`**) and a function (**`setCount`**) to update the state.

The **`increment`** function is an event handler that calls **`setCount`** with the updated value of **`count + 1`** when the button is clicked. This triggers a re-render of the component with the updated state, causing the count value to be displayed in the UI.

Local state is scoped to the component in which it is defined. Changes to local state will cause a re-render of the component and any child components that use the state value.

It's important to note that local state is not shared between different instances of the same component. Each instance of the component will have its own separate state.

Local state is useful for managing component-specific data and behavior. It keeps the state encapsulated within the component, making it self-contained and easier to reason about.
https://scrimba.com/scrim/co7444d9daf79f8f39a8ebef4

## **Passing state as props**

Passing state as props is a common technique used in React to share data between components. It involves passing the state values from a parent component to its child components as props, allowing the child components to access and use the state data.

Here's a basic explanation of how to pass state as props:

1. Define the state in the parent component: In the parent component, define the state using hooks (in functional components) or the state object (in class components). This state represents the data you want to share with child components.
2. Pass the state as props: In the parent component's JSX, render the child component(s) and pass the state values as props. You can do this by adding attributes to the child component tags, specifying the name of the prop and the value as the corresponding state value.
3. Access the props in the child component: In the child component, you can access the passed state values through the props object. Use the props as needed within the child component, such as displaying the data or using it for further computations.

Here's an example of passing state as props in React:

Parent Component:

```jsx
import React, { useState } from 'react';
import ChildComponent from './ChildComponent';

function ParentComponent() {
const [count, setCount] = useState(0);

return (
<div>
<h1>Parent Component</h1>
<p>Count: {count}</p>
<ChildComponent count={count} />
</div>
);
}

export default ParentComponent;
```

Child Component:

```jsx
import React from 'react';

function ChildComponent(props) {
return (
<div>
<h2>Child Component</h2>
<p>Received count from parent: {props.count}</p>
</div>
);
}

export default ChildComponent;
```

In this example, the **`ParentComponent`** holds a **`count`** state using the **`useState`** hook. It renders the **`ChildComponent`** and passes the **`count`** state as a prop named **`count`**. The **`ChildComponent`** receives the prop and displays it in the JSX.

By passing the state as props, the child component has access to the **`count`** value and can utilize it as needed. If the state changes in the parent component, the updated value will be automatically passed down as props, causing the child component to re-render with the new data.

Passing state as props allows you to share data between components, enabling a hierarchical flow of data in your application. It helps create reusable and modular components that can operate independently based on the shared state.
https://scrimba.com/scrim/coe244c8c83abea08aa5a283c

→ In React, **complex state** refers to a state that consists of multiple values or data structures. It goes beyond simple primitive values like strings or numbers and encompasses more complex data structures such as arrays or objects. Complex state is typically used when you need to manage and update multiple related pieces of data within a component.

## **Complex state: objects**

In React, managing complex state often involves working with objects that hold multiple key-value pairs. Objects are commonly used to represent and update complex state in React components. React provides various approaches to handle object state, allowing you to add, remove, update, and access specific properties. Here's an overview of common operations on object state in React:

1. Initializing Object State:
To initialize an object as state, you can use the ‘useState’ hook. Provide an initial value of an empty object or an object with some initial properties.

```jsx
import React, { useState } from 'react';

function MyComponent() {
const [user, setUser] = useState({});
// ...
}
```

1. Updating Object State:
To update the object state, you can use the state update function to create a new object that merges the updated properties with the existing object.

```jsx
const updateName = (newName) => {
setUser({ ...user, name: newName });
};
```

1. Accessing Object Properties:
To access specific properties of the object state, you can directly reference them using dot notation or square brackets.

```jsx
return (
<div>
<p>Name: {[user.name](http://user.name/)}</p>
<p>Email: {user.email}</p>
</div>
);
```

1. Removing Properties from Object State:
To remove properties from the object state, you can use the state update function to create a new object that excludes the properties you want to remove.

```jsx
const removeEmail = () => {
const { email, ...newUser } = user;
setUser(newUser);
};
```

1. Rendering Object State:
Rendering object state can be similar to rendering arrays. You can access the object properties and use them to display relevant data in your component's JSX.

```jsx
return (
<div>
<p>Name: {[user.name](http://user.name/)}</p>
<p>Age: {user.age}</p>
<p>Role: {user.role}</p>
</div>
);
```

Remember to use the appropriate syntax to update and access properties of the object state. React components will re-render when the object state is modified, allowing the UI to reflect the updated values.

When updating the object state, it's essential to create a new object instance instead of modifying the existing object directly. React relies on immutability to efficiently update components and trigger re-renders when necessary.

By using these techniques, you can manage complex state represented as objects in React components. Object state is especially useful when you need to track and modify multiple properties related to a specific entity or data set.
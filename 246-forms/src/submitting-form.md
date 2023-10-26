# Standup

<aside>
💡 Don’t forget to complete your [**standup form here**](https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu)

</aside>

https://scrimba.com/scrim/coe43436db60b0c21a1cca067

# Handling Form Submission in React with `onSubmit`

Introduction:
In React, handling form submissions is a common requirement when building interactive web applications. The `onSubmit` event handler allows you to capture and process form data when the user submits the form. In this guide, we'll explore how to utilize the `onSubmit` event handler in React, focusing on the code snippet provided.

1. Understanding the Code:
Let's analyze the provided code snippet:

```jsx
import React from "react";

export default function Form() {
  const [formData, setFormData] = React.useState({
    firstName: "",
    lastName: "",
    email: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    // Process the form data
    console.log(formData);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="First Name"
        onChange={handleChange}
        name="firstName"
        value={formData.firstName}
      />
      <input
        type="text"
        placeholder="Last Name"
        onChange={handleChange}
        name="lastName"
        value={formData.lastName}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={handleChange}
        name="email"
        value={formData.email}
      />
      <button type="submit">Submit</button>
    </form>
  );
}
```

In this example, the `Form` component is defined with the `useState` hook to manage the form state. The `formData` state object holds the values for `firstName`, `lastName`, and `email`. The `handleChange` function is an event listener that updates the form state when the user modifies the input values.

1. Handling Form Submission:
The `handleSubmit` function is the event handler for form submission. It is triggered when the user submits the form. By calling `event.preventDefault()`, we prevent the default form submission behavior, which would cause a page refresh. Instead, we can handle the form submission within our code.
2. Processing Form Data:
Inside the `handleSubmit` function, you can process the form data as needed. In the provided example, we simply log the form data to the console using `console.log(formData)`. However, you can perform various actions such as sending the data to a server, performing validation, or updating other components with the form data.
3. Attaching `onSubmit` Event Handler:
To attach the `onSubmit` event handler to the form, we include the `onSubmit` attribute within the `<form>` element, pointing it to the `handleSubmit` function. This ensures that when the user submits the form, the `handleSubmit` function is called.

Conclusion:
Using the `onSubmit` event handler in React allows you to handle form submissions efficiently. By preventing the default form submission behavior and implementing the `handleSubmit` function, you can capture and process form data within your React application. Understanding how to utilize the `onSubmit` event handler enhances the interactivity and functionality of your forms, providing a seamless user experience.
# Standup

<aside>
💡 Don’t forget to complete your [**standup form here**](https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu)

</aside>

https://scrimba.com/scrim/co83b466d859cf1d6c4b3efaf

# Handling Select Inputs in React with `<select>` and `<option>`

Introduction:
Select inputs are commonly used in forms to allow users to choose from a predefined set of options. In React, handling select inputs involves using the `<select>` and `<option>` elements. In this guide, we'll explore how to leverage these elements to create select inputs and capture user selections.

1. The `<select>` Element:
The `<select>` element represents a control that presents a menu of options for the user to choose from. It acts as a container for `<option>` elements, defining the available choices within the select input.
2. The `<option>` Element:
The `<option>` element is used to define individual options within a `<select>` element. Each `<option>` represents one choice that the user can select.

Example Code:
Let's take a look at an example code snippet that demonstrates the usage of `<select>` and `<option>` elements in React:

```
import React, { useState } from "react";

export default function SelectExample() {
  const [selectedOption, setSelectedOption] = useState("");

  function handleChange(event) {
    setSelectedOption(event.target.value);
  }

  return (
    <div>
      <h3>Select an option:</h3>
      <select value={selectedOption} onChange={handleChange}>
        <option value="">-- Select --</option>
        <option value="option1">Option 1</option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
      <p>Selected option: {selectedOption}</p>
    </div>
  );
}

```

Explanation:
In this example, we define a `SelectExample` component that manages the selected option using the `useState` hook. The `selectedOption` state variable represents the currently selected option.

The `handleChange` function serves as the event listener for changes in the select input. When the user selects a different option, the `handleChange` function is triggered, and `event.target.value` gives us the value of the selected option. By calling `setSelectedOption`, we update the `selectedOption` state with the new value.

Within the `return` statement, the `<select>` element is rendered with the `value` attribute set to `selectedOption`, ensuring that the displayed option reflects the current state. The `onChange` event listener is attached to the `<select>` element, invoking the `handleChange` function when a selection is made.

Each `<option>` element represents an individual choice within the select input. The `value` attribute determines the value associated with the option, while the content between the opening and closing tags represents the visible text of the option.

The selected option is displayed below the select input using the `<p>` element, allowing users to see their current selection.

Conclusion:
By using the `<select>` and `<option>` elements in React, you can create select inputs and capture user selections within your forms. The example code above demonstrates how to manage the selected option using state and event listeners. Understanding how to leverage these elements enables you to build dynamic and interactive select inputs that enhance the usability of your React applications.

React Documentation on `<option />` and `<select />` : https://react.dev/reference/react-dom/components/select
# Standup

<aside>
💡 Don’t forget to complete your [**standup form here**](https://airtable.com/appg2CeX4DA9Y7hDi/shrUyD9aoryvXZgfu)

</aside>

https://scrimba.com/scrim/co14c423dbc2026a7a2b997a2

# Implementing Radio Select Functionality in React: Interactive Option Selection

### Introduction:
Radio select functionality allows users to choose a single option from a group of mutually exclusive options. In React, implementing radio select functionality involves utilizing controlled components and leveraging the `checked` property to reflect the selected option. In this guide, we'll explore how to implement radio select functionality in React, focusing on the usage of the `checked` property.

1. Understanding Radio Select in React:
Radio select functionality enables users to select one option from a group of options. React provides a straightforward approach to implementing radio select using controlled components and state management.
2. Implementing Radio Select Component:
Let's create a radio select component that uses the `checked` property to reflect the selected option:

```
import React, { useState } from 'react';

function RadioSelect() {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <form>
      <input
        type="radio"
        id="unemployed"
        name="employment"
        value="unemployed"
        checked={selectedOption === 'unemployed'}
        onChange={handleChange}
      />
      <label htmlFor="unemployed">Unemployed</label>
      <br />

      <input
        type="radio"
        id="part-time"
        name="employment"
        value="part-time"
        checked={selectedOption === 'part-time'}
        onChange={handleChange}
      />
      <label htmlFor="part-time">Part-time</label>
      <br />

      <input
        type="radio"
        id="full-time"
        name="employment"
        value="full-time"
        checked={selectedOption === 'full-time'}
        onChange={handleChange}
      />
      <label htmlFor="full-time">Full-time</label>
      <br />
    </form>
  );
}

export default RadioSelect;

```

In this example, we create a `RadioSelect` component that uses the `useState` hook to manage the `selectedOption` state, representing the currently selected option. The `handleChange` function updates the state when a radio button's value changes.

1. The `checked` Property:
The `checked` property determines whether a radio button should be selected based on the comparison between the `selectedOption` state and the value of the corresponding radio button. If the values match, the radio button is marked as checked; otherwise, it remains unchecked.
2. Handling Selection Changes:
When a user selects a different option, the `onChange` event handler is triggered, and the `selectedOption` state is updated accordingly. React re-renders the component, and the `checked` property is re-evaluated, reflecting the updated selection visually.

Conclusion:
Implementing radio select functionality in React involves utilizing controlled components and leveraging the `checked` property. By understanding how to use the `checked` property to reflect the selected option, you can create interactive and user-friendly radio select components in your React applications.
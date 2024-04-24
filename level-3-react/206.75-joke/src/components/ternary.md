

https://scrimba.com/scrim/codf54303b0d1934718a0bf5b

# Conditional Rendering in React: Streamline Your UI Logic with the Ternary Operator

### Introduction:
Conditional rendering is a crucial aspect of building dynamic user interfaces in React. In addition to the `&&` operator, the ternary operator offers a concise and flexible way to handle conditional rendering. In this guide, we'll explore how to leverage the ternary operator for conditional rendering in React, empowering you to simplify your UI logic and create more interactive components.

1. Understanding Conditional Rendering:
Conditional rendering allows you to selectively render components or elements based on certain conditions. It enables you to dynamically control the appearance and behavior of your application, making it more responsive and intuitive. By utilizing conditional rendering, you can create a personalized and engaging user experience.
2. Conditional Rendering with the Ternary Operator:
The ternary operator, a concise conditional expression, provides an efficient way to perform conditional rendering in React. It allows you to specify a condition, followed by a question mark (`?`), the expression to render if the condition is true, a colon (`:`), and the expression to render if the condition is false. This single line of code can replace the need for `if-else` statements in simple conditional rendering scenarios.
3. Example: Conditional Rendering with the Ternary Operator:
Let's consider an example where we want to conditionally render a message based on a user's subscription status. Here's how you can achieve this using the ternary operator:

```
import React from 'react';

function SubscriptionStatus(props) {

const { isSubscribed } = props

  return (
    <div>
      {isSubscribed ? <p>You are subscribed!</p> : <p>Please subscribe to access premium content.</p>}
    </div>
  );
}

export default SubscriptionStatus;

```

In this example, the `SubscriptionStatus` component takes a prop `isSubscribed`. The ternary operator is used to conditionally render different messages based on the value of `isSubscribed`. If `isSubscribed` is true, the message "You are subscribed!" is rendered; otherwise, the message "Please subscribe to access premium content." is displayed.

1. Enhanced Conditional Rendering with Ternary Operator:
The ternary operator can be combined with other expressions, functions, or variables to enhance your conditional rendering logic. This allows you to handle more complex conditions or perform calculations within the conditional rendering statement. Here's an example:

```
import React from 'react';

function DiscountBanner(props) {

const { hasDiscount, discountPercentage } = props

  return (
    <div>
      {hasDiscount ? (
        <p>Get {discountPercentage}% off on your purchase!</p>
      ) : (
        <p>No current discounts available.</p>
      )}
    </div>
  );
}

export default DiscountBanner;

```

In this example, the `DiscountBanner` component conditionally renders a discount message based on the values of `hasDiscount` and `discountPercentage`. If `hasDiscount` is true, the message "Get {discountPercentage}% off on your purchase!" is displayed, indicating the available discount. Otherwise, the message "No current discounts available." is rendered.

Conclusion:
Conditional rendering is a fundamental technique in React to create dynamic and interactive user interfaces. By leveraging the power of the ternary operator, you can streamline

your UI logic and achieve more concise and readable code. Whether you need to handle simple conditions or more complex expressions, the ternary operator offers a flexible solution for conditional rendering in React, empowering you to build engaging and personalized components.

Link to React Documentation on Conditional Rendering:  https://react.dev/learn/conditional-rendering
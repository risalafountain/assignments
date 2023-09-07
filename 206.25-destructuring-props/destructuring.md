## Destructuring Props

1. Simplified Access to Props:
Destructuring props provides a concise and convenient way to access specific properties from the props object. Instead of accessing props using **`props.propertyName`**, we can destructure and directly assign the desired properties to variables.
2. Cleaner Code:
Destructuring props helps reduce verbosity in our code. By extracting the required properties at the beginning of our component, we can use the variable names directly throughout the component, making the code more readable and maintaining a cleaner structure.
3. Improved Readability and Maintenance:
Destructuring props enhances the readability of our code by explicitly declaring which properties we are using in the component. This makes it easier for other developers to understand the component's dependencies. Additionally, if the prop names change in the future, we only need to update the destructuring assignment, improving code maintainability.

Example:

import React from 'react';
function UserCard(props) {
const { name, age, email } = props;
return (
	<div>
		<h2>{name}</h2>
		<p>Age: {age}</p>
		<p>Email: {email}</p>
	</div>
);
}
export default UserCard;


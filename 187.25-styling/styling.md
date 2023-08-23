/**
Challenge: 

- Add an `ul` inside the Header's `nav` and create
  the following `li`s: "Pricing", "About", & "Contact"
- Using flexbox, line up the nav items horizontally, and
  put them inline with the React logo.
- Change the image styling to happen in CSS instead of in-line
  For practice, add a new class to the image in order to style it

*/

Before we would do this

const ul = document.createElement("ul")
ul.className = "nav-items"



Introduction:
In React, styling components is an essential aspect of creating visually appealing and engaging user interfaces. React provides multiple approaches to apply styles, including using classes or the className attribute. Let's explore these options and how they can be used to style React components.

Using Classes:

1. Inline Styling:
React components can be styled inline by using the style prop. This approach involves passing a JavaScript object with style properties directly to the component. For example:

```jsx
const MyComponent = () => {

const myStyle = {
backgroundColor: 'blue',
color: 'white',
padding: '10px',
};

return <div style={myStyle}>Styled Component</div>;
};
```

In this example, the div element is styled inline with the provided CSS properties defined in the **`myStyle`** object. This approach allows for dynamic styling based on component state or props.

CSS Classes:
React components can also utilize CSS classes to apply styles. By convention, React uses the “className” attribute instead of the traditional “class” attribute to avoid conflicts with JavaScript's “class” keyword. For example:

```jsx
const MyComponent = () => {
return <div className="styled-component">Styled Component</div>;
};
```

Here, the div element is assigned the **`styled-component`** class. CSS rules defined in an external stylesheet or within a **`<style>`** tag will be applied to all elements with that class.

Using CSS:

1. External Stylesheet:
React components can also leverage external CSS stylesheets to define and apply styles. To use an external stylesheet, include a <link> tag in the HTML file to link the CSS file. Then, use the appropriate class names in React components. For example:

```jsx
<!-- index.html -->
<link rel="stylesheet" href="styles.css" />
```

```jsx
// MyComponent.jsx
const MyComponent = () => {
return <div className="styled-component">Styled Component</div>;
};
```

In this case, the **`styled-component`** class in the CSS file will be applied to the div element.

1. Inline CSS with CSS Modules:
CSS Modules provide a way to write modular and scoped CSS styles in React components. It involves importing a CSS file into a JavaScript module, and then using the imported class names in the component's className attribute. For example:

```jsx
/* styles.module.css */
.styledComponent {
background-color: blue;
color: white;
padding: 10px;
}
```

```jsx
// MyComponent.jsx
import styles from './styles.module.css';
```

```jsx
const MyComponent = () => {
return <div className={styles.styledComponent}>Styled Component</div>;
};
```

In this example, the CSS class **`styledComponent`** is scoped to the component, preventing style conflicts with other components.

Conclusion:
Styling React components using classes or className offers flexibility and modularity in creating visually appealing UIs. Whether by applying inline styles, using CSS classes, or leveraging external stylesheets and CSS modules, developers have multiple options to suit their styling needs. Experiment with these approaches to create beautifully styled React components that enhance the user experience.
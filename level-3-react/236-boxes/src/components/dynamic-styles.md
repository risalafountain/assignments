https://scrimba.com/scrim/co57845e4a49eb86d4414b0fd

## **Dynamic Styles**

Dynamic styles refer to the ability to apply styles to elements in a web page or application based on dynamic conditions or variables. It allows developers to change the appearance or behavior of elements dynamically, providing a more interactive and personalized user experience.

In web development, dynamic styles are commonly achieved using JavaScript and CSS. JavaScript is used to manipulate the styles of elements by modifying their CSS properties, while CSS provides the styling rules and declarations.

Here's a basic explanation of how dynamic styles work:

1. Identify the elements: First, you need to identify the elements to which you want to apply dynamic styles. This can be done using selectors, such as class names, IDs, or element types.
2. Access the elements: Use JavaScript to access the desired elements. You can use methods like **`getElementById`**, **`getElementsByClassName`**, or **`querySelector`** to retrieve the elements from the document.
3. Modify the styles: Once you have access to the elements, you can modify their styles by changing the CSS properties associated with them. This can be done using JavaScript's **`style`** property or by adding/removing CSS classes.
4. Trigger the style changes: The style changes can be triggered based on various events or conditions. For example, you can change the style when a button is clicked, when a certain value is entered in a form, or based on the result of an API call.

Here's an example of applying dynamic styles using JavaScript and CSS:

HTML:

```html
<div id="myElement">Hello, world!</div>
```

CSS:

```css
.highlight {
background-color: yellow;
font-weight: bold;
}
```

JavaScript:

```jsx
const myElement = document.getElementById('myElement');
```

```jsx
// Add the 'highlight' class to the element
myElement.classList.add('highlight');
```

```jsx
// Change the text color of the element
myElement.style.color = 'red';
```

In this example, the JavaScript code accesses the element with the ID **`myElement`** and applies dynamic styles to it. It adds the CSS class **`highlight`**, which changes the background color and font weight, and modifies the **`color`** property directly using the **`style`** property.

Dynamic styles are particularly useful when you want to provide visual feedback, create interactive components, or customize the appearance of elements based on user interactions or application state.
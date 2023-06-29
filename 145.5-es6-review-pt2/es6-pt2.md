https://coursework.vschool.io/es6-practice-let-const-fat-arrow-functions-default-arguments-template-literals/
https://coursework.vschool.io/es6-practice-object-literals-destructuring-rest-and-spread-operators/

For this review, follow the directions in the JS file to make the code more ES6y. Comment and uncomment code as you work down the file. Run it to make these funcitons work or just more readable practicing ES6.

You'll be using:

arrow functions
rest
spread
destructuring in a parameter
default parameters  

There are times we want to write a function with a default argument. For example, you have a function that returns the square inches of a piece of wood. Most of our boards are an inch think, but occasionally they are more. Thickness in this function would default to `1`. To write this function in a way that sets thickness to `1`, we used to need to say:

```jsx
function calculateSquareInches(width, length, thickness){
    if (thickness === undefined){
        thickness = 1;
    }
    return width * length * thickness;
}

```

In this example, we have an entire `if` block to see if a value for thickness was passed through and to assign it to it's default if it wasn't.

But now we can write:

```jsx
function calculateSquareInches(width, length, thickness = 1){
    return width * length * thickness;
}

```

It only assigns thickness to 1 if a third parameter wasn't passed through. Be sure to write all defaults as the last arguments when defining your functions.
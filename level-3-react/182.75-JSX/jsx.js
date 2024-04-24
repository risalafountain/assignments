//vanilla js - imperative
// const h1 = document.createElement("h1")
// h1.textContent = "Hello world"
// h1.className = "header"
// console.log(h1)

// JSX-react elements returns objects that react can interpret and return elements on the screen(web page)


//ReactDOM.render(<h1 className ="header">This is JSX</h1>, document.getElementById("root"))

//with jsx we want to make sure that we are only returning a single parent element. We cannot place a <p> directly next to the <h1> without wrapping them first (like in a div)

// ReactDOM.render(
//     <div>
//         <h1 className="header">This is JSX</h1> 
//         <p>This is a paragraph</p>
//     </div>,
//     document.getElementById("root")
// )

//can also save as a variable

// const page = (
//     <div>
//         <h1 className="header">This is JSX</h1>
//         <p>This is a paragraph</p>
//     </div>
// )

// console.log(page) //returns object

// ReactDOM.render(
//     page,
//     document.getElementById("root")
// )


/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

//create a new variable
const navbar = (
    <nav>
        <h1>Bob's Bistro</h1>
        <ul>
            <li>Menu</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

//first item is what i want to render, second item is where I want to render it (select div w/ id of root)
ReactDOM.render(navbar, document.getElementById("root"))


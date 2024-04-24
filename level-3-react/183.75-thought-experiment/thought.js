import React from "react"
import React from "react-dom"

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

//1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
const page = (
    <div>
        <h1>My Awesome Website in React</h1>
        <h3>Reasons I love React</h3>
        <ol>
            <li>It's Composable</li>
            <li>It's Declarative</li>
            <li>It's a hireable skill</li>
            <li>It's actively maintained by skilled people</li>
        </ol>
    </div>
)

//2. Select the div with the ID of "root" and use `.append()` to append your JSX
//document.getElementById("root").append(Json.stringify(page))

//3. See if you can guess what will show up in the browser before running the code
    // initially it shows up with [object Object] but when we stringify it, it shows a JS object  
    
//4. See if you can explain what actually shows up in the browser
    //JS returns plain JS objects it is only when we render it that we can turn it into real dom elements

/*
Challenge: fix our code!

Don't forget, you're not using CDNs anymore, so there's no
global "ReactDOM" variable to use anymore.

    but how do i add the dependencies???
add ReactDOM.render(page, document.getElementbyId("root"))
takes react elements and interprets them into real dom elements the browser can understand 
*/

ReactDOM.render(page, document.getElementbyId("root"))

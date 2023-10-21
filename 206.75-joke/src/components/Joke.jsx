import React from "react";

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState()
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    
    return (
        <div className="container--joke">
           {props.setup && <h3>{props.setup}</h3>}
           {isShown && <p>{props.punchline}</p>}
           {isShown && <button onClick={toggleShown}>hide punchline</button>}
           {!isShown && <button onClick={toggleShown}>show punchline</button>}
           <hr />
        </div>
    )
}

// Challenge: 
// --create state 'isShown' (boolean, default to false)
// --add a button that toggles the value back and forth 

// 1. create a use state and set default value to false
//     <const [isShown, setIsShown] = React.useState(false)>
// 2. add a button
// 3. create a function that toggles our boolean back and forth 
//     <function toggleShown(){}>
// 4. within it we need to know the previous value if isShown and return the opposite
//     <setIsShown (prevShown => !prevShown)>
// 5. onclick event listener and pass in toggleShown function
//     <onClick={toggleShown}>

// Challenge:
// --only display the punchline paragraph if the isShown is true

// 1. wrap the punch line element in {} so we can put a javascript expression in it  
//     {<p> {props.punchline}</p>}
// 2. add javascript expression isShown && so that we can add a condition that states if isShown is true AND the <p> then execute the code. By using && we JS determines that if the first condition is false then it will completely avoid running the second condition.
//     {isShown &&<p> {props.punchline}</p>}

// #################################244.5 ternary operator 
// Challenge: 
// --make the button toggle between hide punchline and show punchline

// 1. make a copy of the button and display them at different times. use conditional rendering to say that if isShown is true, hide punchline or if false, show punchline 
//     <button onClick={toggleShown}>show punchline</button>
// 2. to use conditional rendering, wrap the statements in {} and add the && operator
//     {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
//     {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
//     BUT THE BETTER WAY IS WITH THE TERNARY because you can keep the one line to run the logic 
    
//     1. it would read, if isShown is true then display the string "hide" if isShown is false, display the string "show"
//     <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>}

// conditional rendering will either have the && or a ternary
// the && is useful when determining whethere or not you want  something to display or not display
// the ternary is good when you want to choose between one or two things to display 
// anything more complex than that is best to use an if statement and assign a variable 
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
           <button onClick={toggleShown}>show punchline</button>
           <hr />
        </div>
    )
}

/*
Challenge: 
--create state 'isShown' (boolean, default to false)
--add a button that toggles the value back and forth 

1. create a use state and set default value to false
    <const [isShown, setIsShown] = React.useState(false)>
2. add a button
3. create a function that toggles our boolean back and forth 
    <function toggleShown(){}>
4. within it we need to know the previous value if isShown and return the opposite
    <setIsShown (prevShown => !prevShown)>
5. onclick event listener and pass in toggleShown function
    <onClick={toggleShown}>

Challenge:
--only display the punchline paragraph if the isShown is true

1. wrap the punch line element in {} so we can put a javascript expression in it  
    {<p> {props.punchline}</p>}
2. add javascript expression isShown && so that we can add a condition that states if isShown is true AND the <p> then execute the code. By using && we JS determines that if the first condition is false then it will completely avoid running the second condition.
    {isShown &&<p> {props.punchline}</p>}

#################################244.5 ternary operator 
*/
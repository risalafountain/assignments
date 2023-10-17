236--boxes challenge part 1
1. initalize state with the default value of the array pulled in from boxes data 

    initializing state with const [squares, setSquares]
    pull in the bozes as the initial value. 

2. map over that state array and display each one as an empty square (black border, transparent bg color, not using "on" property yet )
    
    save arr of elements in a const
    map over squares...for each square, return a div
    give it a class name and provide a key to avoid the error using the id property 
    display squareElements in return (style)

236.5--dynamic styles
can change styles dynamic based on the state

add a style prop to the div by using {to access javascript from jsx} and inner 

    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

pass in props to App
use ternary ? / :

241--boxes challenge part 2
Challenge part 2:
1. Create a separate component called "Box" and
   replace the `div` above (<div style={styles} className='box' key={square.id}></div>) with our <Box /> components



2. Pass the Box component a prop called `on` with the
   value of the same name from the `boxes` objects
    looks like this on={square.on}
    console log to verify it is working


3. In the Box component, apply dynamic styles to determine
   the backgroundColor of the box. If it's `on`, set the
   backgroundColor to "#222222". If off, set it to "none"

   





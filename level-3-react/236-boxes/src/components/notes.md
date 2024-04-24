#################################################236--boxes challenge part 1
1. initalize state with the default value of the array pulled in from boxes data 

    initializing state with const [squares, setSquares]
    pull in the bozes as the initial value. 

2. map over that state array and display each one as an empty square (black border, transparent bg color, not using "on" property yet )
    
    save arr of elements in a const
    map over squares...for each square, return a div
    give it a class name and provide a key to avoid the error using the id property 
    display squareElements in return (style)

######################################################236.5--dynamic styles
can change styles dynamic based on the state

add a style prop to the div by using {to access javascript from jsx} and inner 

    // Challenge: use a ternary to determine the backgroundColor.
    // If darkMode is true, set it to "#222222"
    // If darkMode is false, set it to "#cccccc"

pass in props to App
use ternary ? / :

#################################################241--boxes challenge part 2
Challenge part 2:
1. Create a separate component called "Box" and
   replace the `div` above (<div style={styles} className='box' key={square.id}></div>) with our <Box /> components



2. Pass the Box component a prop called `on` with the
   value of the same name from the `boxes` objects
    looks like this on={square.on}
    console log to verify it is working


3. In the Box component, apply dynamic styles to determine
   the backgroundColor of the box. If it's `on`, set the
   backgroundColor to "#222222". If off, set it to "transparent"

################################241.5--boxes challenge part 3.1 local state

Challenge: 
one way to do it is initalize new state in each box component and set its inital value to the incoming props.on value  
this is simple and allows each box to update its own state 
each box can easily flip its own value 
**SEE image.png to get a visual 

1. Create state controlling whether this box is "on" or "off". Use the incoming `props.on` to determine the initial state.

initialize new state and receive setter function the initial value should be determined by looking at props.on

    const [on, setOn] = React.useState(props.on)

update styles to look at the new state value of on (instead of props.on)

2. Create an event listener so when the box is clicked, it toggles from "on" to "off". Goal: clicking each box should toggle it on and off.

create function named toggle and calls set on looking at prev version of on and giving opposite of whatever the opposite of on was.

the whole things change, but the data of boxes hasn't changed yet so when i refresh it goes back 
BOX.jsx

    const [on, setOn] = React.useState(props.on)
    
    const styles ={
        backgroundColor: on ? "#222222" : "transparent"
    }

    function toggle() {
        setOn(prevOn => !prevOn)
    }

    return (
        <div style={styles} className='box' onClick={toggle} ></div>
    )

there's a better way to do this! 

#########################################################242-unified state
by setting state in each one of the boxes, we created a derived state which we no longer need/use

 in app.jsx we already created state that can maintain all of the squares already---so setting state in each one of our boxes creates two sources of truth.

the box was able to update itself but it was only updating the local state not the state on the app component. 

we are going to create a function called toggle inside of our app components and pass that function into each one of the box instances. Therefore, when the box gets clicked, React will re-render the react component.  

CHALLENGE: 
Create a toggle function that logs "clicked!" to the console pass that function down to each of the Box components and set it up so that when they get clicked it runs the function 

1. create function that logs clicked 

2. in the Box component, add and event listener. cannot use onClick because Box is a custom component which means it won't automatically recognize onClick as an eventlistener.

CAN USE 
handleClick={toggle}
or 
toggle={toggle} (this is what was chosen but this confuses me)

3. in Box.jsx, we are receiving a prop called toggle. test it out to see if the console is logging "clicked!"

EXTRA COMPLEX NOW
Challenge: Give our toggle function the ability to know which box was clicked so it can correctly update the state array. 

1. one way is that we can make the toggle function take the id of the box as a parameter 
    function toggle(id)

2. but it wont work as is because in our onClick (in Box component) we arent able to decide which parameter gets passed to our function
    onClick = {props.toggle}

3. to fix this we run a function that can run props.toggle. 

4. this is the function that will receive the event which allows for us to pass in the id of the box
    onClick = {()=>props.toggle()}

* PROBLEM is we aren't receiving that id in the Box component in App.jsx. So pass in another prop called id 

    id = {square.id}

5. NOW we can use the props.id to access the id of the boxes in Box.jsx

 onClick={()=>props.toggle(props.id)}

6. in app.jsx, pass in the id to th toggle function, console log the id and each box click will identify which box is being clicked
function toggle(id) {
    console.log(id)
}
   
#####################################################242.5--BOXES PART 4
CHALLENGE 
use setSquares to update the correct square in the array. Make sure not to directly modify state!!
(dont use splice or anything like that)

1. in APP>function toggle 
use setSquares function and use previous state to determine the new value of our square 
  
    setSquares(prevSquares => {

//create new const newSquares and set to empty array 
    const newSquares = []

2. GOAL: use for loop to look at each square in the array of squares and if its id is equal to the id of the toggle function <toggle(id)> then we will flip the on value to the opposite of whatever it currently is. If id does NOT equal then push it to the newSquares arr  
//create for loop 
    for(let i = 0; i < prevSquares.length; i++) {
//create new variable = to the previous square at the index of i 
    const currentSquare = prevSquares[i]
//if our current square has id that's equal to the id given to our function  
    if (currentSquare.id === id){
//then updatedSquare is = to an object that has all the properties of my currentSquare but on property will be opposite of currentSquare.on
    const updatedSquare = {
        ...currentSquare, 
        on: !currentSquare.on
    }
//once we have the new object push it to the new squares array ELSE push current square to our newSquares array
    newSquares.push(updatedSquare)    
    }else {
        newSquares.push(currentSquare)
    }

    }
//return the new value of state 
    return newSquares
    })

TLDR
1. everytime a square is clicked, the click event handler is running <in Box.jsx>
2. the click event handler is running the toggle function that it received through props and passing in the id
3. <in App> that toggle function is taking that id, running setSquares  and running the function to determine what the newSquare should be 
4. looking at prev array of squares, generate a new array, loop over the previous array 
5. when we run into the square in our loop where the id MATCHES the id passed to toggle, we create a new object <updatedSquare> that will replace the old object and push that to our array   <updatedSquare>
6. if the id DOES NOT MATCH then just push the current square without any changes <currentSquare> made to our new array <newSquares>
7. return the new array <newSquares>
8. by returning our new array <newSquares> react will update our squares state array in <squares>.map which will rerender the component <Box> re-map over all of our squares and create 6 new <Box> components
9. pass the on value <on={square.on}> 
10. in our <Box> component it will take that prop and determine what color it should be 

-----WHOA-------React adheres to the principle to writing declarative code but doing a for loop is IMPerative which is fine but there is a diff way to write it that will make it more declarative 

<APP> 
//   function toggle(id) {
//     setSquares(prevSquares => {
//         const newSquares = []
//         for(let i = 0; i < prevSquares.length; i++) {
//             const currentSquare = prevSquares[i]
//             if(currentSquare.id === id) {
//                 const updatedSquare = {
//                     ...currentSquare,
//                     on: !currentSquare.on
//                 }
//                 newSquares.push(updatedSquare)
//             } else {
//                 newSquares.push(currentSquare)
//             }
//         }
//         return newSquares
//     })
// }
<BOX>
export default function Box(props) {
    //console.log(props.on)
    //console.log(props.id) //1 2 3 4 5 6
    // const [on, setOn] = React.useState(props.on)
    
    const styles ={
        backgroundColor: 
         props.on ? "#222222" : "transparent"
    }

    // function toggle() {
    //     setOn(prevOn => !prevOn)
    // }

    return (
        <div 
        style={styles} className='box'  
        onClick={()=>props.toggle(props.id)}
        >
        </div>
        
    )
}
###################################243-Boxes #5
No challenge just working on making everything more declarative

1. first thing is to delete the for loop and create a .map to help loop through the array and return the array 
    return prevSquares.map(() => <whatever goes in here is what will help determine the new version of the array which then gets returned from the .map>)

2. need to look at each square inside of the map 
    return prevSquares.map((square) => {
        <whatever gets returned in this callback function is what will be placed in the same index of the original array in the new array that is returned>
    })
3. Use a ternary to ask if square.id matches the id passed in the toggle function. If so <?> return a new object {} that has all of the properties of square except for the on property which is the opposite of square.on   <...square, on: !square.on >ELSE <:> return the square 
    return square.id === id ?{...square, on: !square.on} :square

THIS IS MUCH MORE CONCISE BUT REQUIRES A MORE ADVANCED UNDERSTANDING OF JAVASCRIPT TO FULLY COMPREHEND

TDLR
1. everytime a square is clicked, the click event handler is running <in Box.jsx>
2. <in App.jsx> will call our state setter function <setSquares>. 
3. Use the callback function of setSquares because we do care what the previos array looked like 
4. map over the previous squares <remember, .map returns a new array without modifying the original array. the new array will be the same length as the original array> whatever is returned in the callback function, will get placed in the same index in the new array as what was in the original array  
5. everytime we loop through each item in the array , it checks to see if its id matches the id  that is passed in through our toggle function. If the ids match, then that means it was the square that was clicked. If that is true then replace the old object with a brand new object <thats why we are using the {} so we are not updating state directly> 
6. the object will pull in all the values of square <...square> exactly as it was but will overwrite the on value with its opposite <on: !square>
7. if this was NOT the box that was clicked, then return the old square <: square>

Note: The toggle function is one of the most complex parts of this whole thing 

ALTERNATIVE SOLUTION: 
we can get rid of the id prop in App.jsx and just run this closure
  toggle={() => toggle(square.id)} 

this means that each instance of our box will have its own  toggle and it will remember its own id   

then in Box we can change the event listener to just props.toggle 





APP component: rendering a button and component called WindowTracker
    <div className="container">
        <button>
            Toggle WindowTracker
        </button>
        <WindowTracker />
    </div>

WindowTracker: displaying inner width of the window 
    <h1>Window width: {window.innerWidth}</h1>

the goal is to have the number update dynamically (when user interacts/changes window size)

CHALLENGE: 
1. CREATE STATE CALLED SHOW DEFAULT TO TRUE
    const [show, setShow] = React.useState(true)

2. WHEN THE BUTTON IS CLICKED, TOGGLE SHOW
create a function to handle the previous version of show and return the opposite of that <!>
    function toggle() {
        setShow(prevShow => !prevShow)
    }

create onClick for the button 
    <button onClick={toggle}>
        Toggle Window Tracker
    </button>

3. ONLY DISPLAY (conditionally render) <WindowTracker> IF SHOW IS TRUE 

use conditional rendering to say if show is true and <windowTracker /> <--always true
    {show && <WindowTracker />}

Currently, adjusting the size and toggling the number will show the change because when the button is clicked off the WindowTracker component is "unmounted" (completely taken off the DOM). When the button is clicked on the WindowTracker is "remounted" and re-runs the {window.innerwidth} 

GOAL: DOM MANIPULATION with useEffect 
- add an event listener to the window that listens to the resize event 

    React.useEffect(() => {
        window.addEventListener("resize", function() {
            console.log("resized")
        } )
    }, [])


-once window is resized, set localState to WindowTracker to display the correct window width at any given width w/o having to toggle or refresh 

CHALLENGE: 
1. create state called 'windowWidth', default to 'window.innerWidth'
    const [windowWidth, setWindowWidth] = React.useState(windowWidth)

2. when the width changes, update the state 
    setWindowWidth(window.innerWidth)

3. display the windowWidth in the h1 so it updates everytime it changes 

BUG: cannot access 'windowWidth' before intialization 


267.5 useEffect cleanup function 
There's a function as the first parameter but we aren't currently returning anything 
    React.useEffect(() => {
        window.addEventListener("resize", function() {
            setWindowWidth(window.innerWidth)
        })
    }, [])

return a cleanup function to cleanup any side effects created.
    return function() {

    }

place the setWidowWidth in its own function called watchWidth
    function watchWidth() {
        setWindowWidth(window.innerWidth)
    }

remove event listener 

return function(){
    window.removeEventListener("resize", watchWidth)
}, [])

console log in watchWidth function "setting up"
console log in cleanup Function "cleaning"

useEffect takes 2 parameters:  "the effect that needs to be run", [dependencies]

The effect function can return another function that cleans up after any lingering side effects 

















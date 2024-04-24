1. What is a "side effect" in React? What are some examples?
--any code that effects an outside system 
--local storage, API, websockets, two states to keep in sync

2. What is NOT a "side effect" in React? Examples?
--anything that React is in Charge of 
--maintaining state, keeping the UI in sync with the data, render DOM elements

3. When does React run your useEffect function? When does it NOT run
   the effect function?
--as soon as the component load(first render)
--on every re-render of the component (assuming no dependencies array)
--WILL NOT run the effect when the values of the dependencies in the array stays the same between renders   

4. How would you explain what the "dependecies array" is?
--second parameter to the useEffect function 
--a way for REACT to know whether it should re-run the effect function 
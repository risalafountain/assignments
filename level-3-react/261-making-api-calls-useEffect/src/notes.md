261-making api calls
getting data from an API consists of 2 parts 
1. GET the data (fetch)
2. save the data to state 
once it is saved in state, the application can interacts with data etc. 

get the data from the star wars api 
  fetch("url")
resolve the promise we get from fetch where it will receive a response (JSON) which will be turned into a javascript object 
console log the data for now 

--once the page is refreshed, the way it is setup is creating an infinite loop of the App componenent being rendered 

that is happening because the fetch lives on the top level of the component. each time it will call fetch it is also setting the starWarsData in state and rerendering the component {repeat}

need to learn how to handle  side effects
SEE useEffect notes in src 

262 syntax and default behavior 
need to refactor our code to use the use effect hook 

1. Create a side effect by using 
  React.useEffect(param1, param2*optional)

2. Required first parameter is a callback function (use it as a function declaration for now but will eventually transition to arrow function) and move fetch request inside the useEffect
      React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            // .then(data => setStarWarsData(data))
    })
    however this still causes an infinite loop because we don't have a second parameter 

262.5 useEffect Dependencies array 

by clicking the add button it updates the state from (0) and re-renders the component with count = 1(etc)

the second parameter is optional but will almost always be used. 
the array will contain values that if they change will cause the effect to run. it limits the number of times it will run--it determines when it will run 

an empty array means the effect will run once when the component first loads and that's it  

if you want it to run each time the count is updated, then make sure to add [count] as a dependency so React will know to look for it 

the dependecy determines whether or not an effect runs 

Challenge: 
re-write a useEffect to run anytime 'count' changes. Console Log ("effect function ran")

263.5 useEffect for fetching data 
Q: what will happen when this runs? how is the app going to act with the use effect function running this way 
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => console.log(data)) **
    }, [count])

if count changes it will run the function. We are receiving the data but only console logging the data not changing state 

Q: how will the useEffect be different if we run this? 
    React.useEffect(function() {
        fetch("https://swapi.dev/api/people/1")
            .then(res => res.json())
            .then(data => setStarWarsData(data)) ***
    }, [count])
we are updating state when we receive the data back. which will trigger a re-render of the component but that re-render will not change the value of count--which it means it will not re-run the effect. the dom shows the data 

here's what is happening in the background: 
1. useEffect will ALWAYS run on the first render
2. which triggered the fetch request from the API
3. which then set the starWarsData (this means state was updated)
4. the component is re-rendered. we see the starWars object as a JSON object 
5. the effect checked to see if the old count matched the new count which it did so it DID NOT re-run. this stops the loop we experienced in the beginning 

Using count in dependencies array is contrived because we are not using it. By clicking the count button, the component is re-rendered but the data is exactly the same 

Q: what should be in the dependencies array instead of count and why? 

we CANNOT put [starWarsData] or it will cause a loop 

if we want our data to run only on the very first render of the component, we can just put an empty array []

264-when to use dependencies 
Challenge: 
combine 'count' with the request URL so pressing the button will get a new character from the starWars api. 

1. instead of hardcoding a 1 in the url like this:
    fetch("https://swapi.dev/api/people/1")
delete the 1 and add the current count to the end of the string using template strings and interpolate the count value like this:
    fetch(`https:swapi.dev/api/people/${count}`)

if you leave the dependecies array blank, the component will run the effect on the first render. Count will be set to one. nothing will trigger the function again. 

2. add count to the dependencies array 




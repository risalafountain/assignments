Practice updating state through the following prompts. Try to write these first without testing them in a react app. 

1. Pass in a new color of your choosing in place of the old one. 
    
    Hint: we don’t care what the previous color was.
    
    ```jsx
    const [color, setColor] = useState("pink")
    
    setColor(//code here)
    ```
-----my response 
    
    ```jsx
    const [color, setColor] = React.useState("pink")
    
    setColor("blue")

ANSWER

const [color, setColor] = useState("pink")

setColor("blue")



2. Toggle between the colors pink and blue. If the current color is pink, we want to set it to blue. If it’s currently blue, set it back to pink.
    
    ```jsx
    const [color, setColor] = useState("pink")
    
    setColor(//code here)
    ```
---my response 
```switch to a boolean instead of the color name
   const [color, setColor] = React.useState(true)
```

```create function that returns the opposite of the previous state
    function switchColor() {
        setColor(prevState => ! prevState)
    }  
```  
``` call function using event listener then use ternary operators to toggle between the colors
    <button className='button' onClick={switchColor}>{color ? "pink" : "blue"}</button> 
```


ANSWER
```const [color, setColor] = useState("pink")
    setColor(prevColor => prevColor === "pink" ? "blue" : "pink")



3. Add a new person object to the following `people` array in state. You can hard-code a new object but it must be a person object with `firstName` and `lastName` properties.
    
    ```jsx
    const [people, setPeople] = useState([
    	{
    		firstName: "John",
    		lastName: "Smith"
    	}
    ])
    
    setPeople(//code here)
    ```
my response----------
    const [people, setPeople] = React.useState([
        {
            firstName: "Clark",
            lastName: "Kent"
        }
    ])
//add a new person object 
    setPeople(prevPeople => {
        return [
            ...prevPeople, 
           {
            firstName: "Barry", 
            lastName:"Allen"
        },{
            firstName: "Diana",
            lastName: "Prince"
        },{
            firstName: "Bruce", 
            lastName: "Wayne"
        } 
        ]
    })



answer---------

const [people, setPeople] = useState([
	{
		firstName: "John",
		lastName: "Smith"
	}
])

setPeople(prevPeople => {
	return [
     ...prevPeople, 
     {
        firstName: "Jane", 
        lastName: "Doe"
     }
  ]
})

4. Change the following state-setting functions to use an implicit return

        ```jsx
        const [colors, setColors] = setState(["pink", "blue"])
        
        setColors(prevColors => {
        	return [...prevColors, "green"]
        })
        ```
my response----
bring in prev state and add green
setColors(prevColors => {...prevColors, "green})

answer-----

```jsx
const [colors, setColors] = setState(["pink", "blue"])

// explicit return 
setColors(prevColors => {
	return [...prevColors, "green"]
})

// implicit return
setColors(prevColors => [...prevColors, "green"])
```
2. 
      
        ```jsx
        const [countObject, setCountObject] = setState({
        	count: 0
        })
        
        setCountObject(prevState=> {
        	return {
        		count: prevState.count + 1
        	}
        })

```
my response-----------------
setCountObject(prevState=> prevsState.count + 1)

ANSWER------------
const [countObject, setCountObject] = setState({
	count: 0
})

// explicit return 
setCountObject(prevState=> {
	return {
		count: prevState.count + 1
	}
})

// implicit return 
setCountObject(prevState=> ({count: prevState.count + 1}))


        
5. Update the following state to add an additional property `age` and set the value to `30`, ensuring that the other properties are not overwritten.
    
    ```jsx
    const [person, setPerson] = useState({
    		firstName: "John",
    		lastName: "Smith"
    })
    
    setPerson(//code here)
    ```

my response-----------
NOT THE RIGHT SYNTAX
setPerson(prevState => ...prevState, age: "30")

ANSWER-----------
const [person, setPerson] = useState({
		firstName: "John",
		lastName: "Smith"
})

setPerson(prevState => ({
    ...prevState,
    age: 30
}))


6. What’s wrong with the following state update?
    
    ```jsx
    const [colors, setColors] = useState(["pink", "blue"])
    
    setColors("green")
    ```
my response-------------
you cant assign a color because it is taking the place of the other data. you have to show that it is addding to the previous data not replacing it 

ANSWER-----------

1. Previous state has been overwritten, and
2. Data type has changed from an array to a string

```jsx
const [colors, setColors] = useState(["pink", "blue"])

setColors("green")
```

#########################246-forms-intro 
ONE OF THE MOST DIFFICULT TO UNDERSTAND --but there is a great deal of resources online 
in vanilla js, we would create an event listener and when the submit button was clicked, all the data would be gathered. it would not be gathered until AFTER all the data had been filled out 

in React, we create state and every keystroke change, radio button change, or checkbox change, etc. is monitored/watched. That means when the submit button is pressed, there's not much work to be done since we have already gathered the data. When the submit button is hit, the data is submitted to our API and pass in the state that we have been tracking. 

#####################246.5 watch for input changes in react
1. create form by returning a simple form with one input 
    <form>
        <input
            type ="text"
            placeholder="First Name"
        />
    </form>
2. create state with empty string as we expect our input box to be empty
    const [firstName, setFirstName] = React.useState("")
3. listen for any changes to the input with the onChange event listener. use {handleChange}

4. create a function that will handle any change in the input box 
    function handleChange(){
        console.log("Changed!") //to make sure it's working 
    }
5. what will get passed into our handleChange() function is an (event) object 

!!!event.target.value 
target provides the html element {DOM object} that triggered the event

the value property logs the current value that is being inputted

use console.log(event.target.value) to see the keystrokes/deletions in real time 

use console.log(firstName) before the function to keep up with the changes as it is rerendered everytime a keystroke/deletion occurs

CHALLENGE:
--update the first name state on every keystroke 

1. use state setter--we are not worried about previous state because we have quick and easy access to the info being typed via event.target.value

setFirstName(event.target.value) within the handleChange() function 

IT IS ABOUT TO GET HARDER

########################247-Forms Input Practice
Challenge:
track the applicant's last name as well 

Basically, COPY EVERYTHING and change it for last name 
1. add another useState for last name 
2. add another function for last name change 
3. add another input for last name

    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    
    console.log(firstName, lastName)
    
    function handleFirstNameChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleLastNameChange(event) {
        setLastName(event.target.value)
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleFirstNameChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleLastNameChange}
            />
        </form>
    )
THIS IS NOT DRY AND THERE IS A MUCH MORE CONCISE WAY WITH AN OBJECT

#####################247.5 Forms State Object 

The code must be more concise because if we have <4> more people to add, it will get cluttered. It makes sense then to save your state in an object instead of separate variables. That way we can only work with one setter function

1. instead of a blank string, choose an object to save as the default 
    React.useState({
        firstName: "",
        lastName: ""
    })
2. change the name of the variable to something more generic 
    [formData, setFormData]

3. give each of our inputs a name property and make it match exactly to the peoperty name in the state we are saving....copy and paste so we don't misspell

4. now we have access to event.target.name which, when console logged, will console log which input is receiving the change 
    console.log(event.target.name)
now we have access to the value..put it back to event.target.value which is the value we want to change it to
    console.log(event.target.value)    
5. call set formdata and update our object correctly. Before we didn't care about what the previos version was because we were just going to overwrite it with whatever was in the input box. NOW we care because we have more than one  property that needs to be maintained. Since we need to know the previous state, we need a callback function. Using prevFormData, use fat arrow and open up the {body of that function}. 
    setFormData(prevFormData => {
        return{

        }
    })

6. Return a new object that keeps all of the old object intact. Use spread operator and overwrite the specific property we are trying to update in the handleChange event listener. use event.target.name as the key and event.target.value as the value. An error occurs because we have dots in the key, but by using COMPUTED PROPERTIES, we can fix that error by surrounding the key in [] to turn a dynamic string and use it as the property name for the object. 
    ...prevFormData, [event.target.name]: event.target.value

7. use console.log(formData) to look at our state everytime it changes. it will start out like this 
    {firstName: '', lastName: ''} 
since the boxes are empty 

THIS IS ONE OF THE MOST DIFFICULT PARTS OF UNDERSTANDING FORMS IN REACT 








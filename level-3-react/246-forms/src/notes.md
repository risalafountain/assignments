
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
THIS IS NOT DRY AND THERE IS A MUCH MORE CONCISE WAY TO WORK WITH AN OBJECT

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

#######################################248 state form object practice 

CHALLENGE 
--Add an email field 
1. now we just need to add an email property to our state object.
    firstName: "", lastName: "", email: ""
2. update input field by copying the previous one changing the type, placeholder, and name--make sure the name exactly matches the name we chose in state 
    <input
        type="email"
        placeholder = "Email"
        onChange={handleChange}
        name="email"
      />

as of right now our inputs are not controlled (what is that?)

########################248.5 controlled inputs 
SEE controlled-inputs.md for detailed information 
"the single source of truth": the state you are maintaining in your component should be the single source of truth.  

Currently, each input has 2 pieces of state: (1)is being held by the input box <html tag <input/> >(2) updating on every keystroke <React.useState({firstName:"", lastName:"", email:""})>. We have set it up so that the state of the input box gets mirrored by our state in react. 

We need to make it so our react state is what drives the state that is visible within the input box. To do this, add a value property to each one of the inputs that matches the reactState properties. 

value={formData.firstName}, etc

this means when any value is typed in the input box is no longer being controlled by the input, but by React.  

on every change that happens:, 
1. the handleChange function runs 
2. which then updates the correct piece of state 
3. which re-renders the form
4. and sets the value of the form input to be whatever state is 

###############249 textarea 
in HTML
--has its own closing tag <textarea>put something here </textarea>
--the user can make the box bigger or smaller by dragging 

in React
--it is a self-closing element <textarea />
--add a value and that will be whatever is inside the text area <textarea value={} />

CHALLENGE: add comments to the form and update state when it changes 

1. add a "comments" property to state--intialize w/ empty string
    comments:""
2. at bottom of form render a <textarea /> element 
3. add a value that will display data from formData.comments
    <textarea value={formData.comments}/> 
4. add placeholder, onChange, name
    <textarea
        value={formData.comments}
        placeholder="Comments"
        onChange={handleChange}
        name ="comments"
    />

##############################249.5 checkbox 
input type ="checkbox" --they hold boolean values with a checked property that will be true/false

htmlFor property: ties a label element to an input using an id so they can be associated with one another 

in order to maintain state, we need to edit state so that it receives a boolean instead of a string 

to associate our state with our checkbox, use a checked:{} property

put the boolean value as checked:{formData.isFriendly}
you can't uncheck the box though when we do this.  

in our handleChange function we are only looking at event.target.value, to look at a checkbox, we need to look at a event.target.checked property. 
  function handleChange(event){
    // console.log(event.target.name)
    // setFirstName(event.target.value)
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        //this is a key:value pair
      [event.target.name]:event.target.value
      }
    })
  }

to do so:

1. best practices is to destructure event.target and pull out the values we need <name> and <value>

    function handleChange(event){
    const {name, value} = event.target 
    setFormData(prevFormData => {
        return {
            ...prevFormData, 
            [name]: value
          }
     })
    }

2. need to also check the type to determine if the input that is making the handleChange function run is a type of checkbox or  text. If it is, also need  the checked property. 
    const {name, value, type, checked}

3. in the setFormData, the piece of state that gets updated if it's a checkbox  <isFriendly property> should not take on value as above, but checked. Use a ternary to say if the type is === 'checkbox' if so <?> use the checked property if not <:> use the value property. 
    [name]: type === "checkbox" ? checked : value

4. make sure the handleChange function is being called in the checkbox input 
    onChange={handleChange}

5. add the name property 
    name ="isFriendly"

#########################################################################250 Radio Buttons
insert field set from scrimba 
    <fieldset>
        <legend>Current employment status</legend>
        
        <input 
            type="radio"
            id="unemployed"
        />
        <label htmlFor="unemployed">Unemployed</label>
        <br />
        
        <input 
            type="radio"
            id="part-time"
        />
        <label htmlFor="part-time">Part-time</label>
        <br />
        
        <input 
            type="radio"
            id="full-time"
        />
        <label htmlFor="full-time">Full-time</label>
        <br />
        
    </fieldset>

Hook radio buttons into our form and connect with state
1. Assign a place in state to hold the information by adding an 'employment' property
    employment: ""
this is equal to an empty string similar to the text inputs 

2. in order to prevent from being able to click all of the buttons AND to associate inputs with the correct piece of state  , add a name property to each one of the inputs. set name = employment. All radio buttons have the same name because we are only updating one property of state. 
    <input 
        type="radio"
        id="unemployed"
        name="employment"
    />
3. each input has its unique value which will get saved as the value that is in state when that specific input gets selected 

4. make sure to listen for change events by adding the onChange 

To make controlled inputs <react is responsible for controlling the input rather than the input having its own html state>
Radio buttons are controlled in the same way as checkboxes are controlled. We can still use the checked property but make sure that  formData.employment is equal to the value of each specific button.
    checked={formData.employment === "<insert value here >"}

WALK-THROUGH:
1. Initially the value of formData.employment is an empty string <as outlined in state>
2. When a radio button is clicked, it runs the onChange for {handleChange} and pulls the {name, value, type, checked} out
3. setting the form data, by bringing in all the old form data <...prevFormData> and 
4. using [name] <which is set to employment as the key for the state we are updating> it asks if the form type is a checkox <type === "checkbox"> and since it's a radio---not a checkbox, it skips the checked value <? checked> and instead uses <: value>  
5. that value is defined in input where the value is set as <"unemployed", "part-time", or " full-time">
6. when we change state, react re-renders the form and checks if a value is true then it makes all the other checked properties false

####################################250.5 select and option
1. add favColor:"" in state 
2. add a value property to the select element and have it mirror what we have in state <value={formData.favColor}>
3. re-use the same onChange handler
4. add name and mirror our state property <name="favColor"> 
    console.log(formData.favColor) to check 
5. while favColor is initializing as an empty string, there is not an empty string option. Make one 
    <option value="">--Choose--</option>

############################251-submitting a form 
1. create a submit button using the button element. the type is automatically "submit" so you don't have to worry about adding it in. 
    <button>Here is the Button</button>
2. since this is in a form,  clicking the button will trigger the form's onSubmit event handler and create a function called handle submit.
    <onSubmit={handleSubmit}>
3. create function above return 
    function handleSubmit(){

    }
4. To prevent the datat from being erased when the submit button is pressed, take the event object that is getting passed to the event handler <handleSubmit(event)> and run 
<event.preventDefault>






>>Challenge: Connect the form to local state

>>Create a state object to store the 4 values we need to save. 
1. Make each empty string, last one is a boolean because it is a checkbox 
    const [formData, setFormData] = React.useState({
        email: "",
        password:"",
        passwordConfirm:"",
        joinedNewsletter: true,
    })
2. add the state properties as a name field in each of the inputs
    name="<property name>"
3. add a onChange to each one that will point to the handleChange function 
    onChange={handleChange}
4. add a value field (except in checkbox it should be checked) and point to formData.selected state property 
    value={formData.email}
    value={formData.password}
    value={formData.passwordConfirm}
    checked={formData.joinedNewsletter}

>>Create a single handleChange function that can manage the state of all the inputs and set it up correctly
5. from the event, pull out the name, value, type (to see if it came from a checkbox or string), and checked properties and get them from event.target. Target represents the element that was modified in the event (i.e. email, password, password confirm, newsletter)

function handleChange(event) {
    const {name, value, type, checked} = event.target    
}

6. run the setFormData function, check the previous form data. 

This will be the parameter for the callback function. return an object by surrounding it in (). This makes use of the implicit return so we don't have to open the body of the function and use the return keyword. 

7. return an object that has all of the properties of the previous form data but update the property based on the name data pulled from the input making the change. <use computed property syntax [name]>

setFormData(prevFormData => ({
    ...prevFormData, 
    [name]:
}))

usually if there isn't a checkbox all the other inputs are updating a value property on the input itself. With the checkbox, we need to check the type first.

8. Using a ternary, check if the type is === checkbox if it is <?> set the checked property of the checkbox. If the type is not a check box (else[:]) then use the value property to update the state.
    [name]: type === "checkbox" ? checked : value 

9. run a check to verify the data is getting logged/read correctly before moving on 
    console.log(formData)

>>When the user clicks "Sign up", check if the password & confirmation match each other. If so, log "Successfully signed up" to the console. If not, log "passwords do not match" to the console.

10. in handleSubmit function, write a conditional statemeent that verifies if the passwords match, console log the message "Successfully signed up" else "passwords do not match" 

    if(formData.password === formData.passwordConfirm) {
    console.log("Successfully signed up!") 
    } else {
    console.log ("passwords do not match")
    }
if the passwords do not match, add a return  after the console log so the other if statement (joinedNewsletter) doesn't run 

>>Also when submitting the form, if the person checked the "newsletter" checkbox, log "Thanks for signing up for our newsletter!" to the console.

11. within the handleSubmit function, add the conditional statement that checkes the newsletter option. you don't need to write out 'true' since it is implied  

if (formData.joinedNewsletter) {
    console.log("Thanks for signing up for the newsletter!")
}

BUG?
while i am typing in the input boxes, the console is logging the {joined newsletter} console logs 

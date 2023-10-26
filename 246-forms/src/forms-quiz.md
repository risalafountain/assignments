1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?

Right before the form is submitted


2. In a React app, when do you gather all the data from
   the filled-out form?

React monitors its state and it is updated on every change. Text = every keystroke 
Checkbox/radio = every check/radio change  

datat gathered as the form is being filled out. the data is all held in local state 

3. Which attribute in the form elements (value, name, onChange, etc.) should match the property name being held in state for that input?

the [name] property. It is used so that onChange knows which property in state to update whenever a change occurs    


4. What's different about  saving the data from a checkbox element vs. other form elements?

A checkbox uses the `checked` property to determine what should be saved in state. 

Other form elements use the `value` property instead.


5. How do you watch for a form submit? How can you trigger
   a form submit?

add an onSubmit handler on the form element which can watch for a form submit and will pass a function to the onSubmit handler that will run whenever the form is submitted.

- Can watch for the submit with an onSubmit handler on the `form` element.

- Can trigger a form submit with a button click 

**- if you put a button element within a form it will automatically act as a submit button 
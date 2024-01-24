293 Changing Context 

make it dynamic to be able to toggle between light and dark.
begin by taking the value string and putting it into state 

pass in an object into the value prop since it is more than one 

value = { 
    color: color, 
    toggleTheme : toggleTheme
    }

...

293.5 moving context to a separate file 

moving provider definition into the theme context file so the context logic isn't mixed with app component. also allows to be used in multiple parts of the app 

--create a separate component within themeContext component 

function themeContext



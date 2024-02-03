
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

/*
1. [x] Create the context 
  done in themeContext.jsx
  const ThemeContext = React.createContext()

2. [x] Provide the context 
  since the app component is what is shared between the header/button components, that is where you bring in the provider 

  themContext has the provider set up in step 1. so call it in App.jsx

  pass in the value "light"to start 

3. [] Consume the context 
  292.5 
  begin with Header component. import Theme context
  pass in Theme context to useContext hook 
  save in variable, console log to check  that the value prop is showing ("light")
  now the variable can be used anywhere in the Header component
  
  replace the hard coded "light-theme" with the value received from provider {`${context}-theme`} 

  replace the word light  in your h3 
    You are currently using {context} mode

  in app you can then change the value to "dark" and see the change

  bring in context to the Button component to successfully consume context 



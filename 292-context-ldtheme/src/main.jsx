import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import ThemeContext from './components/themeContext.jsx'

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

293 



*/



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

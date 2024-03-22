import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//allows access to the data created/stored 
import MagicProvider from './Context/ContextProvider.jsx'
import { BrowserRouter } from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* this allows for routing pages and endpoints via link and routes */}
    <BrowserRouter>
{/* MagicProvider wraps the app component allowing everything in it to have access to the context (values?) in ContextProvider */}
      <MagicProvider>
        <App />
      </MagicProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

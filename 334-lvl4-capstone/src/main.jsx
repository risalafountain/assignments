import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MagicProvider from './Context/ContextProvider.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <MagicProvider>
      <App />
    </MagicProvider>
    </BrowserRouter>
  </React.StrictMode>,
)

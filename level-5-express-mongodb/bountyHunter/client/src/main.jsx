import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import BountyProvider from './context/BountyProvider.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BountyProvider>
      <App />
    </BountyProvider>
  </React.StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
//import App from './App.jsx'
import './index.css'
import Navbar  from './components/Navbar'
import MainContent from './components/MainContent'


function Page() {
  //const [count, setCount] = useState(0)
  return (
    <div>
      <Navbar />
      <MainContent />
    </div>
  )
}



ReactDOM.createRoot(<Page />, document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

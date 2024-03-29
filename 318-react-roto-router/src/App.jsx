import './App.css'
import {Routes, Route} from "react-router-dom"
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <NavBar />
     <Routes>
      <Route path='/' element={ <Home />}/>
      <Route path='/about' element={ <About />}/>
      <Route path='/services' element={ <Services />}/>
     </Routes>
      <Footer />
    </>
  )
}

export default App

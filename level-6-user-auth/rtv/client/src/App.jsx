// auto import does not add .jsx...is this ok?
import React, {useContext} from 'react'
import { UserContext } from './context/UserProvider'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'

function App() {
 const {logout, token} = useContext(UserContext)
  return (
    <div className="app">
   <Navbar logout={logout} /> 
    <Routes>
      <Route 
        path="/" 
        element={token ? <Navigate to ={'/profile'} /> : <Auth />}
      />
      <Route 
        path="/profile"
        element={<Profile />}
      />
      <Route 
        path="/public"
        element={<Public />}
      />
    </Routes> 
  </div>

  )
}

export default App

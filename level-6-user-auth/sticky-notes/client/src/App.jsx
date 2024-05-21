import React, { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import {Routes, Route, Navigate} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Profile from './components/Profile'
import ProtectedRoute from './components/ProtectedRoute'
import Auth from './components/Auth'

export default function App() {
  const {logout, token} = useContext(UserContext)
  console.log('this is the token: ', token)
  return (
    <div className='app'>
      {token && <Navbar logout = {logout} token = {token} />}
       <Routes>
  
        <Route 
          path = '/'
          element ={ token ? <Navigate to ={'/profile'}/> : <Auth />}
        />

        <Route 
          path = '/profile'
          element = {<ProtectedRoute token = {token} redirectTo = '/'>
            <Profile />
          </ProtectedRoute>
          }
        />

      </Routes>
    </div>
  )
}


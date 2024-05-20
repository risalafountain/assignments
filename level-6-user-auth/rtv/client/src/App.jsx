import React, { useContext } from 'react'
import { UserContext } from './context/UserProvider'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import Auth from './components/Auth'
import Profile from './components/Profile'
import Public from './components/Public'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  const { logout, token } = useContext(UserContext)
  return (
    <div className="app">
     {token && <Navbar logout={logout} token={token} />}
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to={'/profile'} /> : <Auth /> }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute token={token} redirectTo='/'>
              <Profile  />
            </ProtectedRoute>}
        />
        <Route
          path="/public"
          element={
            <ProtectedRoute token={token} redirectTo='/'>
              <Public />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>

  )
}

export default App

import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

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

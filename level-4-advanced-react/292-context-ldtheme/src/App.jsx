import { useState } from 'react'
import Header from './components/Header'
import Button from './components/Button'
import './App.css'
// import ThemeContext from './components/themeContext'
import { ThemeContextProvider } from './components/themeContext'

function App() {

  return (
    <>
      {/* {/* use a value prop to pass in whatever data needs to be made available to consumer components (headder/button) */}
      <ThemeContextProvider>
        <Header />
        <Button />
      </ThemeContextProvider>
    </>
  )
}

export default App

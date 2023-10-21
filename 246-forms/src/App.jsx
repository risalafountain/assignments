import React from 'react'
import './App.css'

function App() {
  const [formData, setFormData] = React.useState({
    firstName: "", lastName: ""})
  // console.log(firstName)
  console.log(formData)
  function handleChange(event){
    // console.log(event.target.name)
    // setFirstName(event.target.value)
    setFormData(prevFormData => {
      return {
        ...prevFormData, 
        //this is a key:value pair
      [event.target.name]:event.target.value
      }
    })
  }

  return (
    <form>
      <input
        type="text"
        placeholder = "First Name"
        onChange={handleChange}
        name="firstName"
      />
      <input
        type="text"
        placeholder = "Last Name"
        onChange={handleChange}
        name="lastName"
      />
    </form>
    )
}

export default App


